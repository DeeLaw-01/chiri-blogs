import { Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import DepartureSelect from './depature-select'

export default function DepartureContent() {
  const { onewaySearch } = useSearchAtoms()
  const { updateSearchState } = useSearch()

  const handleSet = (location: LocationResult) => {
    updateSearchState({ ...onewaySearch, ...{ initialLocation: location } })
  }

  return (
    <VStack w={'full'} position="relative" alignItems="flex-start">
      <Text fontWeight={'medium'} st="home-page.step1.departing.from" />
      <Box w={'full'}>
        <DepartureSelect handleSet={handleSet} />
      </Box>
    </VStack>
  )
}
