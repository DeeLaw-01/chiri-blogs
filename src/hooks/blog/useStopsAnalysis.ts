import { useState, useCallback, useRef } from 'react'
import { LocationResult } from '@/ui/shadcn/blog/types'
import { fetchTripDetailsWithRateLimit } from '@/src/services/tripDetailsService'

// Types from existing hooks
interface AirlineCarrier {
  name: string
  logo: string
  code: string
}

interface OneWayTripSuggestion {
  id: string
  price: {
    price_transports: number
  }
  trip_currency_code: string
}

interface UseStopsAnalysisOptions {
  onDataUpdate?: (data: FlightStopInfo[]) => void
}

interface FlightStopInfo {
  price: number
  stops: number
  currency: string
  source: 'travel_api'
  airline: string
  duration?: string
  departureTime?: string
  arrivalTime?: string
  from?: string
  to?: string
  carrierCode?: string
  originalData?: Record<string, unknown>
}

interface ApiParams {
  fromLocation?: string
  toLocation?: string
  fromLocationLocode?: string
  toLocationLocode?: string
  airlineName?: string
  flowType?: 'carrier-first' | 'direct-search'
  carrierEndpoint?: string
  oneWayEndpoint?: string
  tripDetailsEndpoint?: string
  queryParams?: Record<string, string>
}

interface UseStopsAnalysisReturn {
  flightStopData: FlightStopInfo[]
  isLoading: boolean
  error: string | null
  analyzeStops: (fromLocation: LocationResult, toLocation: LocationResult) => Promise<void>
  analyzeStopsFromApiParams: (apiParams: ApiParams) => Promise<void> // New function for readOnly mode
  clearData: () => void
}

