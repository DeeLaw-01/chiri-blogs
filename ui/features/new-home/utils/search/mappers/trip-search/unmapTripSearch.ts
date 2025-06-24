import { LocationResponse } from 'src/api/queries/get/locationQuery/location.type'
import { useEffect, useRef } from 'react'
import getLocationQuery from 'src/api/queries/get/locationQuery'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { useSelectedLocation } from 'src/contexts/location'
import { useSearchParams } from 'next/navigation'
import {
  TripFilterItems,
  TripFilters,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { useFetch } from 'src/api/useFetch'

export function useUnmapTripSearch() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams.entries())
  const hasExecuted = useRef<boolean>(false)
  const { setTripSearch, setTripFilters } = useSearchAtoms()
  const [selectedCity] = useSelectedLocation()

  const include = searchParams.get('includeLocations')
  const { data: locations, isLoading } = useFetch<LocationResponse>(
    include ? getLocationQuery(include) : null
  )

  const avoid = searchParams.get('avoidLocations')
  const similarTrip = searchParams?.get('trip_id')
  const { data: avoidLocations, isLoading: avoidIsLoading } =
    useFetch<LocationResponse>(avoid ? getLocationQuery(avoid) : null)

  useEffect(() => {
    if (
      query.type !== undefined ||
      isLoading ||
      !selectedCity ||
      avoidIsLoading ||
      hasExecuted.current
    )
      return
    hasExecuted.current = true

    handleSetTripSearch()
    handleSetTripFilters()
  }, [isLoading, selectedCity, avoidIsLoading])

  const handleSetTripSearch = () => {
    setTripSearch({
      ...getFiltersOrSearchParams(true),
      windowStart: unmapDate(query.windowStart?.toString()),
      windowEnd: unmapDate(query.windowEnd?.toString()),
      includeLocations: locations,
      initialLocation: selectedCity ?? undefined,
    })
  }

  const handleSetTripFilters = () => {
    setTripFilters({
      ...getFiltersOrSearchParams(false),
      avoidLocations: avoidLocations,
      ...(similarTrip && { trip_id: [Number(similarTrip)] }),
    })
  }

  const getFiltersOrSearchParams = (isSearch: boolean) => {
    // Method to choose between query params which is Filters or Search using the TripFilterItems array
    return Object.fromEntries(
      [...searchParams.entries()].filter(([key]) =>
        isSearch
          ? !TripFilterItems.includes(key as keyof TripFilters)
          : TripFilterItems.includes(key as keyof TripFilters)
      )
    )
  }
}

function unmapDate(date?: string): Date | undefined {
  if (!date) return
  return new Date(date)
}
