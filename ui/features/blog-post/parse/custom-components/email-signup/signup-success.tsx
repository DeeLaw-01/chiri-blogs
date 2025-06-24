import { Box, VStack } from '@chakra-ui/react'
import LottiePlayer from 'ui/shared/lottie-player'
import SuccessLottie from './lottie/success.json'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

export default function SignupSuccess() {
  return (
    <VStack w="full" textAlign="center">
      <Box h={{ base: '50px', md: '75px' }} w={{ base: '50px', md: '75px' }}>
        <LottiePlayer loop={false} play animationData={SuccessLottie} />
      </Box>
      <Heading as="h3" st="common.email.confirm.popup.title" />
      <Text
        fontSize="sm"
        color="_gray"
        st="common.footer.email.receive.deals"
      />
    </VStack>
  )
}
