import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { VStack } from '@chakra-ui/react'
import { TransportBookingData } from '../../types/itinerary.type'
import CarrierCard from './carrier-card'
import Button from 'ui/primitives/Button'
import useChatBot from 'src/hooks/useChatBot'

type ActionRequiredProps = {
  transport: TransportBookingData
}
export default function ActionRequired({ transport }: ActionRequiredProps) {
  const { showAndOpen } = useChatBot()

  return (
    <VStack fontSize="sm" alignItems="flex-start" gap="2" mt="2">
      <Heading
        as="h2"
        st="new-manage-booking-page.boarding.status.action.required"
      />

      <VStack alignItems="flex-start" color="_gray">
        <Text st="new-manage-booking-page.modal.action.required.description.one" />

        <Text st="new-manage-booking-page.modal.action.required.description.two" />
      </VStack>
      <CarrierCard transport={transport} />
      <Text color="_gray">
        <Text
          notag
          st="new-manage-booking-page.modal.action.required.description.three"
        />{' '}
        <Button
          fontSize="inherit"
          id="action-support-button"
          asLink
          onClick={() => showAndOpen()}
        >
          <Text notag st="common.navbar.support.button.tooltip" />
        </Button>
      </Text>
    </VStack>
  )
}
