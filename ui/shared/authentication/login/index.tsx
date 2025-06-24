import { Box, HStack, VStack, Divider } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import LoginAlerts from './alerts'
import FacebookLoginButton from './facebook-button'
import GoogleLoginButton from './google-button'
import MailLogin from './mail'
import { AuthState, useAuthAtoms } from '../useAuthAtoms'

export default function Login(): JSX.Element {
  const { setState } = useAuthAtoms()

  return (
    <Box my="5">
      <LoginAlerts />
      <Heading
        as="h2"
        textAlign={'center'}
        st="common.login.modal.header"
        mb={3}
      />
      <VStack>
        {/* EMAIL/PASSWORD */}
        <MailLogin />

        {/* SEPARATION DIVIDER */}
        <HStack w={'80%'} mx={'auto'} my={3}>
          <Divider />
          <Text fontSize={'xs'} st="common.login.modal.or" />
          <Divider />
        </HStack>

        {/* SOCIALS */}
        <VStack w="full" gap="3">
          <FacebookLoginButton />
          <GoogleLoginButton />
        </VStack>

        {/* SIGNUP */}
        <HStack w="full" justify={'center'} fontSize={'sm'}>
          <Text st="common.login.modal.no.account" />
          <Button
            id="signup-button"
            asLink
            onClick={() => setState(AuthState.SIGNUP)}
          >
            <Text st="common.signup" />
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
