import { Filters, initialFilters } from '../hooks/useChangeTransportationAtoms'

export default function getFiltersCount(filters: Filters): number {
  return Object.keys(filters).filter(
    (k) =>
      k !== 'date' &&
      filters[k] &&
      JSON.stringify(filters[k]) !== JSON.stringify(initialFilters[k])
  ).length
}
