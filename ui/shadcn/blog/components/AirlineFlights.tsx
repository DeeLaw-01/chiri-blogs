'use client'

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Image from 'next/image'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Loader2, Search, X } from 'lucide-react'
import {
  AirlineFlightsSection,
  LocationResult,
  FlightInfo,
  FlightLeg
} from '@/ui/shadcn/blog/types'
import { LocationSelector, FlightsList } from '@/ui/shadcn/blog/components/'
import { useOneWayFlightSearch } from '@/src/hooks/blog/useOneWayFlightSearch'
import { useAirlineCarriers } from '@/src/hooks/blog/useAirlineCarriers'
import { useComponentAPIQueue } from '@/src/hooks/blog/useGlobalAPIQueue'
import { useLazyComponentLoader } from '@/src/hooks/blog/useIntersectionObserver'
import { useTripDetails } from '@/src/hooks/blog/useTripDetails'

interface FlightFilters {
  tripType: 'round-trip' | 'one-way'
  departureDate: Date | undefined
  returnDate: Date | undefined
  adults: number
  children: number
  travelClass: 'Economy' | 'Premium Economy' | 'Business' | 'First'
}

interface AirlineFlightsProps {
  section: AirlineFlightsSection
  index: number
  onUpdate: (updates: Partial<AirlineFlightsSection>) => void
  readOnly?: boolean
  filters?: FlightFilters
}

interface AirlineCarrier {
  name: string
  logo: string
  code: string
}

// Interface for the actual trip details response structure
interface ActualTripDetailsResponse {
  id: number
  start_date: string
  end_date: string
  initial_location: string
  price_transports?: number
  price?: {
    price_transports: number
  }
  trip_currency_code: string
  available_seats?: number
  seats?: number
  itinerary: Array<{
    type: string
    content: {
      origin: string
      destination: string
      origin_display?: string | null
      destination_display?: string | null
      origin_locode?: string
      destination_locode?: string
      departure_time: string
      arrival_time: string
      duration?: number
      modes?: string[]
      carriers?: Array<{
        carrier_name: string
        carrier_logo?: string
      }>
    }
  }>
}

