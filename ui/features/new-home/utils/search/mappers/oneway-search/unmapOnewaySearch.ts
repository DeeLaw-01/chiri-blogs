import { LocationResponse } from 'src/api/queries/get/locationQuery/location.type'
import { useEffect, useRef } from 'react'
import getLocationQuery from 'src/api/queries/get/locationQuery'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { useSelectedLocation } from 'src/contexts/location'
import { useSearchParams } from 'next/navigation'
import {
  OnewayFilterItems,
  OnewayFilters,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/oneway.types'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import { useFetch } from 'src/api/useFetch'
import { useOnewayAtoms } from 'ui/features/new-home/content/oneway/useOnewayAtoms'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'

export function useUnmapOnewaySearch() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams?.entries())
  const hasExecuted = useRef<boolean>(false)
  const { setOnewaySearch, setOnewayFilters, onewaySearch } = useSearchAtoms()
  const [selectedCity] = useSelectedLocation()
  const { setSearchType } = useOnewayAtoms()

  const include = searchParams?.get('includeLocations')
  const { data: locations, isLoading } = useFetch<LocationResponse>(
    include && getLocationQuery(include)
  )

  const avoid = searchParams?.get('avoidLocations')
  const { data: avoidLocations, isLoading: avoidIsLoading } =
    useFetch<LocationResponse>(avoid && getLocationQuery(avoid))

  useEffect(() => {
    if (
      query.type !== HomeState.ONEWAY ||
      isLoading ||
      !selectedCity ||
      avoidIsLoading ||
      hasExecuted.current
    )
      return
    hasExecuted.current = true

    handleSetOnewaySearch()
    handleSetOnewayFilters()
  }, [isLoading, selectedCity, avoidIsLoading])

  const handleSetOnewaySearch = () => {
    setOnewaySearch({
      ...getFiltersOrSearchParams(true),
      windowStart: unmapDate(query.windowStart?.toString()),
      windowEnd: unmapDate(query.windowEnd?.toString()),
      includeLocations: locations,
      initialLocation:
        onewaySearch.initialLocation ?? selectedCity ?? undefined,
    })
  }

  const handleSetOnewayFilters = () => {
    setOnewayFilters({
      ...getFiltersOrSearchParams(false),
      avoidLocations: avoidLocations,
    })
  }

  const getFiltersOrSearchParams = (isSearch: boolean) => {
    return Object.fromEntries(
      [...searchParams.entries()].filter(([key]) =>
        isSearch
          ? !OnewayFilterItems.includes(key as keyof OnewayFilters)
          : OnewayFilterItems.includes(key as keyof OnewayFilters)
      )
    )
  }

  useEffect(() => {
    if (!include) {
      setSearchType(OnewayResponseType.TRIP)
      return
    }
    if (isLoading) {
      setSearchType(undefined)
      return
    }
    if (locations?.length === 1 && locations[0].isCity) {
      setSearchType(OnewayResponseType.ONEWAY)
    } else {
      setSearchType(OnewayResponseType.TRIP)
    }
  }, [include, isLoading, locations])
}

function unmapDate(date?: string): Date | undefined {
  if (!date) return
  return new Date(date)
}
