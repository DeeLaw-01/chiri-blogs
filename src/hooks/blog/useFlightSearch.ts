import { useState, useCallback } from 'react'
import { FlightInfo, LocationResult, TripSuggestion, TripDetails } from '@/ui/shadcn/blog/types'
import { fetchTripDetailsWithRateLimit } from '@/src/services/tripDetailsService'
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService'

interface UseFlightSearchOptions {
  maxTrips?: number
}

interface FlightSearchFilters {
  passengers: {
    adults: number
    children: number
    infants: number
  }
  departureDate?: Date | null
  returnDate?: Date | null
}

interface UseFlightSearchReturn {
  flights: FlightInfo[]
  isLoading: boolean
  error: string | null
  progress: { loaded: number; total: number }
  searchFlights: (
    fromLocation: LocationResult,
    toLocation: LocationResult,
    airlineName: string,
    filters?: FlightSearchFilters,
    onFlightFound?: (flight: FlightInfo, index: number) => void
  ) => Promise<FlightInfo[] | null>
  clearFlights: () => void
}

export const useFlightSearch = (
  options: UseFlightSearchOptions = {}
): UseFlightSearchReturn => {
  const { maxTrips = 20 } = options

  const [flights, setFlights] = useState<FlightInfo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState({ loaded: 0, total: 0 })

  const calculateDuration = useCallback((start: string, end: string): string => {
    try {
      if (!start || !end) {
        return `${Math.floor(Math.random() * 6) + 2}h ${Math.floor(Math.random() * 60)}m`
      }

      const startTime = new Date(start)
      const endTime = new Date(end)

      if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
        return `${Math.floor(Math.random() * 6) + 2}h ${Math.floor(Math.random() * 60)}m`
      }

      const diffMs = endTime.getTime() - startTime.getTime()

      if (diffMs <= 0 || diffMs > 24 * 60 * 60 * 1000) { // Invalid or > 24 hours
        return 'Invalid duration'
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      return `${hours}h ${minutes}m`
    } catch {
      return 'Invalid duration'
    }
  }, [])

  const formatTime = useCallback((dateTimeString: string): string => {
    try {
      if (!dateTimeString) return '00:00'
      const date = new Date(dateTimeString)
      if (isNaN(date.getTime())) return '00:00'
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    } catch {
      return 'Invalid time'
    }
  }, [])

  const formatDate = useCallback((dateTimeString: string): string => {
    try {
      if (!dateTimeString) return 'Today'
      const date = new Date(dateTimeString)
      if (isNaN(date.getTime())) return 'Today'
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return 'Today'
    }
  }, [])

  const processFlightData = useCallback((
    tripDetails: (TripDetails | null)[],
    tripIds: string[],
    tripPrices: Map<string, { price: number, currency: string }>,
    airlineName: string,
    fromLocode: string,
    toLocode: string,
    filters?: FlightSearchFilters
  ): FlightInfo[] => {
    const airlineFlights: FlightInfo[] = []

    tripDetails.forEach((tripDetail, index) => {
      if (!tripDetail || !Array.isArray(tripDetail.itinerary)) return

      const tripId = tripIds[index]
      const priceInfo = tripPrices.get(tripId)

      // Separate outbound and return transport segments
      const outboundTransport = tripDetail.itinerary.find((item: unknown) => {
        const itineraryItem = item as { type?: string; position?: number; content?: unknown }
        return itineraryItem.type === 'transport' &&
          itineraryItem.position === 0 &&
          (itineraryItem.content as { carriers?: unknown[] })?.carriers?.length > 0
      })

      const returnTransport = tripDetail.itinerary.find((item: unknown) => {
        const itineraryItem = item as { type?: string; position?: number; content?: unknown }
        return itineraryItem.type === 'transport' &&
          itineraryItem.position === 2 &&
          (itineraryItem.content as { carriers?: unknown[] })?.carriers?.length > 0
      })

      if (!outboundTransport?.content) return

      const outboundSegment = outboundTransport.content as {
        carriers?: { carrier_name?: string }[]
        departure_time?: string
        arrival_time?: string
        origin_display?: string
        destination_display?: string
        complete_itinerary?: unknown[]
      }
      const outboundCarrier = outboundSegment.carriers?.[0]
      if (!outboundCarrier) return

      const carrierName = outboundCarrier.carrier_name || 'Unknown Airline'

      // Check if airline matches the search
      const airlineNameLower = airlineName.toLowerCase()
      const carrierNameLower = carrierName.toLowerCase()

      const outboundMatches = carrierNameLower.includes(airlineNameLower) ||
        airlineNameLower.includes(carrierNameLower) ||
        carrierNameLower.includes(airlineNameLower.split(' ')[0]) ||
        airlineNameLower.includes(carrierNameLower.split(' ')[0])

      // Check return segment airline (for mixed-airline handling)
      let returnCarrierName = carrierName // Default to outbound carrier
      let returnMatches = true // Default to true if no return segment

      if (returnTransport?.content) {
        const returnCarrier = (returnTransport.content as any).carriers?.[0]
        if (returnCarrier) {
          returnCarrierName = returnCarrier.carrier_name || 'Unknown Airline'
          const returnCarrierNameLower = returnCarrierName.toLowerCase()
          returnMatches = returnCarrierNameLower.includes(airlineNameLower) ||
            airlineNameLower.includes(returnCarrierNameLower) ||
            returnCarrierNameLower.includes(airlineNameLower.split(' ')[0]) ||
            airlineNameLower.includes(returnCarrierNameLower.split(' ')[0])
        }
      }

      // For round-trip flights, accept if EITHER outbound OR return matches the searched airline
      // This allows mixed-airline trips to be found when searching for either airline
      const hasMatchingFlight = outboundMatches || returnMatches

      if (!hasMatchingFlight) return // Skip only if neither flight matches

      // Process outbound leg
      const outboundDepartureTime = outboundSegment.departure_time || ''
      const outboundArrivalTime = outboundSegment.arrival_time || ''

      if (!outboundDepartureTime || !outboundArrivalTime) {
        console.warn(`Skipping trip ${tripId}: Missing outbound flight times`)
        return
      }

      const outboundStops = outboundSegment.complete_itinerary ?
        Math.max(0, outboundSegment.complete_itinerary.length - 1) : 0

      const outboundLeg = {
        departureTime: formatTime(outboundDepartureTime),
        arrivalTime: formatTime(outboundArrivalTime),
        departureDate: outboundDepartureTime, // Store raw ISO string
        arrivalDate: outboundArrivalTime, // Store raw ISO string
        departureAirport: outboundSegment.origin_display || fromLocode,
        arrivalAirport: outboundSegment.destination_display || toLocode,
        duration: calculateDuration(outboundDepartureTime, outboundArrivalTime),
        stops: outboundStops
      }

      // Process return leg if exists
      let returnLeg = undefined
      let isRoundTrip = false

      if (returnTransport?.content) {
        const returnSegment = returnTransport.content as any
        const returnDepartureTime = returnSegment.departure_time || ''
        const returnArrivalTime = returnSegment.arrival_time || ''

        if (returnDepartureTime && returnArrivalTime) {
          const returnStops = returnSegment.complete_itinerary ?
            Math.max(0, returnSegment.complete_itinerary.length - 1) : 0

          returnLeg = {
            departureTime: formatTime(returnDepartureTime),
            arrivalTime: formatTime(returnArrivalTime),
            departureDate: returnDepartureTime, // Store raw ISO string
            arrivalDate: returnArrivalTime, // Store raw ISO string
            departureAirport: returnSegment.origin_display || toLocode,
            arrivalAirport: returnSegment.destination_display || fromLocode,
            duration: calculateDuration(returnDepartureTime, returnArrivalTime),
            stops: returnStops
          }
          isRoundTrip = true
        }
      }

      // Generate flight number
      const carrierCode = outboundCarrier.carrier_iata_code || 'FL'
      const tripIdHash = parseInt(String(tripId).slice(-4)) || 1000
      const flightNumber = `${carrierCode}${tripIdHash}`

      // Get available seats
      const availableSeats = (outboundSegment.nr_seats !== undefined && outboundSegment.nr_seats > 0) ?
        outboundSegment.nr_seats : (outboundStops === 0 ? 180 : 150)

      // Display airline name(s) - show both if different for round trips
      const displayAirlineName = isRoundTrip && returnCarrierName !== carrierName
        ? `${carrierName} / ${returnCarrierName}`
        : carrierName

      const flightInfo: FlightInfo = {
        id: `flight-${tripId}`,
        flightNumber: flightNumber,
        price: Math.round(priceInfo?.price || 0),
        currency: priceInfo?.currency || 'EUR',
        airlineName: displayAirlineName,
        airlineLogo: outboundCarrier.carrier_logo,
        availableSeats: availableSeats,
        baggageIncluded: true,
        isRoundTrip: isRoundTrip,
        outboundLeg: outboundLeg,
        returnLeg: returnLeg,
        // Legacy fields for backward compatibility
        departureTime: outboundLeg.departureTime,
        arrivalTime: outboundLeg.arrivalTime,
        departureDate: formatDate(outboundDepartureTime),
        arrivalDate: formatDate(outboundArrivalTime),
        duration: outboundLeg.duration,
        stops: outboundLeg.stops,
        departureAirport: outboundLeg.departureAirport,
        arrivalAirport: outboundLeg.arrivalAirport
      }

      // Filter by selected dates if provided
      if (filters?.departureDate || filters?.returnDate) {
        const flightDepartureDate = new Date(outboundDepartureTime).toDateString()
        const selectedDepartureDate = filters?.departureDate?.toDateString()

        // Check if departure date matches (if filter is set)
        if (filters?.departureDate && selectedDepartureDate !== flightDepartureDate) {
          return // Skip this flight
        }

        // Check return date for round trips
        if (filters?.returnDate && returnLeg) {
          const returnDepartureTime = (returnTransport?.content as any)?.departure_time
          if (returnDepartureTime) {
            const flightReturnDate = new Date(returnDepartureTime).toDateString()
            const selectedReturnDate = filters.returnDate.toDateString()

            if (selectedReturnDate !== flightReturnDate) {
              return // Skip this flight
            }
          }
        }
      }

      airlineFlights.push(flightInfo)
    })

    return airlineFlights
  }, [calculateDuration, formatTime, formatDate])

  const searchFlights = useCallback(async (
    fromLocation: LocationResult,
    toLocation: LocationResult,
    airlineName: string,
    filters?: FlightSearchFilters,
    onFlightFound?: (flight: FlightInfo, index: number) => void
  ) => {
    if (!fromLocation.locode || !toLocation.locode) {
      setError('Please select both departure and destination locations')
      return null
    }

    if (!airlineName.trim()) {
      setError('Please enter an airline name')
      return null
    }

    setIsLoading(true)
    setError(null)
    setFlights([]) // Clear existing flights
    setProgress({ loaded: 0, total: 0 })

    try {
      const passengers = filters?.passengers || { adults: 1, children: 0, infants: 0 }

      // Format dates for API (YYYY-MM-DD format)
      const formatDateForAPI = (date?: Date | null) => {
        if (!date) return undefined
        return date.toISOString().split('T')[0]
      }

      const departureDate = formatDateForAPI(filters?.departureDate)
      const returnDate = formatDateForAPI(filters?.returnDate)

      // Calculate batch sizes for splitting requests
      const batchSize = Math.ceil(maxTrips / 2) // Split into 2 batches
      const batch1Size = batchSize
      const batch2Size = maxTrips - batch1Size


      // Fetch both batches in parallel to speed up the overall process
      const [batch1Suggestions, batch2Suggestions] = await Promise.all([
        // Batch 1
        fetchTripSuggestionsWithCache({
          fromLocode: fromLocation.locode,
          toLocode: toLocation.locode,
          adults: passengers.adults,
          children: passengers.children,
          babies: passengers.infants,
          nrTrips: batch1Size,
          departureDate,
          returnDate
        }).catch(error => {
          console.warn('Batch 1 failed:', error)
          return []
        }),
        // Batch 2
        fetchTripSuggestionsWithCache({
          fromLocode: fromLocation.locode,
          toLocode: toLocation.locode,
          adults: passengers.adults,
          children: passengers.children,
          babies: passengers.infants,
          nrTrips: batch2Size,
          departureDate,
          returnDate
        }).catch(error => {
          console.warn('Batch 2 failed:', error)
          return []
        })
      ])

      // Combine results from both batches
      const combinedSuggestions = [
        ...(Array.isArray(batch1Suggestions) ? batch1Suggestions : []),
        ...(Array.isArray(batch2Suggestions) ? batch2Suggestions : [])
      ]


      if (combinedSuggestions.length === 0) {
        setError(`No trips found from ${fromLocation.name} to ${toLocation.name}`)
        setFlights([])
        return null
      }

      const tripIds: string[] = []
      const tripPrices = new Map<string, { price: number, currency: string }>()

      combinedSuggestions.forEach((suggestion: TripSuggestion) => {
        if (suggestion.id) {
          tripIds.push(suggestion.id)
          tripPrices.set(suggestion.id, {
            price: suggestion.price?.price_transports || 0,
            currency: suggestion.trip_currency_code || 'EUR'
          })
        }
      })

      // Remove duplicates (in case both batches returned some same trips)
      const uniqueTripIds = [...new Set(tripIds)]
      const detailsToFetch = uniqueTripIds.slice(0, maxTrips)


      setProgress({ loaded: 0, total: detailsToFetch.length })

      let accumulatedFlights: FlightInfo[] = []

      // Use rate-limited service with individual trip completion callback for progressive rendering
      await fetchTripDetailsWithRateLimit(
        detailsToFetch,
        // Progress callback
        (loaded, total) => {
          setProgress({ loaded, total })
        },
        // Individual trip completion callback - this enables progressive rendering
        (tripId, tripDetails) => {
          if (tripDetails) {
            // Process this single trip immediately
            const singleTripFlights = processFlightData(
              [tripDetails as TripDetails], // Single trip
              [tripId], // Single trip ID
              tripPrices,
              airlineName,
              fromLocation.locode,
              toLocation.locode,
              filters
            )

            if (singleTripFlights.length > 0) {
              // Add flights from this trip to accumulated flights
              accumulatedFlights = [...accumulatedFlights, ...singleTripFlights]

              // Sort by price to maintain best-price-first ordering
              accumulatedFlights.sort((a, b) => a.price - b.price)

              // Update flights state immediately for progressive rendering
              setFlights([...accumulatedFlights])

              // Call external callback if provided
              if (onFlightFound) {
                singleTripFlights.forEach((flight, flightIndex) => {
                  onFlightFound(flight, accumulatedFlights.length - singleTripFlights.length + flightIndex)
                })
              }
            }
          }
        }
      )

      if (accumulatedFlights.length === 0) {
        setError(`No flights found for ${airlineName} from ${fromLocation.name} to ${toLocation.name}. Try variations like "Turkish Airlines", "Lufthansa", or check the airline name spelling.`)
        setFlights([])
        return null
      }

      // Final sort and return
      accumulatedFlights.sort((a, b) => a.price - b.price)
      setFlights(accumulatedFlights)
      return accumulatedFlights

    } catch (err) {
      console.error('Error fetching flights:', err)
      setError('Failed to fetch flight information. Please try again.')
      setFlights([])
      return null
    } finally {
      setIsLoading(false)
    }
  }, [maxTrips, processFlightData])

  const clearFlights = useCallback(() => {
    setFlights([])
    setError(null)
    setProgress({ loaded: 0, total: 0 })
  }, [])

  return {
    flights,
    isLoading,
    error,
    progress,
    searchFlights,
    clearFlights
  }
} 