const AirlineFlights: React.FC<AirlineFlightsProps> = ({
  section,
  onUpdate,
  readOnly = false,
  filters
}) => {
  // UI State
  const [title, setTitle] = useState(section.title || 'Airline Flights')
  const [subtitle, setSubtitle] = useState(section.subtitle || 'Find flights from your preferred airlines')

  // API Queue for coordinated requests
  const { queueRequest } = useComponentAPIQueue('AirlineFlights')
  
  // Intersection observer for lazy loading
  const { ref: containerRef, isVisible, shouldLoad } = useLazyComponentLoader('AirlineFlights', 2)

  // Location State
  const [selectedFromLocation, setSelectedFromLocation] = useState<LocationResult | null>(null)
  const [selectedToLocation, setSelectedToLocation] = useState<LocationResult | null>(null)

  // Airline State
  const [availableCarriers, setAvailableCarriers] = useState<AirlineCarrier[]>([])
  const [selectedAirlines, setSelectedAirlines] = useState<AirlineCarrier[]>([])
  const [airlineInput, setAirlineInput] = useState('')
  const [showAirlineDropdown, setShowAirlineDropdown] = useState(false)
  const [isAirlineInputEnabled, setIsAirlineInputEnabled] = useState(false)

  // Flight Data State
  const [flights, setFlights] = useState<FlightInfo[]>([])
  const [isSearchingFlights, setIsSearchingFlights] = useState(false)
  const [flightError, setFlightError] = useState<string | null>(null)
  const [currentSearchingAirline, setCurrentSearchingAirline] = useState<string | null>(null)
  const [searchProgress, setSearchProgress] = useState({ current: 0, total: 0 })

  // Refs
  const airlineDropdownRef = useRef<HTMLDivElement>(null)
  const hasAutoSearchedRef = useRef(false)

  // Hooks
  const { carriers: carrierResults, loading: carriersLoading, error: carriersError, fetchCarriers } = useAirlineCarriers()
  const { trips, loading: tripsLoading, error: tripsError, searchFlights } = useOneWayFlightSearch()
  const { tripDetails, isLoading: detailsLoading, fetchTripDetails } = useTripDetails()

  // Initialize from section props (for admin edit mode)
  useEffect(() => {
    // Priority 1: Use root-level fromLocation/toLocation if they exist
    // Priority 2: Fallback to apiParams if root-level is empty
    const fromLoc = section.fromLocation || section.apiParams?.fromLocation
    const toLoc = section.toLocation || section.apiParams?.toLocation
    const fromLocode = section.apiParams?.fromLocationLocode || 'XXXXX'
    const toLocode = section.apiParams?.toLocationLocode || 'XXXXX'

    if (fromLoc && toLoc && !selectedFromLocation && !selectedToLocation) {
      setSelectedFromLocation({
        id: 'from-location',
        name: fromLoc,
        locode: fromLocode,
        country: ''
      })
      setSelectedToLocation({
        id: 'to-location',
        name: toLoc,
        locode: toLocode,
        country: ''
      })
    }

    // Initialize airlines - check both root-level airlineName and apiParams
    const airlineName = section.airlineName || section.apiParams?.airlineName
    if (airlineName && selectedAirlines.length === 0) {
      const airlineNames = airlineName.split(',').map(name => name.trim()).filter(Boolean)
      const airlineCarriers = airlineNames.map(name => ({
        name,
        code: '',
        logo: ''
      }))
      setSelectedAirlines(airlineCarriers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Initialize for readOnly mode with API params
  useEffect(() => {
    if (readOnly && section.apiParams) {
      
      const { fromLocation, toLocation, fromLocationLocode, toLocationLocode, selectedCarriers, airlineName } = section.apiParams

      if (fromLocation && toLocation && fromLocationLocode && toLocationLocode) {
        setSelectedFromLocation({
          id: 'from-api',
          name: fromLocation,
          locode: fromLocationLocode,
          country: ''
        })
        setSelectedToLocation({
          id: 'to-api',
          name: toLocation,
          locode: toLocationLocode,
          country: ''
        })
      }

      // Priority 1: Use selectedCarriers array (enhanced API params)
      if (selectedCarriers && selectedCarriers.length > 0 && selectedAirlines.length === 0) {
        const carriers = selectedCarriers.map(carrier => ({
          name: carrier.name,
          code: carrier.code,
          logo: carrier.logo || ''
        }))
        setSelectedAirlines(carriers)
      }
      // Priority 2: Fallback to legacy airlineName string
      else if (airlineName && selectedAirlines.length === 0) {
        const airlineNames = airlineName.split(',').map(name => name.trim()).filter(Boolean)
        const airlineCarriers = airlineNames.map(name => ({
          name,
          code: '',
          logo: ''
        }))
        setSelectedAirlines(airlineCarriers)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readOnly, section.apiParams])

  // Fetch airline carriers when both locations are selected (skip in readOnly mode)
  useEffect(() => {
    // Skip carrier fetch in readOnly mode since we already have carrier codes from selectedCarriers
    if (readOnly) {
      return
    }

    const fetchAvailableCarriers = async () => {
      if (!selectedFromLocation || !selectedToLocation ||
        selectedFromLocation.locode === 'XXXXX' || selectedToLocation.locode === 'XXXXX') {
        setIsAirlineInputEnabled(false)
        setAvailableCarriers([])
        return
      }

      try {
        await queueRequest(() => 
          fetchCarriers({
            origin: selectedFromLocation.locode,
            destination: selectedToLocation.locode
          })
        )
        setIsAirlineInputEnabled(true)
      } catch (error) {
        setIsAirlineInputEnabled(false)
      }
    }

    fetchAvailableCarriers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFromLocation?.locode, selectedToLocation?.locode, readOnly])

  // Update available carriers when carrier results change (only in admin mode)
  useEffect(() => {
    if (carrierResults && carrierResults.length > 0) {
      setAvailableCarriers(carrierResults)
    }
  }, [carrierResults])

  // Filter airlines based on user input with fuzzy search
  const filteredAirlines = useMemo(() => {
    if (!airlineInput.trim()) return availableCarriers

    const searchTerm = airlineInput.toLowerCase()
    return availableCarriers.filter(carrier =>
      carrier.name.toLowerCase().includes(searchTerm) ||
      carrier.code.toLowerCase().includes(searchTerm)
    )
  }, [availableCarriers, airlineInput])

  // Helper functions for formatting times and dates
  const formatTime = useCallback((isoDateTime: string): string => {
    try {
      const date = new Date(isoDateTime)
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    } catch {
      return 'TBD'
    }
  }, [])

  const formatDate = useCallback((isoDate: string): string => {
    try {
      const date = new Date(isoDate)
      return date.toISOString().split('T')[0] // Returns YYYY-MM-DD format
    } catch {
      return isoDate
    }
  }, [])

  // Helper function to extract airport code from locode
  const extractAirportCode = useCallback((locode: string, display: string | null, fallbackName: string): string => {
    // Priority 1: Use display code if available
    if (display) return display

    // Priority 2: Extract from locode (last 3 characters, e.g., DKCPH -> CPH)
    if (locode && locode.length >= 3) {
      return locode.slice(-3)
    }

    // Priority 3: Use fallback name
    return fallbackName
  }, [])

  // Helper function to calculate duration when missing or invalid
  const calculateFlightDuration = useCallback((departureTime: string, arrivalTime: string, fallbackDuration?: number): number => {
    try {
      const departure = new Date(departureTime)
      const arrival = new Date(arrivalTime)

      // If arrival is the same or before departure, use fallback or estimate
      if (arrival <= departure) {
        return fallbackDuration || 8.0 // Default 8 hours for long-haul flights
      }

      const durationMs = arrival.getTime() - departure.getTime()
      const durationHours = durationMs / (1000 * 60 * 60)

      return Math.max(durationHours, 0.5) // Minimum 30 minutes
    } catch {
      return fallbackDuration || 8.0
    }
  }, [])

  // Helper function to calculate proper arrival time when missing
  const calculateArrivalTime = useCallback((departureTime: string, duration: number): string => {
    try {
      const departure = new Date(departureTime)
      const arrival = new Date(departure.getTime() + (duration * 60 * 60 * 1000))
      return arrival.toISOString()
    } catch {
      return departureTime
    }
  }, [])

  // Transform trip details to FlightInfo (using actual flight details from itinerary)
  const transformTripDetailsToFlightInfo = useCallback((tripDetail: unknown, tripId: string): FlightInfo | null => {
    try {
      const response = tripDetail as ActualTripDetailsResponse
      if (!response?.itinerary?.length) return null

      // Filter only transport segments from itinerary
      const transportSegments = response.itinerary.filter(item =>
        item.type === 'transport' && item.content?.modes?.includes('aircraft')
      )

      if (transportSegments.length === 0) return null

      // Find outbound and return flights
      const outboundSegments = []
      const returnSegments = []
      let isReturn = false

      // Simple logic: if we're going back to origin, it's return flight
      for (const segment of transportSegments) {
        const isGoingToOrigin = segment.content.destination === response.initial_location
        if (isGoingToOrigin) {
          isReturn = true
          returnSegments.push(segment)
        } else if (!isReturn) {
          outboundSegments.push(segment)
        } else {
          returnSegments.push(segment)
        }
      }

      if (outboundSegments.length === 0) return null

      const firstOutbound = outboundSegments[0].content
      const lastOutbound = outboundSegments[outboundSegments.length - 1].content

      // Calculate total duration for outbound
      const totalOutboundDuration = outboundSegments.reduce((acc: number, seg) =>
        acc + (seg.content.duration || 0), 0
      )
      const outboundStops = Math.max(0, outboundSegments.length - 1)

      // Create outbound leg using actual flight data with formatted times/dates
      const outboundLeg: FlightLeg = {
        departureTime: formatTime(firstOutbound.departure_time),
        arrivalTime: formatTime(lastOutbound.arrival_time),
        departureDate: formatDate(response.start_date),
        arrivalDate: formatDate(response.start_date),
        departureAirport: extractAirportCode(
          firstOutbound.origin_locode || '',
          firstOutbound.origin_display || null,
          firstOutbound.origin
        ),
        arrivalAirport: extractAirportCode(
          lastOutbound.destination_locode || '',
          lastOutbound.destination_display || null,
          lastOutbound.destination
        ),
        duration: `${totalOutboundDuration.toFixed(1)}h`,
        stops: outboundStops,
        carrier: firstOutbound.carriers?.[0]?.carrier_name || 'Unknown'
      }

      let returnLeg: FlightLeg | undefined
      if (returnSegments.length > 0) {
        const firstReturn = returnSegments[0].content
        const lastReturn = returnSegments[returnSegments.length - 1].content

        // Calculate return duration, handling missing or zero duration
        let totalReturnDuration = returnSegments.reduce((acc: number, seg) =>
          acc + (seg.content.duration || 0), 0
        )

        // If duration is 0 or invalid, calculate from times or use fallback
        if (totalReturnDuration === 0) {
          totalReturnDuration = calculateFlightDuration(
            firstReturn.departure_time,
            lastReturn.arrival_time,
            8.0 // Default 8 hours for ISB-CPH route
          )
        }

        const returnStops = Math.max(0, returnSegments.length - 1)

        // Calculate proper arrival time if it's the same as departure time
        let returnArrivalTime = lastReturn.arrival_time
        if (lastReturn.arrival_time === firstReturn.departure_time) {
          returnArrivalTime = calculateArrivalTime(firstReturn.departure_time, totalReturnDuration)
        }

        returnLeg = {
          departureTime: formatTime(firstReturn.departure_time),
          arrivalTime: formatTime(returnArrivalTime),
          departureDate: formatDate(response.end_date),
          arrivalDate: formatDate(response.end_date),
          departureAirport: extractAirportCode(
            firstReturn.origin_locode || '',
            firstReturn.origin_display || null,
            firstReturn.origin
          ),
          arrivalAirport: extractAirportCode(
            lastReturn.destination_locode || '',
            lastReturn.destination_display || null,
            lastReturn.destination
          ),
          duration: `${totalReturnDuration.toFixed(1)}h`,
          stops: returnStops,
          carrier: firstReturn.carriers?.[0]?.carrier_name || 'Unknown'
        }
      }

      // Get primary airline from first segment
      const primaryCarrier = firstOutbound.carriers?.[0]

      return {
        id: tripId,
        flightNumber: undefined,
        price: response.price?.price_transports || response.price_transports || 0,
        currency: response.trip_currency_code || 'EUR',
        airlineName: primaryCarrier?.carrier_name || 'Multiple Airlines',
        airlineLogo: primaryCarrier?.carrier_logo,
        availableSeats: response.available_seats || response.seats || 0,
        baggageIncluded: false,
        isRoundTrip: !!returnLeg,
        outboundLeg,
        returnLeg,
        // Legacy fields using actual flight data with formatted times/dates
        departureTime: formatTime(firstOutbound.departure_time),
        arrivalTime: formatTime(lastOutbound.arrival_time),
        departureDate: formatDate(response.start_date),
        arrivalDate: formatDate(response.start_date),
        duration: `${totalOutboundDuration.toFixed(1)}h`,
        stops: outboundStops,
        departureAirport: extractAirportCode(
          firstOutbound.origin_locode || '',
          firstOutbound.origin_display || null,
          firstOutbound.origin
        ),
        arrivalAirport: extractAirportCode(
          lastOutbound.destination_locode || '',
          lastOutbound.destination_display || null,
          lastOutbound.destination
        )
      }
    } catch (error) {
      return null
    }
  }, [formatTime, formatDate, extractAirportCode, calculateFlightDuration, calculateArrivalTime])

  // Process trips when they're loaded - fetch trip details using the IDs (progressive rendering)
  useEffect(() => {
    if (trips && trips.length > 0) {
      const tripIds = trips.map(trip => trip.id)
      fetchTripDetails(tripIds)
    } else if (trips && trips.length === 0 && !tripsLoading) {
      // Only show error if we don't have any flights yet and we're not loading
      if (flights.length === 0 && !isSearchingFlights) {
        setFlightError('No flights found for the selected criteria')
      }
    } else {
    }
  }, [trips, tripsLoading, fetchTripDetails, flights.length, isSearchingFlights])

  // Process trip details when they're loaded (progressive rendering - append new flights)
  useEffect(() => {
    if (tripDetails && tripDetails.length > 0) {
      const transformedFlights = tripDetails
        .map((detail) => {
          if (!detail) return null
          // Get trip ID from the detail itself, not from trips array
          // The trip details response has the ID in it
          const detailWithId = detail as { id?: number | string; trip_id?: number | string; [key: string]: unknown }
          const tripId = detailWithId.id?.toString() || detailWithId.trip_id?.toString()
          if (!tripId) return null
          const transformed = transformTripDetailsToFlightInfo(detail, tripId)
          return transformed
        })
        .filter((flight): flight is FlightInfo => flight !== null)


      if (transformedFlights.length > 0) {
        // Append new flights to existing ones (progressive rendering)
        setFlights(currentFlights => {
          // Avoid duplicates by checking flight IDs
          const existingIds = new Set(currentFlights.map(f => f.id))
          const newFlights = transformedFlights.filter(f => !existingIds.has(f.id))

          const updatedFlights = [...currentFlights, ...newFlights]
          return updatedFlights
        })

        // Clear any previous errors when we get successful results
        setFlightError(null)
      } else {
        // Only set error if we don't have any flights yet
        if (flights.length === 0) {
          setFlightError('No flights found')
        }
      }
    }
  }, [tripDetails, transformTripDetailsToFlightInfo, flights.length])

  // Search flights for selected airlines - fetch separately for progressive rendering
  const handleSearchFlights = useCallback(async () => {
    if (!selectedFromLocation || !selectedToLocation || selectedAirlines.length === 0) {
      const error = 'Please select locations and at least one airline'
      setFlightError(error)
      return
    }

    setIsSearchingFlights(true)
    setFlightError(null)
    setFlights([]) // Clear previous flights for fresh progressive loading
    setCurrentSearchingAirline(null)

    const validAirlines = selectedAirlines.filter(a => a.code)

    if (validAirlines.length === 0) {
      const error = 'No valid airline codes found'
      setFlightError(error)
      setIsSearchingFlights(false)
      setCurrentSearchingAirline(null)
      setSearchProgress({ current: 0, total: 0 })
      return
    }
    setSearchProgress({ current: 0, total: validAirlines.length })

    try {
      // Search for each airline separately with progressive rendering

      for (let i = 0; i < validAirlines.length; i++) {
        const airline = validAirlines[i]

        // Update progress
        setCurrentSearchingAirline(airline.name)
        setSearchProgress({ current: i + 1, total: validAirlines.length })

        try {
          // Use queue for API calls to prevent server overload
          await queueRequest(() => 
            searchFlights({
              fromLocation: selectedFromLocation.locode,
              toLocation: selectedToLocation.locode,
              departureDate: filters?.departureDate?.toISOString().split('T')[0],
              adults: filters?.adults || 1,
              children: filters?.children || 0,
              babies: 0,
              airlineCarriers: [airline.code] // Search for single airline
            })
          )

          // Small delay to allow the useEffect to process the results
          await new Promise(resolve => setTimeout(resolve, 500))

        } catch (airlineError) {
          console.error(`Error searching flights for ${airline.name}:`, airlineError)
          // Continue with other airlines even if one fails
        }
      }


    } catch (error) {
      setFlightError('Failed to search flights. Please try again.')
    } finally {
      setIsSearchingFlights(false)
      setCurrentSearchingAirline(null)
      setSearchProgress({ current: 0, total: 0 })
    }
  }, [selectedFromLocation, selectedToLocation, selectedAirlines, filters, searchFlights, queueRequest])

  // Auto-search in readonly mode
  useEffect(() => {
    console.log('🔍 Auto-search effect triggered:', {
      readOnly,
      selectedFromLocation: selectedFromLocation?.name,
      selectedToLocation: selectedToLocation?.name,
      selectedAirlines: selectedAirlines.map(a => `${a.name}(${a.code})`),
      shouldLoad,
      hasAutoSearched: hasAutoSearchedRef.current
    })

    if (readOnly && selectedFromLocation && selectedToLocation && selectedAirlines.length > 0 &&
      selectedFromLocation.locode !== 'XXXXX' && selectedToLocation.locode !== 'XXXXX' &&
      !hasAutoSearchedRef.current) {

      // Check if we have valid airline codes before proceeding
      const validAirlines = selectedAirlines.filter(a => a.code)
      console.log('✅ Auto-search conditions met. Valid airlines:', validAirlines.length)
      
      if (validAirlines.length > 0) {
        console.log('🚀 Starting auto-search for readOnly mode')
        hasAutoSearchedRef.current = true
        handleSearchFlights()
      } else {
        console.log('⚠️ No valid airline codes found for auto-search')
      }
    }
  }, [readOnly, selectedFromLocation, selectedToLocation, selectedAirlines, handleSearchFlights])

  // Location change handlers
  const handleFromLocationChange = useCallback((location: LocationResult | null) => {
    setSelectedFromLocation(location)
    if (!location) {
      setFlights([])
      setFlightError(null)
      setAvailableCarriers([])
      setSelectedAirlines([])
      setIsAirlineInputEnabled(false)
    }

    if (!readOnly && location && selectedToLocation && selectedAirlines.length > 0) {
      onUpdate({
        fromLocation: location.name,
        selectedCarriers: selectedAirlines.map(airline => ({
          name: airline.name,
          logo: airline.logo,
          code: airline.code
        })),
        apiParams: {
          fromLocation: location.name,
          fromLocationLocode: location.locode,
          toLocation: selectedToLocation.name,
          toLocationLocode: selectedToLocation.locode,
          airlineName: selectedAirlines.map(a => a.name).join(', '),
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
          },
          selectedCarriers: selectedAirlines.map(airline => ({
            name: airline.name,
            code: airline.code,
            logo: airline.logo
          }))
        }
      })
    }
  }, [readOnly, onUpdate, selectedToLocation, selectedAirlines])

  const handleToLocationChange = useCallback((location: LocationResult | null) => {
    setSelectedToLocation(location)
    if (!location) {
      setFlights([])
      setFlightError(null)
      setAvailableCarriers([])
      setSelectedAirlines([])
      setIsAirlineInputEnabled(false)
    }

    if (!readOnly && location && selectedFromLocation && selectedAirlines.length > 0) {
      onUpdate({
        toLocation: location.name,
        selectedCarriers: selectedAirlines.map(airline => ({
          name: airline.name,
          logo: airline.logo,
          code: airline.code
        })),
        apiParams: {
          fromLocation: selectedFromLocation.name,
          fromLocationLocode: selectedFromLocation.locode,
          toLocation: location.name,
          toLocationLocode: location.locode,
          airlineName: selectedAirlines.map(a => a.name).join(', '),
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
          },
          selectedCarriers: selectedAirlines.map(airline => ({
            name: airline.name,
            code: airline.code,
            logo: airline.logo
          }))
        }
      })
    }
  }, [readOnly, onUpdate, selectedFromLocation, selectedAirlines])

  // Airline selection handlers
  const handleAirlineSelect = useCallback((carrier: AirlineCarrier) => {
    if (!selectedAirlines.some(airline => airline.code === carrier.code)) {
      const updatedAirlines = [...selectedAirlines, carrier]
      setSelectedAirlines(updatedAirlines)
      setAirlineInput('')
      setShowAirlineDropdown(false)

      if (!readOnly) {
        onUpdate({
          airlineName: updatedAirlines.map(a => a.name).join(', '),
          selectedCarriers: updatedAirlines.map(airline => ({
            name: airline.name,
            logo: airline.logo,
            code: airline.code
          }))
        })

        if (selectedFromLocation && selectedToLocation) {
          onUpdate({
            apiParams: {
              fromLocation: selectedFromLocation.name,
              fromLocationLocode: selectedFromLocation.locode,
              toLocation: selectedToLocation.name,
              toLocationLocode: selectedToLocation.locode,
              airlineName: updatedAirlines.map(a => a.name).join(', '),
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
              },
              selectedCarriers: updatedAirlines.map(airline => ({
                name: airline.name,
                code: airline.code,
                logo: airline.logo
              }))
            }
          })
        }
      }
    }
  }, [selectedAirlines, readOnly, onUpdate, selectedFromLocation, selectedToLocation])

  const handleAirlineRemove = useCallback((airlineToRemove: AirlineCarrier) => {
    const updatedAirlines = selectedAirlines.filter(airline => airline.code !== airlineToRemove.code)
    setSelectedAirlines(updatedAirlines)

    if (!readOnly) {
      onUpdate({
        airlineName: updatedAirlines.map(a => a.name).join(', '),
        selectedCarriers: updatedAirlines.map(airline => ({
          name: airline.name,
          logo: airline.logo,
          code: airline.code
        }))
      })

      if (selectedFromLocation && selectedToLocation) {
        onUpdate({
          apiParams: {
            fromLocation: selectedFromLocation.name,
            fromLocationLocode: selectedFromLocation.locode,
            toLocation: selectedToLocation.name,
            toLocationLocode: selectedToLocation.locode,
            airlineName: updatedAirlines.map(a => a.name).join(', '),
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
            },
            selectedCarriers: updatedAirlines.map(airline => ({
              name: airline.name,
              code: airline.code,
              logo: airline.logo
            }))
          }
        })
      }
    }

    if (updatedAirlines.length === 0) {
      setFlights([])
      setFlightError(null)
    }
  }, [selectedAirlines, readOnly, onUpdate, selectedFromLocation, selectedToLocation])

  // Handle click outside airline dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (airlineDropdownRef.current && !airlineDropdownRef.current.contains(event.target as Node)) {
        setShowAirlineDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Compute loading state
  const isLoading = useMemo(() => {
    return carriersLoading || tripsLoading || detailsLoading || isSearchingFlights
  }, [carriersLoading, tripsLoading, detailsLoading, isSearchingFlights])

  if (readOnly) {
    return (
      <FlightsList
        flights={flights.length > 0 ? flights : (section.flights || [])}
        airlineName={selectedAirlines.map(a => a.name).join(', ') || section.airlineName}
        fromLocation={selectedFromLocation?.name || section.fromLocation}
        toLocation={selectedToLocation?.name || section.toLocation}
        emptyStateMessage="Flight information will appear here when configured."
        isLoading={isLoading}
        error={flightError || carriersError || tripsError}
      />
    )
  }

  return (
    <div ref={containerRef} className='space-y-6 p-4 border rounded-lg bg-white'>
      <div className='text-sm text-gray-500 mb-4'>
        Airline Flights Section - Search for flights from multiple airlines
      </div>

      {/* Title and Subtitle */}
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
        fromPlaceholder="Enter departure location (e.g., Lahore, Pakistan)"
        toPlaceholder="Enter destination location (e.g., Paris, France)"
        readOnly={false}
      />

      {/* Airline Selection */}
      <div>
        <Label htmlFor='airline-input'>Airlines</Label>
        <div className='relative' ref={airlineDropdownRef}>
          <Input
            id='airline-input'
            value={airlineInput}
            onChange={e => {
              setAirlineInput(e.target.value)
              setShowAirlineDropdown(true)
            }}
            onFocus={() => setShowAirlineDropdown(true)}
            placeholder={
              isAirlineInputEnabled
                ? 'Search or select airlines...'
                : carriersLoading
                  ? 'Loading airlines...'
                  : 'Please select both locations first'
            }
            disabled={!isAirlineInputEnabled}
            className='mb-2'
          />

          {/* Airlines Dropdown */}
          {showAirlineDropdown && isAirlineInputEnabled && (
            <div className='absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto'>
              {carriersLoading ? (
                <div className='p-3 text-center text-gray-500'>
                  <Loader2 className='w-4 h-4 animate-spin inline mr-2' />
                  Loading airlines...
                </div>
              ) : filteredAirlines.length > 0 ? (
                filteredAirlines.map((carrier) => (
                  <div
                    key={carrier.code}
                    className='flex items-center p-3 hover:bg-gray-50 cursor-pointer'
                    onClick={() => handleAirlineSelect(carrier)}
                  >
                    {carrier.logo && (
                      <Image
                        src={carrier.logo}
                        alt={carrier.name}
                        width={24}
                        height={24}
                        className='mr-3 object-contain'
                        unoptimized
                      />
                    )}
                    <div>
                      <div className='font-medium'>{carrier.name}</div>
                      <div className='text-sm text-gray-500'>{carrier.code}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='p-3 text-center text-gray-500'>
                  {carriersError || 'No airlines found for this route'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Selected Airlines */}
        {selectedAirlines.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-2'>
            {selectedAirlines.map((airline) => (
              <div
                key={airline.code || airline.name}
                className='flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
              >
                {airline.logo && (
                  <Image
                    src={airline.logo}
                    alt={airline.name}
                    width={16}
                    height={16}
                    className='object-contain'
                    unoptimized
                  />
                )}
                <span>{airline.name}</span>
                <button
                  onClick={() => handleAirlineRemove(airline)}
                  className='hover:bg-blue-200 rounded-full p-1'
                >
                  <X className='w-3 h-3' />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <Button
        onClick={handleSearchFlights}
        disabled={isLoading || !selectedFromLocation || !selectedToLocation || selectedAirlines.length === 0}
        className='w-full bg-primary text-white'
      >
        {isLoading ? (
          <>
            <Loader2 className='w-4 h-4 animate-spin mr-2' />
            {selectedAirlines.length > 1 && currentSearchingAirline
              ? `Searching ${currentSearchingAirline}... (${searchProgress.current}/${searchProgress.total})`
              : selectedAirlines.length > 1
                ? `Searching ${selectedAirlines.length} Airlines...`
                : 'Searching Flights...'
            }
          </>
        ) : (
          <>
            <Search className='w-4 h-4 mr-2' />
            {selectedAirlines.length > 1
              ? `Find Flights from ${selectedAirlines.length} Airlines (Separate Searches)`
              : `Find Flights from ${selectedAirlines.map(a => a.name).join(', ')}`
            }
          </>
        )}
      </Button>

      {/* Error Display */}
      {(flightError || carriersError || tripsError) && (
        <p className='text-red-500 text-sm mt-2'>
          {flightError || carriersError || tripsError}
        </p>
      )}

      {/* Progress Indicator for Multiple Airline Searches */}
      {/* {isSearchingFlights && selectedAirlines.length > 1 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-700">
              Searching Airlines ({searchProgress.current}/{searchProgress.total})
            </span>
            <span className="text-xs text-blue-600">
              {Math.round((searchProgress.current / searchProgress.total) * 100)}% Complete
            </span>
          </div>

          {currentSearchingAirline && (
            <div className="text-sm text-blue-600">
              Currently searching: <span className="font-medium">{currentSearchingAirline}</span>
            </div>
          )}

          <div className="w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(searchProgress.current / Math.max(searchProgress.total, 1)) * 100}%`
              }}
            ></div>
          </div>

          {flights.length > 0 && (
            <div className="text-xs text-green-600 font-medium">
              ✓ {flights.length} flight{flights.length !== 1 ? 's' : ''} found so far
            </div>
          )}
        </div>
      )} */}

      {/* Flights Display */}
      <FlightsList
        flights={flights}
        airlineName={selectedAirlines.map(a => a.name).join(', ')}
        fromLocation={selectedFromLocation?.name}
        toLocation={selectedToLocation?.name}
        isLoading={isLoading}
        error={flightError}
      />
    </div>
  )
}

export default AirlineFlights 