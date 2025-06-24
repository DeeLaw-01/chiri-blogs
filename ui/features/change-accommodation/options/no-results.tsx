import { Box, VStack } from '@chakra-ui/react'
import Illustration from '@/icons/dog.svg'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

export default function NoResults() {
  return (
    <VStack w="full" h="70vh" justify="center">
      <VStack textAlign="center" maxW="45rem" mx="auto">
        <Heading as="h2" st="common.no.results" fontWeight="normal" />
        <Text
          color="_gray"
          mb="5"
          fontSize={{ base: 'xs', md: 'sm' }}
          st="common.no.results.description"
        />

        <Box w={{ base: '25%', md: '10%' }}>
          <Illustration width="100%" />
        </Box>
      </VStack>
    </VStack>
  )
}
