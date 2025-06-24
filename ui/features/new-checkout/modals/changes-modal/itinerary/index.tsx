import { Box, Stack, VStack } from '@chakra-ui/react'
import { Changes } from 'ui/features/new-checkout/checkout.type'
import Text from 'ui/primitives/Text'
import TransportInfoSmall from 'ui/features/trip-details/transport/transport-card/transport-info-small'
import Heading from 'ui/primitives/Heading'

type ItineraryChangeProps = {
  changes: Changes
}

export default function ItineraryChange({ changes }: ItineraryChangeProps) {
  return (
    <VStack w="full" textAlign="center" pt={5}>
      <Heading
        as="h1"
        st="checkout-page.itinerary.change.modal.heading"
        textTransform={'capitalize'}
      />
      <Box fontSize="sm">
        <Text
          color="_gray"
          st="checkout-page.itinerary.change.modal.description"
        />
      </Box>
      <Text st="checkout-page.itinerary.change.modal.before.heading" />
      <Stack
        direction={{ base: 'column', md: 'column' }}
        align={'flex-start'}
        spacing={0}
      >
        {changes?.before?.flights.map((transport, idx) => (
          <TransportInfoSmall key={idx} transport={transport} w="full" />
        ))}
      </Stack>
      <Text st="checkout-page.itinerary.change.modal.after.heading" />
      <Stack
        direction={{ base: 'column', md: 'column' }}
        align={'flex-start'}
        spacing={0}
      >
        {changes?.after?.flights.map((transport, idx) => (
          <TransportInfoSmall key={idx} transport={transport} w="full" />
        ))}
      </Stack>
    </VStack>
  )
}
