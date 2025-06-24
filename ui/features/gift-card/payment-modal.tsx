import {
  Box,
  Grid,
  HStack,
  Spacer,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import useCurrency from 'src/hooks/useCurrency'

import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'
import Payment from 'ui/shared/payment'
import { theme } from 'src/styles/theme'

export default function GiftCardPaymentModal({
  totalPrice,
  shippingFee,
  showShippingFee,
  paymentData,
  resetPaymentData,
}): JSX.Element {
  const { getConvertedCurrency } = useCurrency()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const redirect =
    window.location.origin +
    `/giftcard?complete=true&type=giftcard&price=${totalPrice}`

  const totalPriceWithShipping = showShippingFee
    ? totalPrice + shippingFee
    : totalPrice

  useEffect(() => {
    onOpen()
  }, [])

  const handleOnClose = (): void => {
    onClose()
    resetPaymentData()
  }

  return (
    <Modal
      size="4xl"
      isOpen={isOpen}
      addCloseButton={false}
      onClose={handleOnClose}
    >
      <Grid gap={4} w="full" templateColumns={{ base: '1fr', md: '1fr 18rem' }}>
        <Box
          pt="5"
          pb={{ base: 4, md: 8 }}
          minH={{ base: 'full', md: '35rem' }}
        >
          {/* Back button header */}
          <HStack mb="4">
            <Box
              cursor="pointer"
              bg="_white"
              _hover={{}}
              aria-label="Back"
              onClick={resetPaymentData}
            >
              <LeftArrowIcon
                width="12"
                height="12"
                stroke={theme.colors._black}
              />
            </Box>
            <Text
              fontSize="xl"
              fontWeight="medium"
              st="gift-card.payment.modal.header"
            />
          </HStack>

          <Payment
            isLoading={false}
            redirect={redirect}
            price={totalPriceWithShipping}
            successPaymentData={paymentData}
          />
        </Box>

        <VStack
          w="full"
          py="5"
          h="full"
          align="flex-start"
          pl={{ base: 0, md: 4 }}
          borderTop={{ base: '1px solid', md: 'none' }}
          borderTopColor={{ base: '_lightgray', md: 'none' }}
          borderLeft={{ base: 'none', md: '1px solid' }}
          borderLeftColor={{ base: 'none', md: '_lightgray' }}
        >
          <Box w="full">
            <Heading
              fontWeight="medium"
              fontSize={{ base: '2xl', md: '3xl' }}
              st="gift-card.payment.modal.side.heading"
            />

            <HStack mt="2" w="full" justify="space-between">
              <Text color="_darkgray" st="gift-card.payment.modal.voucher" />
              <Text fontWeight="medium">
                {getConvertedCurrency(totalPrice, {
                  includeCommaValues: true,
                })}
              </Text>
            </HStack>
            {showShippingFee && (
              <HStack mt="2" w="full" justify="space-between">
                <Text
                  color="_darkgray"
                  st="gift-card.payment.modal.shipping.fee"
                />
                <Text fontWeight="medium">
                  {getConvertedCurrency(shippingFee, {
                    includeCommaValues: true,
                  })}
                </Text>
              </HStack>
            )}
          </Box>

          <Spacer />
          <Box display={{ base: 'block', md: 'none' }} h="4" />

          <Box w="full">
            <HStack w="full" justify="space-between">
              <Text color="_darkgray" st="common.general.total" />
              <Text fontWeight="medium" fontSize="lg">
                {getConvertedCurrency(
                  showShippingFee ? totalPrice + shippingFee : totalPrice,
                  {
                    includeCommaValues: true,
                  }
                )}
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Grid>
    </Modal>
  )
}
