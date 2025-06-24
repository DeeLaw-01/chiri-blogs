import { Box, Center } from '@chakra-ui/react'
import { useState } from 'react'
import ConfirmButton from '../../../search-view/confirm-button.tsx'
import Heading from 'ui/primitives/Heading'
import { Arrival } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { useFetchInfinite } from 'src/api/useFetchInfinite'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import SelectItem from './select-item'
import useSearch from 'ui/features/new-home/search/hooks/useSearch/index'
import ArrivalSearchInput from './search-input'
import Text from 'ui/primitives/Text'
import { useDebounce } from 'src/hooks/useDebounce'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'

type ArrivalViewProps = {
  onClose: () => void
}

export default function ArrivalView({ onClose }: ArrivalViewProps) {
  const { updateSearchState, updateFilterState } = useSearch()
  const { tripSearch, tripFilters } = useSearchAtoms()
  const [searchInput, setSearchInput] = useDebounce<string>('')
  const [arrival, setArrival] = useState<Arrival>({
    includeLocations: tripSearch?.includeLocations,
  })
  const locode = tripSearch?.initialLocation?.locode

  const { data, isLoading } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(locode, searchInput, idx)
  })

  const locations = data?.flat() || []

  const clearTripIdFromFilters = () => {
    const { trip_id, ...filtersWithoutTripId } = tripFilters
    updateFilterState(filtersWithoutTripId)
  }

  const handleSet = (value: LocationResult) => {
    if (arrival.includeLocations && arrival.includeLocations.length > 0) {
      handleSelect(value)
    } else {
      updateSearchState({ ...tripSearch, ...{ includeLocations: [value] } })
      clearTripIdFromFilters()
      onClose()
    }
  }

  const handleSelect = (value: LocationResult) => {
    clearTripIdFromFilters()
    const current = arrival.includeLocations ?? []
    const isExisting = current.some((loc) => loc.locode === value.locode)

    const updatedLocations = isExisting
      ? current.filter((loc) => loc.locode !== value.locode)
      : [...current, value]

    setArrival((prev) => ({ ...prev, includeLocations: updatedLocations }))
  }

  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontWeight="normal"
          st="home-page.arrival.view.mobile.heading"
        />
      </Box>
      <Box bg="_white" position="sticky" top="-2" pt="1">
        <ArrivalSearchInput
          setSearchInput={setSearchInput}
          locations={arrival.includeLocations ?? []}
          setLocations={setArrival}
        />
      </Box>

      {!isLoading && locations?.length === 0 && (
        <Center mt="5">
          <Text color="_gray" st="common.search.no.location.found" />
        </Center>
      )}
      <Box mb="16">
        {locations?.map((loc: LocationResult) => (
          <SelectItem
            key={loc.locode}
            isSelected={
              arrival.includeLocations?.includes(loc) ||
              tripSearch?.includeLocations?.includes(loc)
            }
            loc={loc}
            onClick={() => handleSet(loc)}
            handleSelect={handleSelect}
          />
        ))}
      </Box>

      <ConfirmButton searchUpdate={arrival} callback={onClose} />
    </>
  )
}
