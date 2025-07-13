import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import { TripSearch } from '../../hooks/useSearchAtoms/types/trip.types'
import { getTotalTravellers } from 'ui/features/new-home/utils/getTotalTravelers'

export default function getTravelersText (
  search: TripSearch,
  state: HomeState | undefined,
  translation: Function
) {
  // TODO: Shouldn't return here if shared state
  if (!search || (state !== HomeState.TRIP && state !== HomeState.ROUNDTRIP))
    return translation('common.travelers', { count: 1 })

  const count = getTotalTravellers(
    search.n_adults,
    search.n_children,
    search.n_babies
  )
  return translation('common.travelers', { count: count })
}
