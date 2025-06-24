import { HStack, VStack } from '@chakra-ui/react'
import ChangeAccommodationFilters from './filters'
import ChangeAccommodationOptions from './options/change-accommodation-options'
import ChangeAccommodationHeader from './header/change-accommodation-header'
import ChangeAccommodationMap from './map'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import TopLoadingBar from 'ui/shared/top-loading-bar'
import { useChangeAccommodationAtoms } from './useChangeAccommodationAtoms'
import ActiveFilters from './filters/active-filters'
import ChangeAccommodationSortOptions from './options/sort/sort-options'

type ChangeAccommodationViewProps = {
  accommodation: HotelDetails
  onClose: () => void
  onOpenAccommodation: (accommodation: HotelDetails) => void
}
export default function ChangeAccommodationView({
  accommodation,
  onClose,
  onOpenAccommodation,
}: ChangeAccommodationViewProps) {
  const { data } = useChangeAccommodationAtoms()

  return (
    <HStack alignItems="flex-start">
      <TopLoadingBar isLoading={data?.isLoading ?? false} duration={7} />
      <ChangeAccommodationFilters onClose={onClose} />
      <ChangeAccommodationMap onOpenAccommodation={onOpenAccommodation} />
      <VStack p={5} w="full" alignItems="flex-start">
        <ChangeAccommodationHeader
          onClose={onClose}
          accommodation={accommodation}
        />
        <ActiveFilters />
        <ChangeAccommodationSortOptions
          accommodation={accommodation}
          maxW="60rem"
        />
        <ChangeAccommodationOptions
          accommodation={accommodation}
          onOpenAccommodation={onOpenAccommodation}
        />
      </VStack>
    </HStack>
  )
}
