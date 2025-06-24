import { CheckboxGroup, SimpleGrid, Spinner } from '@chakra-ui/react'
import useCarriers from 'ui/features/change-transportation/hooks/useCarriers'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Checkbox from 'ui/primitives/Checkbox'
import Text from 'ui/primitives/Text'

export default function CarriersFilter() {
  const { onewayFilters, setOnewayFilters, onewaySearch } = useSearchAtoms()
  const origin = onewaySearch.initialLocation?.locode ?? ''
  const destination =
    onewaySearch?.includeLocations && onewaySearch?.includeLocations.length > 0
      ? onewaySearch.includeLocations[0].locode
      : ''

  const { carriersError, getMappedData, isLoading } = useCarriers(
    origin,
    destination,
    onewayFilters.vehicle_type
  )

  const handleCarriersCheckbox = (carriers: string[]) => {
    setOnewayFilters((prev) => ({
      ...prev,
      include_airlines: carriers as string[],
    }))
  }

  if (carriersError) return <Text fontSize="sm" st="common.error.subheading" />
  if (isLoading) return <Spinner />
  if (getMappedData().length === 0)
    return <Text st="flight-info.no.carriers.message" />

  return (
    <CheckboxGroup
      onChange={handleCarriersCheckbox}
      value={onewayFilters.include_airlines}
    >
      <SimpleGrid columns={[2, 2, 3]} spacing={4} alignItems="flex-start">
        {getMappedData()?.map((item, idx) => {
          return (
            <Checkbox key={idx} value={item.value}>
              <Text fontSize="sm">{item.label}</Text>
            </Checkbox>
          )
        })}
      </SimpleGrid>
    </CheckboxGroup>
  )
}
