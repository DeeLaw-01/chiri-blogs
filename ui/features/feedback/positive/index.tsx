import { VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'
import { TRUSTPILOT_REVIEW_LINK } from 'src/data/links'
import { MotionBox } from 'ui/primitives/Motion'
import { StateTransition } from '../animation-variants'
import { FeedbackForm } from '../negative'

type PositiveProps = {
  submit: (body: FeedbackForm) => void
}

export default function Positive({ submit }: PositiveProps) {
  submit({ email: '', message: '' }) // Backend needs these on the endpoint.

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={StateTransition}
      transition={{ duration: 0.1 }}
    >
      <VStack w="full" alignSelf="center" textAlign="center" gap="2">
        <Heading as="h2" st="feedback-page.feedback.positive.heading" />
        <Text color="_gray" st="feedback-page.feedback.positive.description" />

        <Link href={`${TRUSTPILOT_REVIEW_LINK}`} isExternal w="full" mt="8">
          <Button id="feedback-review" w="full" primary>
            <Text st="feedback-page.feedback.positive.link" />
          </Button>
        </Link>
      </VStack>
    </MotionBox>
  )
}
