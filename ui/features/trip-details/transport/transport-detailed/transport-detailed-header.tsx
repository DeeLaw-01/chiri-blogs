import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import formatHours from 'src/utils/getFormattedHours'
import Heading from 'ui/primitives/Heading'
import getDepartureTimeIsDifferentFromArrivalDate from 'src/utils/getDepartureTimeIsDifferentFromArrivalDate'
import TransportText from '../transport-text'
import { Transport } from 'src/shared-types/transport.type'
import LuggageInfo from '../transport-card/transport-luggage-info'

type TransportDetailedHeaderProps = {
  transport: Transport
}

export default function TransportDetailedHeader({
  transport,
}: TransportDetailedHeaderProps) {
  const formatDate = useFormattedDate()

  return (
    <>
      <Box position="relative" w="full" zIndex="-1">
        <Box h="18rem" pos="relative">
          <Image
            fill
            alt="World Map"
            src="/static/home-page/world-map.png"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgGradient="linear(to-b, transparent 30%, white 70%)"
        />
      </Box>
      <Box px={4} mt="-24">
        <Heading as="h2" fontWeight="normal">
          <TransportText modes={transport.modes} />{' '}
          <Text
            notag
            st="flight-info:from.destination"
            sd={{ destination: transport.origin }}
          />{' '}
          <Text
            notag
            st="flight-info:to.destination"
            sd={{ destination: transport.destination }}
          />
        </Heading>
        <HStack fontSize="xs" w="full" spacing="5" mt="1">
          <Text as="span">{formatHours(transport.duration)}</Text>
          <Text>
            {formatDate(transport.departure_time, false)}
            <Text as="sup">
              {getDepartureTimeIsDifferentFromArrivalDate(
                transport.departure_time,
                transport.arrival_time
              )}
            </Text>
          </Text>

          <HStack gap="0">
            <LuggageInfo transport={transport} />
          </HStack>
        </HStack>
      </Box>
    </>
  )
}
