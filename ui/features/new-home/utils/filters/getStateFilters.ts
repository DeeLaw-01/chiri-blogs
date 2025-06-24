import { HomeState } from '../../hooks/useHomeAtoms/types'
import { Filters } from '../../search/hooks/useSearchAtoms/types'

export default function getStateFilters(state: HomeState, filters: Filters) {
  switch (state) {
    case HomeState.TRIP:
      return filters.trip
    case HomeState.ACCOMMODATION:
      return filters.accommodation
    case HomeState.ONEWAY:
      return filters.oneway
  }
}
