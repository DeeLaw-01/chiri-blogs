import { useState, useCallback } from 'react'
import { globalAPICache, CACHE_TTL } from '@/src/services/apiCache'

// Types based on the actual API response
export interface AirlineCarrier {
  name: string
  logo: string
  code: string
}

export interface AirlineCarriersParams {
  origin: string
  destination: string
  page?: number
  size?: number
}

export interface UseAirlineCarriersReturn {
  carriers: AirlineCarrier[]
  loading: boolean
  error: string | null
  fetchCarriers: (params: AirlineCarriersParams) => Promise<void>
  clearCarriers: () => void
}

const API_BASE_URL = '/api'

export const useAirlineCarriers = (): UseAirlineCarriersReturn => {
  const [carriers, setCarriers] = useState<AirlineCarrier[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCarriers = useCallback(async (params: AirlineCarriersParams) => {
    const {
      origin,
      destination,
      page = 0,
      size = 200
    } = params

    if (!origin || !destination) {
      setError('Origin and destination are required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Build the query parameters
      const queryParams = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
        origin: origin,
        destination: destination
      })


      const data = await globalAPICache.cached(
        'carriers',
        { origin, destination, page, size },
        async () => {
          const response = await fetch(`${API_BASE_URL}/carriers?${queryParams}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))

            // Handle specific error types
            if (errorData.type === 'NETWORK_ERROR') {
              throw new Error('Network connection failed. Please check your internet connection.')
            } else if (errorData.type === 'TIMEOUT_ERROR') {
              throw new Error('Request timed out. Please try again.')
            } else {
              throw new Error(`HTTP error! status: ${response.status} - ${errorData.error || response.statusText}`)
            }
          }

          return await response.json()
        },
        CACHE_TTL.CARRIERS
      ) as AirlineCarrier[]

      // Validate that we received an array
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format: expected an array')
      }

      // Validate the structure of carrier objects
      const isValidCarrier = (carrier: unknown): carrier is AirlineCarrier => {
        return (
          typeof carrier === 'object' &&
          carrier !== null &&
          'name' in carrier &&
          'logo' in carrier &&
          'code' in carrier &&
          typeof (carrier as Record<string, unknown>).name === 'string' &&
          typeof (carrier as Record<string, unknown>).logo === 'string' &&
          typeof (carrier as Record<string, unknown>).code === 'string'
        )
      }

      const validCarriers = data.filter(isValidCarrier)

      if (validCarriers.length !== data.length) {
        console.warn('Some carriers had invalid structure and were filtered out')
      }

      setCarriers(validCarriers)

    } catch (err) {
      console.error('Airline carriers fetch error:', err)
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch airline carriers'
      setError(errorMessage)
      setCarriers([])
    } finally {
      setLoading(false)
    }
  }, [])

  const clearCarriers = useCallback(() => {
    setCarriers([])
    setError(null)
  }, [])

  return {
    carriers,
    loading,
    error,
    fetchCarriers,
    clearCarriers
  }
}

export default useAirlineCarriers