export function useStopsAnalysis({ onDataUpdate }: UseStopsAnalysisOptions = {}): UseStopsAnalysisReturn {
  const [flightStopData, setFlightStopData] = useState<FlightStopInfo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Use refs to prevent duplicate concurrent calls and track the last analysis
  const isLoadingRef = useRef(false)
  const lastAnalysisKey = useRef<string>('')

  // Analyze stops from travel API - enhanced to handle both complete_itinerary and full trip structure
  const getStopsFromTravelAPI = useCallback((completeItinerary: unknown[], fullItinerary?: unknown[]): number => {
    // First try to use complete_itinerary if it has data
    if (completeItinerary && completeItinerary.length > 1) {
      // Number of stops = number of segments - 1
      // For example: CPH → IST → ISB has 2 segments, so 1 stop (Istanbul)
      return completeItinerary.length - 1
    }

    // Fallback: analyze the full trip itinerary to count actual transport segments
    if (fullItinerary && Array.isArray(fullItinerary)) {
      interface ItineraryItem {
        type?: string
        content?: {
          origin?: string
          destination?: string
          origin_locode?: string
          destination_locode?: string
          origin_display?: string
          destination_display?: string
        }
      }

      const transportSegments = fullItinerary.filter((item: unknown): item is ItineraryItem => {
        const itineraryItem = item as ItineraryItem
        return Boolean(itineraryItem?.type === 'transport' &&
          itineraryItem?.content?.origin &&
          itineraryItem?.content?.destination &&
          itineraryItem?.content?.origin !== itineraryItem?.content?.destination)
      })

      if (transportSegments.length <= 1) {
        return 0 // Direct flight
      }

      if (transportSegments.length === 2) {
        const firstSegment = transportSegments[0]?.content
        const secondSegment = transportSegments[1]?.content

        if (firstSegment && secondSegment) {
          // Check origin and destination locodes/names to identify the pattern
          const firstOrigin = firstSegment.origin_locode || firstSegment.origin
          const firstDestination = firstSegment.destination_locode || firstSegment.destination
          const secondOrigin = secondSegment.origin_locode || secondSegment.origin
          const secondDestination = secondSegment.destination_locode || secondSegment.destination

          // Case 1: Return trip (destination of first = origin of second, destination of second = origin of first)
          if ((firstDestination === secondOrigin || firstDestination === secondOrigin) &&
            (secondDestination === firstOrigin || secondDestination === firstOrigin)) {
            // This is a direct round trip (e.g., ISB → CPH → ISB)
            return 0
          }

          // Case 2: One-way trip with stop or round trip with intermediate stop
          // If first destination ≠ second origin, there's likely a stop
          if (firstDestination !== secondOrigin && firstDestination !== secondOrigin) {
            return 1
          }

          // Case 3: Check if there's accommodation between segments (indicates a stop)
          const hasAccommodationBetween = fullItinerary.some((item: unknown, index: number): boolean => {
            const itineraryItem = item as ItineraryItem
            return itineraryItem?.type === 'accommodation' &&
              index > 0 &&
              index < fullItinerary.length - 1
          })

          if (hasAccommodationBetween) {
            return 1
          }

          // Default for 2 segments
          return 1
        }
      }

      // For more than 2 segments
      if (transportSegments.length === 3) {
        // Likely pattern: A → B → C → A (round trip with 1 stop)
        return 1
      } else if (transportSegments.length === 4) {
        // Likely pattern: A → B → C → B → A (round trip with 1 stop each way)
        return 1
      } else {
        // More complex trips - estimate stops
        const estimatedStops = Math.floor(transportSegments.length / 2) - 1
        return Math.max(0, estimatedStops)
      }
    }

    return 0 // Default to direct if cannot determine
  }, [])

  // Fetch carriers for the route
  const fetchCarriers = useCallback(async (
    fromLocode: string,
    toLocode: string
  ): Promise<AirlineCarrier[]> => {

    try {
      const response = await fetch(`/api/carriers?origin=${fromLocode}&destination=${toLocode}&page=0&size=200`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch carriers: ${response.status}`)
      }

      const carriers: AirlineCarrier[] = await response.json()

      if (!Array.isArray(carriers)) {
        throw new Error('Invalid carriers response format')
      }

      return carriers

    } catch (error) {
      console.error('Error fetching carriers:', error)
      return []
    }
  }, [])

  // Fetch one-way trips for a specific carrier
  const fetchOneWayTripsForCarrier = useCallback(async (
    fromLocode: string,
    toLocode: string,
    carrierCode: string
  ): Promise<OneWayTripSuggestion[]> => {

    try {
      const queryParams = new URLSearchParams({
        includeLocations: toLocode,
        initialLocation: fromLocode,
        oneway_search: 'true',
        type: 'one-way',
        include_airlines: carrierCode,
        nr_trips: '3'
      })

      const response = await fetch(`/api/one-way-flights?${queryParams}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch trips for carrier ${carrierCode}: ${response.status}`)
      }

      const trips: OneWayTripSuggestion[] = await response.json()

      if (!Array.isArray(trips)) {
        throw new Error('Invalid trips response format')
      }

      return trips

    } catch (error) {
      console.error(`Error fetching trips for carrier ${carrierCode}:`, error)
      return []
    }
  }, [])

  // Process trip details to extract flight stop info
  const processTripDetails = useCallback((
    tripDetails: unknown,
    tripId: string,
    carrierName: string,
    carrierCode: string
  ): FlightStopInfo[] => {
    try {
      const trip = tripDetails as {
        id?: string
        price?: {
          price_transports?: number
        }
        price_transports?: number
        trip_currency_code?: string
        itinerary?: Array<{
          type?: string
          content?: {
            carriers?: Array<{ carrier_name?: string }>
            departure_time?: string
            arrival_time?: string
            origin_display?: string
            destination_display?: string
            complete_itinerary?: unknown[]
            duration?: number
          }
        }>
      }

      if (!trip.itinerary) {
        return []
      }

      const flightStops: FlightStopInfo[] = []

      trip.itinerary.forEach((item) => {
        if (item.type === 'transport' && item.content) {
          const transportContent = item.content
          const completeItinerary = transportContent.complete_itinerary || []

          // Pass both complete_itinerary and full trip itinerary for enhanced stops analysis
          const stops = getStopsFromTravelAPI(completeItinerary, trip.itinerary)

          const carriers = transportContent.carriers || []
          const primaryCarrier = carriers[0]?.carrier_name || carrierName


          // Calculate duration from departure and arrival times
          const calculateDuration = (departure?: string, arrival?: string) => {
            if (!departure || !arrival) return undefined
            try {
              const depTime = new Date(departure)
              const arrTime = new Date(arrival)
              const diffMs = arrTime.getTime() - depTime.getTime()
              const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
              const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
              return `${diffHours}h ${diffMinutes}m`
            } catch {
              return transportContent.duration ? `${Math.round(transportContent.duration)}h` : undefined
            }
          }

          const flightInfo: FlightStopInfo = {
            airline: primaryCarrier,
            carrierCode,
            stops,
            duration: calculateDuration(transportContent.departure_time, transportContent.arrival_time),
            price: trip.price?.price_transports || trip.price_transports || 0,
            currency: trip.trip_currency_code || 'EUR',
            source: 'travel_api',
            departureTime: transportContent.departure_time || '09:00',
            arrivalTime: transportContent.arrival_time || '17:00',
            from: transportContent.origin_display || 'Unknown',
            to: transportContent.destination_display || 'Unknown',
            originalData: trip
          }

          flightStops.push(flightInfo)
        }
      })

      return flightStops

    } catch (error) {
      console.error('Error processing trip details:', error)
      return []
    }
  }, [getStopsFromTravelAPI])

  const analyzeStops = useCallback(async (
    fromLocation: LocationResult,
    toLocation: LocationResult
  ) => {
    if (!fromLocation || !toLocation) {
      setError('Please provide both departure and destination locations')
      return
    }

    const analysisKey = `${fromLocation.locode}-${toLocation.locode}`
    // Prevent duplicate concurrent calls for the same route
    if (isLoadingRef.current && lastAnalysisKey.current === analysisKey) {
      return
    }

    // Prevent any duplicate concurrent calls
    if (isLoadingRef.current) {
      return
    }

    // Mark as loading and track this analysis
    isLoadingRef.current = true
    lastAnalysisKey.current = analysisKey
    setIsLoading(true)
    setError(null)

    try {
      const allFlightStops: FlightStopInfo[] = []

      // Step 1: Fetch carriers for the route
      const carriers = await fetchCarriers(fromLocation.locode, toLocation.locode)

      if (carriers.length === 0) {
        setError(`No carriers found for flights from ${fromLocation.name} to ${toLocation.name}`)
        setFlightStopData([])
        return
      }

      // Step 2: For each carrier, fetch one-way trips
      for (let i = 0; i < carriers.length; i++) {
        const carrier = carriers[i]

        try {
          // Fetch one-way trips for this carrier
          const trips = await fetchOneWayTripsForCarrier(
            fromLocation.locode,
            toLocation.locode,
            carrier.code
          )

          if (trips.length === 0) {
            continue
          }

          // Step 3: For each trip, fetch trip details
          const tripIds = trips.map(trip => trip.id)

          // Fetch trip details using the existing service
          await fetchTripDetailsWithRateLimit(
            tripIds,
            () => { }, // Progress callback not used here
            (tripId, tripDetails) => {
              if (tripDetails) {
                // Process trip details to extract flight info
                const carrierFlightStops = processTripDetails(
                  tripDetails,
                  tripId,
                  carrier.name,
                  carrier.code
                )

                // Add to accumulated results
                allFlightStops.push(...carrierFlightStops)

                // Progressive update callback
                if (onDataUpdate) {
                  onDataUpdate([...allFlightStops])
                }

              }
            }
          )

          // Small delay between carriers to avoid overwhelming the API
          if (i < carriers.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000))
          }

        } catch (carrierError) {
          console.error(`Error processing carrier ${carrier.name}:`, carrierError)
          // Continue with other carriers even if one fails
        }
      }

      // Step 4: Process and limit the final results
      if (allFlightStops.length === 0) {
        setError(`No flights found from ${fromLocation.name} to ${toLocation.name}. Please try different locations or check back later.`)
        setFlightStopData([])
        return
      }

      // Helper function to limit flights per airline to 2
      const limitFlightsPerAirline = (flights: FlightStopInfo[]) => {
        const airlineGroups = new Map<string, FlightStopInfo[]>()

        // Group flights by airline
        flights.forEach(flight => {
          const airlineName = flight.airline || 'Unknown'
          if (!airlineGroups.has(airlineName)) {
            airlineGroups.set(airlineName, [])
          }
          airlineGroups.get(airlineName)!.push(flight)
        })

        // Take only first 2 flights per airline, sorted by price
        const limitedFlights: FlightStopInfo[] = []
        airlineGroups.forEach((airlineFlights) => {
          const sortedByPrice = airlineFlights.sort((a, b) => a.price - b.price)
          limitedFlights.push(...sortedByPrice.slice(0, 2))
        })

        return limitedFlights.sort((a, b) => a.price - b.price)
      }

      // Apply airline limiting to get 2 entries per airline
      const limitedData = limitFlightsPerAirline(allFlightStops)

      // Log flight distribution for debugging
      const flightsByStops = limitedData.reduce((acc, flight) => {
        acc[flight.stops] = (acc[flight.stops] || 0) + 1
        return acc
      }, {} as Record<number, number>)

      const flightsByAirline = limitedData.reduce((acc, flight) => {
        const airline = flight.airline || 'Unknown'
        acc[airline] = (acc[airline] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      setFlightStopData(limitedData)

    } catch (err) {
      console.error('Error analyzing stops:', err)
      setError('Failed to analyze flight stops. Please try again.')
      setFlightStopData([])
    } finally {
      setIsLoading(false)
      isLoadingRef.current = false
    }
  }, [fetchCarriers, fetchOneWayTripsForCarrier, processTripDetails, onDataUpdate])

  const clearData = useCallback(() => {
    setFlightStopData([])
    setError(null)
    isLoadingRef.current = false
    lastAnalysisKey.current = ''
  }, [])

  // Function to analyze stops using stored API parameters (for readOnly mode)
  const analyzeStopsFromApiParams = useCallback(async (apiParams: ApiParams) => {
    if (!apiParams.fromLocationLocode || !apiParams.toLocationLocode) {
      setError('Invalid API parameters: missing location codes')
      return
    }

    // Create location objects from API params
    const fromLocation: LocationResult = {
      id: 'from-api',
      name: apiParams.fromLocation || 'From Location',
      locode: apiParams.fromLocationLocode,
      country: ''
    }

    const toLocation: LocationResult = {
      id: 'to-api',
      name: apiParams.toLocation || 'To Location',
      locode: apiParams.toLocationLocode,
      country: ''
    }

    // Use the stored flow type or default to carrier-first
    const flowType = apiParams.flowType || 'carrier-first'


    if (flowType === 'carrier-first') {
      // Use the enhanced carrier-first flow
      await analyzeStops(fromLocation, toLocation)
    } else {
      // Fallback to direct search (legacy flow) - could be implemented later if needed
      await analyzeStops(fromLocation, toLocation)
    }
  }, [analyzeStops])

  return {
    flightStopData,
    isLoading,
    error,
    analyzeStops,
    analyzeStopsFromApiParams,
    clearData
  }
} 