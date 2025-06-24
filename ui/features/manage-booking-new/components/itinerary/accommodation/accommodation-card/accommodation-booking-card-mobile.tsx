import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Text from 'ui/primitives/Text'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Image from 'ui/primitives/Image'
import Stars from 'ui/shared/stars'
import LocationIcon from '@/icons/location-pin.svg'
import Button from 'ui/primitives/Button'
import theme from 'src/styles/theme'
// import Tag from 'ui/primitives/NewTag'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import ReviewScore from 'ui/features/trip-details/accommodation/review-score'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import isDetailsDisabled from 'ui/features/manage-booking-new/utils/isDetailsDisabled'

type BookingAccommodationCardMobileProps = {
  accommodation: HotelDetails
}
export default function BookingAccommodationCardMobile({
  accommodation,
}: BookingAccommodationCardMobileProps) {
  const formatDate = useFormattedDate()
  const { setShowAccommodationBooking, booking } = useManageBookingAtoms()

  return (
    <Card overflow="hidden" mb="8">
      <VStack>
        <Box w="full" h="10rem" position="relative">
          <Image
            fill
            alt={accommodation.name}
            src={accommodation.photo_url}
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box w="full" px="4">
          <Heading as="h4" fontSize="md" fontWeight="normal">
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
            <Text fontSize="xs" color="_gray" noOfLines={2}>
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
        <Divider />
        <HStack w="full" justify="flex-end" px={4} alignItems="stretch" pb={2}>
          {/* <Tag blue textTransform={'uppercase'}>
              <Text
                notag
                st="common:rooms.amount"
                sd={{ count: accommodation.rooms.length }}
              />
            </Tag> */}

          <HStack fontSize="xs" w="full" borderRadius="lg">
            <Box
              w="50%"
              borderRight="1px solid"
              borderColor="_lightgray"
              px={2}
            >
              <Text fontWeight="medium" st="common:price.breakdown.check.in" />
              <Text fontSize="2xs">
                {formatDate(accommodation.check_in_date, false)}
                {accommodation.checkin_checkout_times.checkin_from && (
                  <>
                    {', '}
                    {accommodation.checkin_checkout_times.checkin_from}
                  </>
                )}
              </Text>
            </Box>
            <Box px={2}>
              <Text fontWeight="medium" st="common:price.breakdown.check.out" />
              <Text fontSize="2xs">
                {formatDate(accommodation.check_out_date, false)}
                {accommodation.checkin_checkout_times.checkin_to && (
                  <>
                    {', '}
                    {accommodation.checkin_checkout_times.checkout_to}
                  </>
                )}
              </Text>
            </Box>
          </HStack>
          <Button
            secondary
            id="view-more-booking-accommodation-details"
            fontSize="sm"
            onClick={() =>
              setShowAccommodationBooking({ accommodation: accommodation })
            }
            isDisabled={isDetailsDisabled(booking?.trip.status)}
          >
            <Text px={4} st="hotel-info.card.view.details" />
          </Button>
        </HStack>
      </VStack>
    </Card>
  )
}
