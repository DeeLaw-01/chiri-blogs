import { Box, HStack, VStack } from '@chakra-ui/react'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import Button from 'ui/primitives/Button'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'
import FlexDescription from './flex-description'
import NoProtectionDescription from './no-protection-description'
import useMutation from 'src/api/useMutation'
import requestRefundQuery from 'src/api/queries/post/manage-booking/requestRefundQuery'
import { RefundStatusType } from 'ui/features/manage-booking-new/types/booking.type'
import { CONFIG_SETTINGS } from 'src/config'

type RefundConfirmationProps = {
  onClose: () => void
  setShowDetails: (b: boolean) => void
}

export default function RefundConfirmation({
  onClose,
  setShowDetails,
}: RefundConfirmationProps) {
  const { trigger, isMutating } = useMutation((d) => requestRefundQuery(d))
  const { booking, setBooking } = useManageBookingAtoms()

  const flex = booking?.protection?.find((p) => p.product === 'flex')
  const hasFlex = flex && !flex.is_expired

  const handleNext = () => {
    if (hasFlex) setShowDetails(true)
    else requestRefundWithoutFlex()
  }

  const requestRefundWithoutFlex = () => {
    let body = {
      purchase_id: booking?.booking_id,
      email: booking?.booking_email,
    }
    trigger(body, { onSuccess: onSuccess })
  }

  const onSuccess = () => {
    if (!booking) return
    setBooking({
      ...booking,
      refund: {
        status: RefundStatusType.Requested,
      },
    })
  }
  return (
    <Box>
      <VStack
        alignItems="flex-start"
        fontSize="sm"
        mb="4"
        gap="4"
        color="_gray"
      >
        <Alert error icon p="2">
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            st="new-manage-booking-page.modal.refund.not.requested.confirm.heading"
          />
        </Alert>
        {flex && !hasFlex && (
          <Alert error icon p="2">
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              st="new-manage-booking-page.modal.refund.not.requested.expired.heading"
              sd={{ insurance_name: CONFIG_SETTINGS.INSURANCE_FLEX_NAME }}
            />
          </Alert>
        )}
        {hasFlex ? <FlexDescription /> : <NoProtectionDescription />}
      </VStack>

      <HStack w="full" justify="flex-end">
        <Button
          secondary
          id="cancel-refund"
          onClick={onClose}
          isDisabled={isMutating}
        >
          <Text st="common.general.close" />
        </Button>
        <Button
          id="refund-proceed"
          primary
          onClick={handleNext}
          isLoading={isMutating}
        >
          <Text st="common.general.continue" />
        </Button>
      </HStack>
    </Box>
  )
}
