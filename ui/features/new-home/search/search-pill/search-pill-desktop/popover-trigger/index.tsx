import { Divider, HStack, PopoverTrigger } from '@chakra-ui/react'
import LocationInput from './location'
import DatesInput from './dates'
import TravelersInput from './travelers'
import SearchButton from '../search-button'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { TripSearch } from '../../../hooks/useSearchAtoms/types/trip.types'

export default function SearchPillDesktopPopoverTrigger() {
  const { state } = useHomeAtoms()
  const { search } = useSearchAtoms()
  const currentSearch = getStateSearch(state, search) as TripSearch

  return (
    <PopoverTrigger>
      <HStack
        gap={0}
        zIndex={'10'}
        pos={'relative'}
        height={'4.5rem'}
        boxShadow="md"
        border="1px solid"
        borderRadius="full"
        borderColor="_lightgray"
        bg="_lightestgray"
        spacing="0"
        alignItems={'center'}
        overflow="hidden"
        w="50rem"
      >
        <HStack gap="0" aria-label="Search pill" h="full" w="full">
          <LocationInput search={currentSearch} />
          <Divider w="2px" bg="_lightgray" alignSelf="center" h={'60%'} />
          <DatesInput search={currentSearch} />
          <Divider w="2px" bg="_lightgray" alignSelf="center" h={'60%'} />
          <TravelersInput search={currentSearch} />
        </HStack>
        <SearchButton />
      </HStack>
    </PopoverTrigger>
  )
}
