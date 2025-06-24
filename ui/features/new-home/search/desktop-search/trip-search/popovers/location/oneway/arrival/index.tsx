import { VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import ArrivalSelect from './arrival-select'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'

export default function ArrivalContent() {
  const { onewaySearch } = useSearchAtoms()
  const { updateSearchState } = useSearch()

  const handleSet = (locations: LocationResult[]) => {
    updateSearchState({
      ...onewaySearch,
      ...{ includeLocations: locations },
    })
  }

  return (
    <VStack w={'full'} position="relative" alignItems="flex-start">
      <Text
        fontWeight={'medium'}
        st="home-page.step2.include.locations.header"
      />
      <ArrivalSelect handleSet={handleSet} />
    </VStack>
  )
}
