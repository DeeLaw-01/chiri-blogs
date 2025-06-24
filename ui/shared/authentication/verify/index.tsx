import { Box, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import TickLottie from 'ui/shared/payment/modals/payment-successful/tick-lottie.json'
import LottiePlayer from 'ui/shared/lottie-player'

export default function Verify() {
  return (
    <VStack py={8} textAlign="center">
      <Box w="100px" h="100px">
        <LottiePlayer
          loop={false}
          play
          animationData={TickLottie}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Heading as="h2" st={'common.verify.email.heading'} />
      <Text secondary st={'common.verify.email.description'} />
    </VStack>
  )
}
