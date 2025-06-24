import { HStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import SignInView from '../sign-in-view'
import SignInBanner from './sign-in-banner'

export default function SignInDesktop() {
  return (
    <Card overflow="hidden" mt="16" mb="8">
      <HStack alignItems="stretch">
        <SignInBanner w="50%" />
        <SignInView p="14" w="50%" />
      </HStack>
    </Card>
  )
}
