import { API_CONFIG } from '@/src/config/apiConfig'
import { TripSuggestion } from '@/ui/shadcn/blog/types'
import { globalAPICache, CACHE_TTL } from '@/src/services/apiCache'

// Main function to fetch trip suggestions with caching
export async function fetchTripSuggestionsWithCache(params: {
  fromLocode: string
  toLocode: string
  adults?: number
  children?: number
  babies?: number
  nrTrips?: number
  departureDate?: string
  returnDate?: string
}): Promise<TripSuggestion[]> {
  const {
    fromLocode,
    toLocode,
    adults = 1,
    children = 0,
    babies = 0,
    nrTrips = API_CONFIG.TRIP_SUGGESTIONS.DEFAULT_TRIPS_COUNT,
    departureDate,
    returnDate
  } = params

  const cacheParams = {
    fromLocode,
    toLocode,
    adults,
    children,
    babies,
    nrTrips,
    departureDate,
    returnDate
  }

  // Use global cache with operation-specific TTL
  return globalAPICache.cached(
    'tripSuggestions',
    cacheParams,
    async () => {

      try {
        // Build query parameters
        let queryParams = `includeLocations=${toLocode}&n_adults=${adults}&n_children=${children}&n_babies=${babies}&nr_trips=${nrTrips}`

        // Only add initialLocation if fromLocode is provided (some endpoints only use includeLocations)
        if (fromLocode) {
          queryParams = `includeLocations=${toLocode}&initialLocation=${fromLocode}&n_adults=${adults}&n_children=${children}&n_babies=${babies}&nr_trips=${nrTrips}`
        }

        if (departureDate) {
          queryParams += `&departure_date=${departureDate}`
        }

        if (returnDate) {
          queryParams += `&return_date=${returnDate}`
        }

        const apiUrl = `${API_CONFIG.TRIP_SUGGESTIONS.BASE_URL}?${queryParams}`

        const response = await fetch(apiUrl, {
          headers: API_CONFIG.TRIP_SUGGESTIONS.HEADERS
        })

        if (!response.ok) {
          throw new Error(`Trip suggestions API failed with status: ${response.status}`)
        }

        const data = await response.json()
        return Array.isArray(data) ? data : []

      } catch (error) {
        console.error(`❌ Failed to fetch trip suggestions for ${fromLocode} → ${toLocode}:`, error)
        throw error
      }
    },
    CACHE_TTL.TRIP_SUGGESTIONS
  )
}

// Function to clear trip suggestions cache
export function clearTripSuggestionsCache(): void {
  globalAPICache.clear('tripSuggestions')
}

// Function to get cache stats
export function getTripSuggestionsCacheStats() {
  return globalAPICache.getStats()
}

// Function to invalidate cache for specific route
export function invalidateTripSuggestionsCache(_fromLocode?: string, _toLocode?: string): void {
  // With global cache, we clear the entire tripSuggestions operation cache
  // Could be enhanced to target specific routes if needed
  globalAPICache.clear('tripSuggestions')
}

// Function to clean up expired cache entries (handled automatically by global cache)
export function cleanupExpiredCache(): void {
  // Global cache handles cleanup automatically
}
