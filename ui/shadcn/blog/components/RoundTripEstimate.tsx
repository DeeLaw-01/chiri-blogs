'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
// import { Badge } from '@/ui/shadcn/ui/badge'
import { Loader2, Search, MapPin, X, Plane, TrendingDown, Info } from 'lucide-react'
import { useExchangeRatesContext } from '@/src/contexts/ExchangeRatesContext'
import { formatPKRPrice } from '@/src/utils/currencyUtils'
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService'
import { useComponentAPIQueue } from '@/src/hooks/blog/useGlobalAPIQueue'
import { useLazyComponentLoader } from '@/src/hooks/blog/useIntersectionObserver'

interface RoundTripEstimateSection {
  type: 'RoundTripEstimate'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  priceEstimate?: PriceEstimate
  apiParams?: {
    fromLocation: string
    fromLocationLocode: string
    toLocation: string
    toLocationLocode: string
  }
}

interface RoundTripEstimateProps {
  section: RoundTripEstimateSection
  index: number
  onUpdate: (updates: Partial<RoundTripEstimateSection>) => void
  readOnly?: boolean
}

interface LocationResult {
  id: string
  name: string
  locode: string
  country?: string
}

interface LocationApiItem {
  id?: string | number
  value?: string
  name?: string
  title?: string
  location?: string
  locode?: string
  code?: string
  locationCode?: string
  country?: string
  countryName?: string
  [key: string]: unknown
}

interface PriceEstimate {
  minPrice: number
  maxPrice: number
  currentPrice: number
  currency: string
  isLow: boolean
  trend: 'up' | 'down' | 'stable'
  priceRange: 'low' | 'medium' | 'high'
}

