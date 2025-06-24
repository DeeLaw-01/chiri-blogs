import { Filters, initialFilters } from '../useChangeAccommodationAtoms'

export default function getFiltersCount(filters: Filters): number {
  return Object.keys(filters).filter(
    (k) =>
      filters[k] &&
      JSON.stringify(filters[k]) !== JSON.stringify(initialFilters[k])
  ).length
}
