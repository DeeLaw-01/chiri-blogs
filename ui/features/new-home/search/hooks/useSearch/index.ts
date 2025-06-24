import { SearchType, FilterType } from '../useSearchAtoms/types'
import { useSearchAtoms } from '../useSearchAtoms/useSearchAtoms'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import { sanitizeQueryParams } from 'src/utils/urlUtils'
import { TripFilters, TripSearch } from '../useSearchAtoms/types/trip.types'
import {
  AccommodationFilters,
  AccommodationSearch,
} from '../useSearchAtoms/types/accommodation.types'
import {
  OnewayFilters,
  OnewaySearch,
} from '../useSearchAtoms/types/oneway.types'
import { mapTripSearch } from 'ui/features/new-home/utils/search/mappers/trip-search/mapTripSearch'
import { useRouter, usePathname } from 'src/i18n/router'
import { mapOnewaySearch } from 'ui/features/new-home/utils/search/mappers/oneway-search/mapOnewaySearch'

export default function useSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const { state } = useHomeAtoms()
  const {
    tripSearch,
    tripFilters,
    accommodationSearch,
    accommodationFilters,
    onewaySearch,
    onewayFilters,
    resetTripSearch,
    resetTripFilters,
    resetAccommodationSearch,
    resetAccommodationFilters,
    resetOnewaySearch,
    setTripSearch,
    setTripFilters,
    setOnewayFilters,
    setAccommodationFilters,
    setAccommodationSearch,
    setOnewaySearch,
    resetOneWayFilters,
  } = useSearchAtoms()

  const getQuery = (state?: HomeState) => {
    if (!state) return {}

    switch (state) {
      case HomeState.TRIP:
        return mapTripSearch({ ...tripSearch, ...tripFilters })
      case HomeState.ACCOMMODATION:
        return { ...accommodationSearch, ...accommodationFilters }
      case HomeState.ONEWAY:
        return mapOnewaySearch({ ...onewaySearch, ...onewayFilters })
    }
  }

  const updateSearchState = (search: SearchType) => {
    if (!state) return

    switch (state) {
      case HomeState.TRIP:
        setTripSearch(search as TripSearch)
        break
      case HomeState.ACCOMMODATION:
        setAccommodationSearch(search as AccommodationSearch)
        break
      case HomeState.ONEWAY:
        setOnewaySearch(search as OnewaySearch)
        break
    }
  }

  const updateFilterState = (filters: FilterType) => {
    if (!state) return

    switch (state) {
      case HomeState.TRIP:
        setTripFilters(filters as TripFilters)
        break
      case HomeState.ACCOMMODATION:
        setAccommodationFilters(filters as AccommodationFilters)
        break
      case HomeState.ONEWAY:
        setOnewayFilters(filters as OnewayFilters)
        break
    }
  }

  const resetSearchState = () => {
    if (!state) return

    switch (state) {
      case HomeState.TRIP:
        resetTripSearch()
        break
      case HomeState.ACCOMMODATION:
        resetAccommodationSearch()
        break
      case HomeState.ONEWAY:
        resetOnewaySearch()
        break
    }
  }

  const resetFiltersState = () => {
    if (!state) return

    switch (state) {
      case HomeState.TRIP:
        resetTripFilters()
        break
      case HomeState.ACCOMMODATION:
        resetAccommodationFilters()
        break
      case HomeState.ONEWAY:
        resetOneWayFilters()
        break
    }
  }

  const makeSearch = (query?: SearchType, newState?: HomeState): void => {
    router.push({
      pathname: pathname,
      query: sanitizeQueryParams(query ? query : getQuery(newState ?? state)),
    })
  }

  return {
    makeSearch,
    resetSearchState,
    resetFiltersState,
    updateSearchState,
    updateFilterState,
  }
}
