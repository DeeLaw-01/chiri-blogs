'use client'

import { Flex } from '@chakra-ui/react'
import useSessionStorage from 'src/hooks/useSessionStorage'
import SignupForm from './signup-form'
import SignupSuccess from './signup-success'
import { useState } from 'react'

export default function EmailSignup() {
  const [isUserSignedUp, setIsUserSignedUp] = useState<boolean>()
  const [isUserSignedUpSS] = useSessionStorage<boolean>('isUserSignedUp')

  const isSignedUp = isUserSignedUpSS || isUserSignedUp

  return (
    <Flex
      bg="_lightestgray"
      position="relative"
      p={8}
      w="full"
      maxW="500px"
      borderRadius="lg"
      justifySelf="center"
      m="0 auto"
      transition="all 1s ease"
    >
      {!isSignedUp && <SignupForm setIsUserSignedUp={setIsUserSignedUp} />}
      {isSignedUp && <SignupSuccess />}
    </Flex>
  )
}
