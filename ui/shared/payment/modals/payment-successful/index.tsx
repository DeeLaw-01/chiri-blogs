import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import Modal from 'ui/primitives/Modal'
import ConfettiLayer from './confetti-layer'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import LottiePlayer from 'ui/shared/lottie-player'
import TickLottie from './tick-lottie.json'
import { useRouter } from 'src/i18n/router'
import useCurrency from 'src/hooks/useCurrency'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { EecPurchaseDataLayer } from 'src/tracking'
import { useCookieConsent } from 'src/contexts/cookie-consent'
import { useSelectedCurrency } from 'src/contexts/currency'
import { PaymentTypes } from '../../payment.type'

export default function PaymentSuccessfulModal({
  redirect,
  type,
}: {
  redirect: string
  type: PaymentTypes
}) {
  const router = useRouter()
  const { selectedCurrency, conversionFactor } = useSelectedCurrency()
  const { consent } = useCookieConsent()
  const searchParams = useSearchParams()

  const email = searchParams.get('email')
  const transactionId = searchParams.get('bid')
  const price = searchParams.get('price')

  const { getConvertedCurrency } = useCurrency()
  const format = useFormattedDate()

  useEffect(() => {
    switch (type) {
      case PaymentTypes.CHECKOUT:
        EecPurchaseDataLayer({
          bid: transactionId,
          currency: selectedCurrency.code,
          price: price ? +price * conversionFactor : 0,
        })
        break
      case PaymentTypes.GIFT_CARD:
        break
      case PaymentTypes.MARKETPLACE:
        break
    }
  }, [consent])

  return (
    <>
      <ConfettiLayer />
      <Modal
        isOpen={true}
        onClose={() => {}}
        isBgBlured={true}
        addCloseButton={false}
      >
        <VStack w="full" p={3}>
          <Box w="100px" h="100px">
            <LottiePlayer
              loop={false}
              play
              animationData={TickLottie}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Heading as="h2" mt="-5" st="payment.modal.completed.header" />
          <Text
            color="_gray"
            fontSize="sm"
            textAlign="center"
            st="payment.completed.description"
          />

          <Divider my="4" w="80%" alignSelf={'center'} />
          <VStack w="full" fontSize="sm" gap="0.75rem">
            <HStack w="full" justify="space-between">
              <Text color="_gray" st="payment.purchase.date" />
              <Text fontWeight="medium">{format(new Date())}</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text color="_gray" st="common.paid.amount" />
              <Text fontWeight="medium">
                {getConvertedCurrency(price, { includeCommaValues: true })}
              </Text>
            </HStack>
            {transactionId && (
              <HStack w="full" justify="space-between">
                <Text color="_gray" st="common.booking.id" />
                <Text fontWeight="medium">{transactionId}</Text>
              </HStack>
            )}
            {email && (
              <HStack w="full" justify="space-between">
                <Text color="_gray" st="common.email" />
                <Text fontWeight="medium">{email}</Text>
              </HStack>
            )}
          </VStack>
          <Button
            w="full"
            mt="4"
            id="payment-success-manage-booking"
            primary
            h="12"
            onClick={() => router.push(redirect)}
          >
            <Text st="common.general.continue" />
          </Button>
        </VStack>
      </Modal>
    </>
  )
}
