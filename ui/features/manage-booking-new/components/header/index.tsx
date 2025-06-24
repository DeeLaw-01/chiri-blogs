import { Box, HStack, VStack, Stack } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import StatusTag from '../status-tag'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { parseISO } from 'date-fns'
import SeatsCard from './seats-card'
import LuggageCard from './luggage-card'
import { BookingType } from '../../types/booking.type'
import { useResponsiveSizes } from 'src/contexts/responsive'
import isTripDisabled from '../../utils/isTripDisabled'

type ManageBookingHeaderProps = {
  booking: BookingType
}

export default function ManageBookingHeader({
  booking,
}: ManageBookingHeaderProps) {
  const { isMobile } = useResponsiveSizes()
  const formatDate = useFormattedDate()
  const startDate = formatDate(parseISO(booking.trip.start_date), false)
  const endDate = formatDate(parseISO(booking.trip.end_date), false)

  return (
    <Box position="relative" h="18rem" mt="16">
      <Box
        position="absolute"
        top="0"
        left="0"
        backgroundImage={`${booking?.trip.trip_photo}375160.png`}
        backgroundSize="cover"
        clipPath={'polygon(0 0,100% 0,100% calc(100% - 8vw),0 100%)'}
        w="full"
        h="20rem"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        bgGradient="linear(to-bl, transparent, black)"
        clipPath={'polygon(0 0,100% 0,100% calc(100% - 8vw),0 100%)'}
        w="full"
        h="20rem"
        opacity="0.75"
      />
      <Box
        position="absolute"
        h="20rem"
        clipPath={'polygon(0 0,100% 0,100% 100%,0 calc(90% - 4vw))'}
        w="full"
        top="0"
        left="0"
        bg="_lightestgray"
        zIndex="-1"
      />
      <Container
        zIndex="1"
        position="relative"
        h="full"
        alignContent={'flex-end'}
        pb={'3rem'}
        maxW="100ch"
      >
        <Stack
          direction={['column', 'row']}
          w="full"
          justify="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <VStack alignItems="flex-start">
            <Heading
              as="h1"
              fontSize="4xl"
              color="white"
              textShadow={'black 1px 0 45px;'}
            >
              {booking.trip.title}
            </Heading>
            <HStack>
              <StatusTag status={booking.trip.status} />
              <Text color="white">•</Text>
              <Text
                fontSize="sm"
                color="_white"
                st="common.travelers"
                sd={{ count: booking.passengers.length }}
              />
              <Text color="white">•</Text>
              <Text fontSize="sm" color="_white">
                {startDate} - {endDate}
              </Text>
            </HStack>
          </VStack>
          {!isMobile && !isTripDisabled(booking.trip.status) && (
            <VStack mb="-2rem">
              <LuggageCard />
              {!booking.already_purchased_seats && (
                <SeatsCard booking={booking} />
              )}
            </VStack>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
