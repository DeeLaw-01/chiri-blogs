import React from 'react'
import { Plane, Loader2, Calendar, Search } from 'lucide-react'
import { FlightInfo } from '@/ui/shadcn/blog/types'
import { EnhancedFlightCard, FlightSkeleton } from '@/ui/shadcn/blog/components/'

interface FlightsListProps {
  flights: FlightInfo[]
  airlineName?: string
  fromLocation?: string
  toLocation?: string
  title?: string
  emptyStateMessage?: string
  className?: string
  isLoading?: boolean
  error?: string | null
}

const FlightsList: React.FC<FlightsListProps> = ({
  flights,
  airlineName,
  fromLocation,
  toLocation,
  title,
  emptyStateMessage,
  className = "",
  isLoading = false,
  error = null
}) => {
  // Helper function to get flight date range from existing departureTime and arrivalTime
  const getFlightDateRange = (flights: FlightInfo[]) => {
    if (flights.length === 0) return null

    try {

      const dates = flights.map(flight => {
        const departureTime = flight.departureTime || flight.arrivalTime || ''
        // Extract date from datetime string if it contains 'T' (ISO format)
        if (departureTime.includes('T')) {
          return departureTime.split('T')[0]
        }
        return ''
      }).filter(Boolean)

      if (dates.length === 0) return null

      const sortedDates = dates.sort()
      const firstDate = new Date(sortedDates[0])
      const lastDate = new Date(sortedDates[sortedDates.length - 1])

      const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      }

      if (firstDate.getTime() === lastDate.getTime()) {
        return formatDate(firstDate)
      } else {
        return `${formatDate(firstDate)} - ${formatDate(lastDate)}`
      }
    } catch {
      return null
    }
  }

  const flightDateRange = getFlightDateRange(flights)

  // Loading state - only show spinner if no flights exist yet
  if (isLoading && flights.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className='flex flex-col items-center gap-4'>
          <Loader2 className='w-12 h-12 text-primary animate-spin' />
          <div className='text-gray-600'>
            <p className='text-lg font-medium'>Loading flights...</p>
            <p className='text-sm'>
              Searching for the best flight options
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className='flex flex-col items-center gap-4 max-w-md mx-auto'>
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
            <Search className='w-8 h-8 text-blue-400' />
          </div>
          <div className='text-gray-600'>
            <p className='text-lg font-medium text-gray-800 mb-2'>No flights found</p>
            <p className='text-sm text-gray-600 mb-3'>
              {error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!flights || flights.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className='flex flex-col items-center gap-4'>
          <Plane className='w-12 h-12 text-gray-400' />
          <div className='text-gray-500'>
            <p className='text-lg font-medium'>No flights available</p>
            <p className='text-sm'>
              {emptyStateMessage || 'Flight information will appear here when available.'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const displayTitle = title || (airlineName && fromLocation && toLocation
    ? `${airlineName} flights from ${fromLocation} to ${toLocation}`
    : 'Available Flights')

  return (
    <div className={`space-y-4 ${className}`}>
      {(airlineName || fromLocation || toLocation || title) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {displayTitle}
          </h3>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>
              Found {flights.length} flight{flights.length !== 1 ? 's' : ''} available
              {airlineName && ` with ${airlineName}`}
            </span>
            {flightDateRange && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{flightDateRange}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {flights.map((flight) => (
          <EnhancedFlightCard key={flight.id} flight={flight} />
        ))}

        {/* Show skeleton loaders when loading and we have some flights already */}
        {isLoading && flights.length > 0 && (
          <FlightSkeleton count={4} />
        )}
      </div>

      {/* Show loading message when progressive loading */}
      {isLoading && flights.length > 0 && (
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Loading more flights...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlightsList 