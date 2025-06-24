import { HomeState } from '../../hooks/useHomeAtoms/types'
import { Filters } from '../../search/hooks/useSearchAtoms/types'
import getInitialFilterState from './getInitialFiltersState'
import getStateFilters from './getStateFilters'

export default function getFiltersCount(
  state: HomeState | undefined,
  filters: Filters
): number {
  if (!state) return 0

  const stateFilters = getStateFilters(state, filters)
  const initial = getInitialFilterState(state)

  return Object.keys(stateFilters).filter((k) => {
    const key = k as keyof typeof stateFilters
    const current = stateFilters[key]
    const initialValue = initial[key]

    const isDifferent = JSON.stringify(current) !== JSON.stringify(initialValue)
    const isNotEmptyArray = !Array.isArray(current) || current.length > 0

    return current && isDifferent && isNotEmptyArray
  }).length
}
