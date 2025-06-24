import { VStack } from '@chakra-ui/react'
import { useChangeAccommodationEffects } from '../useChangeAccommodationEffects'
import NoResults from './no-results'
import Loading from './loading'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import LoadMoreButton from './load-more-button'
import ChangeAccommodationOptionsGrid from './options-grid'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationOptionsProps = {
  accommodation: HotelDetails
  onOpenAccommodation: (accommodation: HotelDetails) => void
}

export default function ChangeAccommodationOptions({
  accommodation,
  onOpenAccommodation,
}: ChangeAccommodationOptionsProps) {
  const { setSize, size } = useChangeAccommodationEffects(accommodation)
  const { grid, data } = useChangeAccommodationAtoms()

  if (!data?.accommodations.length && !data?.isLoading) return <NoResults />
  if (data?.isLoading) return <Loading />

  return (
    <VStack
      w="full"
      mb={{ base: 10, md: 'initial' }}
      alignItems="flex-start"
      maxW={grid ? '80rem' : '60rem'}
    >
      <ChangeAccommodationOptionsGrid
        data={data}
        onOpenAccommodation={onOpenAccommodation}
      />
      {data.isValidating && <Loading />}
      <LoadMoreButton
        isValidating={data.isValidating}
        hasMore={data.hasMoreHotels}
        size={size}
        setSize={setSize}
      />
    </VStack>
  )
}
