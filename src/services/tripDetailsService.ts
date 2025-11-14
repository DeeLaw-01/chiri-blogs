import { API_CONFIG } from '@/src/config/apiConfig'

// Trip details type
interface TripDetails {
  id?: string
  locations?: string[]
  itinerary?: ItineraryItem[]
  price?: {
    price_transports?: number
    price_hotels?: number
  }
  trip_length?: number
  [key: string]: unknown
}

// Itinerary item type
interface ItineraryItem {
  type?: string
  position?: number
  content?: unknown
  [key: string]: unknown
}

// Cache interface
interface CachedTripDetails {
  data: TripDetails | null
  timestamp: number
}

// In-memory cache for trip details
const tripDetailsCache = new Map<string, CachedTripDetails>()

// Queue for managing concurrent requests
class RequestQueue {
  private queue: (() => Promise<unknown>)[] = []
  private activeRequests = 0
  private readonly maxConcurrent: number

  constructor(maxConcurrent: number) {
    this.maxConcurrent = maxConcurrent
  }

  async add<T>(requestFn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await requestFn()
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
      this.processQueue()
    })
  }

  private async processQueue() {
    if (this.activeRequests >= this.maxConcurrent || this.queue.length === 0) {
      return
    }

    this.activeRequests++
    const requestFn = this.queue.shift()!

    try {
      await requestFn()
    } finally {
      this.activeRequests--
      // Add delay between requests to avoid overwhelming the API
      await this.delay(API_CONFIG.TRIP_DETAILS.RATE_LIMIT.DELAY_BETWEEN_BATCHES / this.maxConcurrent)
      this.processQueue()
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// Global request queue instance
const requestQueue = new RequestQueue(API_CONFIG.TRIP_DETAILS.RATE_LIMIT.CONCURRENT_REQUESTS)

// Utility function to check if cached data is still valid
function isCacheValid(cachedItem: CachedTripDetails): boolean {
  const now = Date.now()
  return (now - cachedItem.timestamp) < API_CONFIG.TRIP_DETAILS.CACHE_TTL
}

// Single trip details fetch with retry logic
async function fetchSingleTripDetails(tripId: string): Promise<TripDetails | null> {
  const cacheKey = `trip_${tripId}`

  // Check cache first
  const cached = tripDetailsCache.get(cacheKey)
  if (cached && isCacheValid(cached)) {
    return cached.data
  }


  // If not in cache or expired, fetch from API
  return requestQueue.add(async () => {
    let lastError: Error | null = null

    for (let attempt = 1; attempt <= API_CONFIG.TRIP_DETAILS.RATE_LIMIT.RETRY_ATTEMPTS; attempt++) {
      try {

        const response = await fetch(
          `${API_CONFIG.TRIP_DETAILS.BASE_URL}?tripID=${tripId}`,
          {
            headers: API_CONFIG.TRIP_DETAILS.HEADERS,
            signal: AbortSignal.timeout(10000) // 10 second timeout
          }
        )

        if (!response.ok) {
          if (response.status === 429) {
            // Rate limited - wait longer before retry
            console.warn(`⚠️ Rate limited for trip ${tripId}, waiting before retry...`)
            await new Promise(resolve => setTimeout(resolve, API_CONFIG.TRIP_DETAILS.RATE_LIMIT.RETRY_DELAY * attempt))
            continue
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()

        // Cache the successful response
        tripDetailsCache.set(cacheKey, {
          data,
          timestamp: Date.now()
        })

        return data

      } catch (error) {
        lastError = error as Error
        console.error(`❌ Attempt ${attempt} failed for trip ${tripId}:`, error)

        if (attempt < API_CONFIG.TRIP_DETAILS.RATE_LIMIT.RETRY_ATTEMPTS) {
          await new Promise(resolve => setTimeout(resolve, API_CONFIG.TRIP_DETAILS.RATE_LIMIT.RETRY_DELAY * attempt))
        }
      }
    }

    // All attempts failed
    console.error(`💥 All attempts failed for trip ${tripId}`)
    throw lastError || new Error(`Failed to fetch trip details for ${tripId} after ${API_CONFIG.TRIP_DETAILS.RATE_LIMIT.RETRY_ATTEMPTS} attempts`)
  })
}

// Main function to fetch multiple trip details with progressive loading
export async function fetchTripDetailsWithRateLimit(
  tripIds: string[],
  onProgress?: (loaded: number, total: number, details: (TripDetails | null)[]) => void,
  onTripComplete?: (tripId: string, tripDetails: TripDetails | null, index: number, total: number) => void
): Promise<(TripDetails | null)[]> {
  if (tripIds.length === 0) return []


  const results: (TripDetails | null)[] = []
  const errors: string[] = []

  // Process trips in batches with progress updates
  for (let i = 0; i < tripIds.length; i++) {
    const tripId = tripIds[i]

    try {
      const tripDetails = await fetchSingleTripDetails(tripId)
      results.push(tripDetails)

      // Call individual trip completion callback first (for immediate rendering)
      if (onTripComplete) {
        onTripComplete(tripId, tripDetails, i, tripIds.length)
      }

      // Call progress callback if provided (for overall progress tracking)
      if (onProgress) {
        onProgress(results.length, tripIds.length, [...results])
      }

    } catch (error) {
      console.error(`Failed to fetch details for trip ${tripId}:`, error)
      errors.push(tripId)
      results.push(null) // Placeholder for failed request

      // Call individual trip completion callback even for failures
      if (onTripComplete) {
        onTripComplete(tripId, null, i, tripIds.length)
      }

      // Still call progress callback
      if (onProgress) {
        onProgress(i + 1, tripIds.length, [...results])
      }
    }
  }

  if (errors.length > 0) {
    console.warn(`⚠️ Failed to fetch details for ${errors.length} trips:`, errors)
  }


  return results
}

// Function to fetch trip details with smart batching (priority system)
export async function fetchTripDetailsWithPriority(
  tripIds: string[],
  priorityCount: number = 5, // Fetch first N trips immediately
  onPriorityComplete?: (priorityResults: (TripDetails | null)[]) => void,
  onAllComplete?: (allResults: (TripDetails | null)[]) => void
): Promise<(TripDetails | null)[]> {
  if (tripIds.length === 0) return []

  const priorityIds = tripIds.slice(0, priorityCount)
  const remainingIds = tripIds.slice(priorityCount)


  // Fetch priority trips first
  const priorityResults = await fetchTripDetailsWithRateLimit(priorityIds)

  if (onPriorityComplete) {
    onPriorityComplete(priorityResults)
  }

  // If there are remaining trips, fetch them in the background
  if (remainingIds.length > 0) {

    const remainingResults = await fetchTripDetailsWithRateLimit(remainingIds)
    const allResults = [...priorityResults, ...remainingResults]

    if (onAllComplete) {
      onAllComplete(allResults)
    }

    return allResults
  }

  return priorityResults
}

// Function to clear cache (useful for testing or manual cache invalidation)
export function clearTripDetailsCache(): void {
  tripDetailsCache.clear()
}

// Function to get cache stats
export function getTripDetailsCacheStats(): { size: number; validEntries: number } {
  let validEntries = 0

  for (const [, cachedItem] of tripDetailsCache.entries()) {
    if (isCacheValid(cachedItem)) {
      validEntries++
    }
  }

  return {
    size: tripDetailsCache.size,
    validEntries
  }
}

// Export the basic function for backward compatibility
export { fetchSingleTripDetails as fetchTripDetails }
