import { useState, useCallback } from 'react'
import { PriceData, TripSuggestion, TripDetails, ItineraryItem, LocationResult } from '@/ui/shadcn/blog/types'
import { API_CONFIG } from '@/src/config/apiConfig'
import { fetchTripDetailsWithRateLimit } from '@/src/services/tripDetailsService'
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService'

interface UsePriceComparisonOptions {
  maxTrips?: number
}

interface UsePriceComparisonReturn {
  priceData: PriceData[]
  cheapestAirline: string
  isLoading: boolean
  error: string | null
  progress: { loaded: number; total: number }
  fetchPriceComparison: (
    fromLocation: LocationResult,
    toLocation: LocationResult,
    onAirlineFound?: (priceData: PriceData, index: number) => void
  ) => Promise<{ priceData: PriceData[], cheapestAirline: string } | null>
  clearData: () => void
}

export const usePriceComparison = (
  options: UsePriceComparisonOptions = {}
): UsePriceComparisonReturn => {
  const { maxTrips = 25 } = options

  const [priceData, setPriceData] = useState<PriceData[]>([])
  const [cheapestAirline, setCheapestAirline] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState({ loaded: 0, total: 0 })

  const fetchTripSuggestions = useCallback(async (fromLocode: string, toLocode: string): Promise<TripSuggestion[]> => {
    return await fetchTripSuggestionsWithCache({
      fromLocode,
      toLocode,
      adults: 1,
      children: 0,
      babies: 0
    })
  }, [])

  const processFlightData = useCallback((
    tripDetails: (TripDetails | null)[],
    tripIds: string[],
    tripPrices: Map<string, { price: number, currency: string }>
  ): PriceData[] => {
    const airlineFlightPrices = new Map<string, number[]>()
    const airlineCurrency = new Map<string, string>()

    tripDetails.forEach((tripDetail, index) => {
      if (!tripDetail || !Array.isArray(tripDetail.itinerary)) return

      const tripId = tripIds[index]
      const basePrice = tripPrices.get(tripId)

      // Filter transport segments from the itinerary array
      const transportSegments = tripDetail.itinerary.filter((item: ItineraryItem) =>
        item.type === 'transport' &&
        item.content &&
        (item.content as any).carriers &&
        (item.content as any).carriers.length > 0
      )

      if (transportSegments.length === 0) return

      // Calculate price per segment if multiple segments
      const pricePerSegment = (basePrice?.price || 0) / transportSegments.length

      transportSegments.forEach((segmentItem: ItineraryItem) => {
        if (!segmentItem.content) return

        const segment = segmentItem.content as any
        const carrier = segment.carriers[0]
        const carrierName = carrier.carrier_name || 'Unknown Airline'
        const currency = basePrice?.currency || 'EUR'
        const segmentPrice = pricePerSegment

        if (segmentPrice > 0) {
          if (!airlineFlightPrices.has(carrierName)) {
            airlineFlightPrices.set(carrierName, [])
            airlineCurrency.set(carrierName, currency)
          }
          airlineFlightPrices.get(carrierName)!.push(segmentPrice)
        }
      })
    })

    // Calculate best prices for each airline
    const airlinePrices = new Map<string, { price: number, currency: string, flightCount: number }>()

    airlineFlightPrices.forEach((prices, airlineName) => {
      if (prices.length > 0) {
        const bestPrice = Math.min(...prices)
        airlinePrices.set(airlineName, {
          price: bestPrice,
          currency: airlineCurrency.get(airlineName) || 'EUR',
          flightCount: prices.length
        })
      }
    })

    if (airlinePrices.size === 0) {
      return []
    }

    // Convert to array and calculate percentages
    const pricesArray = Array.from(airlinePrices.entries()).map(([airline, data]) => ({
      airline,
      price: data.price,
      currency: data.currency,
      flightCount: data.flightCount
    }))

    // Sort by price to find cheapest
    pricesArray.sort((a, b) => a.price - b.price)
    const minPrice = Math.min(...pricesArray.map(p => p.price))
    const maxPrice = Math.max(...pricesArray.map(p => p.price))

    // Calculate percentage for bar chart
    const priceDataWithPercentages: PriceData[] = pricesArray.map((item) => {
      let percentage
      if (maxPrice === minPrice) {
        percentage = 100
      } else {
        const priceRatio = (item.price - minPrice) / (maxPrice - minPrice)
        percentage = 30 + (priceRatio * 70) // Scale from 30% to 100%
      }

      return {
        ...item,
        percentage: Math.round(percentage)
      }
    })

    return priceDataWithPercentages
  }, [])

  const fetchPriceComparison = useCallback(async (
    fromLocation: LocationResult,
    toLocation: LocationResult,
    onAirlineFound?: (priceData: PriceData, index: number) => void
  ) => {
    const fromLocode = fromLocation.locode
    const toLocode = toLocation.locode

    if (!fromLocode || !toLocode) {
      setError('Please select both departure and destination locations')
      return null
    }

    setIsLoading(true)
    setError(null)
    setPriceData([]) // Clear existing data
    setCheapestAirline('')
    setProgress({ loaded: 0, total: 0 })

    try {
      // Step 1: Get trip suggestions
      const suggestionsData = await fetchTripSuggestions(fromLocode, toLocode)

      if (suggestionsData.length === 0) {
        setError(`No price data found for flights from ${fromLocation.name} to ${toLocation.name}`)
        setPriceData([])
        setCheapestAirline('')
        return null
      }

      // Step 2: Get trip IDs and their base prices
      const tripIds: string[] = []
      const tripPrices = new Map<string, { price: number, currency: string }>()

      suggestionsData.forEach((suggestion: TripSuggestion) => {
        if (suggestion.id) {
          tripIds.push(suggestion.id)
          tripPrices.set(suggestion.id, {
            price: suggestion.price?.price_transports || 0,
            currency: suggestion.trip_currency_code || 'EUR'
          })
        }
      })

      const detailsToFetch = tripIds.slice(0, maxTrips)
      setProgress({ loaded: 0, total: detailsToFetch.length })

      console.log(`📊 Fetching price comparison for ${detailsToFetch.length} trips with progressive rendering`)

      // Track accumulated price data across all airlines
      let accumulatedPriceData: PriceData[] = []
      let currentCheapestAirline = ''

      // Step 3: Fetch detailed information with progressive rendering
      await fetchTripDetailsWithRateLimit(
        detailsToFetch,
        // Progress callback
        (loaded, total) => {
          setProgress({ loaded, total })
        },
        // Individual trip completion callback - enables progressive rendering
        (tripId, tripDetails) => {
          if (tripDetails) {
            // Process this single trip immediately
            const singleTripPriceData = processFlightData(
              [tripDetails], // Single trip
              [tripId], // Single trip ID
              tripPrices
            )

            if (singleTripPriceData.length > 0) {
              // Add price data from this trip to accumulated data
              singleTripPriceData.forEach(newPriceData => {
                // Find existing airline or add new one
                const existingIndex = accumulatedPriceData.findIndex(
                  item => item.airline === newPriceData.airline
                )

                if (existingIndex >= 0) {
                  // Update existing airline with new price (keep minimum)
                  const existing = accumulatedPriceData[existingIndex]
                  if (newPriceData.price < existing.price) {
                    accumulatedPriceData[existingIndex] = newPriceData
                  }
                } else {
                  // Add new airline
                  accumulatedPriceData.push(newPriceData)
                }
              })

              // Sort by price and recalculate percentages
              accumulatedPriceData.sort((a, b) => a.price - b.price)

              if (accumulatedPriceData.length > 0) {
                const cheapestPrice = accumulatedPriceData[0].price
                accumulatedPriceData = accumulatedPriceData.map(item => ({
                  ...item,
                  percentage: cheapestPrice > 0
                    ? Math.round(((item.price - cheapestPrice) / cheapestPrice) * 100)
                    : 0
                }))

                currentCheapestAirline = accumulatedPriceData[0].airline

                // Update state immediately for progressive rendering
                setPriceData([...accumulatedPriceData])
                setCheapestAirline(currentCheapestAirline)

                // Call external callback if provided
                if (onAirlineFound) {
                  singleTripPriceData.forEach((priceData, priceDataIndex) => {
                    onAirlineFound(priceData, accumulatedPriceData.length - singleTripPriceData.length + priceDataIndex)
                  })
                }
              }
            }
          }
        }
      )

      if (accumulatedPriceData.length === 0) {
        setError('No airline price data available for this route')
        setPriceData([])
        setCheapestAirline('')
        return null
      }

      // Final sort and return
      accumulatedPriceData.sort((a, b) => a.price - b.price)
      setPriceData(accumulatedPriceData)
      setCheapestAirline(currentCheapestAirline)

      return { priceData: accumulatedPriceData, cheapestAirline: currentCheapestAirline }

    } catch (err) {
      console.error('Error fetching price data:', err)
      setError('Failed to fetch price data. Please try again.')
      setPriceData([])
      setCheapestAirline('')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [fetchTripSuggestions, processFlightData, maxTrips])

  const clearData = useCallback(() => {
    setPriceData([])
    setCheapestAirline('')
    setError(null)
    setProgress({ loaded: 0, total: 0 })
  }, [])

  return {
    priceData,
    cheapestAirline,
    isLoading,
    error,
    progress,
    fetchPriceComparison,
    clearData
  }
} 