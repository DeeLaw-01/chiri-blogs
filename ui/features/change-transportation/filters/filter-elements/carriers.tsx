import Text from 'ui/primitives/Text'
import FilterCheckboxGroup from '../filter-groups/filter-checkbox-group'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import useCarriers from '../../hooks/useCarriers'
import { Transport } from 'src/shared-types/transport.type'

type CarriersFilterProps = {
  transport: Transport
}

export default function CarriersFilter({ transport }: CarriersFilterProps) {
  const { filters, setFilters } = useChangeTransportationAtoms()
  const { carriersError, getMappedData } = useCarriers(
    transport.origin_locode,
    transport.destination_locode
  )

  if (carriersError) return <Text fontSize="sm" st="common.error.subheading" />

  return (
    <FilterCheckboxGroup
      data={getMappedData()}
      value={filters.carriers}
      onChange={(e) =>
        setFilters((prev) => ({ ...prev, carriers: e as string[] }))
      }
    />
  )
}
