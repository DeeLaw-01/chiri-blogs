import { useState, useCallback, useRef } from 'react'
import { LocationResult, LocationApiItem } from '@/ui/shadcn/blog/types'

interface UseLocationSearchOptions {
  debounceMs?: number
  pageSize?: number
}

interface UseLocationSearchReturn {
  searchTerm: string
  setSearchTerm: (term: string) => void
  results: LocationResult[]
  isSearching: boolean
  showResults: boolean
  setShowResults: (show: boolean) => void
  selectedLocation: LocationResult | null
  setSelectedLocation: (location: LocationResult | null) => void
  error: string | null
  handleInputChange: (value: string) => void
  handleLocationSelect: (location: LocationResult) => void
  clearLocation: () => void
}

const transformLocationData = (item: LocationApiItem, index: number): LocationResult => ({
  id: item.id?.toString() || `location-${index}`,
  name: item.value || item.name || item.title || item.location || 'Unknown Location',
  locode: item.locode || item.code || item.locationCode || '',
  country: item.country || item.countryName || ''
})

export const useLocationSearch = (
  options: UseLocationSearchOptions = {}
): UseLocationSearchReturn => {
  const { debounceMs = 500, pageSize = 10 } = options

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<LocationResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const searchLocations = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      setShowResults(false)
      return
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()
    setIsSearching(true)
    setError(null)

    try {
      const response = await fetch(
        `https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/typeahead/v1/search?initial_location=INICD&query=${encodeURIComponent(
          searchTerm
        )}&page=0&pageSize=${pageSize}&all=true`,
        {
          headers: {
            accept: '*/*',
            'accept-language': 'en',
            'content-type': 'application/json',
            'x-api-key': 'FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE',
            'user-id': 'd07b5e73-ce6a-4afd-8a2b-6479400c06ad',
            origin: 'https://chiri.pk',
            referer: 'https://chiri.pk/'
          },
          signal: abortControllerRef.current.signal
        }
      )

      if (!response.ok) {
        throw new Error('Failed to search locations')
      }

      const data = await response.json()
      let locations: LocationResult[] = []

      if (Array.isArray(data)) {
        locations = data.map((item: LocationApiItem, index: number) =>
          transformLocationData(item, index)
        )
      } else if (data.locations && Array.isArray(data.locations)) {
        locations = data.locations.map((item: LocationApiItem, index: number) =>
          transformLocationData(item, index)
        )
      } else if (data.results && Array.isArray(data.results)) {
        locations = data.results.map((item: LocationApiItem, index: number) =>
          transformLocationData(item, index)
        )
      }

      locations = locations.filter(location => location.locode)
      setResults(locations)
      setShowResults(locations.length > 0)
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        return
      }
      console.error('Error searching locations:', err)
      setError('Failed to search locations. Please try again.')
      setResults([])
      setShowResults(false)
    } finally {
      setIsSearching(false)
    }
  }, [pageSize])

  const debouncedSearch = useCallback((searchTerm: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(() => {
      if (searchTerm.trim()) {
        searchLocations(searchTerm)
      } else {
        setResults([])
        setShowResults(false)
      }
    }, debounceMs)
  }, [searchLocations, debounceMs])

  const handleInputChange = useCallback((value: string) => {
    setSearchTerm(value)
    // Only clear selected location if user explicitly clears the input
    // Don't auto-clear when user is typing/editing
    debouncedSearch(value)
  }, [debouncedSearch])

  const handleLocationSelect = useCallback((location: LocationResult) => {
    setSelectedLocation(location)
    setSearchTerm(location.name)
    setShowResults(false)
    setError(null)
  }, [])

  const clearLocation = useCallback(() => {
    setSelectedLocation(null)
    setSearchTerm('')
    setShowResults(false)
    setError(null)
  }, [])

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    if (abortControllerRef.current) abortControllerRef.current.abort()
  }, [])

  return {
    searchTerm,
    setSearchTerm,
    results,
    isSearching,
    showResults,
    setShowResults,
    selectedLocation,
    setSelectedLocation,
    error,
    handleInputChange,
    handleLocationSelect,
    clearLocation
  }
} 