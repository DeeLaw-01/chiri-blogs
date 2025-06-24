import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import { FilterValue } from '../filters-view'
import { mapCountToFilters } from '../../utils/mapCountToFilters'
import FilterCheckboxGroup from '../filter-groups/filter-checkbox-group'

export const data = [
  { value: '', label: <Text st={'common.general.any'} /> },
  {
    value: 'Beach',
    label: <Text st="hotel-info:change.hotel.option.beach" />,
  },
  {
    value: 'Spa',
    label: <Text st="hotel-info:change.hotel.option.spa" sd={{ count: 1 }} />,
  },
  {
    value: 'Swimming Pool',
    label: <Text st="hotel-info:change.hotel.option.pool" sd={{ count: 2 }} />,
  },
] as FilterValue[]

export default function AmenitiesFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  return (
    <FilterCheckboxGroup
      data={mapCountToFilters(available, data)}
      value={filters.amenities}
      onChange={(e) =>
        setFilters((prev) => ({ ...prev, amenities: e as string[] }))
      }
    />
  )
}
