"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Loader2, Search } from 'lucide-react'
import { StopsAnalysisSection as StopsAnalysisSectionType, LocationResult } from '@/ui/shadcn/blog/types'
import { LocationSelector, StopsComparisonChart } from '@/ui/shadcn/blog/components/'
import { useStopsAnalysis } from '@/src/hooks/blog/useStopsAnalysis'

interface StopsAnalysisSectionProps {
  section: StopsAnalysisSectionType
  index: number
  onUpdate: (updates: Partial<StopsAnalysisSectionType>) => void
  readOnly?: boolean
}

const StopsAnalysisSection: React.FC<StopsAnalysisSectionProps> = ({
  section,
  onUpdate,
  readOnly = false
}) => {
  const [title, setTitle] = useState(section.title || 'Flight Stops Analysis')
  const [subtitle, setSubtitle] = useState(section.subtitle || 'Compare prices between direct flights and flights with stops')

  // Location state
  const [selectedFromLocation, setSelectedFromLocation] = useState<LocationResult | null>(null)
  const [selectedToLocation, setSelectedToLocation] = useState<LocationResult | null>(null)

  // Ref to prevent duplicate API calls in readonly mode
  const hasAnalyzedRef = useRef(false)

  // State for progressive rendering
  const [progressiveFlightData, setProgressiveFlightData] = useState<typeof flightStopData>([])
  const [dataLoadingProgress, setDataLoadingProgress] = useState(0)

  // Use the stops analysis hook with progressive updates
  const {
    flightStopData,
    isLoading,
    error,
    analyzeStops,
    analyzeStopsFromApiParams,
    clearData
  } = useStopsAnalysis({
    // Enable progressive rendering for stops analysis
    onDataUpdate: (newData) => {
      // This callback allows us to update the UI as data comes in
      setProgressiveFlightData(newData)
      setDataLoadingProgress((newData.length / 50) * 100) // Calculate progress percentage
    }
  })

  // Convert progressive flight data to chart format - use progressive data when loading, final data when complete
  const displayFlightData = isLoading && progressiveFlightData.length > 0 ? progressiveFlightData : flightStopData
  const chartData = displayFlightData.map(flight => ({
    price: flight.price,
    stops: flight.stops,
    currency: flight.currency,
    airline: flight.airline || 'Unknown Airline' // Include airline information for enhanced chart display
  }))

  // Enhanced debugging for stops analysis

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
        // Fallback with placeholder locodes for display purposes
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

  // Auto-fetch data in readOnly mode (consolidated to prevent duplicate calls)
  useEffect(() => {
    if (readOnly && !hasAnalyzedRef.current && !isLoading) {
      let shouldAnalyze = false
      let fromLocationData: LocationResult | null = null
      let toLocationData: LocationResult | null = null

      // Priority 1: Use apiParams if available (most reliable)
      if (section.apiParams?.fromLocationLocode && section.apiParams?.toLocationLocode) {
        // Check if we have enhanced API params with flowType
        if (section.apiParams.flowType === 'carrier-first') {
          hasAnalyzedRef.current = true
          analyzeStopsFromApiParams(section.apiParams)
          return
        } else {
          // Legacy API params - convert to location objects
          fromLocationData = {
            id: 'from-api',
            name: section.apiParams.fromLocation || 'From Location',
            locode: section.apiParams.fromLocationLocode,
            country: ''
          }
          toLocationData = {
            id: 'to-api',
            name: section.apiParams.toLocation || 'To Location',
            locode: section.apiParams.toLocationLocode,
            country: ''
          }
          shouldAnalyze = true
        }
      }
      // Priority 2: Use existing selectedLocations if they have valid locodes
      else if (selectedFromLocation && selectedToLocation &&
        selectedFromLocation.locode !== 'XXXXX' && selectedToLocation.locode !== 'XXXXX') {
        fromLocationData = selectedFromLocation
        toLocationData = selectedToLocation
        shouldAnalyze = true
      }

      if (shouldAnalyze && fromLocationData && toLocationData) {
        // Mark as analyzed to prevent duplicate calls
        hasAnalyzedRef.current = true

        // Update location state
        setSelectedFromLocation(fromLocationData)
        setSelectedToLocation(toLocationData)

        analyzeStops(fromLocationData, toLocationData)
      }
    }
  }, [readOnly, section.apiParams, isLoading, analyzeStops, analyzeStopsFromApiParams, selectedFromLocation, selectedToLocation])

  // Reset analysis flag when key parameters change
  useEffect(() => {
    hasAnalyzedRef.current = false
  }, [section.apiParams?.fromLocationLocode, section.apiParams?.toLocationLocode, section.apiParams?.flowType])

  // Location change handlers
  const handleFromLocationChange = (location: LocationResult | null) => {
    setSelectedFromLocation(location)
    if (!location) {
      clearData()
    }

    // In admin mode, save API parameters
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
          tripDetailsEndpoint: 'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/trips/trip',
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
      clearData()
    }

    // In admin mode, save API parameters
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
          tripDetailsEndpoint: 'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/trips/trip',
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

  // Handle stops analysis with the hook
  const handleAnalyzeStops = async () => {
    if (!selectedFromLocation || !selectedToLocation) {
      return
    }

    await analyzeStops(selectedFromLocation, selectedToLocation)

    // In admin mode, save API parameters instead of actual data
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
          tripDetailsEndpoint: 'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/trips/trip',
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

        {/* Loading state with progressive indicator */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-600 font-medium">Analyzing flight stops...</p>
            <p className="text-sm text-gray-500 mt-1">
              Comparing direct flights vs flights with stops
            </p>
            {progressiveFlightData.length > 0 && (
              <div className="mt-4 text-center">
                <div className="w-48 bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(dataLoadingProgress, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Error state */}
        {error && !isLoading && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
              <Search className='w-8 h-8 text-red-500' />
            </div>
            <h3 className='text-lg font-semibold text-red-800 mb-2'>No Flight Data Found</h3>
            <p className='text-red-600 text-sm max-w-md'>
              {error}
            </p>
            <div className='text-xs text-red-500 mt-2'>
              💡 Try checking flights to nearby cities or major airports
            </div>
          </div>
        )}

        {/* Results Chart - show progressive data during loading or final data when complete */}
        {!error && (chartData.length > 0) && (
          <div className={isLoading ? "opacity-75" : "opacity-100"}>
            <StopsComparisonChart
              flights={chartData}
              title={`Can stopping save me money on ${selectedFromLocation?.name || section.fromLocation} to ${selectedToLocation?.name || section.toLocation} flights?`}
              fromLocation={selectedFromLocation?.name || section.fromLocation}
              toLocation={selectedToLocation?.name || section.toLocation}
            />
            {isLoading && progressiveFlightData.length > 0 && (
              <div className="text-center text-sm text-gray-500 mt-2">
                Showing {progressiveFlightData.length} flights, updating as more data loads...
              </div>
            )}
          </div>
        )}

        {/* No data state */}
        {!error && !isLoading && chartData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
              <Search className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>No stops analysis available</h3>
            <p className='text-sm text-gray-500 max-w-md'>
              Flight stops analysis will appear here when route data is configured and analyzed.
            </p>
            <div className='text-xs text-gray-400 mt-2'>
              ✈️ Configure departure and destination locations to see price comparison
            </div>
          </div>
        )}

        {/* Data Source Info */}
        {!error && chartData.length > 0 && (
          <div className="text-center text-xs text-gray-500 mt-4">
            <p>
              Analysis based on {chartData.length} flights from multiple sources.
              Data includes both direct and connecting flights.
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='space-y-6 p-4 border rounded-lg bg-white'>
      <div className='text-sm text-gray-500 mb-4'>
        Stops Analysis Section - Compare flight prices by number of stops
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

      {/* Location Selection */}
      <LocationSelector
        initialFromLocation={selectedFromLocation?.name}
        initialToLocation={selectedToLocation?.name}
        onFromLocationChange={handleFromLocationChange}
        onToLocationChange={handleToLocationChange}
        fromLabel="From (Departure City/Country)"
        toLabel="To (Destination City/Country)"
        fromPlaceholder="Enter departure location (e.g., New York, United States)"
        toPlaceholder="Enter destination location (e.g., Copenhagen, Denmark)"
        readOnly={false}
      />

      {/* Analyze Stops Button */}
      <Button
        onClick={handleAnalyzeStops}
        disabled={isLoading || !selectedFromLocation || !selectedToLocation}
        className='w-full bg-primary hover:bg-primary/90'
      >
        {isLoading ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            Analyzing Flight Stops...
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            Analyze Stops & Prices
          </>
        )}
      </Button>

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

      {/* Results Chart */}
      {chartData.length > 0 && (
        <StopsComparisonChart
          flights={chartData}
          title={`Flight stops analysis for ${selectedFromLocation?.name} to ${selectedToLocation?.name}`}
          fromLocation={selectedFromLocation?.name}
          toLocation={selectedToLocation?.name}
          className="mt-6"
        />
      )}
    </div>
  )
}

export default StopsAnalysisSection 