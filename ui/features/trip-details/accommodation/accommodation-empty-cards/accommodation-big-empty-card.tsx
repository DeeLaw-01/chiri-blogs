import { Box, VStack, Center, Grid, GridItem } from '@chakra-ui/react'
import { theme } from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import useUpdateTrip from '../../hooks/useUpdateTrip'

const imageUrls = [
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0405061801%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0920160507%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0218101601%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F1907190914%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0105012108%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0405061801%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F1324131213%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0904101507%2F375160.png&w=1920&q=75',
  'https://d2httx2yle9cl1.cloudfront.net/_next/image?url=https%3A%2F%2Fpictures.tryp.com%2Flocations%2F0405132103%2F375160.png&w=1920&q=75',
]

export default function AccommodationBigEmptyCard({
  hotel,
}: {
  hotel: HotelDetails
}) {
  const { trip, setTrip, setHotelsLoading } = useTripDetailsAtoms()

  const { updateTripHandler } = useUpdateTrip()

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
    <Box
      w="full"
      h={'10rem'}
      role="group"
      cursor="pointer"
      borderRadius="lg"
      border="1px dashed"
      bg="_lightestgray"
      borderColor="_lightgray"
      color="_gray"
      transition="all 0.2s"
      overflow="hidden"
      position="relative"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 5px"
      onClick={handleAddAllHotels}
    >
      <Center h={'10rem'} pos="relative" left={{ base: 0, md: -4 }}>
        <VStack gap={1}>
          <Text
            sd={{ location: hotel.city }}
            st="new-trip-page:overview.itinerary.stay.none.title"
          />
          <Button
            asLink
            arrow
            fontWeight="normal"
            minW="fit-content"
            id="itinerary-add-hotel"
            _groupHover={{ textDecoration: 'underline' }}
          >
            <Text st="new-trip-page:accommodation.button.add" />
          </Button>
        </VStack>

        <Box
          top="1rem"
          right="0"
          mr="-1rem"
          position="absolute"
          maxWidth={{ base: '40%', md: '30%' }}
          transform="rotate(10deg) translateY(-25px)"
        >
          <Grid
            gap={3}
            templateColumns="repeat(3, 1fr)"
            opacity={{ base: '0.15', md: '1' }}
          >
            {imageUrls.map((imageUrl, index) => (
              <GridItem
                p={4}
                key={index}
                colSpan={1}
                bgImage={imageUrl}
                bgSize="cover"
                bgPosition="center"
                borderRadius={8}
                borderWidth={4}
                height={'4rem'}
                width={'5rem'}
                borderColor={theme.colors._white}
                boxShadow="md"
                transition="all 0.2s"
                _groupHover={{ marginTop: -4, marginBottom: 4 }}
                {...(index % 3 === 1 && { marginTop: -8, marginBottom: 8 })}
              />
            ))}
          </Grid>
        </Box>
      </Center>
    </Box>
  )
}
