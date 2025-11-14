'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Loader2, Search } from 'lucide-react'
import { CheapestAirlineSection, LocationResult } from '@/ui/shadcn/blog/types'
import { LocationSelector, PriceChart } from '@/ui/shadcn/blog/components/'
import { useAirlineCarriers, AirlineCarrier } from '@/src/hooks/blog/useAirlineCarriers'
import { useOneWayFlightSearch, OneWayTripSuggestion } from '@/src/hooks/blog/useOneWayFlightSearch'
import { useLazyComponentLoader } from '@/src/hooks/blog/useIntersectionObserver'
import { useComponentAPIQueue } from '@/src/hooks/blog/useGlobalAPIQueue'

// Enhanced price data interface for progressive rendering
interface EnhancedPriceData {
  airline: string
  price: number
  currency: string
  flightCount: number
  logo?: string
  code: string
}

interface CheapestAirlineProps {
  section: CheapestAirlineSection
  index: number
  onUpdate: (updates: Partial<CheapestAirlineSection>) => void
  readOnly?: boolean
}

const CheapestAirline: React.FC<CheapestAirlineProps> = ({
  section,
  onUpdate,
  readOnly = false
}) => {
  // API Queue for coordinated requests
  const { queueRequest } = useComponentAPIQueue('CheapestAirline')
  
  // Intersection observer for lazy loading
  const { ref: containerRef, isVisible, shouldLoad } = useLazyComponentLoader('CheapestAirline', 3)

  const [title, setTitle] = useState(section.title || 'Cheapest Airlines')
  const [subtitle, setSubtitle] = useState(section.subtitle || 'Compare airline prices and find the best deals')

  // Location state
  const [selectedFromLocation, setSelectedFromLocation] = useState<LocationResult | null>(null)
  const [selectedToLocation, setSelectedToLocation] = useState<LocationResult | null>(null)

  // Enhanced price comparison state
  const [priceData, setPriceData] = useState<EnhancedPriceData[]>(() => {
    // Initialize with stored price data if available in readOnly mode
    if (readOnly && section.priceData && Array.isArray(section.priceData)) {
      return section.priceData.map(item => ({
        airline: item.airline,
        price: item.price,
        currency: item.currency,
        flightCount: item.flightCount || 0,
        logo: item.logo,
        code: item.code || ''
      }))
    }
    return []
  })

  const [cheapestAirline, setCheapestAirline] = useState<string>(() => {
    // Initialize with stored cheapest airline if available in readOnly mode
    if (readOnly && section.cheapestAirline) {
      return section.cheapestAirline
    }
    return ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentSearchingAirline, setCurrentSearchingAirline] = useState<string | null>(null)
  const [searchProgress, setSearchProgress] = useState({ current: 0, total: 0 })

  // Ref to prevent duplicate searches
  const hasAutoSearchedRef = useRef(false)
  
  // Ref to track which carrier we're currently searching for (prevents race conditions)
  const currentCarrierRef = useRef<AirlineCarrier | null>(null)

  // Hooks for carrier-first flow
  const { carriers, loading: carriersLoading, error: carriersError, fetchCarriers } = useAirlineCarriers()
  const { trips, loading: tripsLoading, error: tripsError, searchFlights, clearResults } = useOneWayFlightSearch()

  // Initialize data from section props
  useEffect(() => {

    if (section.fromLocation && section.toLocation) {
      // Use actual API params if available, otherwise create placeholder locations
      if (section.apiParams?.fromLocationLocode && section.apiParams?.toLocationLocode) {
        setSelectedFromLocation({
          id: 'from-location',
          name: section.fromLocation,
          locode: section.apiParams.fromLocationLocode,
          country: ''
        })
        setSelectedToLocation({
          id: 'to-location',
          name: section.toLocation,
          locode: section.apiParams.toLocationLocode,
          country: ''
        })
      } else {
        // Fallback with placeholder locodes
        setSelectedFromLocation({
          id: 'from-location',
          name: section.fromLocation,
          locode: 'XXXXX',
          country: ''
        })
        setSelectedToLocation({
          id: 'to-location',
          name: section.toLocation,
          locode: 'XXXXX',
          country: ''
        })
      }
    }
  }, [section.fromLocation, section.toLocation, section.apiParams])

  const handlePriceComparison = useCallback(async () => {
    if (!selectedFromLocation || !selectedToLocation ||
      selectedFromLocation.locode === 'XXXXX' || selectedToLocation.locode === 'XXXXX') {
      setError('Please select valid locations first')
      return
    }


    setIsLoading(true)
    setError(null)
    setPriceData([])
    setCheapestAirline('')
    setCurrentSearchingAirline(null)
    setSearchProgress({ current: 0, total: 0 })

    // Clear previous results to ensure fresh data
    clearResults()

    try {

      // Step 1: Fetch available carriers
      await fetchCarriers({
        origin: selectedFromLocation.locode,
        destination: selectedToLocation.locode
      })

      // Note: Don't set isLoading to false here! 
      // The carriers useEffect will handle the next steps and manage loading state

    } catch (err) {
      console.error('Price comparison error:', err)
      setError(err instanceof Error ? err.message : 'Failed to compare prices')
      setIsLoading(false)
      setCurrentSearchingAirline(null)
      setSearchProgress({ current: 0, total: 0 })
    }
    // Removed finally block - let the process continue until all flights are fetched
  }, [selectedFromLocation, selectedToLocation, fetchCarriers, clearResults])

  // Auto-fetch data in readOnly mode - wait for locations to be set
  useEffect(() => {

    if (readOnly && section.apiParams && !hasAutoSearchedRef.current && selectedFromLocation && selectedToLocation) {

      // Check if we have valid locations with real locodes (not XXXXX placeholder)
      if (selectedFromLocation.locode !== 'XXXXX' && selectedToLocation.locode !== 'XXXXX') {
        hasAutoSearchedRef.current = true

        // Use setTimeout to ensure all state updates are complete
        setTimeout(() => {
          handlePriceComparison()
        }, 50)
      } else {
        console.log(`🛩️ CheapestAirline readOnly: Waiting for valid location data - currentLocodes: ${selectedFromLocation.locode}, ${selectedToLocation.locode}`)
      }
    } else if (readOnly && !section.apiParams) {
      console.log(`🛩️ CheapestAirline readOnly: No API params available`)
    } else if (!readOnly) {
      console.log(`🛩️ CheapestAirline: Component in edit mode`)
    }
  }, [readOnly, section.apiParams, selectedFromLocation, selectedToLocation, handlePriceComparison])

  // Reset auto search flag when switching modes or when component is initialized
  useEffect(() => {
    hasAutoSearchedRef.current = false
  }, [readOnly, section.fromLocation, section.toLocation])

  // Process flight data and update price comparison progressively
  const processFlightData = useCallback((flightTrips: OneWayTripSuggestion[], carrierData: AirlineCarrier): void => {
    if (!flightTrips || flightTrips.length === 0) {
      return
    }

    // Extract prices for this carrier
    const prices = flightTrips
      .map(trip => trip.price.price_transports)
      .filter(price => price > 0)

    if (prices.length === 0) {
      return
    }

    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const avgPrice = prices.reduce((sum, price) => sum + price, 0) / prices.length
    const currency = flightTrips[0]?.trip_currency_code || 'EUR'


    // Debug: Show unique trip IDs and their prices to identify if same trips are being reused
    const tripDetails = flightTrips.map(trip => ({
      id: trip.id.substring(0, 8), // First 8 chars of ID for readability
      price: trip.price.price_transports,
      initial_location: trip.initial_location,
      locations: trip.locations
    }))

    const newPriceData: EnhancedPriceData = {
      airline: carrierData.name,
      price: minPrice, // Use minimum price as the best deal
      currency,
      flightCount: prices.length,
      logo: carrierData.logo,
      code: carrierData.code
    }

    // Update price data progressively with deduplication and best price logic
    setPriceData(currentPriceData => {
      // Find if this airline already exists
      const existingAirlineIndex = currentPriceData.findIndex(item =>
        item.airline === carrierData.name || item.code === carrierData.code
      )

      let updatedData: EnhancedPriceData[]

      if (existingAirlineIndex >= 0) {
        // Airline exists - update if new price is cheaper or combine flight counts
        const existingAirline = currentPriceData[existingAirlineIndex]
        const updatedAirline: EnhancedPriceData = {
          ...existingAirline,
          price: Math.min(existingAirline.price, minPrice), // Keep the cheapest price
          flightCount: existingAirline.flightCount + prices.length, // Add to flight count
          // Update logo and code if they were missing
          logo: existingAirline.logo || carrierData.logo,
          code: existingAirline.code || carrierData.code
        }

        updatedData = [
          ...currentPriceData.slice(0, existingAirlineIndex),
          updatedAirline,
          ...currentPriceData.slice(existingAirlineIndex + 1)
        ]

      } else {
        // New airline - add to the list
        updatedData = [...currentPriceData, newPriceData]
      }

      // Update cheapest airline
      if (updatedData.length > 0) {
        const currentCheapest = updatedData.reduce((cheapest, airline) =>
          airline.price < cheapest.price ? airline : cheapest
        )
        setCheapestAirline(currentCheapest.airline)
      }

      return updatedData
    })
  }, [])  // Enhanced price comparison with carrier-first flow

  // Process carriers when they're fetched
  useEffect(() => {

    if (carriers && carriers.length > 0 && isLoading) {
      const validCarriers = carriers.filter(carrier => carrier.code)

      if (validCarriers.length === 0) {
        setError('No valid carriers found for this route')
        setIsLoading(false)
        return
      }

      setSearchProgress({ current: 0, total: validCarriers.length })

      // Step 2: Search flights for each carrier sequentially
      searchFlightsForCarriers(validCarriers)
    } else {
      ;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carriers, isLoading])

  // Sequential flight search for each carrier with progressive rendering
  const searchFlightsForCarriers = async (validCarriers: AirlineCarrier[]) => {

    for (let i = 0; i < validCarriers.length; i++) {
      const carrier = validCarriers[i]

      try {
        // Store current carrier in ref BEFORE searching
        // This ensures the useEffect knows which carrier these trips belong to
        currentCarrierRef.current = carrier
        setCurrentSearchingAirline(carrier.name)
        setSearchProgress({ current: i + 1, total: validCarriers.length })


        // Add delay between requests to prevent rate limiting (except first request)
        if (i > 0) {
          await new Promise(resolve => setTimeout(resolve, 1500))
        }

        // Clear previous trips data before searching for new carrier
        clearResults()

        // Search flights for this specific carrier
        console.log(`🛩️ Searching flights for ${carrier.name} (${carrier.code})`)
        await searchFlights({
          fromLocation: selectedFromLocation!.locode,
          toLocation: selectedToLocation!.locode,
          airlineCarriers: [carrier.code]
        })

        // Wait for trips to be processed by useEffect
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (carrierError) {
        console.error(`🛩️ CheapestAirline: Error searching flights for ${carrier.name}:`, carrierError)
        // Continue with other carriers even if one fails
      }
    }

    // All carriers processed - stop loading
    setIsLoading(false)
    setCurrentSearchingAirline(null)
    setSearchProgress({ current: 0, total: 0 })
    currentCarrierRef.current = null
  }

  // Process flight results when trips are updated
  // FIXED: Use currentCarrierRef to ensure trips are matched to the correct carrier
  useEffect(() => {
    if (trips && trips.length > 0 && currentCarrierRef.current) {
      const carrier = currentCarrierRef.current
      console.log(`🛩️ Processing ${trips.length} trips for ${carrier.name} (first price: ${trips[0]?.price?.price_transports})`)
      processFlightData(trips, carrier)
    } else if (trips && trips.length === 0 && currentCarrierRef.current) {
      console.log(`⚠️ No trips found for ${currentCarrierRef.current.name}`)
    }
  }, [trips, processFlightData])

  // Location change handlers with enhanced API parameters
  const handleFromLocationChange = (location: LocationResult | null) => {
    setSelectedFromLocation(location)
    if (!location) {
      setPriceData([])
      setCheapestAirline('')
      setError(null)
    }

    // In admin mode, save enhanced API parameters
    if (!readOnly && location && selectedToLocation) {
      onUpdate({
        fromLocation: location.name,
        apiParams: {
          fromLocation: location.name,
          fromLocationLocode: location.locode,
          toLocation: selectedToLocation.name,
          toLocationLocode: selectedToLocation.locode,
          // Enhanced API parameters for carrier-first flow
          flowType: 'carrier-first',
          carrierEndpoint: '/api/carriers',
          oneWayEndpoint: '/api/one-way-flights',
          queryParams: {
            oneway_search: 'true',
            type: 'one-way',
            size: '200',
            page: '0'
          }
        }
      })
    }
  }

  const handleToLocationChange = (location: LocationResult | null) => {
    setSelectedToLocation(location)
    if (!location) {
      setPriceData([])
      setCheapestAirline('')
      setError(null)
    }

    // In admin mode, save enhanced API parameters
    if (!readOnly && location && selectedFromLocation) {
      onUpdate({
        toLocation: location.name,
        apiParams: {
          fromLocation: selectedFromLocation.name,
          fromLocationLocode: selectedFromLocation.locode,
          toLocation: location.name,
          toLocationLocode: location.locode,
          // Enhanced API parameters for carrier-first flow
          flowType: 'carrier-first',
          carrierEndpoint: '/api/carriers',
          oneWayEndpoint: '/api/one-way-flights',
          queryParams: {
            oneway_search: 'true',
            type: 'one-way',
            size: '200',
            page: '0'
          }
        }
      })
    }
  }

  // Handle price search with enhanced flow
  const handleSearchPrices = async () => {
    if (!selectedFromLocation || !selectedToLocation) {
      return
    }

    await handlePriceComparison()

    // In admin mode, save enhanced API parameters
    if (!readOnly && selectedFromLocation && selectedToLocation) {
      onUpdate({
        fromLocation: selectedFromLocation.name,
        toLocation: selectedToLocation.name,
        apiParams: {
          fromLocation: selectedFromLocation.name,
          fromLocationLocode: selectedFromLocation.locode,
          toLocation: selectedToLocation.name,
          toLocationLocode: selectedToLocation.locode,
          // Enhanced API parameters for carrier-first flow
          flowType: 'carrier-first',
          carrierEndpoint: '/api/carriers',
          oneWayEndpoint: '/api/one-way-flights',
          queryParams: {
            oneway_search: 'true',
            type: 'one-way',
            size: '200',
            page: '0'
          }
        }
      })
    }
  }

  // Computing loading state (including all hook states)
  const computedLoadingState = carriersLoading || tripsLoading || isLoading

  // Computing error state (including all hook errors)
  const computedError = error || carriersError || tripsError

  // Transform enhanced price data to legacy format for PriceChart compatibility
  const transformedPriceData = priceData.map(item => ({
    airline: item.airline,
    price: item.price,
    currency: item.currency,
    flightCount: item.flightCount,
    logo: item.logo
  }))

  if (readOnly) {
    return (
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-green-800'>{title}</h2>
          {subtitle && <p className='text-gray-600 mt-2'>{subtitle}</p>}
        </div>

        {/* Display current route if available */}
        {(selectedFromLocation || section.fromLocation) && (selectedToLocation || section.toLocation) && (
          <div className='text-center text-sm text-gray-600 mb-4'>
            Route: {selectedFromLocation?.name || section.fromLocation} → {selectedToLocation?.name || section.toLocation}
          </div>
        )}

        {/* Loading state - show full loader only when no data yet and it's not from stored data */}
        {computedLoadingState && transformedPriceData.length === 0 && !section.priceData && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-green-600 animate-spin mb-4" />
            <p className="text-gray-600 font-medium">
              {currentSearchingAirline ? `Analyzing ${currentSearchingAirline}...` : 'Finding cheapest airlines...'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Comparing prices across multiple carriers
            </p>
          </div>
        )}

        {/* Progressive loading indicator when we have fresh data or are updating stored data */}
        {computedLoadingState && (transformedPriceData.length > 0 || section.priceData) && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Loader2 className="w-4 h-4 text-green-600 animate-spin mr-2" />
                <span className="text-sm font-medium text-green-700">
                  {currentSearchingAirline
                    ? `Analyzing ${currentSearchingAirline}...`
                    : transformedPriceData.length > 0
                      ? 'Updating price comparison...'
                      : 'Finding more airlines...'
                  }
                </span>
              </div>
              <span className="text-xs text-green-600">
                {transformedPriceData.length > 0
                  ? `${transformedPriceData.length} airline${transformedPriceData.length !== 1 ? 's' : ''} analyzed`
                  : section.priceData
                    ? `Refreshing data (${section.priceData.length} stored)`
                    : 'Finding airlines...'
                }
              </span>
            </div>
            {(cheapestAirline || section.cheapestAirline) && (
              <div className="text-xs text-green-600 font-medium">
                Current best deal: {cheapestAirline || section.cheapestAirline}
              </div>
            )}
          </div>
        )}

        {/* Error state */}
        {computedError && !computedLoadingState && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
              <Search className='w-8 h-8 text-red-500' />
            </div>
            <h3 className='text-lg font-semibold text-red-800 mb-2'>Price Comparison Unavailable</h3>
            <p className='text-red-600 text-sm max-w-md'>
              {computedError}
            </p>
            <div className='text-xs text-red-500 mt-2'>
              💡 Try checking flights to nearby airports or major hubs
            </div>
          </div>
        )}

        {/* Price Chart - show progressive data or fallback to section data */}
        {!computedError && (transformedPriceData.length > 0 || section.priceData) && (
          <div>
            <PriceChart
              priceData={transformedPriceData.length > 0 ? transformedPriceData : (section.priceData || [])}
              cheapestAirline={cheapestAirline || section.cheapestAirline || ''}
              fromLocation={selectedFromLocation?.name || section.fromLocation}
              toLocation={selectedToLocation?.name || section.toLocation}
              isLoading={false} // Don't show loading in chart, we handle it above
              error={null}
            />
          </div>
        )}

        {/* No data state - only show when not loading and no data */}
        {!computedError && !computedLoadingState && transformedPriceData.length === 0 && !section.priceData && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
              <Search className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>No price comparison available</h3>
            <p className='text-sm text-gray-500 max-w-md'>
              Airline price comparison will appear here when route data is configured.
            </p>
            <div className='text-xs text-gray-400 mt-2'>
              ✈️ Configure departure and destination locations to see price comparison
            </div>
          </div>
        )}

        {/* Data Source Info */}
        {transformedPriceData.length > 0 && (
          <div className="text-center text-xs text-gray-500 mt-4">
            <p>
              Price comparison based on {transformedPriceData.reduce((total, item) => total + item.flightCount, 0)} flights from {transformedPriceData.length} airlines.
              {cheapestAirline && ` Best deal currently: ${cheapestAirline}`}
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='space-y-6 p-4 border rounded-lg bg-white'>
      <div className='text-sm text-gray-500 mb-4'>
        Cheapest Airline Section - Compare airline prices and find the best deals using carrier-first flow
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

      {/* Location Selector */}
      <LocationSelector
        initialFromLocation={selectedFromLocation?.name}
        initialToLocation={selectedToLocation?.name}
        onFromLocationChange={handleFromLocationChange}
        onToLocationChange={handleToLocationChange}
        fromLabel="From (Departure City/Country)"
        toLabel="To (Destination City/Country)"
        fromPlaceholder="Enter departure location (e.g., Lahore, Pakistan)"
        toPlaceholder="Enter destination location (e.g., Copenhagen, Denmark)"
        readOnly={false}
      />

      {/* Search Prices Button */}
      <Button
        onClick={handleSearchPrices}
        disabled={computedLoadingState || !selectedFromLocation || !selectedToLocation}
        className='w-full bg-emerald-600 hover:bg-emerald-700'
      >
        {computedLoadingState ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            {currentSearchingAirline
              ? `Analyzing ${currentSearchingAirline}...`
              : carriersLoading
                ? 'Finding Airlines...'
                : 'Comparing Prices...'
            }
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            Compare Airline Prices (Enhanced Flow)
          </>
        )}
      </Button>

      {/* Error Display */}
      {computedError && (
        <p className='text-red-500 text-sm mt-2'>
          {computedError}
        </p>
      )}

      {/* Progress Indicator */}
      {computedLoadingState && searchProgress.total > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-emerald-700">
              Comparing Airlines ({searchProgress.current}/{searchProgress.total})
            </span>
            <span className="text-xs text-emerald-600">
              {Math.round((searchProgress.current / Math.max(searchProgress.total, 1)) * 100)}% Complete
            </span>
          </div>

          {currentSearchingAirline && (
            <div className="text-sm text-emerald-600">
              Currently analyzing: <span className="font-medium">{currentSearchingAirline}</span>
            </div>
          )}

          <div className="w-full bg-emerald-200 rounded-full h-2">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(searchProgress.current / Math.max(searchProgress.total, 1)) * 100}%`
              }}
            ></div>
          </div>

          {priceData.length > 0 && (
            <div className="text-xs text-green-600 font-medium">
              ✓ {priceData.length} airline{priceData.length !== 1 ? 's' : ''} analyzed, cheapest so far: {cheapestAirline || 'Analyzing...'}
            </div>
          )}
        </div>
      )}

      {/* Price Chart - Always show chart when data is available */}
      <PriceChart
        priceData={transformedPriceData}
        cheapestAirline={cheapestAirline}
        fromLocation={selectedFromLocation?.name}
        toLocation={selectedToLocation?.name}
        className="mt-6"
        isLoading={false} // Don't show loading in chart, handled by progress indicator above
        error={computedError}
      />
    </div>
  )
}

export default CheapestAirline