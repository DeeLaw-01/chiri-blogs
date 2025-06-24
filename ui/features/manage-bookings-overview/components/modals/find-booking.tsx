import { VStack } from '@chakra-ui/react'
import FindBookingForm from 'ui/features/manage-booking-new/components/unconfirmed/sign-in/find-booking-form'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'

export default function FindBooking({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      modalContentStyle={{ my: { base: 'auto', md: '10' } }}
      addCloseButton
    >
      <VStack gap={8} my={2}>
        <Heading
          textAlign="center"
          as="h2"
          st="new-manage-booking-page.enter.your.booking.id"
        />

        <FindBookingForm />
      </VStack>
    </Modal>
  )
}
