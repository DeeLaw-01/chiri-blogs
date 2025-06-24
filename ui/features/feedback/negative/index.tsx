import { VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { FormProvider, useForm } from 'react-hook-form'
import { MotionBox } from 'ui/primitives/Motion'
import MailInput from './inputs/mail'
import MessageInput from './inputs/message'
import Button from 'ui/primitives/Button'
import { StateTransition } from '../animation-variants'

export type FeedbackForm = {
  email: string
  message: string
}

type NegativeProps = {
  submit: (body: FeedbackForm) => void
}

export default function Negative({ submit }: NegativeProps) {
  const methods = useForm<FeedbackForm>({})

  const onSubmit = async (data: FeedbackForm) => {
    submit(data)
  }

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={StateTransition}
      transition={{ duration: 0.1 }}
    >
      <VStack w="full" alignSelf="center" textAlign="center" gap="2">
        <Heading as="h2" st="feedback-page.feedback.negative.heading" />
        <Text color="_gray" st="feedback-page.feedback.negative.description" />

        <FormProvider {...methods}>
          <VStack as="form" w="full" onSubmit={methods.handleSubmit(onSubmit)}>
            <MailInput />
            <MessageInput />
            <Button
              primary
              w="full"
              id="negative-review-submit-button"
              type="submit"
            >
              <Text st="common.general.submit" />
            </Button>
          </VStack>
        </FormProvider>
      </VStack>
    </MotionBox>
  )
}
