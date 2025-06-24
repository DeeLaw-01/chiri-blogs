import { Box, Stack, Center, VStack } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import DogIcon from '@/icons/dog.svg'
import UnsubscribeView from 'ui/features/unsubscribe/unsubscribe'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

type UnsubscribeProps = {
  email: string
}

export default function Unsubscribe({ email }: UnsubscribeProps) {
  return (
    <Container w="4xl" mt="8">
      <Stack
        direction={['column', 'row']}
        justifyContent={'center'}
        spacing={10}
        mb={20}
      >
        <Box p={5}>
          <Center>
            <DogIcon width="133" height="182" />
          </Center>
        </Box>
        <VStack alignItems={'flex-start'} w="full">
          <Heading as="h1" st="unsubscribe-page.header" />
          <Text
            mt="1 !important"
            color="_gray"
            st="unsubscribe-page.description"
          />
          <UnsubscribeView email={email} />
        </VStack>
      </Stack>
    </Container>
  )
}
