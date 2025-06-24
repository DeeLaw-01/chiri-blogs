import { HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'
import Button from 'ui/primitives/Button'
import useUpdateTrip from '../hooks/useUpdateTrip'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'

type RemoveAccommodationModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function RemoveAccommodationModal({
  isOpen,
  onClose,
}: RemoveAccommodationModalProps) {
  const { updateTripHandler, isLoading } = useUpdateTrip()
  const { trip, setTrip, setShowRemoveAccommodation, setIsAccommodationAdded } =
    useTripDetailsAtoms()

  const handleRemoveAllHotels = async () => {
    await updateTripHandler(
      {
        trip_id: trip.data?.id!,
        type: 'accomodation',
        position: 'all',
        add: false,
      },
      (data) => {
        setTrip({
          data: data.trip,
          isLoading: false,
          error: false,
          isValidating: false,
        })

        setIsAccommodationAdded(false)
        setShowRemoveAccommodation(false)
      }
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<Heading as="h2" st="new-trip-page:accommodation.button.remove" />}
    >
      <Text fontSize="md" st="new-trip-page:accommodation.remove.description" />

      <HStack w="full" justify={'flex-end'} mt="5" mb="2">
        <Button id="remove-accommodation-modal" primary isLoading={isLoading}>
          <Text
            st="common.general.continue"
            onClick={() => handleRemoveAllHotels()}
          />
        </Button>
      </HStack>
    </Modal>
  )
}
