import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { data } from './data'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import useTranslation from 'src/hooks/useTranslation'

export default function SuggestedLocations() {
  const { t } = useTranslation()
  const { updateSearchState, updateFilterState } = useSearch()
  const { tripSearch, tripFilters } = useSearchAtoms()
  let locations = tripSearch?.includeLocations

  const isSelected = (locode: string): boolean => {
    if (locode === '' && !tripSearch?.includeLocations?.length) return true
    if (locations?.map((loc) => loc.locode).includes(locode)) return true
    return false
  }

  const handleSet = (locations: LocationResult) => {
    updateSearchState({
      ...tripSearch,
      ...{
        includeLocations: locations.locode === '' ? [] : [locations],
      },
    })

    const { trip_id, ...filtersWithoutTripId } = tripFilters

    updateFilterState(filtersWithoutTripId)
  }

  const getLabel = (value: string) => {
    // TODO: Once backend has a better endpoint, get rid of this hardcoded stuff!
    if (value === 'Anywhere') return t('home-page.region.anywhere')
    else return value
  }

  return (
    <SimpleGrid columns={3} spacing={2} w="full">
      {data.map((loc, index) => (
        <VStack
          key={index}
          role="group"
          cursor="pointer"
          gap="0.1rem"
          onClick={() => handleSet(loc)} // TODO: Needs to come from backend to fix type error.
        >
          <Box
            position="relative"
            w="6rem"
            h="5rem"
            borderRadius="lg"
            overflow="hidden"
            border="1px solid"
            borderColor={isSelected(loc.locode) ? 'primary' : '_lightgray'}
            _groupHover={{
              borderColor: 'primary',
            }}
          >
            <Image
              alt={loc.value}
              src={loc.image}
              fill
              quality={100}
              style={{ objectFit: 'cover', transform: 'scaleX(1.05)' }}
            />
          </Box>
          <Text color="_gray" fontSize="xs" noOfLines={1}>
            {getLabel(loc.value)}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  )
}
