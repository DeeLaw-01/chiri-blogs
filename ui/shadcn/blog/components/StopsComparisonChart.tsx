import React from 'react'
import ReusableChart from '@/ui/shadcn/blog/components/ReusableChart'
import { useExchangeRatesContext } from '@/src/contexts/ExchangeRatesContext'
import { convertEURToPKR } from '@/src/utils/currencyUtils'

interface FlightStopData {
  stopType: string
  displayName: string
  averagePrice: number
  minPrice: number
  maxPrice: number
  flightCount: number
  savingsPercentage?: number
  airlines: { [airline: string]: number } // Track count by airline
  topAirlines: string[] // Most common airlines for this stop category
}

interface StopsComparisonChartProps {
  flights: Array<{
    price: number
    stops: number
    currency: string
    airline: string
  }>
  title?: string
  subtitle?: string
  fromLocation?: string
  toLocation?: string
  className?: string
}

const StopsComparisonChart: React.FC<StopsComparisonChartProps> = ({
  flights,
  title = "Can stopping save me money on flights?",
  subtitle = "You could potentially save money on your flight if you consider stops.",
  fromLocation = "departure",
  toLocation = "destination",
  className = ""
}) => {
  const { exchangeRates } = useExchangeRatesContext()

  const processFlightsByStops = (): FlightStopData[] => {
    if (!flights || flights.length === 0) return []

    const stopGroups = new Map<number, Array<{ price: number; currency: string; airline: string }>>()

    flights.forEach(flight => {
      const stops = flight.stops
      if (!stopGroups.has(stops)) {
        stopGroups.set(stops, [])
      }
      stopGroups.get(stops)!.push({
        price: convertEURToPKR(flight.price, exchangeRates),
        currency: 'PKR',
        airline: flight.airline || 'Unknown'
      })
    })

    const result: FlightStopData[] = []
    const sortedStops = Array.from(stopGroups.keys()).sort()

    const directFlights = stopGroups.get(0)
    const directAverage = directFlights
      ? directFlights.reduce((sum, f) => sum + f.price, 0) / directFlights.length
      : 0

    sortedStops.forEach(stopCount => {
      const flightGroup = stopGroups.get(stopCount)!
      const prices = flightGroup.map(f => f.price)
      const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length
      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)

      let displayName: string
      let stopType: string

      switch (stopCount) {
        case 0:
          displayName = "Direct"
          stopType = "direct"
          break
        case 1:
          displayName = "One Stop"
          stopType = "one_stop"
          break
        case 2:
          displayName = "Two Stop"
          stopType = "two_stop"
          break
        default:
          displayName = `${stopCount} Stops`
          stopType = `${stopCount}_stops`
      }

      let savingsPercentage: number | undefined
      if (directAverage > 0 && stopCount > 0) {
        savingsPercentage = Math.round(((directAverage - averagePrice) / directAverage) * 100)
      }

      // Track airlines for this stop category
      const airlinesCount = new Map<string, number>()
      flightGroup.forEach(flight => {
        const airline = flight.airline
        airlinesCount.set(airline, (airlinesCount.get(airline) || 0) + 1)
      })

      // Get top 3 airlines by frequency
      const topAirlines = Array.from(airlinesCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([airline]) => airline)

      // Convert airlines count to object
      const airlines: { [airline: string]: number } = {}
      airlinesCount.forEach((count, airline) => {
        airlines[airline] = count
      })

      result.push({
        stopType,
        displayName,
        averagePrice: Math.round(averagePrice),
        minPrice: Math.round(minPrice),
        maxPrice: Math.round(maxPrice),
        flightCount: flightGroup.length,
        savingsPercentage,
        airlines,
        topAirlines
      })
    })

    return result
  }

  const stopsData = processFlightsByStops()

  const formatPrice = (price: number) => {
    return `PKR ${Math.round(price).toLocaleString()}`
  }

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: Record<string, any> }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-gray-600">
            Average: {formatPrice(data.value)}
          </p>
          <p className="text-sm text-gray-600">
            Range: {formatPrice(data.minPrice)} - {formatPrice(data.maxPrice)}
          </p>
          <p className="text-sm text-gray-600">
            {data.flightCount} flight{data.flightCount !== 1 ? 's' : ''} found
          </p>
          {data.airlinesCount > 0 && (
            <p className="text-sm text-blue-600">
              {data.airlinesCount} airline{data.airlinesCount !== 1 ? 's' : ''}: {data.topAirlines}
            </p>
          )}
          {data.savingsPercentage !== undefined && data.savingsPercentage > 0 && (
            <p className="text-sm text-green-600 font-medium">
              Save {data.savingsPercentage}% vs direct
            </p>
          )}
        </div>
      )
    }
    return null
  }

  const renderFooter = () => (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {stopsData.map((data) => (
        <div key={data.stopType} className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold text-lg">{data.displayName}</div>
          <div className="text-sm text-gray-600">
            Avg: {formatPrice(data.averagePrice)}
          </div>
          <div className="text-xs text-gray-500">
            {data.flightCount} option{data.flightCount !== 1 ? 's' : ''}
          </div>
          {data.topAirlines.length > 0 && (
            <div className="text-xs text-blue-600 mt-1">
              {data.topAirlines.slice(0, 2).join(', ')}
              {data.topAirlines.length > 2 && ` +${data.topAirlines.length - 2} more`}
            </div>
          )}
          {data.savingsPercentage !== undefined && data.savingsPercentage > 0 && (
            <div className="text-xs text-green-600 font-medium mt-1">
              Save {data.savingsPercentage}%
            </div>
          )}
        </div>
      ))}
    </div>
  )

  // Transform data for ReusableChart
  const chartData = stopsData.map(item => ({
    name: item.displayName,
    value: item.averagePrice,
    stopType: item.stopType,
    minPrice: item.minPrice,
    maxPrice: item.maxPrice,
    flightCount: item.flightCount,
    savingsPercentage: item.savingsPercentage || 0,
    topAirlines: item.topAirlines.join(', '), // Serialize as string
    airlinesCount: Object.keys(item.airlines).length // Count of unique airlines
  }))

  const maxSavings = Math.max(...stopsData
    .filter(d => d.savingsPercentage !== undefined)
    .map(d => d.savingsPercentage || 0))

  // Check if all flights are of the same type
  const onlyDirectFlights = stopsData.length === 1 && stopsData[0].stopType === 'direct'

  const dynamicSubtitle = onlyDirectFlights
    ? `All available flights from ${fromLocation} to ${toLocation} are direct flights. This route typically offers direct connections.`
    : maxSavings > 0
      ? `You could potentially save up to ${maxSavings}% on your flight if you consider stops on a ${fromLocation} to ${toLocation} flight.`
      : subtitle

  return (
    <ReusableChart
      data={chartData}
      title={title}
      subtitle={dynamicSubtitle}
      dataKey="value"
      nameKey="name"
      currency='PKR'
      color="#3DA237"
      height={320}
      className={className}
      showIcon={false}
      emptyStateMessage="No flight data available for stops comparison"
      emptyStateSubtext="Flight stops comparison will appear here when data is loaded."
      formatValue={formatPrice}
      customTooltip={CustomTooltip}
      renderCustomFooter={renderFooter}
      showGridLines={true}
    />
  )
}

export default StopsComparisonChart 