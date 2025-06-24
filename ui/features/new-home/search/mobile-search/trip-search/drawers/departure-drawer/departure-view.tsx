import { Box, Center, Spinner } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import { useSelectedLocation } from 'src/contexts/location'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'
import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import SelectItem from './select-item'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import DepartureSearchInput from './search-input'
import Text from 'ui/primitives/Text'
import { useDebounce } from 'src/hooks/useDebounce'
import { useFetchInfinite } from 'src/api/useFetchInfinite'

type DepartureViewProps = {
  onClose: () => void
}

export default function DepartureDrawer({ onClose }: DepartureViewProps) {
  const { updateSearchState } = useSearch()
  const { tripSearch } = useSearchAtoms()
  const [selectedCity, setSelectedCity] = useSelectedLocation()
  const [searchInput, setSearchInput] = useDebounce<string>('')

  const { data, isLoading, isValidating } = useFetchInfinite<LocationResponse>(
    (idx) => {
      return typeaheadSearchQuery(selectedCity.locode, searchInput, idx, false)
    }
  )

  const locations = data?.flat() || []

  const handleSet = (location: LocationResult) => {
    setSelectedCity(location)
    updateSearchState({ ...tripSearch, ...{ initialLocation: location } })
    onClose()
  }

  return (
    <>
      <Box>
        <Heading as="h1" fontWeight="normal" st="home-page.departure.from" />
      </Box>
      <Box pb={10}>
        <Box bg="_white" position="sticky" top="-2" pt="1">
          <DepartureSearchInput setSearchInput={setSearchInput} />
        </Box>

        {!isLoading && locations?.length === 0 && (
          <Center mt="5">
            <Text color="_gray" st="common.no.results" />
          </Center>
        )}
        {locations?.map((loc: LocationResult) => (
          <SelectItem
            key={loc.locode}
            isSelected={tripSearch?.initialLocation?.locode === loc.locode}
            loc={loc}
            onClick={() => handleSet(loc)}
          />
        ))}

        {(isLoading || isValidating) && (
          <Center mt={4}>
            <Spinner color="_gray" />
          </Center>
        )}
      </Box>
    </>
  )
}
