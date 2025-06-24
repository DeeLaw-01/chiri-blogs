import { Box, HStack } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { Transport } from 'src/shared-types/transport.type'
import Button from 'ui/primitives/Button'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

type TransportOrderDetailProps = {
  transport: Transport
}

export default function TransportOrderDetail({
  transport,
}: TransportOrderDetailProps) {
  const formatDate = useFormattedDate()
  const { setShowTransportDetails } = useCheckoutAtoms()

  return (
    <HStack w="full" justify={'space-between'}>
      <HStack>
        <Box
          w="2.25rem"
          h="2.25rem"
          borderRadius="md"
          bg={{ base: '_white', md: '_lightestgray' }}
          pos="relative"
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <HStack maxW={8} maxH={8}>
            {transport.carriers.map((carrier, idx) => {
              if (idx > 1) return
              return (
                <Box
                  key={idx}
                  minW="4"
                  minH="4"
                  borderRadius={'full'}
                  overflow={'hidden'}
                  pos="relative"
                  ml={
                    idx > 0
                      ? `-17px`
                      : transport.carriers.length > 1
                      ? '-3px'
                      : 0
                  }
                  zIndex={3 - idx}
                >
                  <Image
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    src={carrier.carrier_logo}
                    alt={carrier.carrier_name}
                    sizes="100%"
                  />
                </Box>
              )
            })}
          </HStack>
        </Box>
        <Box>
          <Text noOfLines={1} fontSize="xs">
            {transport.origin} - {transport.destination}
          </Text>
          <Text fontSize="2xs" color="_gray">
            {formatDate(transport.departure_time, false)}
            {format(parseISO(transport.departure_time), 'HH:mm')} {' - '}
            {formatDate(transport.arrival_time, false)}
            {format(parseISO(transport.arrival_time), 'HH:mm')}
          </Text>
        </Box>
      </HStack>
      <Button
        onClick={() => {
          setShowTransportDetails({ transport: transport })
        }}
        fontSize="xs"
        fontWeight="normal"
        asLink
        id="view-more-itinerary"
      >
        <Text st="common.view.more" />
      </Button>
    </HStack>
  )
}
