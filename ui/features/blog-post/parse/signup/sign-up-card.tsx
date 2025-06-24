'use client'

import { Stack } from '@chakra-ui/react'
import useSessionStorage from 'src/hooks/useSessionStorage'
import EmailSignupForm from 'ui/features/email-signup-form'

export default function SignUpCard(): JSX.Element {
  const [isUserSignedUp] = useSessionStorage('isUserSignedUp')

  return (
    <>
      {!isUserSignedUp && (
        <Stack w="full" my={5}>
          <Stack
            w={{ base: 'full', md: '550px' }}
            maxW="550px"
            m={'auto'}
            bg="_lightestgray"
            alignSelf="flex-start"
            borderRadius="lg"
            textAlign={'center'}
            pos={'relative'}
            overflowX={{ base: 'hidden' }}
          >
            <Stack p={{ base: 10, md: '4rem' }}>
              <EmailSignupForm
                textColor="_black"
                header={'blog-page.email.banner.header'}
              />
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  )
}
