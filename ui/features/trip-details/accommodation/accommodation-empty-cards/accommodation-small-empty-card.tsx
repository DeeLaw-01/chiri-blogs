import { Box, HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import useUpdateTrip from '../../hooks/useUpdateTrip'
import Card from 'ui/primitives/Card'
import LockIcon from '@/icons/new/security/lock.svg'

const images = [
  '/static/about/1.png',
  '/static/about/2.png',
  '/static/about/3.png',
]
const names = ['Amazing Hotels', 'Great Hotels', 'Nice places']

export default function AccommodationSmallEmptyCard({
  hotel,
}: {
  hotel: HotelDetails
}) {
  const { updateTripHandler } = useUpdateTrip()
  const { trip, setTrip, hotelsLoading, setHotelsLoading, accommodations } =
    useTripDetailsAtoms()

  const handleAddAllHotels = async () => {
    setHotelsLoading(true)
    updateTripHandler(
      {
        trip_id: trip.data?.id!,
        position: 'all',
        type: 'accomodation',
        add: true,
      },
      (data) => {
        setHotelsLoading(false)
        setTrip({
          data: data.trip,
          isLoading: false,
          error: false,
          isValidating: false,
        })
      },
      () => {
        setHotelsLoading(false)
      }
    )
  }

  return (
    <Card
      w="full"
      role="group"
      cursor="pointer"
      borderRadius="lg"
      border="1px dashed"
      bg="_lightestgray"
      borderColor="_lightgray"
      color="_gray"
      onClick={handleAddAllHotels}
      mb={{ base: 0, md: 3 }}
    >
      <HStack p="2" w="full">
        <HStack w="full">
          <Box
            pos="relative"
            borderRadius="md"
            minW="2.5rem"
            minH="2.5rem"
            overflow="hidden"
          >
            <Image
              fill
              src={images[Math.floor(Math.random() * 3)]}
              alt="Accommodation blured image"
              style={{ filter: 'blur(2px)' }}
            />
            <Box
              pos="absolute"
              bg="rgba(0,0,0,0.25)"
              color="_white"
              h="full"
              w="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <LockIcon height="1rem" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="sm" noOfLines={1}>
              <Text notag st={'new-trip-page.add.stay.card.heading'} />
              <Text as="span" filter="blur(3px)" px={1}>
                {names[Math.floor(Math.random() * 3)]}
              </Text>
            </Text>
            <Text
              fontSize="xs"
              noOfLines={1}
              st={'new-trip-page.add.stay.card.description'}
              sd={{ city: hotel.city }}
            />
          </Box>
        </HStack>
        <Box>
          <Button
            primary
            id="add-hotel-button"
            h="10 !important"
            isLoading={hotelsLoading}
            isDisabled={!trip?.data?.available_to_buy}
          >
            <Text st="common.general.add" notag />
          </Button>
        </Box>
      </HStack>
    </Card>
  )
}
