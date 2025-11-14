import React from 'react'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
import { Plane } from 'lucide-react'
import { FlightInfo } from '@/ui/shadcn/blog/types'
import { useExchangeRatesContext } from '@/src/contexts/ExchangeRatesContext'
import { formatPKRPrice } from '@/src/utils/currencyUtils'
import Image from 'next/image'

interface EnhancedFlightCardProps {
  flight: FlightInfo
}

const EnhancedFlightCard: React.FC<EnhancedFlightCardProps> = ({ flight }) => {
  const { exchangeRates } = useExchangeRatesContext()

  // Format date from ISO string to "Aug 21" style  
  const formatDateShort = (isoDateString: string) => {
    try {
      if (!isoDateString) return 'Invalid Date'
      const date = new Date(isoDateString)
      if (isNaN(date.getTime())) return 'Invalid Date'
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return 'Invalid Date'
    }
  }



  // Get airline initial for logo
  const getAirlineInitial = (airlineName?: string) => {
    if (!airlineName) return 'A'
    return airlineName.charAt(0).toUpperCase()
  }

  return (
    <Card className="w-full max-w-full overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <CardContent className="p-3 sm:p-4">
        {/* Header with airline name and price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 text-base truncate">{flight.airlineName || 'Airline'}</h3>
          </div>
          <div className="text-right sm:self-auto self-start">
            <div className="text-lg sm:text-xl font-bold text-primary mb-1 whitespace-nowrap">
              {formatPKRPrice(flight.price || 0, exchangeRates)}
            </div>
            <button
              className="bg-primary text-white px-3 py-1 rounded text-xs font-medium hover:bg-primary/90 transition-colors"
              onClick={() => {
                // The flight ID is the trip ID from the API
                window.open(`https://chiri.pk/packages/${flight.id}`, '_blank')
              }}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Flight legs */}
        <div className="border-t pt-2 space-y-0">
          {/* Outbound leg */}
          {flight.outboundLeg && (
            <div className="flex flex-col sm:flex-row sm:items-center py-3 gap-3">
              {/* Airline logo and date */}
              <div className="flex items-center gap-3 w-full sm:w-28">
                <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {
                    flight.airlineLogo ? (
                      <Image
                        src={flight.airlineLogo || ''}
                        alt={flight.airlineName || ''}
                        className="w-full h-full object-cover"
                        width={28}
                        height={28}
                      />
                    )
                      :
                      <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold">
                        {getAirlineInitial(flight.airlineName)}
                      </div>
                  }
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {formatDateShort(flight.outboundLeg.departureDate)}
                </span>
              </div>

              {/* Flight route - centered and expanded */}
              <div className="flex items-center justify-center flex-1 gap-3 sm:gap-6 min-w-0">
                {/* Departure */}
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">{flight.outboundLeg.departureAirport}</div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">{flight.outboundLeg.departureTime}</div>
                </div>

                {/* Flight duration and stops */}
                <div className="flex flex-col items-center text-center min-w-[72px] sm:min-w-[80px]">
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-1">{flight.outboundLeg.duration}</div>
                  <div className="flex items-center">
                    <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
                    <Plane className="w-4 h-4 text-gray-400 mx-1" />
                    <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-700 font-medium mt-1">
                    {flight.outboundLeg.stops === 0 ? 'Direct' : `${flight.outboundLeg.stops} stop${flight.outboundLeg.stops > 1 ? 's' : ''}`}
                  </div>
                </div>

                {/* Arrival */}
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">{flight.outboundLeg.arrivalAirport}</div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">{flight.outboundLeg.arrivalTime}</div>
                </div>
              </div>

              <div className="hidden sm:block w-4"></div> {/* Small spacer */}
            </div>
          )}

          {/* {flight.isRoundTrip && flight.returnLeg && (
            // return trip
            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-t border-gray-100 gap-3">
              <div className="flex items-center gap-3 w-full sm:w-28">
                <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {
                    flight.airlineLogo ? (
                      <Image
                        src={flight.airlineLogo || ''}
                        alt={flight.airlineName || ''}
                        className="w-full h-full object-cover"
                        width={28}
                        height={28}
                      />
                    )
                      :
                      <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold">
                        {getAirlineInitial(flight.airlineName)}
                      </div>
                  }
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {formatDateShort(flight.returnLeg.departureDate)}
                </span>
              </div>

              <div className="flex items-center justify-center flex-1 gap-3 sm:gap-6 min-w-0">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">{flight.returnLeg.departureAirport}</div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">{flight.returnLeg.departureTime}</div>
                </div>

                <div className="flex flex-col items-center text-center min-w-[72px] sm:min-w-[80px]">
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-1">{flight.returnLeg.duration}</div>
                  <div className="flex items-center">
                    <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
                    <Plane className="w-4 h-4 text-gray-400 mx-1" />
                    <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-700 font-medium mt-1">
                    {flight.returnLeg.stops === 0 ? 'Direct' : `${flight.returnLeg.stops} stop${flight.returnLeg.stops > 1 ? 's' : ''}`}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">{flight.returnLeg.arrivalAirport}</div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">{flight.returnLeg.arrivalTime}</div>
                </div>
              </div>

              <div className="hidden sm:block w-4"></div>
            </div>
          )} */}
        </div>
      </CardContent>
    </Card>
  )
}

export default EnhancedFlightCard 