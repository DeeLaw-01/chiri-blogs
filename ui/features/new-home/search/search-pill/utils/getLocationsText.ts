import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import { TripSearch } from '../../hooks/useSearchAtoms/types/trip.types'

export default function getLocationsText(
  search: TripSearch,
  state: HomeState | undefined,
  translation: Function
) {
  // TODO: Shouldn't return here if shared state
  if (!search) return translation('home-page.region.anywhere')

  if (!search.includeLocations || !search.includeLocations.length)
    return translation('home-page.region.anywhere')
  return search.includeLocations?.map((loc) => loc.value).join(', ')
}
