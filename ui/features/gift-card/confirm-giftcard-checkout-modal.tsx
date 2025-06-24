import Modal from 'ui/primitives/Modal'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { Box, Stack, VStack } from '@chakra-ui/react'

interface ConfirmGiftCardCheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  type: 'points' | 'coupon'
}

const ConfirrmGiftCardCheckoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  type,
}: ConfirmGiftCardCheckoutModalProps) => {
  const handleConfirm = () => {
    onClose()
    onConfirm()
  }

  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      title={<Text st="checkout-page.giftCard.select.modal.header" />}
      onClose={onClose}
      addCloseButton={false}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <VStack alignItems={'flex-start'} pb={5}>
        <Box>
          {type === 'coupon' && (
            <Text mb="2" st="checkout-page.giftCard.select.modal.message" />
          )}
          {type === 'points' && (
            <Text
              mb="2"
              st="checkout-page.giftCard.coin.select.modal.message"
            />
          )}
        </Box>
        <Stack direction={['column', 'row']} spacing={2} w="100%">
          <Button secondary w={'full'} onClick={onClose}>
            <Text st="common.general.back" />
          </Button>

          <Button primary w={'full'} onClick={handleConfirm}>
            <Text st="common.general.confirm" />
          </Button>
        </Stack>
      </VStack>
    </Modal>
  )
}

export default ConfirrmGiftCardCheckoutModal
