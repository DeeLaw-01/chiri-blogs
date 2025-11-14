import { useState, useCallback } from 'react'

// Types based on the actual API response
export interface OneWayTripPrice {
  price_transports: number
  price_hotels: number
}

export interface OneWayTripPassengers {
  n_adults: number
  n_children: number
  n_babies: number
  total_passengers: number
}

export interface OneWayTripUrgency {
  [key: string]: unknown
}

export interface OneWayTripItineraryStop {
  locationId: string | null
  destination: string
  destinationLocode: string
  stayLength: number
  coordinates: unknown | null
  picture: string
  is_layover: boolean
  position: number
}

export interface OneWayTripSuggestion {
  id: string
  tags: unknown | null
  start_date: string
  end_date: string
  price: OneWayTripPrice
  locations: string[]
  trip_length: number
  trip_currency_code: string
  seats: number
  title: string
  price_range: string
  category: unknown | null
  trip_photo: string
  initial_location: string
  passengers: OneWayTripPassengers
  urgency: OneWayTripUrgency
  avg_price: number
  featured_location: unknown | null
  itinerary: OneWayTripItineraryStop[]
}

export interface OneWayFlightSearchParams {
  fromLocation: string
  toLocation: string
  departureDate?: string
  adults?: number
  children?: number
  babies?: number
  airlineCarriers?: string[]
}

export interface UseOneWayFlightSearchReturn {
  trips: OneWayTripSuggestion[]
  loading: boolean
  error: string | null
  searchFlights: (params: OneWayFlightSearchParams) => Promise<void>
  clearResults: () => void
}

const API_BASE_URL = '/api'

export const useOneWayFlightSearch = (): UseOneWayFlightSearchReturn => {
  const [trips, setTrips] = useState<OneWayTripSuggestion[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchFlights = useCallback(async (params: OneWayFlightSearchParams) => {
    const {
      fromLocation,
      toLocation,
      airlineCarriers = []
    } = params

    if (!fromLocation || !toLocation) {
      setError('From and to locations are required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Format the departure date (default to next month if not provided)

      // Build query parameters for GET request
      const queryParams = new URLSearchParams({
        includeLocations: toLocation,
        initialLocation: fromLocation,
        oneway_search: 'true',
        type: 'one-way',
        // windowStart: formattedDate,
        // windowEnd: formattedDate,
        ...(airlineCarriers.length > 0 && { include_airlines: airlineCarriers.join(',') })
      })

      console.log('Searching one-way flights with params:', Object.fromEntries(queryParams))

      const response = await fetch(`${API_BASE_URL}/one-way-flights?${queryParams}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))

        // Handle specific error types from proxy
        if (errorData.type === 'NETWORK_ERROR') {
          throw new Error('Network connection failed. Please check your internet connection.')
        } else if (errorData.type === 'TIMEOUT_ERROR') {
          throw new Error('Request timed out. Please try again.')
        } else {
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.error || response.statusText}`)
        }
      }

      const data: OneWayTripSuggestion[] = await response.json()

      // Validate that we received an array
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format: expected an array')
      }

      console.log(`Successfully fetched ${data.length} one-way trips:`, data)
      setTrips(data)

    } catch (err) {
      console.error('One-way flight search error:', err)
      const errorMessage = err instanceof Error ? err.message : 'Failed to search flights'
      setError(errorMessage)
      setTrips([])
    } finally {
      setLoading(false)
    }
  }, [])

  const clearResults = useCallback(() => {
    setTrips([])
    setError(null)
  }, [])

  return {
    trips,
    loading,
    error,
    searchFlights,
    clearResults
  }
}

export default useOneWayFlightSearch
