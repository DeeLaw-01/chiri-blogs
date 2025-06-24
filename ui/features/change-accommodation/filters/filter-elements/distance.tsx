import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import { FilterValue } from '../filters-view'
import { mapCountToFilters } from '../../utils/mapCountToFilters'

export const data = [
  { value: '', label: <Text st={'common.general.any'} /> },
  {
    value: '1',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 1 }} />
    ),
  },
  {
    value: '2',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 2 }} />
    ),
  },
  {
    value: '3',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 3 }} />
    ),
  },
  {
    value: '5',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 5 }} />
    ),
  },
  {
    value: '10',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 10 }} />
    ),
  },
  {
    value: '15',
    label: (
      <Text st="hotel-info:change.hotel.option.distance" sd={{ count: 15 }} />
    ),
  },
] as FilterValue[]

export default function DistanceFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  return (
    <FilterRadioGroup
      data={mapCountToFilters(available, data)}
      value={filters.distance}
      onChange={(e) => setFilters((prev) => ({ ...prev, distance: e }))}
    />
  )
}