const RoundTripEstimate: React.FC<RoundTripEstimateProps> = ({
  section,
  onUpdate,
  readOnly = false
}) => {
  const [title, setTitle] = useState(section.title || 'Round-trip Flight Estimate')
  const [subtitle, setSubtitle] = useState(section.subtitle || 'Find the best prices for your route')
  const { exchangeRates } = useExchangeRatesContext()

  // API Queue for coordinated requests
  const { queueRequest } = useComponentAPIQueue('RoundTripEstimate')
  
  // Intersection observer for lazy loading
  const { ref: containerRef, shouldLoad } = useLazyComponentLoader('RoundTripEstimate', 1)

  // From location state
  const [fromLocationSearchTerm, setFromLocationSearchTerm] = useState('')
  const [selectedFromLocation, setSelectedFromLocation] = useState<LocationResult | null>(null)
  const [fromLocationResults, setFromLocationResults] = useState<LocationResult[]>([])
  const [isSearchingFromLocations, setIsSearchingFromLocations] = useState(false)
  const [showFromLocationResults, setShowFromLocationResults] = useState(false)

  // To location state
  const [toLocationSearchTerm, setToLocationSearchTerm] = useState('')
  const [selectedToLocation, setSelectedToLocation] = useState<LocationResult | null>(null)
  const [toLocationResults, setToLocationResults] = useState<LocationResult[]>([])
  const [isSearchingToLocations, setIsSearchingToLocations] = useState(false)
  const [showToLocationResults, setShowToLocationResults] = useState(false)

  // Price estimate state
  const [priceEstimate, setPriceEstimate] = useState<PriceEstimate | null>(null)
  const [isLoadingPrices, setIsLoadingPrices] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const fromDebounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const toDebounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const fromAbortControllerRef = useRef<AbortController | null>(null)
  const toAbortControllerRef = useRef<AbortController | null>(null)

  // Cleanup function and mount detection
  useEffect(() => {
    setIsMounted(true)
    return () => {
      if (fromDebounceTimerRef.current) clearTimeout(fromDebounceTimerRef.current)
      if (toDebounceTimerRef.current) clearTimeout(toDebounceTimerRef.current)
      if (fromAbortControllerRef.current) fromAbortControllerRef.current.abort()
      if (toAbortControllerRef.current) toAbortControllerRef.current.abort()
    }
  }, [])

  // Initialize locations from section props (for admin edit mode)
  useEffect(() => {
    // Skip if already initialized or if in readOnly mode (handled by separate effect)
    if (readOnly || selectedFromLocation || selectedToLocation) return

    // Priority 1: Use root-level fromLocation/toLocation if they exist
    // Priority 2: Fallback to apiParams if root-level is empty
    const fromLoc = section.fromLocation || section.apiParams?.fromLocation
    const toLoc = section.toLocation || section.apiParams?.toLocation
    const fromLocode = section.apiParams?.fromLocationLocode
    const toLocode = section.apiParams?.toLocationLocode

    if (fromLoc && toLoc && fromLocode && toLocode) {
      const fromLocationData: LocationResult = {
        id: 'from-edit',
        name: fromLoc,
        locode: fromLocode,
        country: ''
      }

      const toLocationData: LocationResult = {
        id: 'to-edit',
        name: toLoc,
        locode: toLocode,
        country: ''
      }

      setSelectedFromLocation(fromLocationData)
      setSelectedToLocation(toLocationData)
      setFromLocationSearchTerm(fromLoc)
      setToLocationSearchTerm(toLoc)

      // If we have a saved price estimate, populate it too
      if (section.priceEstimate) {
        setPriceEstimate(section.priceEstimate)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-fetch data if apiParams are available and in readOnly mode (user viewing)
  useEffect(() => {
    console.log('🔍 RoundTripEstimate auto-fetch check:', {
      readOnly,
      hasApiParams: !!section.apiParams,
      isMounted,
      shouldLoad,
      fromLocation: section.apiParams?.fromLocation,
      toLocation: section.apiParams?.toLocation
    })

    if (readOnly && section.apiParams && isMounted && shouldLoad) {
      const { fromLocation, toLocation, fromLocationLocode, toLocationLocode } = section.apiParams

      if (fromLocation && toLocation && fromLocationLocode && toLocationLocode) {
        console.log('✅ Starting auto-fetch for RoundTripEstimate:', { fromLocation, toLocation })

        const fromLocationData: LocationResult = {
          id: 'from-api',
          name: fromLocation,
          locode: fromLocationLocode,
          country: ''
        }

        const toLocationData: LocationResult = {
          id: 'to-api',
          name: toLocation,
          locode: toLocationLocode,
          country: ''
        }

        setSelectedFromLocation(fromLocationData)
        setSelectedToLocation(toLocationData)
        setFromLocationSearchTerm(fromLocation)
        setToLocationSearchTerm(toLocation)

        // Auto-fetch price estimate for user viewing with queue
        const fetchPriceEstimateQueued = async () => {
          const fromLocode = fromLocationData.locode
          const toLocode = toLocationData.locode

          if (!fromLocode || !toLocode) return

          setIsLoadingPrices(true)
          setError(null)

          try {
            const data = await queueRequest(() => 
              fetchTripSuggestionsWithCache({
                fromLocode,
                toLocode,
                adults: 1,
                children: 0,
                babies: 0
              })
            )

            console.log('📊 Fetched trip data:', { count: data.length, sample: data[0] })

            if (data.length === 0) {
              setError(`No price data found for flights from ${fromLocationData.name} to ${toLocationData.name}`)
              return
            }

            // Calculate price statistics from the data
            const prices = data.map((trip: { price?: { price_transports?: number; price_hotels?: number } }) => {
              const transportPrice = trip.price?.price_transports || 0
              const hotelPrice = trip.price?.price_hotels || 0
              return transportPrice + hotelPrice
            }).filter((price: number) => price > 0)

            if (prices.length === 0) {
              setError('No valid pricing data available for this route')
              return
            }

            const minPrice = Math.min(...prices)
            const maxPrice = Math.max(...prices)
            const currentPrice = prices[0] // Use first available price as current

            console.log('💰 Price calculations:', { minPrice, maxPrice, currentPrice, spread: maxPrice - minPrice })

            // Determine if current price is low (bottom 30% of range)
            const pricePosition = (currentPrice - minPrice) / (maxPrice - minPrice)
            const isLow = pricePosition <= 0.3

            // Determine price range category
            let priceRange: 'low' | 'medium' | 'high'
            if (pricePosition <= 0.33) {
              priceRange = 'low'
            } else if (pricePosition <= 0.66) {
              priceRange = 'medium'
            } else {
              priceRange = 'high'
            }

            const estimate: PriceEstimate = {
              minPrice: Math.round(minPrice),
              maxPrice: Math.round(maxPrice),
              currentPrice: Math.round(currentPrice),
              currency: 'PKR',
              isLow,
              trend: isLow ? 'down' : 'stable',
              priceRange
            }

            console.log('🎯 Final estimate:', estimate)
            setPriceEstimate(estimate)

          } catch (err) {
            console.error('❌ Error fetching price estimate:', err)
            setError('Failed to fetch price estimate. Please try again.')
          } finally {
            setIsLoadingPrices(false)
          }
        }

        // Small delay to allow component to mount properly
        setTimeout(() => {
          if (isMounted) {
            fetchPriceEstimateQueued()
          }
        }, 100)
      }
    }
  }, [readOnly, section.apiParams, isMounted, shouldLoad, queueRequest])

  // Debounced search functions
  const debouncedFromSearch = useCallback((searchTerm: string) => {
    if (fromDebounceTimerRef.current) {
      clearTimeout(fromDebounceTimerRef.current)
    }

    fromDebounceTimerRef.current = setTimeout(() => {
      if (searchTerm.trim()) {
        searchLocations(searchTerm, 'from')
      } else {
        setFromLocationResults([])
        setShowFromLocationResults(false)
      }
    }, 500)
  }, [])

  const debouncedToSearch = useCallback((searchTerm: string) => {
    if (toDebounceTimerRef.current) {
      clearTimeout(toDebounceTimerRef.current)
    }

    toDebounceTimerRef.current = setTimeout(() => {
      if (searchTerm.trim()) {
        searchLocations(searchTerm, 'to')
      } else {
        setToLocationResults([])
        setShowToLocationResults(false)
      }
    }, 500)
  }, [])

  const transformLocationData = (item: LocationApiItem, index: number): LocationResult => ({
    id: item.id?.toString() || `location-${index}`,
    name: item.value || item.name || item.title || item.location || 'Unknown Location',
    locode: item.locode || item.code || item.locationCode || '',
    country: item.country || item.countryName || ''
  })

  const searchLocations = async (searchTerm: string, type: 'from' | 'to') => {
    if (!searchTerm.trim()) {
      if (type === 'from') {
        setFromLocationResults([])
        setShowFromLocationResults(false)
      } else {
        setToLocationResults([])
        setShowToLocationResults(false)
      }
      return
    }

    const abortControllerRef = type === 'from' ? fromAbortControllerRef : toAbortControllerRef
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()

    if (type === 'from') {
      setIsSearchingFromLocations(true)
    } else {
      setIsSearchingToLocations(true)
    }
    setError(null)

    try {
      const response = await fetch(
        `https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/typeahead/v1/search?initial_location=INICD&query=${encodeURIComponent(
          searchTerm
        )}&page=0&pageSize=10&all=true`,
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

      if (type === 'from') {
        setFromLocationResults(locations)
        setShowFromLocationResults(locations.length > 0)
      } else {
        setToLocationResults(locations)
        setShowToLocationResults(locations.length > 0)
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        return
      }
      console.error(`Error searching ${type} locations:`, err)
      setError(`Failed to search ${type} locations. Please try again.`)

      if (type === 'from') {
        setFromLocationResults([])
        setShowFromLocationResults(false)
      } else {
        setToLocationResults([])
        setShowToLocationResults(false)
      }
    } finally {
      if (type === 'from') {
        setIsSearchingFromLocations(false)
      } else {
        setIsSearchingToLocations(false)
      }
    }
  }

  const handleFromLocationInputChange = (value: string) => {
    setFromLocationSearchTerm(value)
    if (!value.trim()) {
      setSelectedFromLocation(null)
    }
    debouncedFromSearch(value)
  }

  const handleToLocationInputChange = (value: string) => {
    setToLocationSearchTerm(value)
    if (!value.trim()) {
      setSelectedToLocation(null)
    }
    debouncedToSearch(value)
  }

  const handleFromLocationSelect = (location: LocationResult) => {
    setSelectedFromLocation(location)
    setFromLocationSearchTerm(location.name)
    setShowFromLocationResults(false)
    setError(null)

    // In admin mode, save API parameters
    if (!readOnly && location && selectedToLocation) {
      onUpdate({
        fromLocation: location.name,
        apiParams: {
          fromLocation: location.name,
          fromLocationLocode: location.locode,
          toLocation: selectedToLocation.name,
          toLocationLocode: selectedToLocation.locode
        }
      })
    }
  }

  const handleToLocationSelect = (location: LocationResult) => {
    setSelectedToLocation(location)
    setToLocationSearchTerm(location.name)
    setShowToLocationResults(false)
    setError(null)

    // In admin mode, save API parameters
    if (!readOnly && location && selectedFromLocation) {
      onUpdate({
        toLocation: location.name,
        apiParams: {
          fromLocation: selectedFromLocation.name,
          fromLocationLocode: selectedFromLocation.locode,
          toLocation: location.name,
          toLocationLocode: location.locode
        }
      })
    }
  }

  const clearFromLocation = () => {
    setSelectedFromLocation(null)
    setFromLocationSearchTerm('')
    setShowFromLocationResults(false)
    setError(null)
    setPriceEstimate(null)
  }

  const clearToLocation = () => {
    setSelectedToLocation(null)
    setToLocationSearchTerm('')
    setShowToLocationResults(false)
    setError(null)
    setPriceEstimate(null)
  }

  const fetchPriceEstimate = async () => {
    const fromLocode = selectedFromLocation?.locode
    const toLocode = selectedToLocation?.locode

    if (!fromLocode || !toLocode) {
      setError('Please select both departure and destination locations')
      return
    }

    setIsLoadingPrices(true)
    setError(null)

    try {
      const data = await queueRequest(() => 
        fetchTripSuggestionsWithCache({
          fromLocode,
          toLocode,
          adults: 1,
          children: 0,
          babies: 0
        })
      )

      if (data.length === 0) {
        setError(`No price data found for flights from ${selectedFromLocation.name} to ${selectedToLocation.name}`)
        return
      }

      // Calculate price statistics from the data
      const prices = data.map((trip: { price?: { price_transports?: number; price_hotels?: number } }) => {
        const transportPrice = trip.price?.price_transports || 0
        const hotelPrice = trip.price?.price_hotels || 0
        return transportPrice + hotelPrice
      }).filter((price: number) => price > 0)

      if (prices.length === 0) {
        setError('No valid pricing data available for this route')
        return
      }

      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)
      const currentPrice = prices[0] // Use first available price as current

      // Determine if current price is low (bottom 30% of range)
      const pricePosition = (currentPrice - minPrice) / (maxPrice - minPrice)
      const isLow = pricePosition <= 0.3

      // Determine price range category
      let priceRange: 'low' | 'medium' | 'high'
      if (pricePosition <= 0.33) {
        priceRange = 'low'
      } else if (pricePosition <= 0.66) {
        priceRange = 'medium'
      } else {
        priceRange = 'high'
      }

      const estimate: PriceEstimate = {
        minPrice: Math.round(minPrice),
        maxPrice: Math.round(maxPrice),
        currentPrice: Math.round(currentPrice),
        currency: 'PKR',
        isLow,
        trend: isLow ? 'down' : 'stable',
        priceRange
      }

      setPriceEstimate(estimate)

      // In admin mode, save API parameters and data
      if (!readOnly) {
        onUpdate({
          fromLocation: selectedFromLocation.name,
          toLocation: selectedToLocation.name,
          priceEstimate: estimate,
          apiParams: {
            fromLocation: selectedFromLocation.name,
            fromLocationLocode: selectedFromLocation.locode,
            toLocation: selectedToLocation.name,
            toLocationLocode: selectedToLocation.locode
          }
        })
      }

    } catch (err) {
      console.error('Error fetching price estimate:', err)
      setError('Failed to fetch price estimate. Please try again.')
    } finally {
      setIsLoadingPrices(false)
    }
  }

  const handleGetEstimate = () => {
    if (!isMounted) return
    fetchPriceEstimate()
  }

  // Location dropdown component
  const LocationDropdown = ({
    results,
    show,
    onSelect
  }: {
    results: LocationResult[],
    show: boolean,
    onSelect: (location: LocationResult) => void
  }) => {
    if (!show || results.length === 0) return null

    return (
      <div className='absolute z-10 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto'>
        {results.map(location => (
          <div
            key={location.id}
            className='px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0'
            onClick={() => onSelect(location)}
          >
            <div className='flex items-center gap-2'>
              <MapPin className='w-4 h-4 text-gray-400' />
              <div>
                <div className='font-medium'>{location.name}</div>
                {location.country && (
                  <div className='text-sm text-gray-500'>{location.country}</div>
                )}
                <div className='text-xs text-gray-400'>Code: {location.locode}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (showFromLocationResults && !target.closest('.from-location-search-container')) {
        setShowFromLocationResults(false)
      }
      if (showToLocationResults && !target.closest('.to-location-search-container')) {
        setShowToLocationResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showFromLocationResults, showToLocationResults])

  // Price range bar component
  const PriceRangeBar = ({ estimate }: { estimate: PriceEstimate }) => {
    const position = ((estimate.currentPrice - estimate.minPrice) / (estimate.maxPrice - estimate.minPrice)) * 100

    // Dynamically pick gradient intensity based on spread tightness
    const spread = Math.max(estimate.maxPrice - estimate.minPrice, 0)
    const avg = Math.max((estimate.maxPrice + estimate.minPrice) / 2, 1)
    const spreadRatio = spread / avg

    console.log('🎨 PriceRangeBar rendering:', {
      minPrice: estimate.minPrice,
      maxPrice: estimate.maxPrice,
      currentPrice: estimate.currentPrice,
      minType: typeof estimate.minPrice,
      maxType: typeof estimate.maxPrice,
      spread,
      avg,
      spreadRatio,
      position: `${position.toFixed(2)}%`
    })

    // Discrete gradient palettes (Tailwind classes must be enumerated)
    let gradientClass = 'from-green-400 via-yellow-400 to-red-400'
    if (spreadRatio <= 0.1) {
      // Very tight range → all green shades
      gradientClass = 'from-green-400 via-green-300 to-green-500'
      console.log('📊 Gradient: Very tight range (≤10%)')
    } else if (spreadRatio <= 0.2) {
      // Small spread → mostly green with hint of yellow
      gradientClass = 'from-green-400 via-green-300 to-yellow-300'
      console.log('📊 Gradient: Small spread (≤20%)')
    } else if (spreadRatio <= 0.35) {
      // Moderate spread → green to yellow
      gradientClass = 'from-green-400 via-yellow-300 to-yellow-500'
      console.log('📊 Gradient: Moderate spread (≤35%)')
    } else if (spreadRatio <= 0.5) {
      // Large-ish, but not extreme → introduce some orange
      gradientClass = 'from-green-400 via-yellow-400 to-orange-400'
      console.log('📊 Gradient: Large spread (≤50%)')
    } else {
      // Wide spread → full green→yellow→red scale
      gradientClass = 'from-green-400 via-yellow-400 to-red-400'
      console.log('📊 Gradient: Wide spread (>50%) - FULL SPECTRUM')
    }

    console.log('🎨 Selected gradient class:', gradientClass)

    return (
      <div className="w-full">
        <div className={"relative h-2 bg-gradient-to-r rounded-full " + gradientClass}>
          <div
            className="absolute top-0 w-4 h-4 bg-white border-2 border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1"
            style={{ left: `${position}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{formatPKRPrice(estimate.minPrice, exchangeRates)}</span>
          <span>{formatPKRPrice(estimate.maxPrice, exchangeRates)}</span>
        </div>
      </div>
    )
  }

  if (readOnly) {
    // Always use auto-fetched priceEstimate state for readOnly mode to ensure correct gradient
    // If priceEstimate state is null, show loading until auto-fetch completes
    const displayEstimate = priceEstimate

    return (
      <div ref={containerRef} className='space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          {subtitle && <p className='text-gray-600 mt-2'>{subtitle}</p>}
        </div>

        {isLoadingPrices || (!displayEstimate && section.apiParams) ? (
          <Card className="bg-white text-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span className="text-gray-600">Loading price estimate...</span>
              </div>
            </CardContent>
          </Card>
        ) : section.fromLocation && section.toLocation && displayEstimate ? (
          <Card className="bg-white text-black">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">
                  What is the typical price of a round-trip flight between {section.fromLocation} and {section.toLocation}?
                </h3>
                {displayEstimate.isLow && (
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">
                      Prices are currently low for flights on this route.
                    </span>
                    <Info className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-sm mb-1">
                  Typical prices usually range from {formatPKRPrice(displayEstimate.minPrice, exchangeRates)} to {formatPKRPrice(displayEstimate.maxPrice, exchangeRates)}.
                </p>
                <p className="text-sm">
                  The lowest price recently found on this route was {formatPKRPrice(displayEstimate.minPrice, exchangeRates)}.
                </p>
              </div>

              <div className="mb-4">
                <PriceRangeBar estimate={displayEstimate} />
              </div>
            </CardContent>
          </Card>
        ) : section.fromLocation && section.toLocation ? (
          <Card className="bg-white text-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <Info className="w-5 h-5" />
                <span>Price data is currently unavailable for this route.</span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <Search className='w-12 h-12 text-gray-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>No route selected</p>
                <p className='text-sm'>
                  Price estimate will appear here when locations are configured.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className='space-y-6 p-4 border rounded-lg bg-white'>
      <div className='text-sm text-gray-500 mb-4'>
        Round-trip Price Estimate - Configure route for price analysis
      </div>

      <div>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          value={title}
          onChange={e => {
            setTitle(e.target.value)
            onUpdate({ title: e.target.value })
          }}
          placeholder='Enter section title'
          className='mb-4'
        />
      </div>

      <div>
        <Label htmlFor='subtitle'>Subtitle</Label>
        <Input
          id='subtitle'
          value={subtitle}
          onChange={e => {
            setSubtitle(e.target.value)
            onUpdate({ subtitle: e.target.value })
          }}
          placeholder='Enter section subtitle'
          className='mb-4'
        />
      </div>

      {/* From Location Search */}
      <div className='relative from-location-search-container'>
        <Label htmlFor='from-location-search'>From (Departure City/Country)</Label>
        <div className='relative'>
          <Input
            id='from-location-search'
            value={fromLocationSearchTerm}
            onChange={e => handleFromLocationInputChange(e.target.value)}
            placeholder='Enter departure location (e.g., New York, United States)'
            className='mb-4 pr-8'
          />
          {(isSearchingFromLocations || selectedFromLocation) && (
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 mb-4'>
              {isSearchingFromLocations ? (
                <Loader2 className='w-4 h-4 animate-spin text-gray-400' />
              ) : selectedFromLocation ? (
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  onClick={clearFromLocation}
                  className='p-0 h-4 w-4 hover:bg-gray-100'
                >
                  <X className='w-3 h-3' />
                </Button>
              ) : null}
            </div>
          )}
        </div>

        <LocationDropdown
          results={fromLocationResults}
          show={showFromLocationResults}
          onSelect={handleFromLocationSelect}
        />

        {selectedFromLocation && (
          <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-md'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Plane className='w-4 h-4 text-green-600' />
                <span className='text-sm font-medium text-green-800'>
                  From: {selectedFromLocation.name} ({selectedFromLocation.locode})
                </span>
              </div>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                onClick={clearFromLocation}
                className='text-green-600 hover:text-green-800 p-1'
              >
                <X className='w-4 h-4' />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* To Location Search */}
      <div className='relative to-location-search-container'>
        <Label htmlFor='to-location-search'>To (Destination City/Country)</Label>
        <div className='relative'>
          <Input
            id='to-location-search'
            value={toLocationSearchTerm}
            onChange={e => handleToLocationInputChange(e.target.value)}
            placeholder='Enter destination location (e.g., Copenhagen, Denmark)'
            className='mb-4 pr-8'
          />
          {(isSearchingToLocations || selectedToLocation) && (
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 mb-4'>
              {isSearchingToLocations ? (
                <Loader2 className='w-4 h-4 animate-spin text-gray-400' />
              ) : selectedToLocation ? (
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  onClick={clearToLocation}
                  className='p-0 h-4 w-4 hover:bg-gray-100'
                >
                  <X className='w-3 h-3' />
                </Button>
              ) : null}
            </div>
          )}
        </div>

        <LocationDropdown
          results={toLocationResults}
          show={showToLocationResults}
          onSelect={handleToLocationSelect}
        />

        {selectedToLocation && (
          <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-md'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-green-600' />
                <span className='text-sm font-medium text-green-800'>
                  To: {selectedToLocation.name} ({selectedToLocation.locode})
                </span>
              </div>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                onClick={clearToLocation}
                className='text-green-600 hover:text-green-800 p-1'
              >
                <X className='w-4 h-4' />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Get Estimate Button */}
      <Button
        onClick={handleGetEstimate}
        disabled={isLoadingPrices || !selectedFromLocation || !selectedToLocation}
        className='w-full'
      >
        {isLoadingPrices ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            Getting Price Estimate...
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            Get Price Estimate
          </>
        )}
      </Button>

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

      {/* Price Estimate Display */}
      {priceEstimate && (
        <Card className="bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                What is the typical price of a round-trip flight between {selectedFromLocation?.name} and {selectedToLocation?.name}?
              </h3>
              {priceEstimate.isLow && (
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">
                    Prices are currently low for flights on this route.
                  </span>
                  <Info className="w-4 h-4 text-gray-300" />
                </div>
              )}
            </div>

            <div className="mb-4">
              <p className="text-sm mb-1">
                Typical prices usually range from {formatPKRPrice(priceEstimate.minPrice, exchangeRates)} to {formatPKRPrice(priceEstimate.maxPrice, exchangeRates)}.
              </p>
              <p className="text-sm">
                The lowest price recently found on this route was {formatPKRPrice(priceEstimate.minPrice, exchangeRates)}.
              </p>
            </div>

            <div className="mb-4">
              <PriceRangeBar estimate={priceEstimate} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default RoundTripEstimate 