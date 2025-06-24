import { Box, VStack, HStack, SimpleGrid } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button, { CustomButtonProps } from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import BoardingStatusTag from '../boarding-status-tag'
import TransportBaseCard from 'ui/features/trip-details/transport/transport-card/transport-base-card'
import TransportCardAlerts from '../transport-card-alerts'
import { TransportBookingData } from 'ui/features/manage-booking-new/types/itinerary.type'
import getTransportStatus from 'ui/features/manage-booking-new/utils/getTransportStatus'

type TransportCardBookingDesktopProps = {
  transport: TransportBookingData
} & Omit<CustomButtonProps, 'id'>

export default function TransportCardBookingDesktop({
  transport,
  ...rest
}: TransportCardBookingDesktopProps) {
  const hasSeats = transport.booking_data.has_seats

  return (
    <Box w="full">
      <Heading as="h3" fontWeight="normal" mb="2">
        {transport.destination}
      </Heading>

      <TransportCardAlerts transport={transport} />
      <TransportBaseCard transport={transport} _hover={{}} mb={6} animate>
        <VStack w="full" justify="space-between">
          <HStack
            color="_darkgray"
            w="full"
            justifyContent="flex-end"
            mt="-2"
            mb="2"
            minH="3"
          >
            {!rest.isDisabled && (
              <BoardingStatusTag status={getTransportStatus(transport)} />
            )}
          </HStack>
          <SimpleGrid columns={2} spacing={2} w="full" my="-1" fontSize="2xs">
            <Box>
              <Text color="gray" lineHeight="1" st="flight-info.general.pnr" />
              <Text fontSize="sm" noOfLines={1}>
                {transport.booking_data.pnr ?? ''}
              </Text>
            </Box>
            <Box>
              <Text
                color="gray"
                lineHeight="1"
                st="common.transport.aircraft"
                sd={{ count: 1 }}
                textTransform={'uppercase'}
              />

              <Text fontSize="sm" noOfLines={1}>
                {transport.booking_data.flight_number}
              </Text>
            </Box>
            <Box>
              <Text
                color="gray"
                lineHeight="1"
                st="flight-info.general.seat"
                textTransform={'uppercase'}
              />
              <Box fontSize="sm" noOfLines={1}>
                {hasSeats && (
                  <Text st="new-manage-booking-page.seats.purchased" />
                )}
                {!hasSeats && <Text st="flight-info.general.random" />}
              </Box>
            </Box>
            <Box>
              <Text
                color="gray"
                lineHeight="1"
                st="flight-info.general.class"
              />

              <Text fontSize="sm" st="flight-info.card.standard" />
            </Box>
          </SimpleGrid>
          <Button secondary id="random" mt="4" mb="-4" w="full" {...rest}>
            <Text st="flight-info.general.boarding.pass" />
          </Button>
        </VStack>
      </TransportBaseCard>
    </Box>
  )
}
