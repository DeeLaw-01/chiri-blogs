import { Box, VStack, HStack } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import formatHours from 'src/utils/getFormattedHours'
import LinedVStack from 'ui/shared/lined-vstack'
import getDepartureTimeIsDifferentFromArrivalDate from 'src/utils/getDepartureTimeIsDifferentFromArrivalDate'
import Tooltip from 'ui/primitives/Tooltip'
import TransportIcon from '../transportIcon'
import { Transport } from 'src/shared-types/transport.type'

type TransportLinedVStackProps = {
  transport: Transport
}

export default function TransportLinedVStack({
  transport,
}: TransportLinedVStackProps) {
  return (
    <LinedVStack
      pt="2"
      topMargin={20}
      align="flex-start"
      minW={'30%'}
      ml="40px"
    >
      <VStack alignItems="flex-start" w="full" px="15px">
        <HStack alignItems="flex-start">
          <Box
            minW="8px"
            minH="8px"
            bg={'_gray'}
            border="1px"
            borderRadius="full"
            mt="10px"
            ml="-15px"
            color="white"
            fontSize="2xs"
            textAlign="center"
          />
          <HStack alignItems="flex-start" fontSize="sm">
            <Text ml="-52px" mr="15px" color="_gray" fontSize="xs">
              {format(parseISO(transport.departure_time), 'HH:mm')}
            </Text>
            <Text>
              {transport.origin}{' '}
              <Text color="_gray" as={'span'}>
                {transport.origin_station_name}
              </Text>
            </Text>
          </HStack>
        </HStack>
        <HStack
          position="relative"
          left="-45px"
          borderRadius="md"
          w="full"
          p="2"
          fontSize="xs"
        >
          <TransportIcon modes={transport.modes} />
          <HStack pl="10px">
            {transport.carriers.map((carrier, index) => (
              <Tooltip renderOnMobile label={carrier.carrier_name} key={index}>
                <Box
                  w={4}
                  h={4}
                  borderRadius={'full'}
                  overflow={'hidden'}
                  pos="relative"
                >
                  {carrier.carrier_logo && (
                    <Image
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      src={carrier.carrier_logo}
                      alt={carrier.carrier_name}
                    />
                  )}
                </Box>
              </Tooltip>
            ))}
            <Text color="_gray">{formatHours(transport.duration)}</Text>
          </HStack>
        </HStack>
        <HStack alignItems="flex-start">
          <Box
            minW="8px"
            minH="8px"
            bg={'_gray'}
            border="1px"
            borderRadius="full"
            mt="10px"
            ml="-15px"
            color="white"
            fontSize="2xs"
            textAlign="center"
          />
          <VStack pt="1">
            <HStack alignItems="flex-start" fontSize="sm">
              <Text
                ml="-52px"
                mr="15px"
                color="_gray"
                fontSize="xs"
                position={'relative'}
              >
                {format(parseISO(transport.arrival_time), 'HH:mm')}
                <Text as={'sup'} position={'absolute'} top={0} right={-1}>
                  {getDepartureTimeIsDifferentFromArrivalDate(
                    transport.departure_time,
                    transport.arrival_time
                  )}
                </Text>
              </Text>
              <Text>
                {transport.destination}{' '}
                <Text color="_gray" as={'span'}>
                  {transport.destination_station_name}
                </Text>
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </LinedVStack>
  )
}
