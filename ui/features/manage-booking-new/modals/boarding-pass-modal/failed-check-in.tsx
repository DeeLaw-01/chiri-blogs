import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { Box, VStack, UnorderedList, ListItem } from '@chakra-ui/react'
import { TransportBookingData } from '../../types/itinerary.type'
import CarrierCard from './carrier-card'

type FailedCheckInProps = {
  transport: TransportBookingData
}
export default function FailedCheckIn({ transport }: FailedCheckInProps) {
  return (
    <VStack fontSize="sm" alignItems="flex-start" gap="2" mt="2">
      <Heading
        as="h2"
        st="new-manage-booking-page.modal.failed.check.in.heading"
      />
      <Text
        color="_gray"
        st="new-manage-booking-page.modal.failed.check.in.description.one"
      />

      <CarrierCard transport={transport} />
      <Box fontSize="xs" color="_gray">
        <Text fontWeight="medium" st="common.general.please.note" />
        <UnorderedList>
          <ListItem>
            <Text st="new-manage-booking-page.modal.failed.check.in.point.one" />
          </ListItem>
        </UnorderedList>
      </Box>
    </VStack>
  )
}
