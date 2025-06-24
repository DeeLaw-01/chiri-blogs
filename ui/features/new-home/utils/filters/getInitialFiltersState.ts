import { HomeState } from '../../hooks/useHomeAtoms/types'
import initialStates from '../../search/hooks/useSearchAtoms/initialStates'

export default function getInitialFilterState(state: HomeState) {
  switch (state) {
    case HomeState.TRIP:
      return initialStates.tripFilters
    case HomeState.ACCOMMODATION:
      return initialStates.accommodationFilters
    case HomeState.ONEWAY:
      return initialStates.onewayFilters
  }
}
