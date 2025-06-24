import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import { FilterValue } from '../filters-view'
import { mapCountToFilters } from '../../utils/mapCountToFilters'

export const data = [
  { value: '', label: <Text st={'common.general.any'} /> },
  {
    value: 'Hotel',
    label: <Text st="hotel-info:change.hotel.option.hotel" />,
  },
  {
    value: 'Hostel',
    label: (
      <Text st="hotel-info:change.hotel.option.hostel" sd={{ count: 1 }} />
    ),
  },
  {
    value: 'Apartments',
    label: (
      <Text st="hotel-info:change.hotel.option.apartment" sd={{ count: 2 }} />
    ),
  },
  {
    value: 'Resort',
    label: (
      <Text st="hotel-info:change.hotel.option.resort" sd={{ count: 2 }} />
    ),
  },
] as FilterValue[]

export default function TypeFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  return (
    <FilterRadioGroup
      data={mapCountToFilters(available, data)}
      value={filters.type}
      onChange={(e) => setFilters((prev) => ({ ...prev, type: e }))}
    />
  )
}
