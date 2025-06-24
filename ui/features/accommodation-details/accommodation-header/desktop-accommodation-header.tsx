import { Box, HStack, VStack, Wrap } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Stars from 'ui/shared/stars'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LocationIcon from '@/icons/location-pin.svg'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import DesktopImageGrid from 'ui/shared/image-grid/desktop-image-grid'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import { getColor } from 'ui/features/trip-details/accommodation/helpers'
import { Image } from 'ui/shared/image-grid'

type DesktopAccommodationHeaderProps = {
  hotel: HotelDetails
  images: Image[]
  onClose: () => void
}
export default function DesktopAccommodationHeader({
  hotel,
  images,
  onClose,
}: DesktopAccommodationHeaderProps) {
  const { setShowMap, setShowReviews, roomsData } =
    useAccommodationDetailsAtoms()

  return (
    <>
      <HStack pt={4} w="full">
        <CircleIconWrapper bg="_white" onClick={onClose}>
          <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
        </CircleIconWrapper>
        <Heading as="h1" fontWeight="normal" mr="2">
          {hotel.name}
        </Heading>
        <Stars amount={hotel.stars} size="2xl" />
      </HStack>
      <Wrap fontSize="sm" color="_gray" mb="3" pl="45px" spacing="0.3rem">
        <Box mt="0.3rem">
          <LocationIcon fill={theme.colors.primary} height="12" width="12" />
        </Box>
        <Text>{hotel.street_address}</Text>
        <Text px={1.5}>·</Text>
        <Button
          fontSize="sm"
          fontWeight="normal"
          id="show-map-hotel"
          asLink
          color="primary"
          onClick={() => setShowMap(true)}
        >
          <Text st="common:view.map" />
        </Button>
      </Wrap>
      <Box position="relative" id="hotel-images" data-section>
        <DesktopImageGrid images={images} />

        <Box
          position="absolute"
          top="5"
          left="5"
          borderRadius="lg"
          p={2}
          bg={'rgba(255, 255, 255, 0.8)'}
          onClick={() => setShowReviews(true)}
          _hover={{ cursor: 'pointer' }}
        >
          <HStack>
            <Box
              bg={getColor(hotel?.review_score)[1]}
              w="47px"
              h="47px"
              borderRadius="lg"
              color="_white"
              textAlign="center"
              opacity={0.9}
            >
              <Text lineHeight="47px" fontSize="2xl" fontWeight="medium">
                {toFixedOneSingleDigit(hotel.review_score)}
              </Text>
            </Box>
            <VStack alignItems="flex-start" gap="0">
              {hotel.review_score_word && (
                <Text fontSize="sm" fontWeight="medium">
                  {hotel.review_score_word}
                </Text>
              )}

              {roomsData?.reviews?.reviewsCount && (
                <Text
                  fontSize="xs"
                  st="new-hotel-page.review.count.desktop"
                  sd={{ review_count: roomsData?.reviews.reviewsCount }}
                />
              )}
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  )
}
