'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import type { FlightFilters } from './FlightSearchFilter'
import { LocationResult } from '@/ui/shadcn/blog/types'
import FlightSearchFilterPlaceholder from './FlightSearchFilterPlaceholder'

const FlightSearchFilter = dynamic(() => import('./FlightSearchFilter'), {
  ssr: false
})

export const DynamicBlogFlightFilter: React.FC<{
  onFilterChange?: (filters: FlightFilters) => void
  widthMode?: 'fit' | 'full'
  initialOrigin?: LocationResult | null
  initialDestinations?: LocationResult[]
}> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <FlightSearchFilterPlaceholder {...props} />
  }

  return (
    <FlightSearchFilter {...props} />
  )
}

export default DynamicBlogFlightFilter

