'use client'

import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/shadcn/ui/card'
import { BarChart3, TrendingDown } from 'lucide-react'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/ui/shadcn/ui/chart'

interface ChartDataPoint {
  name: string
  value: number
  [key: string]: string | number
}

interface ReusableChartProps {
  data: ChartDataPoint[]
  title?: string
  subtitle?: string
  dataKey?: string
  nameKey?: string
  color?: string
  height?: number
  className?: string
  showIcon?: boolean
  emptyStateMessage?: string
  emptyStateSubtext?: string
  highlightBest?: boolean
  bestLabel?: string
  currency?: string
  formatValue?: (value: number) => string
  customTooltip?: boolean | React.ComponentType<any>
  xAxisAngle?: number
  showGridLines?: boolean
  renderCustomFooter?: () => React.ReactNode
}

const ReusableChart: React.FC<ReusableChartProps> = ({
  data,
  title,
  subtitle,
  dataKey = 'value',
  nameKey = 'name',
  color = '#16a34a',
  height = 400,
  className = '',
  showIcon = true,
  emptyStateMessage = 'No data available',
  emptyStateSubtext = 'Data will appear here when loaded.',
  highlightBest = false,
  bestLabel,
  currency = '',
  formatValue,
  customTooltip = true,
  xAxisAngle = 0,
  showGridLines = true,
  renderCustomFooter
}) => {
  // Empty state
  if (!data || data.length === 0) {
    return (
      <Card className={className}>
        <CardContent className="p-8">
          <div className='text-center py-8'>
            <div className='flex flex-col items-center gap-4'>
              <BarChart3 className='w-12 h-12 text-gray-400' />
              <div className='text-gray-500'>
                <p className='text-lg font-medium'>{emptyStateMessage}</p>
                <p className='text-sm'>{emptyStateSubtext}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Find best value if highlighting is enabled
  const bestItem = highlightBest && data.length > 0
    ? data.reduce((min, item) => item[dataKey] < min[dataKey] ? item : min, data[0])
    : null

  const chartConfig = {
    [dataKey]: {
      label: dataKey === 'price' ? 'Price' : 'Value',
      color: color,
    },
  } satisfies ChartConfig

  const formatPrice = (value: number): string => {
    if (formatValue) return formatValue(value)
    return `${currency}${value.toFixed(0)}`
  }

  return (
    <Card className={className}>
      <CardHeader>
        {title && (
          <CardTitle className="flex items-center gap-2 text-green-800">
            {showIcon && <BarChart3 className="w-5 h-5" />}
            {title}
          </CardTitle>
        )}
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        {/* Best value highlight */}
        {highlightBest && bestItem && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">
                {bestLabel || 'Best Value'}
              </h3>
            </div>
            <p className="text-green-700">
              <strong>{bestItem[nameKey]}</strong> offers the best deal
            </p>
            <div className="mt-2 text-sm text-green-600">
              💰 {formatPrice(bestItem[dataKey] as number)}
            </div>
          </div>
        )}

        {/* Analysis info */}
        {data.length > 1 && (
          <h4 className="text-md font-semibold text-gray-800 mb-4">
            Comparison ({data.length} {data.length === 1 ? 'option' : 'options'} analyzed)
          </h4>
        )}

        {/* Chart */}
        <div className="w-full" style={{ height: `${height}px` }}>
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              accessibilityLayer
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: xAxisAngle !== 0 ? 80 : 40,
              }}
            >
              {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis
                dataKey={nameKey}
                tick={{ fontSize: 12 }}
                angle={xAxisAngle}
                textAnchor={xAxisAngle !== 0 ? "end" : "middle"}
                height={xAxisAngle !== 0 ? 100 : 40}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={currency ? formatPrice : undefined}
              />
              {customTooltip === true && <ChartTooltip content={<ChartTooltipContent />} />}
              {typeof customTooltip === 'function' && <ChartTooltip content={customTooltip} />}
              <Bar
                dataKey={dataKey}
                fill={color}
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Custom footer if provided */}
        {renderCustomFooter && renderCustomFooter()}
      </CardContent>
    </Card>
  )
}

export default ReusableChart 