import { VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import SuggestedLocations from './suggested-locations'
import ArrivalSelect from './arrival-select'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'

export default function ArrivalContent() {
  const { tripSearch, tripFilters } = useSearchAtoms()
  const { updateSearchState, updateFilterState } = useSearch()

  const handleSet = (locations: LocationResult[]) => {
    updateSearchState({
      ...tripSearch,
      ...{ includeLocations: locations },
    })
    const { trip_id, ...filtersWithoutTripId } = tripFilters

    updateFilterState(filtersWithoutTripId)
  }

  return (
    <VStack w={'full'} position="relative" alignItems="flex-start">
      <Text
        fontWeight={'medium'}
        st="home-page.step2.include.locations.header"
      />
      <ArrivalSelect handleSet={handleSet} />
      <SuggestedLocations />
    </VStack>
  )
}
