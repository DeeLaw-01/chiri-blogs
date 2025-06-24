import { RadioGroup, SimpleGrid, Spinner } from '@chakra-ui/react'
import useStations from 'ui/features/change-transportation/hooks/useStations'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Radio from 'ui/primitives/Radio'
import Text from 'ui/primitives/Text'

export default function DepartureStationsFilter() {
  const { onewayFilters, setOnewayFilters, onewaySearch } = useSearchAtoms()
  const origin = onewaySearch.initialLocation?.locode ?? ''
  const destination =
    onewaySearch.includeLocations && onewaySearch?.includeLocations.length > 0
      ? onewaySearch.includeLocations[0].locode
      : ''

  const { stationsError, getDepartureStations, isLoading } = useStations(
    origin,
    destination,
    onewayFilters.vehicle_type
  )

  if (stationsError) return <Text fontSize="sm" st="common.error.subheading" />

  if (isLoading) return <Spinner />

  if (getDepartureStations().length === 0)
    return <Text st="common.no.options.available" />

  return (
    <RadioGroup
      onChange={(e) =>
        setOnewayFilters((prev) => ({ ...prev, specific_origin_station: e }))
      }
      value={onewayFilters.specific_origin_station}
    >
      <SimpleGrid columns={[2, 2, 3]} spacing={4} alignItems="flex-start">
        <Radio value={''}>
          <Text fontSize="sm" st={'common.general.any'} />
        </Radio>
        {getDepartureStations()?.map((item, idx) => {
          return (
            <Radio key={idx} value={item.value} fontSize="xl">
              <Text fontSize="sm">{item.label}</Text>
            </Radio>
          )
        })}
      </SimpleGrid>
    </RadioGroup>
  )
}
