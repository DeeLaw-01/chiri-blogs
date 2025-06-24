import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { Transport } from 'src/shared-types/transport.type'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import useStations from '../../hooks/useStations'

type DepartureFilterProps = {
  transport: Transport
}

export default function DepartureFilter({ transport }: DepartureFilterProps) {
  const { filters, setFilters } = useChangeTransportationAtoms()
  const { stationsError, getDepartureStations } = useStations(
    transport.origin_locode,
    transport.destination_locode
  )

  if (stationsError) return <Text fontSize="sm" st="common.error.subheading" />

  return (
    <FilterRadioGroup
      data={getDepartureStations()}
      value={filters.departure}
      onChange={(e) => setFilters((prev) => ({ ...prev, departure: e }))}
    />
  )
}
