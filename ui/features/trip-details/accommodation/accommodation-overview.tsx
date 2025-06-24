import { HStack, VStack, Box } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import AccommodationCard from './accommodation-card'

import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import { noAccomodationAvailable } from '../utils/get-accomodation'
import AccommodationBigEmptyCard from './accommodation-empty-cards/accommodation-big-empty-card'

export default function AccommodationOverview() {
  const formatDate = useFormattedDate()
  const {
    trip,
    setShowChangeAccommodation,
    setShowRemoveAccommodation,
    setShowHotelDetails,
    accommodations,
  } = useTripDetailsAtoms()

  const isNoAccomodationAvailable = noAccomodationAvailable(trip)

  return (
    <VStack alignItems={'flex-start'} w="full">
      <HStack w="full" justifyContent="space-between" mb="5" wrap={'wrap'}>
        <Heading
          as="h1"
          fontWeight="normal"
          st="new-trip-page:accommodation.header.accommodation"
        />
        {accommodations?.length > 0 && (
          <Button
            asLink
            id="remove-accommodation"
            onClick={() => setShowRemoveAccommodation(true)}
          >
            <Text notag st="new-hotel-page.remove.accommodation" />
          </Button>
        )}

        {isNoAccomodationAvailable && (
          <Text st="new-trip-page:accommodation.not.available" />
        )}
      </HStack>

      {trip?.data?.itinerary.map((segment, idx) => {
        if (segment.type !== 'accommodation') return null
        if (segment.content.is_selected === false)
          return (
            <Box mb="8" w="full" key={idx}>
              <AccommodationBigEmptyCard hotel={segment.content} />
            </Box>
          )
        const hotel = segment.content
        return (
          <Box key={idx} w="full" pb={8}>
            <HStack
              justifyContent={'space-between'}
              mb="2"
              alignItems="flex-start"
            >
              <Heading as="h3" fontWeight="normal" pr="4">
                <Text
                  notag
                  st="common:nights"
                  sd={{ count: hotel.nights_at }}
                />{' '}
                <Text notag st="common.in" />{' '}
                <Text as="span" pr="2">
                  {hotel.city}
                </Text>
                <Text
                  as="span"
                  fontSize="xs"
                  color="_gray"
                  display="inline-block"
                >
                  {formatDate(hotel.check_in_date, false)}
                  {' - '}
                  {formatDate(hotel.check_out_date, false)}
                </Text>
              </Heading>
              <Button
                asLink
                id="change-hotel"
                onClick={() => {
                  setShowChangeAccommodation({ hotel: hotel })
                }}
              >
                <Text notag st="common:general.change" />
              </Button>
            </HStack>
            <AccommodationCard
              hotel={hotel}
              onOpenHotelView={() =>
                setShowHotelDetails({ hotel: hotel, addStayButton: false })
              }
            />
          </Box>
        )
      })}
    </VStack>
  )
}
