import { Box, VStack } from '@chakra-ui/react'
import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import LottiePlayer from 'ui/shared/lottie-player'
import ErrorLottie from './error-lottie.json'
import { usePathname, useRouter } from 'src/i18n/router'
import { useSearchParams } from 'next/navigation'

export default function PaymentErrorModal() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  const handleRoute = () => {
    let route = pathname
    if (sessionId) route += `?sessionId=${sessionId}`
    router.push(route)
  }

  return (
    <Modal
      isOpen={true}
      onClose={() => {}}
      isBgBlured={true}
      addCloseButton={false}
    >
      <VStack w="full" p={3}>
        <Box w="100px" h="100px" p="5">
          <LottiePlayer
            loop={false}
            play
            animationData={ErrorLottie}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Heading as="h2" mt="-5" st="payment.error.header" />
        <Text
          color="_gray"
          fontSize="sm"
          textAlign="center"
          st="payment.error.description"
        />

        <Button
          w="full"
          mt="4"
          id="payment-success-manage-booking"
          primary
          h="12"
          onClick={handleRoute}
        >
          <Text st="common.general.continue" />
        </Button>
      </VStack>
    </Modal>
  )
}
