import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import { FilterValue } from '../filters-view'

export const data = [
  {
    value: '0',
    label: <Text st="flight-info.card.tag.direct" />,
  },
  {
    value: '1',
    label: <Text st="flight-info.card.tag.layover.stop" sd={{ count: 1 }} />,
  },
  {
    value: '2',
    label: <Text st="flight-info.card.tag.layover.stop" sd={{ count: 2 }} />,
  },
] as FilterValue[]

export default function StopsFilter() {
  const { filters, setFilters } = useChangeTransportationAtoms()

  return (
    <FilterRadioGroup
      data={data}
      value={filters.stops}
      onChange={(e) => setFilters((prev) => ({ ...prev, stops: e }))}
    />
  )
}
