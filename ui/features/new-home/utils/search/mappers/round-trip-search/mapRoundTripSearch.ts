import {
  TripFilters,
  TripSearch
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { mapTripSearch } from '../trip-search/mapTripSearch'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'

export function mapRoundTripSearch (
  search?: TripSearch & TripFilters
): Record<string, number | boolean | string | undefined> {
  if (!search) return {}

  // Use the trip search mapper but ensure single-city category is set
  const mappedSearch = mapTripSearch({
    ...search,
    categories: 'single-city'
  })

  return {
    ...mappedSearch,
    type: HomeState.ROUNDTRIP
  }
}
