import { VStack } from '@chakra-ui/react'
import RateLottieItem from './lotties/rate-lottie-item'
import { RateData, RateValue } from './data'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { MotionBox, MotionHStack } from 'ui/primitives/Motion'
import { StateTransition, RateItemContainer } from '../animation-variants'

type RateProps = {
  handleSelect: (value: RateValue) => void
}

export default function Rate({ handleSelect }: RateProps) {
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={StateTransition}
      transition={{ duration: 0.1 }}
    >
      <VStack w="full" alignSelf="center" textAlign="center" gap="2">
        <Heading
          as="h1"
          fontWeight="medium"
          st="feedback-page.feedback.view.heading"
        />

        <Text
          color="_gray"
          fontSize={{ base: 'sm', md: 'md' }}
          st="feedback-page.feedback.view.description"
        />

        <MotionHStack
          variants={RateItemContainer}
          gap="1"
          w="full"
          justify="space-between"
          maxW="500px"
          px={3}
          mt="8"
        >
          {RateData.map((data) => (
            <RateLottieItem
              key={data.value}
              data={data}
              onClick={() => handleSelect(data.value)}
            />
          ))}
        </MotionHStack>
      </VStack>
    </MotionBox>
  )
}
