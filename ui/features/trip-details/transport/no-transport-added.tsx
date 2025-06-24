import { Box, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import HotelIllustration from '@/icons/hotel/hotel-illustration.svg'

export default function NoTransportAdded({
  setShowTransport,
}: {
  setShowTransport: (show: boolean) => void
}) {
  return (
    <VStack w="full" justifyContent="center" textAlign="center">
      <Box w={{ base: '70%', md: '40%' }}>
        <HotelIllustration />
      </Box>
      <Heading
        as="h2"
        fontWeight="normal"
        st="new-trip-page:accommodation.no.stays.title"
      />
      <Button
        px={6}
        secondary
        id="add-stays"
        onClick={() => setShowTransport(false)}
      >
        <Text>Add transport</Text>
      </Button>
    </VStack>
  )
}
