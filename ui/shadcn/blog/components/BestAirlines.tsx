'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
import { Badge } from '@/ui/shadcn/ui/badge'
import { Loader2, Search, MapPin, X, Plane, Star, Clock, Shield, Heart } from 'lucide-react'
import Image from 'next/image'
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService'

interface BestAirlinesSection {
  type: 'BestAirlines'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  airlines?: AirlineInfo[]
}

interface BestAirlinesProps {
  section: BestAirlinesSection
  index: number
  onUpdate: (updates: Partial<BestAirlinesSection>) => void
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

interface AirlineInfo {
  id: string
  name: string
  logo?: string
  rating: number
  reviews: number
  priceFrom: number
  currency: string
  freeCancellation: boolean
  features: string[]
  flightDuration?: string
  popularity: 'high' | 'medium' | 'low'
}

interface TripData {
  itinerary?: {
    segments?: SegmentData[]
  }
  price?: {
    price_transports?: number
    price_hotels?: number
  }
  trip_currency_code?: string
  [key: string]: unknown
}

interface SegmentData {
  segment_type?: string
  carriers?: CarrierData[]
  start_date_time?: string
  end_date_time?: string
  [key: string]: unknown
}

interface CarrierData {
  carrier_name?: string
  carrier_iata_code?: string
  carrier_logo_url?: string
  [key: string]: unknown
}

// Move AirlineCard outside the main component to prevent re-creation
const AirlineCard = ({ airline }: { airline: AirlineInfo }) => (
  <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-emerald-500">
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {airline.logo ? (
              <Image
                src={airline.logo}
                alt={`${airline.name} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : (
              <Plane className="w-6 h-6 text-emerald-600" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-green-800">{airline.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{airline.rating}</span>
              <span className="text-sm text-gray-500">({airline.reviews} reviews)</span>
            </div>
          </div>
        </div>
        {airline.popularity === 'high' && (
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <Heart className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-800">
            From {airline.currency}{airline.priceFrom}
          </span>
          {airline.freeCancellation && (
            <div className="flex items-center gap-1 text-emerald-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Free Cancellation</span>
            </div>
          )}
        </div>

        {airline.flightDuration && (
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Flight duration: {airline.flightDuration}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {airline.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              {feature}
            </Badge>
          ))}
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
          Search {airline.name} flights
        </Button>
      </div>
    </CardContent>
  </Card>
)

const BestAirlines: React.FC<BestAirlinesProps> = ({
  section,
  onUpdate,
  readOnly = false
}) => {
  const [title, setTitle] = useState(section.title || 'Best Airlines')
  const [subtitle, setSubtitle] = useState(section.subtitle || 'Compare and see reviews for airlines that fly from your origin to destination')

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

  // Airlines state
  const [airlines, setAirlines] = useState<AirlineInfo[]>([])
  const [isLoadingAirlines, setIsLoadingAirlines] = useState(false)
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
  }

  const handleToLocationSelect = (location: LocationResult) => {
    setSelectedToLocation(location)
    setToLocationSearchTerm(location.name)
    setShowToLocationResults(false)
    setError(null)
  }

  const clearFromLocation = () => {
    setSelectedFromLocation(null)
    setFromLocationSearchTerm('')
    setShowFromLocationResults(false)
    setError(null)
    setAirlines([])
  }

  const clearToLocation = () => {
    setSelectedToLocation(null)
    setToLocationSearchTerm('')
    setShowToLocationResults(false)
    setError(null)
    setAirlines([])
  }

  const generateFeatures = (): string[] => {
    const allFeatures = [
      'In-flight WiFi',
      'Meal included',
      'Extra legroom',
      'Entertainment system',
      'Priority boarding',
      'Checked baggage',
      'Seat selection',
      'Fast check-in'
    ]

    const numFeatures = Math.floor(Math.random() * 3) + 2 // 2-4 features
    const shuffled = allFeatures.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numFeatures)
  }

  const calculateDuration = (segment: SegmentData): string => {
    if (segment.start_date_time && segment.end_date_time) {
      const start = new Date(segment.start_date_time)
      const end = new Date(segment.end_date_time)
      const diffMs = end.getTime() - start.getTime()
      const hours = Math.floor(diffMs / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      return `${hours}h ${minutes}m`
    }
    return `${Math.floor(Math.random() * 8) + 2}h ${Math.floor(Math.random() * 60)}m` // Mock duration
  }

  const fetchAirlines = async () => {
    const fromLocode = selectedFromLocation?.locode
    const toLocode = selectedToLocation?.locode

    if (!fromLocode || !toLocode) {
      setError('Please select both departure and destination locations')
      return
    }

    setIsLoadingAirlines(true)
    setError(null)

    try {
      const data = await fetchTripSuggestionsWithCache({
        fromLocode,
        toLocode,
        adults: 1,
        children: 0,
        babies: 0
      })

      if (!Array.isArray(data) || data.length === 0) {
        setError(`No airlines found for flights from ${selectedFromLocation.name} to ${selectedToLocation.name}`)
        setAirlines([])
        return
      }

      // Transform API data to airline information
      const airlineMap = new Map<string, AirlineInfo>()

      data.forEach((trip: TripData, index: number) => {
        const segments = trip.itinerary?.segments || []

        segments.forEach((segment: SegmentData) => {
          if (segment.segment_type === 'transport' && segment.carriers && segment.carriers.length > 0) {
            const carrier = segment.carriers[0]
            const carrierName = carrier.carrier_name || 'Unknown Airline'
            const carrierId = carrier.carrier_iata_code || `airline-${index}-${Math.random()}`


            if (!airlineMap.has(carrierId)) {
              const transportPrice = trip.price?.price_transports || 0
              const rating = 3.5 + Math.random() * 1.5 // Mock rating between 3.5-5.0
              const reviews = Math.floor(Math.random() * 500) + 50 // Mock reviews 50-550

              const airlineInfo: AirlineInfo = {
                id: carrierId,
                name: carrierName,
                logo: carrier.carrier_logo_url,
                rating: Math.round(rating * 10) / 10,
                reviews,
                priceFrom: Math.round(transportPrice),
                currency: trip.trip_currency_code || 'EUR',
                freeCancellation: Math.random() > 0.5, // Random free cancellation
                features: generateFeatures(),
                flightDuration: calculateDuration(segment),
                popularity: transportPrice < 300 ? 'high' : transportPrice < 600 ? 'medium' : 'low'
              }

              airlineMap.set(carrierId, airlineInfo)
            }
          }
        })
      })

      const airlinesArray = Array.from(airlineMap.values())
        .sort((a, b) => a.priceFrom - b.priceFrom) // Sort by price
        .slice(0, 5) // Limit to top 5 airlines

      // Check if we have any airlines after processing
      if (airlinesArray.length === 0) {
        setError(`No flights found from ${selectedFromLocation.name} to ${selectedToLocation.name}. Please try different locations or check back later.`)
        setAirlines([])
        return
      }

      setAirlines(airlinesArray)

      // Update section data
      onUpdate({
        fromLocation: selectedFromLocation.name,
        toLocation: selectedToLocation.name,
        airlines: airlinesArray
      })

    } catch (err) {
      console.error('Error fetching airlines:', err)
      setError('Failed to fetch airline information. Please try again.')
      setAirlines([])
    } finally {
      setIsLoadingAirlines(false)
    }
  }

  const handleSearchAirlines = () => {
    if (!isMounted) return
    fetchAirlines()
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

  if (readOnly) {
    return (
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-green-800'>{title}</h2>
          {subtitle && <p className='text-gray-600 mt-2'>{subtitle}</p>}
        </div>

        {section.fromLocation && section.toLocation && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Best airlines flying from {section.fromLocation} to {section.toLocation}
            </h3>
            <p className="text-gray-600 text-sm">
              Compare and see reviews for airlines that fly from {section.fromLocation} to {section.toLocation}
            </p>
          </div>
        )}

        {section.airlines && section.airlines.length > 0 ? (
          <div className="space-y-4">
            {section.airlines.map((airline) => (
              <AirlineCard key={airline.id} airline={airline} />
            ))}
          </div>
        ) : (
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <Plane className='w-12 h-12 text-gray-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>No airlines selected</p>
                <p className='text-sm'>
                  Airline information will appear here when locations are configured.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='space-y-6 p-4 border rounded-lg bg-white'>
      <div className='text-sm text-gray-500 mb-4'>
        Best Airlines Section - Configure route to show airline options
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
          <div className='mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-md'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Plane className='w-4 h-4 text-emerald-600' />
                <span className='text-sm font-medium text-emerald-800'>
                  From: {selectedFromLocation.name} ({selectedFromLocation.locode})
                </span>
              </div>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                onClick={clearFromLocation}
                className='text-emerald-600 hover:text-emerald-800 p-1'
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

      {/* Search Airlines Button */}
      <Button
        onClick={handleSearchAirlines}
        disabled={isLoadingAirlines || !selectedFromLocation || !selectedToLocation}
        className='w-full bg-emerald-600 hover:bg-emerald-700'
      >
        {isLoadingAirlines ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            Searching Airlines...
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            Find Best Airlines
          </>
        )}
      </Button>

      {/* Error/No Results Display */}
      {error && (
        <div className='mt-6 p-6 bg-red-50 border border-red-200 rounded-lg'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
              <Plane className='w-8 h-8 text-red-500' />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-red-800 mb-2'>No Flights Found</h3>
              <p className='text-red-600 text-sm max-w-md'>
                {error}
              </p>
            </div>
            <div className='text-xs text-red-500 mt-2'>
              💡 Try searching for flights to nearby cities or major airports
            </div>
          </div>
        </div>
      )}

      {/* Airlines Display */}
      {!error && airlines.length > 0 && (
        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-green-800">
            Best airlines flying from {selectedFromLocation?.name} to {selectedToLocation?.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Found {airlines.length} airline{airlines.length !== 1 ? 's' : ''} for this route:
          </p>
          {airlines.map((airline) => (
            <AirlineCard key={airline.id} airline={airline} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BestAirlines