import { Box, HStack } from '@chakra-ui/react'
import { TransportBookingData } from 'ui/features/manage-booking-new/types/itinerary.type'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'

type CarrierCardProps = {
  transport: TransportBookingData
}
export default function CarrierCard({ transport }: CarrierCardProps) {
  return (
    <>
      {transport.carriers.map((carrier, idx) => {
        return (
          <Box
            key={idx}
            bg="_lightestgray"
            borderRadius="lg"
            w="full"
            my={2}
            p={1}
            border="1px solid"
            borderColor="_lightgray"
          >
            <HStack px={2} pt={1}>
              <Box
                w="4"
                h="4"
                borderRadius="full"
                overflow="hidden"
                position="relative"
              >
                <Image
                  fill
                  src={carrier.carrier_logo}
                  alt={carrier.carrier_name}
                />
              </Box>
              <Text fontSize="xs">{carrier.carrier_name}</Text>
            </HStack>
            <Box mt="2" bg="_white" borderRadius="lg" p={2}>
              <Text color="_gray" fontSize="xs" st="flight-info.general.pnr" />
              <Text>{transport.booking_data.pnr}</Text>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
