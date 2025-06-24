import { VStack } from '@chakra-ui/react'
import { useRouter } from 'src/i18n/router'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

export default function End() {
  const router = useRouter()

  return (
    <VStack w="full" alignSelf="center" textAlign="center" gap="2">
      <Heading
        as="h1"
        fontWeight="medium"
        st="feedback-page.feedback.submitted.heading"
      />

      <Text
        color="_gray"
        fontSize={{ base: 'sm', md: 'md' }}
        st="feedback-page.feedback.submitted.description"
      />

      <Button
        asLink
        arrow
        id="feedback-to-homepage"
        mt="8"
        onClick={() => router.push('/')}
      >
        <Text st="common.general.back" />
      </Button>
    </VStack>
  )
}
