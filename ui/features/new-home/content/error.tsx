import LottiePlayer from 'ui/shared/lottie-player'
import lottieJson from './error-lottie.json'
import { VStack, GridItem } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

export default function Error() {
  return (
    <GridItem gridColumn={'1 / -1'}>
      <VStack w="full" justify="center" textAlign="center">
        <LottiePlayer
          loop
          play
          animationData={lottieJson}
          style={{
            width: 'min(50vw, 300px)',
            height: 'auto',
          }}
        />
        <Heading as="h4" st="home-page.generating.error.heading" />
        <Text
          color="_gray"
          fontSize={{ base: 'sm', md: 'md' }}
          maxW="500px"
          st="home-page.generating.error.description"
        />
      </VStack>
    </GridItem>
  )
}
