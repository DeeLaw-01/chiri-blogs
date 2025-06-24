import { FiltersType } from 'src/api/queries/get/change-accommodation/types'
import { FilterValue } from '../filters/filters-view'

type FilterWithCount = (FilterValue & { count?: number })[]

export const mapCountToFilters = (
  available: FiltersType[keyof FiltersType],
  data: FilterValue[]
): FilterWithCount => {
  if (!available) return data
  return data.map((item) => {
    const count = item.value === '' ? available.any : available[item.value]
    return {
      ...item,
      count: count,
    }
  })
}
