import { Box, HStack, SimpleGrid } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button, { CustomButtonProps } from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import TransportBaseCard from 'ui/features/trip-details/transport/transport-card/transport-base-card'
import TransportCardAlerts from '../transport-card-alerts'
import { TransportBookingData } from 'ui/features/manage-booking-new/types/itinerary.type'
import BoardingStatusTag from '../boarding-status-tag'
import getTransportStatus from 'ui/features/manage-booking-new/utils/getTransportStatus'

type TransportCardBookingMobileProps = {
  transport: TransportBookingData
} & Omit<CustomButtonProps, 'id'>

export default function TransportCardBookingMobile({
  transport,
  ...rest
}: TransportCardBookingMobileProps) {
  const hasSeats = transport.booking_data.has_seats

  return (
    <Box w="full">
      <HStack w="full" justify="space-between">
        <Heading as="h3" fontWeight="normal" mb="2" noOfLines={1}>
          {transport.destination}
        </Heading>
        {!rest.isDisabled && (
          <BoardingStatusTag status={getTransportStatus(transport)} mb="2" />
        )}
      </HStack>
      <TransportCardAlerts transport={transport} />
      <TransportBaseCard transport={transport} _hover={{}} animate>
        <HStack w="full" justify="space-between" px={2}>
          <SimpleGrid
            columns={2}
            spacing={1}
            w="full"
            my="-1"
            fontSize="0.5rem"
          >
            <Box>
              <Text color="gray" lineHeight="1" st="flight-info.general.pnr" />
              <Text fontSize="2xs" noOfLines={1}>
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

              <Text fontSize="2xs" noOfLines={1}>
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
              <Box fontSize="2xs" noOfLines={1}>
                {hasSeats && (
                  <Text
                    st="new-manage-booking-page.seats.purchased"
                    textTransform={'uppercase'}
                  />
                )}
                {!hasSeats && <Text st="flight-info.general.random" />}
              </Box>
            </Box>
            <Box>
              <Text
                color="gray"
                textTransform="uppercase"
                lineHeight="1"
                st="flight-info.general.class"
              />
              <Text
                fontSize="2xs"
                st="flight-info.card.standard"
                textTransform="uppercase"
              />
            </Box>
          </SimpleGrid>
          <Button
            secondary
            minW="fit-content"
            id="random"
            fontSize="sm"
            {...rest}
          >
            <Text st="flight-info.general.boarding.pass" />
          </Button>
        </HStack>
      </TransportBaseCard>
    </Box>
  )
}
