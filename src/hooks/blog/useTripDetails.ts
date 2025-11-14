import { useState, useCallback, useRef, useEffect } from 'react'
import {
  fetchTripDetailsWithRateLimit,
  fetchTripDetailsWithPriority,
  clearTripDetailsCache,
  getTripDetailsCacheStats
} from '@/src/services/tripDetailsService'

// Trip details type (matches service)
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

interface UseTripDetailsReturn {
  tripDetails: (TripDetails | null)[]
  isLoading: boolean
  error: string | null
  progress: { loaded: number; total: number }
  fetchTripDetails: (
    tripIds: string[],
    onTripComplete?: (tripId: string, tripDetails: TripDetails | null, index: number) => void
  ) => Promise<void>
  fetchTripDetailsWithPriority: (
    tripIds: string[],
    priorityCount?: number,
    onTripComplete?: (tripId: string, tripDetails: TripDetails | null, index: number) => void
  ) => Promise<void>
  clearCache: () => void
  cacheStats: { size: number; validEntries: number }
}

export const useTripDetails = (): UseTripDetailsReturn => {
  const [tripDetails, setTripDetails] = useState<(TripDetails | null)[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState({ loaded: 0, total: 0 })
  const [cacheStats, setCacheStats] = useState({ size: 0, validEntries: 0 })

  const abortControllerRef = useRef<AbortController | null>(null)

  // Update cache stats
  const updateCacheStats = useCallback(() => {
    setCacheStats(getTripDetailsCacheStats())
  }, [])

  // Effect to update cache stats periodically
  useEffect(() => {
    updateCacheStats()
    const interval = setInterval(updateCacheStats, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [updateCacheStats])

  // Basic fetch function with progress tracking and individual trip completion
  const fetchTripDetails = useCallback(async (
    tripIds: string[],
    onTripComplete?: (tripId: string, tripDetails: TripDetails | null, index: number) => void
  ) => {
    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()

    setIsLoading(true)
    setError(null)
    setProgress({ loaded: 0, total: tripIds.length })

    // Initialize with empty array
    const initialResults: (TripDetails | null)[] = new Array(tripIds.length).fill(null)
    setTripDetails(initialResults)

    try {
      const results = await fetchTripDetailsWithRateLimit(
        tripIds,
        // Progress callback
        (loaded, total, currentResults) => {
          setProgress({ loaded, total })
          setTripDetails([...currentResults]) // Update UI with current results
        },
        // Individual trip completion callback
        (tripId, tripDetails, index) => {
          // Update state immediately when each trip completes
          setTripDetails(prev => {
            const newResults = [...prev]
            newResults[index] = tripDetails
            return newResults
          })

          // Call external callback if provided
          if (onTripComplete) {
            onTripComplete(tripId, tripDetails, index)
          }
        }
      )

      setTripDetails(results)
      updateCacheStats()

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch trip details'
      setError(errorMessage)
      console.error('Error fetching trip details:', err)
    } finally {
      setIsLoading(false)
    }
  }, [updateCacheStats])

  // Priority fetch function - shows priority trips first, then loads the rest
  const fetchTripDetailsWithPriorityCallback = useCallback(async (
    tripIds: string[],
    priorityCount: number = 5,
    onTripComplete?: (tripId: string, tripDetails: TripDetails | null, index: number) => void
  ) => {
    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()

    setIsLoading(true)
    setError(null)
    setProgress({ loaded: 0, total: tripIds.length })

    // Initialize with empty array
    const initialResults: (TripDetails | null)[] = new Array(tripIds.length).fill(null)
    setTripDetails(initialResults)

    try {
      await fetchTripDetailsWithPriority(
        tripIds,
        priorityCount,
        // Priority complete callback
        (priorityResults) => {
          setTripDetails(prev => {
            const newResults = [...prev]
            priorityResults.forEach((result, index) => {
              newResults[index] = result
              // Call individual completion callback for priority items
              if (onTripComplete) {
                onTripComplete(tripIds[index], result, index)
              }
            })
            return newResults
          })
          setProgress({ loaded: priorityResults.length, total: tripIds.length })
          updateCacheStats()
        },
        // All complete callback
        (allResults) => {
          setTripDetails(allResults)
          setProgress({ loaded: allResults.length, total: tripIds.length })
          updateCacheStats()
          setIsLoading(false)
        }
      )

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch trip details'
      setError(errorMessage)
      console.error('Error fetching trip details with priority:', err)
      setIsLoading(false)
    }
  }, [updateCacheStats])

  // Clear cache function
  const clearCache = useCallback(() => {
    clearTripDetailsCache()
    updateCacheStats()
    setTripDetails([])
    setProgress({ loaded: 0, total: 0 })
  }, [updateCacheStats])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    tripDetails,
    isLoading,
    error,
    progress,
    fetchTripDetails,
    fetchTripDetailsWithPriority: fetchTripDetailsWithPriorityCallback,
    clearCache,
    cacheStats
  }
}

// Simplified hook for just fetching a single trip
export const useSingleTripDetails = (tripId: string | null) => {
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSingleTrip = useCallback(async (id: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const results = await fetchTripDetailsWithRateLimit([id])
      setTripDetails(results[0] || null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch trip details'
      setError(errorMessage)
      setTripDetails(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (tripId) {
      fetchSingleTrip(tripId)
    } else {
      setTripDetails(null)
      setError(null)
    }
  }, [tripId, fetchSingleTrip])

  return { tripDetails, isLoading, error, refetch: () => tripId && fetchSingleTrip(tripId) }
}