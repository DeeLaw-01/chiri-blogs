'use client'

import { useState } from 'react'
import postFeedbackQuery from 'src/api/queries/post/feedback/postFeedbackQuery'
import Rate from './rate'
import Positive from './positive'
import Negative, { FeedbackForm } from './negative'
import useMutation from 'src/api/useMutation'
import { RateValue } from './rate/data'
import LogoHeader from './logo-header'
import { Box, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import End from './end'

enum State {
  Rate,
  Positive,
  Negative,
  End,
}

export default function FeedbackView(): JSX.Element {
  const [rating, setRating] = useState<RateValue>()
  const [state, setState] = useState<State>(State.Rate)
  const { trigger } = useMutation((d) => postFeedbackQuery(d))

  const handleSelect = (value: RateValue): void => {
    setRating(value)

    if (value > 3) setState(State.Positive)
    else setState(State.Negative)
  }

  const submit = async (body: FeedbackForm) => {
    await trigger({ ...body, stars: rating })

    if (state === State.Negative) setState(State.End)
  }

  return (
    <VStack w="full" mb={12} pb={12} alignItems="center">
      <Box maxW="500px">
        <LogoHeader value={rating} />
        <AnimatePresence mode="wait">
          {state === State.Rate && <Rate key="1" handleSelect={handleSelect} />}
          {state === State.Positive && <Positive key="2" submit={submit} />}
          {state === State.Negative && <Negative key="3" submit={submit} />}
          {state === State.End && <End key="4" />}
        </AnimatePresence>
      </Box>
    </VStack>
  )
}
