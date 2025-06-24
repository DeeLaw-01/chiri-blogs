import { VStack, HStack, Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import TransportText from './transport-text'
import MoreLuggageCard from '../overview/more-luggage-card'
import TransportChangeCard from './transport-card/transport-change-card'

export default function TransportOverview() {
  const formatDate = useFormattedDate()
  const { transportations } = useTripDetailsAtoms()

  return (
    <VStack alignItems={'flex-start'} w="full">
      <HStack w="full" justifyContent="space-between" mb="5" wrap={'wrap'}>
        <Heading
          as="h1"
          mb="5"
          fontWeight="normal"
          st="new-trip-page:transport.header.transport"
        />
        {/* {transportations.length > 0 && (
          <Button
            id="remove-accommodation"
            asLink
            onClick={() => handleRemoveAllTransport()}
          >
            <Text notag>Remove transportation</Text>
          </Button>
        )} */}
      </HStack>

      {/* 
      {showTransport && (
        <>
          <NoTransportAdded setShowTransport={setShowTransport} />
        </>
      )} */}

      {transportations.map((transport, idx) => {
        return (
          <Box w="full" key={idx}>
            <HStack
              justifyContent={'space-between'}
              mb="2"
              alignItems="flex-start"
            >
              <Heading as="h3" fontWeight="normal" pr="4">
                <TransportText modes={transport.modes} />{' '}
                <Text
                  as="span"
                  st="new-trip-page:to.destination"
                  sd={{ destination: transport.destination }}
                  pr="2"
                />
                <Text
                  as="span"
                  fontSize="xs"
                  color="_gray"
                  display="inline-block"
                >
                  {formatDate(transport.departure_time, false)}
                </Text>
              </Heading>
            </HStack>
            <TransportChangeCard transport={transport} />
          </Box>
        )
      })}

      <MoreLuggageCard />
    </VStack>
  )
}
