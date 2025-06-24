import { Box, HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type RefundAcceptedProps = {
  onClose: () => void
}

export default function RefundAccepted({ onClose }: RefundAcceptedProps) {
  return (
    <Box>
      <Heading as="h2" st="common.general.refund" py="2" pb="4" />
      <Alert success icon fontSize="sm" py="2" fontWeight="medium">
        <Text st="new-manage-booking-page.modal.refund.accepted.heading" />
      </Alert>
      <Text
        color="_gray"
        fontSize="sm"
        mt="4"
        st="new-manage-booking-page.modal.refund.accepted.description.one"
      />

      <Text
        color="_gray"
        fontSize="sm"
        mt="4"
        st="new-manage-booking-page.modal.refund.accepted.description.two"
      />

      <HStack w="full" justify="flex-end" mt="2">
        <Button id="refund-accept-close" primary onClick={onClose}>
          <Text st="common.general.close" />
        </Button>
      </HStack>
    </Box>
  )
}
