import FilterRadioGroup from '../filter-groups/filter-radio-group'
import Text from 'ui/primitives/Text'
import { Transport } from 'src/shared-types/transport.type'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import useStations from '../../hooks/useStations'

type ArrivalFilterProps = {
  transport: Transport
}

export default function ArrivalFilter({ transport }: ArrivalFilterProps) {
  const { filters, setFilters } = useChangeTransportationAtoms()
  const { stationsError, getArrivalStations } = useStations(
    transport.origin_locode,
    transport.destination_locode
  )

  if (stationsError) return <Text fontSize="sm" st="common.error.subheading" />

  return (
    <FilterRadioGroup
      data={getArrivalStations()}
      value={filters.arrival}
      onChange={(e) => setFilters((prev) => ({ ...prev, arrival: e }))}
    />
  )
}
