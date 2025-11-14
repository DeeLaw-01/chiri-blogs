'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/ui/shadcn/ui/button'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
import { Badge } from '@/ui/shadcn/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/ui/shadcn/ui/dialog'
import { Separator } from '@/ui/shadcn/ui/separator'
import {
  Loader2,
  Search,
  MapPin,
  ArrowRight,
  Plane,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Package,
  Clock,
  Calendar,
  Info,
  ExternalLink
} from 'lucide-react'
import { PackageSearchSection as PackageSearchSectionType } from '@/ui/shadcn/blog/types'
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService'
import { API_CONFIG } from '@/src/config/apiConfig'
import { formatPKRPrice } from '@/src/utils/currencyUtils'
import { useExchangeRatesContext } from '@/src/contexts/ExchangeRatesContext'
import { PackageSkeleton } from '@/ui/shadcn/blog/components/PackageSkeleton'

// Helper function to format dates
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  } catch {
    return dateString
  }
}

interface ApiResponse {
  id: number
  title: string
  start_date: string
  end_date: string
  price: {
    price_transports: number
    price_hotels: number
  }
  trip_length: number
  trip_photo: string
  locations: string[]
  initial_location?: string
  itinerary?: Array<{
    destination: string
    destinationLocode: string
    [key: string]: unknown
  }>
  [key: string]: unknown
}

// Package interface for runtime use (fetched from API)
interface PackageItem {
  id: string
  title: string
  description: string
  price: string
  duration: string
  image: string
  link: string
  startDate?: string
  endDate?: string
}

interface DetailedPackageInfo {
  id: string
  title: string
  description: string
  price: {
    total: number
    transport: number
    hotels: number
    currency: string
  }
  duration: number
  locations: string[]
  itinerary: Array<{
    day: number
    destination: string
    activities: string[]
    accommodation?: string
    transport?: string
  }>
  inclusions: string[]
  exclusions: string[]
  carrier?: string
  flightDetails?: {
    departure: {
      airport: string
      time: string
      date: string
    }
    arrival: {
      airport: string
      time: string
      date: string
    }
    airline: string
    flightNumber: string
    duration: string
    carrierLogo?: string
  }[]
  images: string[]
  rating?: number
  reviews?: number
  cancellationPolicy?: string
  [key: string]: unknown
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
  loc_type?: string
  isCity?: boolean
  [key: string]: unknown
}

interface LocationApiResponse {
  locations?: LocationApiItem[]
  results?: LocationApiItem[]
  [key: string]: unknown
}

interface PackageSearchSectionProps {
  section: PackageSearchSectionType
  index: number
  onUpdate: (updates: Partial<PackageSearchSectionType>) => void
  readOnly?: boolean
}

