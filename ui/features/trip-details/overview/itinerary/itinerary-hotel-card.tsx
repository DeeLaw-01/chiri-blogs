import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Image from 'ui/primitives/Image'

import useUpdateTrip from '../../hooks/useUpdateTrip'
import AccommodationTags from '../../accommodation/accommodation-tags'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'

import type { HotelDetails } from 'src/shared-types/hotel-details.type'
import DeleteAccomodationButton from '../delete-button/delete-accomodation-button'

type ItineraryHotelCardProps = {
  idx: number
  hotel?: HotelDetails
}

export default function ItineraryHotelCard({
  idx,
  hotel,
}: ItineraryHotelCardProps) {
  const { updateTripHandler, isLoading } = useUpdateTrip()
  const { trip, setTrip, setShowHotelDetails, setShowChangeAccommodation } =
    useTripDetailsAtoms()

  const handleDeleteAccomodation = async (e) => {
    e.stopPropagation()

    await updateTripHandler(
      {
        trip_id: trip.data?.id!,
        position: idx,
        type: 'accomodation',
        add: false,
      },
      (data) => {
        setTrip({
          data: data.trip,
          isLoading: false,
          error: false,
          isValidating: false,
        })
      }
    )
  }

  return (
    <Box
      borderRadius="lg"
      position="relative"
      bg="white"
      w="full"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 5px"
      mb={{ base: 0, md: 3 }}
    >
      {hotel && (
        <>
          <VStack
            position="absolute"
            left={{ base: '-27px', md: '-30px' }}
            h="100%"
            justify="space-around"
          >
            <DeleteAccomodationButton
              isLoading={isLoading}
              handleDelete={handleDeleteAccomodation}
            />
          </VStack>
          <VStack
            fontSize="sm"
            alignItems={'flex-start'}
            p="2"
            cursor={'pointer'}
            onClick={() => {
              setShowHotelDetails({ hotel: hotel })
            }}
            gap={0}
          >
            <HStack
              w="full"
              alignItems="flex-start"
              justifyContent={'space-between'}
            >
              <Box
                bg="_lightgray"
                minH="3rem"
                minW="3rem"
                position="relative"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  fill
                  src={hotel.photo}
                  alt={hotel.name}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <VStack alignItems={'flex-start'} w="full" gap="0.1rem">
                <Text as="span" fontWeight="normal" noOfLines={1}>
                  <Text
                    as="span"
                    st="common.nights"
                    sd={{ count: hotel.nights_at }}
                    id="hotel-details-heading"
                  />
                  {' - '}
                  <Text as="span">{hotel.name}</Text>
                </Text>
                <HStack fontSize="xs" spacing="2">
                  <AccommodationTags hotelData={hotel} />
                </HStack>
              </VStack>
              <HStack
                onClick={(e) => {
                  e.stopPropagation()
                  setShowChangeAccommodation({
                    hotel: hotel,
                    addStayButton: true,
                  })
                }}
                minH={8}
                minW={20}
                alignItems={'flex-start'}
                justifyContent={'flex-end'}
              >
                <Button
                  asLink
                  fontSize="xs"
                  id="hotel"
                  minWidth={'fit-content'}
                  arrow
                >
                  <Text notag st="common:general.change" />
                </Button>
              </HStack>
            </HStack>
          </VStack>
        </>
      )}
    </Box>
  )
}
