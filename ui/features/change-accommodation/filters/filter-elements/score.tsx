import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import { FilterValue } from '../filters-view'
import { mapCountToFilters } from '../../utils/mapCountToFilters'

export const data = [
  { value: '', label: <Text st={'common.general.any'} /> },
  {
    value: '9',
    label: <Text st="hotel-info:change.hotel.option.superb" />,
  },
  {
    value: '8',
    label: <Text as="span" st="hotel-info.change.hotel.option.verygood" />,
  },
  {
    value: '7',
    label: <Text st="hotel-info:change.hotel.option.good" />,
  },
  {
    value: '6',
    label: <Text st="hotel-info:change.hotel.option.pleasant" />,
  },
] as FilterValue[]

export default function ScoreFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  return (
    <FilterRadioGroup
      data={mapCountToFilters(available, data)}
      value={filters.score}
      onChange={(e) => setFilters((prev) => ({ ...prev, score: e }))}
    />
  )
}
