import { Box, BoxProps, VStack } from '@chakra-ui/react'
// import FacebookLogin from 'ui/features/profile/login/facebook'
// import GoogleLogin from 'ui/features/profile/login/google'
// import MailLogin from 'ui/features/profile/login/mail'
import Heading from 'ui/primitives/Heading'
// import Text from 'ui/primitives/Text'
import FlightHeartPathIllustration from '@/icons/illustrations/flight-heart-path.svg'
import FindBookingForm from './find-booking-form'
// import FacebookLoginButton from 'ui/shared/authentication/login/facebook-button'
// import GoogleLoginButton from 'ui/shared/authentication/login/google-button'

type SignInViewProps = {} & BoxProps

export default function SignInView({ ...rest }: SignInViewProps) {
  return (
    <Box textAlign="center" pos="relative" {...rest}>
      <Box
        pos="absolute"
        right="0"
        top="1rem"
        color="primary"
        display={{ base: 'none', md: 'initial' }}
      >
        <FlightHeartPathIllustration width="150" />
      </Box>
      <Box mt="2rem">
        <Heading as="h1" fontSize="4xl" st="new-manage-booking-page.title" />

        {/* <Text
          color="_gray"
          fontSize="sm"
          as="h2"
          st="new-manage-booking-page.sign.in.to.view.booking"
        /> */}
      </Box>
      <VStack w="full" mt="8">
        {/* <FacebookLogin />
        <GoogleLogin />
        <MailLogin /> */}
        {/* <HStack w="full" my="4">
          <Divider />
          <Text color="_gray" fontSize="xs" st="common.login.modal.or" />

          <Divider />
        </HStack> */}
        <FindBookingForm />
      </VStack>
    </Box>
  )
}
