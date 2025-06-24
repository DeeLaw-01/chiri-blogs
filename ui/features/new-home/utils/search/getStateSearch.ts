import { HomeState } from '../../hooks/useHomeAtoms/types'
import { Search } from '../../search/hooks/useSearchAtoms/types'

export default function getStateSearch(
  state: HomeState | undefined,
  search: Search
) {
  if (!state) return {}

  switch (state) {
    case HomeState.TRIP:
      return search.trip
    case HomeState.ACCOMMODATION:
      return search.accommodation
    case HomeState.ONEWAY:
      return search.oneway
  }
}
