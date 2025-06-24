import { Stack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { BookingType } from '../../types/booking.type'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import isTripDisabled from '../../utils/isTripDisabled'

type ContactDetailsProps = {
  booking: BookingType
}

export default function ContactDetails({ booking }: ContactDetailsProps) {
  const { setShowEditDetails } = useManageBookingAtoms()
  return (
    <Stack direction={['column', 'row']} alignItems="flex-start">
      <VStack w="full" alignItems="flex-start" gap="0">
        <Text>{booking.contact_details.name}</Text>
        <Text>{booking.contact_details.email}</Text>
        <Text>{booking.contact_details.tel}</Text>
      </VStack>
      {!isTripDisabled(booking.trip.status) && (
        <Button
          id="edit-details"
          asLink
          minW="unset"
          fontSize={{ base: 'sm', md: 'md' }}
          onClick={() => setShowEditDetails(true)}
        >
          <Text st="common.general.edit.details" />
        </Button>
      )}
    </Stack>
  )
}
