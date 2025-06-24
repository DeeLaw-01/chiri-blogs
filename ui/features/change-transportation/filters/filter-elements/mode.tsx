import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import { FilterValue } from '../filters-view'

export const data = [
  {
    value: 'aircraft',
    label: <Text st="common.transport.aircraft" sd={{ count: 1 }} />,
  },
  {
    value: 'bus',
    label: <Text st="common.transport.bus" sd={{ count: 1 }} />,
  },
  {
    value: 'train',
    label: <Text st="common.transport.train" sd={{ count: 1 }} />,
  },
] as FilterValue[]

export default function ModeFilter() {
  const { filters, setFilters } = useChangeTransportationAtoms()

  return (
    <FilterRadioGroup
      data={data}
      value={filters.mode}
      onChange={(e) => setFilters((prev) => ({ ...prev, mode: e }))}
    />
  )
}