const PackageSearchSection: React.FC<PackageSearchSectionProps> = ({
  section,
  onUpdate,
  readOnly = false
}) => {
  const [title, setTitle] = useState(section.title || '')
  const [subtitle, setSubtitle] = useState(section.subtitle || '')
  const [localPackages, setLocalPackages] = useState<PackageItem[]>([])
  const { exchangeRates } = useExchangeRatesContext()

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

  const [isLoadingPackages, setIsLoadingPackages] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const packagesPerPage = 3

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackageDetails] = useState<DetailedPackageInfo | null>(null)
  const [isLoadingDetails] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const fromDebounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const toDebounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const fromAbortControllerRef = useRef<AbortController | null>(null)
  const toAbortControllerRef = useRef<AbortController | null>(null)
  const apiCallMadeRef = useRef<boolean>(false)
  const lastApiCallTimeRef = useRef<number>(0)

  // Carousel navigation functions
  const totalSlides = Math.ceil(localPackages.length / packagesPerPage)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
  }

  // Reset carousel when packages change
  useEffect(() => {
    setCurrentSlide(0)
  }, [localPackages.length])

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

  // Initialize locations from stored data (for editor mode)
  useEffect(() => {
    if (!readOnly && section.fromLocation && section.toLocation) {

      let fromLocode: string
      let toLocode: string

      // Try to get locodes from apiParams (new format)
      if (section.apiParams) {
        fromLocode = section.apiParams.initialLocation
        toLocode = section.apiParams.includeLocations
      }
      // Fallback to locode string (old format)
      else if (section.locode && section.locode.includes('-')) {
        const parts = section.locode.split('-')
        fromLocode = parts[0]
        toLocode = parts[1]
      }
      // Can't initialize without location codes
      else {
        console.warn('❌ No location codes found for editor initialization')
        return
      }

      // Set up locations from stored data
      const fromLocation: LocationResult = {
        id: 'from-stored',
        name: section.fromLocation,
        locode: fromLocode,
        country: ''
      }

      const toLocation: LocationResult = {
        id: 'to-stored',
        name: section.toLocation,
        locode: toLocode,
        country: ''
      }

      setSelectedFromLocation(fromLocation)
      setSelectedToLocation(toLocation)
      setFromLocationSearchTerm(section.fromLocation)
      setToLocationSearchTerm(section.toLocation)
    }
  }, [readOnly, section.fromLocation, section.toLocation, section.apiParams, section.locode])

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

  const transformLocationData = (
    item: LocationApiItem,
    index: number
  ): LocationResult => ({
    id: item.id?.toString() || `location-${index}`,
    name:
      item.value ||
      item.name ||
      item.title ||
      item.location ||
      'Unknown Location',
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

    // Cancel previous request if it exists
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
      // Use the correct endpoint from the documentation
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

      const data: LocationApiItem[] | LocationApiResponse = await response.json()

      let locations: LocationResult[] = []

      // Handle different response formats
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

      // Filter out locations without locode
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
  }

  const clearToLocation = () => {
    setSelectedToLocation(null)
    setToLocationSearchTerm('')
    setShowToLocationResults(false)
    setError(null)
  }

  const handleFlightSearch = useCallback(async () => {
    const fromLocode = selectedFromLocation?.locode
    const toLocode = selectedToLocation?.locode

    if (!fromLocode || !toLocode) {
      console.warn('❌ Missing location codes:', { fromLocode, toLocode })
      setError('Please select both departure and destination locations')
      return
    }

    // Rate limiting: ensure at least 2 seconds between API calls
    const now = Date.now()
    const timeSinceLastCall = now - lastApiCallTimeRef.current
    if (timeSinceLastCall < 2000) {
      await new Promise(resolve => setTimeout(resolve, 2000 - timeSinceLastCall))
    }

    lastApiCallTimeRef.current = Date.now()
    setIsLoadingPackages(true)
    setError(null)
    setLocalPackages([]) // Clear previous packages

    try {
      // Use cached trip suggestions service
      const data = await fetchTripSuggestionsWithCache({
        fromLocode,
        toLocode,
        adults: 1,
        children: 0,
        babies: 0,
        nrTrips: 5
      })

      if (data.length === 0) {
        setError(`No flights found from ${selectedFromLocation.name} to ${selectedToLocation.name}. Try selecting major cities or different destinations.`)
        onUpdate({ packages: [] })
        setIsLoadingPackages(false)
        return
      }

      // Transform data and render progressively as each item is processed
      const packages: PackageItem[] = []

      for (let index = 0; index < data.length; index++) {
        const pkg = data[index]
        const totalPrice = pkg.price
          ? (pkg.price.price_transports || 0) + (pkg.price.price_hotels || 0)
          : 0

        const formattedPrice = formatPKRPrice(totalPrice, exchangeRates)
        const description = (pkg as any).locations?.join(', ') || `Travel from ${selectedFromLocation.name} to ${selectedToLocation.name}`
        const duration = `${(pkg as any).trip_length || Math.floor(Math.random() * 7) + 3} days`
        const bookingLink = `https://chiri.pk/packages/${pkg.id}`

        const packageItem: PackageItem = {
          id: pkg.id?.toString() || `package-${index}`,
          title: (pkg as any).title || `${selectedFromLocation.name} to ${selectedToLocation.name}`,
          description: description,
          price: formattedPrice,
          duration: duration,
          image: `${(pkg as any).trip_photo || '/public/Placeholder/travel-placeholder'}375160.png` || '',
          link: bookingLink,
          startDate: (pkg as any).start_date,
          endDate: (pkg as any).end_date
        }

        packages.push(packageItem)

        // Progressive rendering: Update UI after every 3 packages processed
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          setLocalPackages([...packages])
          // Small delay to allow UI to update
          if (index < data.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 50))
          }
        }
      }

      // Build API URL for storage
      const apiUrl = `${API_CONFIG.TRIP_SUGGESTIONS.BASE_URL}?includeLocations=${toLocode}&initialLocation=${fromLocode}&n_adults=1&n_children=0&n_babies=0&nr_trips=5`

      // Update parent component with API parameters (for storage)
      onUpdate({
        locode: `${fromLocode}-${toLocode}`,
        fromLocation: selectedFromLocation.name,
        toLocation: selectedToLocation.name,
        apiUrl: apiUrl,
        apiParams: {
          includeLocations: toLocode,
          initialLocation: fromLocode,
          n_adults: 1,
          n_children: 0,
          n_babies: 0
        }
        // Note: packages are NOT saved to DB, only API params
      })

    } catch (err) {
      console.error('Error fetching flights:', err)
      setError('Failed to fetch flight information. Please try again.')
    } finally {
      setIsLoadingPackages(false)
    }
  }, [selectedFromLocation, selectedToLocation, exchangeRates, onUpdate])

  // Auto-refresh packages from API in readonly mode using stored apiUrl (ONCE ONLY)
  useEffect(() => {
    if (readOnly && section.apiUrl && !apiCallMadeRef.current && !isLoadingPackages) {

      apiCallMadeRef.current = true // Prevent multiple calls

      // Call API directly using stored URL
      const fetchPackagesFromUrl = async () => {
        // Rate limiting: ensure at least 2 seconds between API calls
        const now = Date.now()
        const timeSinceLastCall = now - lastApiCallTimeRef.current
        if (timeSinceLastCall < 2000) {
          await new Promise(resolve => setTimeout(resolve, 2000 - timeSinceLastCall))
        }

        lastApiCallTimeRef.current = Date.now()
        setIsLoadingPackages(true)
        setError(null)

        try {
          const response = await fetch(section.apiUrl!, {
            headers: API_CONFIG.TRIP_SUGGESTIONS.HEADERS
          })

          if (!response.ok) {
            if (response.status === 429) {
              throw new Error('Rate limit exceeded. Please try again in a moment.')
            }
            throw new Error(`API request failed with status: ${response.status}`)
          }

          const data = await response.json()

          if (data.length === 0) {
            setError(`No flights found for this route.`)
            setLocalPackages([])
            return
          }

          // Transform the API response to match our package structure
          const packages = data.map((pkg: any, index: number) => {
            const totalPrice = pkg.price
              ? (pkg.price.price_transports || 0) + (pkg.price.price_hotels || 0)
              : 0

            const formattedPrice = formatPKRPrice(totalPrice, exchangeRates)
            const description = pkg.locations?.join(', ') || `Travel from ${section.fromLocation} to ${section.toLocation}`
            const duration = `${pkg.trip_length || Math.floor(Math.random() * 7) + 3} days`
            const bookingLink = `https://chiri.pk/packages/${pkg.id}`

            return {
              id: pkg.id?.toString() || `package-${index}`,
              title: pkg.title || `${section.fromLocation} to ${section.toLocation}`,
              description: description,
              price: formattedPrice,
              duration: duration,
              image: `${pkg.trip_photo || '/public/Placeholder/travel-placeholder'}375160.png` || '',
              link: bookingLink,
              startDate: pkg.start_date,
              endDate: pkg.end_date
            }
          })

          setLocalPackages(packages)

        } catch (err) {
          console.error('Error fetching packages from apiUrl:', err)
          if (err instanceof Error) {
            setError(err.message)
          } else {
            setError('Failed to fetch package information. Please try again.')
          }
        } finally {
          setIsLoadingPackages(false)
        }
      }

      // Small delay to ensure component is mounted
      setTimeout(fetchPackagesFromUrl, 100)
    }
  }, [readOnly, section.apiUrl, isLoadingPackages, section.fromLocation, section.toLocation, exchangeRates])

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

  // Package Details Modal Component
  const PackageDetailsModal = () => {
    if (!isMounted || !selectedPackageDetails) return null

    return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedPackageDetails.title}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Images Section */}
            {selectedPackageDetails.images && selectedPackageDetails.images.length > 0 && (
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedPackageDetails.images[0]}
                  alt={selectedPackageDetails.title}
                  unoptimized
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {/* Header Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-medium">{selectedPackageDetails.duration} days</span>
              </div>
              {selectedPackageDetails.carrier && (
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-green-600" />
                  <span className="font-medium">{selectedPackageDetails.carrier}</span>
                </div>
              )}
            </div>

            {/* Price Section */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-800">
                      {formatPKRPrice(selectedPackageDetails.price.total, exchangeRates)}
                    </div>
                    <div className="text-sm text-green-600">Total Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-700">
                      {formatPKRPrice(selectedPackageDetails.price.transport, exchangeRates)}
                    </div>
                    <div className="text-sm text-green-600">Transport</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-700">
                      {formatPKRPrice(selectedPackageDetails.price.hotels, exchangeRates)}
                    </div>
                    <div className="text-sm text-green-600">Hotels</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{selectedPackageDetails.description}</p>
            </div>

            {/* Destinations */}
            {selectedPackageDetails.locations && selectedPackageDetails.locations.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Destinations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPackageDetails.locations.map((location, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Flight Details */}
            {selectedPackageDetails.flightDetails && selectedPackageDetails.flightDetails.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Flight Details</h3>
                <div className="space-y-4">
                  {selectedPackageDetails.flightDetails.map((flight, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {flight.carrierLogo ? (
                              <Image
                                src={flight.carrierLogo}
                                alt={flight.airline}
                                width={32}
                                height={32}
                                className="rounded"
                              />
                            ) : (
                              <Plane className="w-5 h-5 text-green-600" />
                            )}
                            <span className="font-semibold">{flight.airline}</span>
                            {flight.flightNumber && (
                              <Badge variant="outline">{flight.flightNumber}</Badge>
                            )}
                          </div>
                          {flight.duration && (
                            <div className="flex items-center gap-1 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{flight.duration}</span>
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                          <div className="text-center">
                            <div className="font-semibold">{flight.departure.airport}</div>
                            <div className="text-sm text-gray-600">Departure</div>
                            {flight.departure.time && (
                              <div className="text-sm">{flight.departure.time}</div>
                            )}
                            {flight.departure.date && (
                              <div className="text-xs text-gray-500">{flight.departure.date}</div>
                            )}
                          </div>

                          <div className="flex justify-center">
                            <ArrowRight className="w-6 h-6 text-green-600" />
                          </div>

                          <div className="text-center">
                            <div className="font-semibold">{flight.arrival.airport}</div>
                            <div className="text-sm text-gray-600">Arrival</div>
                            {flight.arrival.time && (
                              <div className="text-sm">{flight.arrival.time}</div>
                            )}
                            {flight.arrival.date && (
                              <div className="text-xs text-gray-500">{flight.arrival.date}</div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {selectedPackageDetails.itinerary && selectedPackageDetails.itinerary.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Itinerary</h3>
                <div className="space-y-4">
                  {selectedPackageDetails.itinerary.map((day, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold">Day {day.day}</h4>
                          <Badge variant="outline">{day.destination}</Badge>
                        </div>

                        {day.activities && day.activities.length > 0 && (
                          <div className="mb-2">
                            <div className="text-sm font-medium text-gray-700 mb-1">Activities:</div>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {day.accommodation && (
                          <div className="text-sm">
                            <span className="font-medium text-gray-700">Accommodation: </span>
                            <span className="text-gray-600">{day.accommodation}</span>
                          </div>
                        )}

                        {day.transport && (
                          <div className="text-sm">
                            <span className="font-medium text-gray-700">Transport: </span>
                            <span className="text-gray-600">{day.transport}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedPackageDetails.inclusions && selectedPackageDetails.inclusions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">Inclusions</h3>
                  <ul className="space-y-1">
                    {selectedPackageDetails.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedPackageDetails.exclusions && selectedPackageDetails.exclusions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-700">Exclusions</h3>
                  <ul className="space-y-1">
                    {selectedPackageDetails.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Cancellation Policy */}
            {selectedPackageDetails.cancellationPolicy && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-gray-600 mt-0.5" />
                    <p className="text-sm text-gray-700">{selectedPackageDetails.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <Separator />
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              <Button
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Book Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
          <h2 className='text-2xl font-bold'>{title}</h2>
          {subtitle && <p className='text-gray-600 mt-2'>{subtitle}</p>}
        </div>

        {/* Show route info if available */}
        {section.fromLocation && section.toLocation && (
          <div className='flex items-center justify-center gap-4 p-4 bg-green-50 rounded-lg'>
            <div className='flex items-center gap-2'>
              <Plane className='w-5 h-5 text-green-600' />
              <span className='font-medium'>{section.fromLocation}</span>
            </div>
            <ArrowRight className='w-5 h-5 text-green-600' />
            <div className='flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-green-600' />
              <span className='font-medium'>{section.toLocation}</span>
            </div>
          </div>
        )}

        {isLoadingPackages ? (
          <div className="space-y-6">
            <div className='text-center py-6'>
              <div className='flex flex-col items-center gap-4'>
                <Loader2 className='w-8 h-8 animate-spin text-primary' />
                <div className='text-gray-600'>
                  <p className='text-lg font-medium'>Loading travel packages...</p>
                  <p className='text-sm'>
                    Fetching the latest flight information and prices
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PackageSkeleton count={6} />
            </div>
          </div>
        ) : error ? (
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <AlertCircle className='w-12 h-12 text-red-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>Unable to load packages</p>
                <p className='text-sm'>{error}</p>
              </div>
            </div>
          </div>
        ) : localPackages &&
          Array.isArray(localPackages) &&
          localPackages.length > 0 ? (
          <div className="relative">
            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                Showing {Math.min(currentSlide * packagesPerPage + 1, localPackages.length)}-{Math.min((currentSlide + 1) * packagesPerPage, localPackages.length)} of {localPackages.length} packages
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                      {localPackages
                        .slice(slideIndex * packagesPerPage, (slideIndex + 1) * packagesPerPage)
                        .map(pkg => (
                          <Card key={pkg.id} className='overflow-hidden'>
                            <div className='relative aspect-video'>
                              {pkg.image ? (
                                <Image
                                  src={pkg.image}
                                  fill
                                  unoptimized
                                  alt={pkg.title}
                                  className='object-cover'
                                />
                              ) : (
                                <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
                                  <Package className='w-12 h-12 text-gray-400' />
                                </div>
                              )}
                            </div>
                            <CardContent className='p-4'>
                              <h3 className='font-semibold text-lg'>{pkg.title}</h3>
                              <p className='text-gray-600 text-sm mt-2'>{pkg.description}</p>

                              {/* Travel Dates */}
                              {pkg.startDate && pkg.endDate && (
                                <div className='mt-3 flex items-center gap-2 text-gray-500 text-sm'>
                                  <span>{formatDate(pkg.startDate)} - {formatDate(pkg.endDate)}</span>
                                </div>
                              )}

                              <div className='mt-4 flex justify-between items-center'>
                                <span className='text-lg font-bold'>{pkg.price}</span>
                                <span className='text-sm text-gray-500'>{pkg.duration}</span>
                              </div>
                              <Button
                                className='w-full mt-4'
                                onClick={() => window.open(`https://chiri.pk/packages/${pkg.id}`, '_blank')}
                                disabled={isLoadingDetails}
                              >
                                {isLoadingDetails ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    Loading...
                                  </>
                                ) : (
                                  'View details'
                                )}
                              </Button>
                            </CardContent>
                          </Card>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        ) : localPackages &&
          Array.isArray(localPackages) &&
          localPackages.length === 0 ? (
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <AlertCircle className='w-12 h-12 text-orange-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>No flights found</p>
                <p className='text-sm'>
                  We couldn&apos;t find any flights for the selected route. Try searching for different destinations or major cities.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <Search className='w-12 h-12 text-gray-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>Searching for packages...</p>
                <p className='text-sm'>
                  Package information will appear here shortly.
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
        Flight Search Section - Configure flight search between cities
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
            placeholder='Enter departure location (e.g., Paris, Pakistan)'
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
            placeholder='Enter destination location (e.g., New York, United States)'
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

      {/* Search Button */}
      <Button
        onClick={handleFlightSearch}
        disabled={isLoadingPackages || !selectedFromLocation || !selectedToLocation}
        className='w-full'
      >
        {isLoadingPackages ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            Searching Flights...
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            Search Flights
          </>
        )}
      </Button>

      {/* Results Display */}
      {isLoadingPackages ? (
        <div className="space-y-6">
          <div className='text-center py-6'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='w-8 h-8 animate-spin text-primary' />
              <div className='text-gray-600'>
                <p className='text-lg font-medium'>Searching for packages...</p>
                <p className='text-sm'>
                  Finding the best travel deals for you
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PackageSkeleton count={6} />
          </div>
        </div>
      ) : error ? (
        <div className='text-center py-8'>
          <div className='flex flex-col items-center gap-4'>
            <AlertCircle className='w-12 h-12 text-red-400' />
            <div className='text-gray-500'>
              <p className='text-lg font-medium'>Search failed</p>
              <p className='text-sm'>{error}</p>
            </div>
          </div>
        </div>
      ) : localPackages &&
        Array.isArray(localPackages) &&
        localPackages.length > 0 ? (
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Showing {Math.min(currentSlide * packagesPerPage + 1, localPackages.length)}-{Math.min((currentSlide + 1) * packagesPerPage, localPackages.length)} of {localPackages.length} packages
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {localPackages
                      .slice(slideIndex * packagesPerPage, (slideIndex + 1) * packagesPerPage)
                      .map(pkg => (
                        <Card key={pkg.id} className='overflow-hidden'>
                          <div className='relative aspect-video'>
                            {pkg.image ? (
                              <Image
                                src={pkg.image}
                                alt={pkg.title}
                                unoptimized
                                fill
                                className='object-cover'
                              />
                            ) : (
                              <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
                                <Package className='w-12 h-12 text-gray-400' />
                              </div>
                            )}
                          </div>
                          <CardContent className='p-4'>
                            <h3 className='font-medium text-lg'>{pkg.title}</h3>
                            <p className='text-gray-600 text-sm '>{pkg.description}</p>

                            {/* Travel Dates */}
                            {pkg.startDate && pkg.endDate && (
                              <div className='mt-1 flex items-center gap-2 text-gray-500 text-xs'>
                                <span>{formatDate(pkg.startDate)} - {formatDate(pkg.endDate)}</span>
                              </div>
                            )}

                            <div className='mt-3 flex justify-between items-center'>
                              <span className='text-lg font-semibold'>{String(pkg.price)}</span>
                              <span className='text-sm text-gray-500'>{String(pkg.duration)}</span>
                            </div>
                            <Button
                              className='w-full mt-4'
                              disabled={isLoadingDetails}
                              onClick={() => window.open(`https://chiri.pk/packages/${pkg.id}`, '_blank')}
                            >
                              {isLoadingDetails ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                  Loading...
                                </>
                              ) : (
                                'View Details'
                              )}
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      ) : localPackages &&
        Array.isArray(localPackages) &&
        localPackages.length === 0 ? (
        <div className='text-center py-8'>
          <div className='flex flex-col items-center gap-4'>
            <AlertCircle className='w-12 h-12 text-orange-400' />
            <div className='text-gray-500'>
              <p className='text-lg font-medium'>No flights found</p>
              <p className='text-sm'>
                We couldn&apos;t find any flights for the selected route. Try searching for different destinations or major cities.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Package Details Modal */}
      {isMounted && <PackageDetailsModal />}
    </div>
  )
}

export default PackageSearchSection