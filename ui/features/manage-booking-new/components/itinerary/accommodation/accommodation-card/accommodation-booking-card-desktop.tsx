import { Box, HStack, VStack } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Text from 'ui/primitives/Text'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Image from 'ui/primitives/Image'
import Stars from 'ui/shared/stars'
import LocationIcon from '@/icons/location-pin.svg'
import Button from 'ui/primitives/Button'
import theme from 'src/styles/theme'
import Tag from 'ui/primitives/Tag'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import CheckInCheckOutBox from './checkin-checkout-box'
import ReviewScore from 'ui/features/trip-details/accommodation/review-score'
import isDetailsDisabled from 'ui/features/manage-booking-new/utils/isDetailsDisabled'

type BookingAccommodationCardDesktopProps = {
  accommodation: HotelDetails
}
export default function BookingAccommodationCardDesktop({
  accommodation,
}: BookingAccommodationCardDesktopProps) {
  const { setShowAccommodationBooking, booking } = useManageBookingAtoms()

  return (
    <Card overflow="hidden" mb="8" alignItems="stretch" display="flex">
      <HStack w={'full'}>
        <Box w="full" maxW="25%" position="relative" minH="100%">
          <Image fill alt={accommodation.name} src={accommodation.photo_url} />
        </Box>
        <Box w="full" px="2" h={'full'} py={4}>
          <Heading as="h4" fontSize="lg" fontWeight="normal">
            <HStack w="full" justify="space-between">
              <Text as="span" pr="2" noOfLines={1}>
                {accommodation.name}
              </Text>
              <ReviewScore accommodation={accommodation} />
            </HStack>
            <Stars
              amount={accommodation.stars}
              size="sm"
              display={'inline-block'}
              mb="2"
            />
          </Heading>
          <VStack mt="0 !important" alignItems="flex-start">
            <Text fontSize="sm" color="_gray" noOfLines={4}>
              {accommodation.hotel_description}
            </Text>

            <HStack fontSize="xs" color="_gray" gap="0.1rem">
              <LocationIcon fill={theme.colors._gray} width="10" height="10" />
              <Text pl="1" marginInlineStart={'0 !important'} noOfLines={1}>
                {accommodation.address}
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box
          w="full"
          maxW="30%"
          p={4}
          borderLeft="1px solid"
          borderColor="_lightgray"
        >
          <HStack w="full" justify="flex-end">
            <Tag blue textTransform={'uppercase'}>
              <Text
                notag
                st="common:rooms.amount"
                sd={{ count: accommodation.rooms.length }}
              />
            </Tag>
          </HStack>
          <CheckInCheckOutBox accommodation={accommodation} />
          <Button
            secondary
            id="view-more-booking-accommodation-details"
            w="full"
            mt="3"
            onClick={() =>
              setShowAccommodationBooking({ accommodation: accommodation })
            }
            isDisabled={isDetailsDisabled(booking?.trip.status)}
          >
            <Text px={4} st="hotel-info.card.view.details" />
          </Button>
        </Box>
      </HStack>
    </Card>
  )
}
