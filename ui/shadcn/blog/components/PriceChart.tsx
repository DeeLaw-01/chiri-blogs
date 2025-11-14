import React from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import { PriceData } from '@/ui/shadcn/blog/types'
import ReusableChart from '@/ui/shadcn/blog/components/ReusableChart'
import { useExchangeRatesContext } from '@/src/contexts/ExchangeRatesContext'
import { convertEURToPKR } from '@/src/utils/currencyUtils'

interface PriceChartProps {
  priceData: PriceData[]
  cheapestAirline?: string
  fromLocation?: string
  toLocation?: string
  title?: string
  className?: string
  isLoading?: boolean
  error?: string | null
}

const PriceChart: React.FC<PriceChartProps> = ({
  priceData,
  cheapestAirline,
  fromLocation,
  toLocation,
  title,
  className = "",
  isLoading = false,
  error = null
}) => {
  const { exchangeRates } = useExchangeRatesContext()

  // Transform priceData to match ReusableChart interface and convert to PKR
  const chartData = priceData.map(item => ({
    name: item.airline,
    value: convertEURToPKR(item.price, exchangeRates),
    currency: 'PKR'
  }))

  const chartTitle = title || (fromLocation && toLocation
    ? `Price Comparison: ${fromLocation} to ${toLocation}`
    : 'Airline Price Comparison')

  const currency = 'PKR'

  // Loading state
  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold text-green-800">{chartTitle}</h3>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-gray-600 font-medium">Loading price data...</p>
          <p className="text-sm text-gray-500 mt-1">
            Comparing airline prices for your route
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold text-green-800">{chartTitle}</h3>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-red-600 font-medium">Unable to load price data</p>
          <p className="text-sm text-red-500 mt-1">
            {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <ReusableChart
      data={chartData}
      title={chartTitle}
      dataKey="value"
      nameKey="name"
      color="#16a34a"
      height={500}
      className={className}
      emptyStateMessage="No price data available"
      emptyStateSubtext="Price comparison will appear here when data is loaded."
      highlightBest={!!cheapestAirline}
      bestLabel="Cheapest Airline"
      currency={currency}
      xAxisAngle={-45}
      showGridLines={true}
    />
  )
}

export default PriceChart 