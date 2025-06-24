import { Box, HStack } from '@chakra-ui/react'
import VerticalProgress from 'ui/features/manage-booking-new/components/vertical-progress'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

type RefundStatusProps = {
  onClose: () => void
}

export default function RefundStatus({ onClose }: RefundStatusProps) {
  const { booking } = useManageBookingAtoms()
  const flex = booking?.protection?.find((p) => p.product === 'flex')
  const hasFlex = flex && !flex.is_expired

  const steps = [
    <Text
      key="1"
      st="new-manage-booking-page.refund.modal.status.grid.airline"
    />,
    <Text
      key="2"
      st="new-manage-booking-page.refund.modal.status.grid.review"
    />,
    !hasFlex ? (
      <Text
        key="3"
        st="new-manage-booking-page.refund.modal.status.grid.decision"
      />
    ) : null,
    <Text
      key="4"
      st="new-manage-booking-page.refund.modal.status.grid.refunded"
    />,
  ].filter(Boolean)

  const currentStatus = 2

  return (
    <Box>
      <Heading
        as="h2"
        st="new-manage-booking-page.refund.modal.status"
        py="2"
      />
      <Text
        mb="4"
        color="_gray"
        fontSize="sm"
        st="new-manage-booking-page.refund.modal.status.description"
      />

      <VerticalProgress py={2} steps={steps} currentStep={currentStatus} />
      <HStack w="full" justify="flex-end">
        <Button id="refund-proceed" secondary onClick={onClose}>
          <Text st="common.general.close" />
        </Button>
      </HStack>
    </Box>
  )
}
