import { useChangeAccommodationAtoms } from '../../../useChangeAccommodationAtoms'
import FilterCheckboxGroup from '../../filter-groups/filter-checkbox-group'
import { data } from './data'

export default function StarsFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  const getMappedData = () => {
    if (!available) return data
    return data.map((item) => {
      return {
        ...item,
        count: available[item.value],
      }
    })
  }

  return (
    <FilterCheckboxGroup
      data={getMappedData()}
      value={filters.stars}
      onChange={(e) =>
        setFilters((prev) => ({ ...prev, stars: e as string[] }))
      }
    />
  )
}
