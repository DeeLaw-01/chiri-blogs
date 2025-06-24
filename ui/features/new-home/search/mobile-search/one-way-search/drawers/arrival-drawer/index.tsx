import { Box, Center } from '@chakra-ui/react'
import { useState } from 'react'
import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import { Arrival } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Heading from 'ui/primitives/Heading'
import ConfirmButton from '../../../search-view/confirm-button.tsx'

import useSearch from 'ui/features/new-home/search/hooks/useSearch/index'

import Text from 'ui/primitives/Text'

import { useFetchInfinite } from 'src/api/useFetchInfinite'
import { useSelectedLocation } from 'src/contexts/location'
import { useDebounce } from 'src/hooks/useDebounce'
import ArrivalSearchInput from './search-input'
import SelectItem from './select-item'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'

type ArrivalViewProps = {
  onClose: () => void
}

export default function OnewayArrivalView({ onClose }: ArrivalViewProps) {
  const [selectedCity] = useSelectedLocation()
  const { updateSearchState } = useSearch()
  const { onewaySearch } = useSearchAtoms()
  const [searchInput, setSearchInput] = useDebounce<string>('')
  const [arrival, setArrival] = useState<Arrival>({
    includeLocations: onewaySearch?.includeLocations,
  })

  const { data, isLoading } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(selectedCity?.locode, searchInput, idx)
  })

  const locations = data?.flat() || []

  const handleSet = (value: LocationResult) => {
    if (arrival.includeLocations && arrival.includeLocations.length > 0) {
      handleSelect(value)
    } else {
      updateSearchState({ ...onewaySearch, ...{ includeLocations: [value] } })
      onClose()
    }
  }

  const handleSelect = (value: LocationResult) => {
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
      {locations?.map((loc: LocationResult) => (
        <SelectItem
          key={loc.locode}
          isSelected={
            arrival.includeLocations?.includes(loc) ||
            onewaySearch?.includeLocations?.includes(loc)
          }
          loc={loc}
          onClick={() => handleSet(loc)}
          handleSelect={handleSelect}
        />
      ))}

      <ConfirmButton searchUpdate={arrival} callback={onClose} />
    </>
  )
}
