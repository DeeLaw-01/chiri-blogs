import { Box, HStack, Divider } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Stars from 'ui/shared/stars'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import MobileImageGrid from 'ui/shared/image-grid/mobile-image-grid'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'
import LocationIcon from '@/icons/location-pin.svg'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import ReviewAvatar from '../reviews/review-avatar'
import { getColor } from 'ui/features/trip-details/accommodation/helpers'
import { Image } from 'ui/shared/image-grid'

type MobileAccommodationHeaderProps = {
  hotel: HotelDetails
  images: Image[]
  onClose: () => void
}

export default function MobileAccommodationHeader({
  hotel,
  onClose,
  images,
}: MobileAccommodationHeaderProps) {
  const { setShowMap, setShowReviews, roomsData } =
    useAccommodationDetailsAtoms()
  return (
    <>
      <Box w="fit-content">
        <LeftIcon
          width="18"
          height="18"
          stroke={theme.colors._darkgray}
          onClick={onClose}
        />
      </Box>
      <HStack pt={4} w="full" justify="space-between" alignItems="flex-start">
        <Heading as="h1" fontWeight="normal" mr="2">
          {hotel.name}
        </Heading>
        <Stars amount={hotel.stars} size="md" mt="1" />
      </HStack>
      <Box display="inline-block" fontSize="xs" color="_gray" mb="3">
        <Box mt="0.3rem" pr="1" display="inline-block">
          <LocationIcon fill={theme.colors.primary} height="9" width="10" />
        </Box>
        <Text as="span">{hotel.street_address}</Text>
        <Text as="span" px={1.5}>
          ·
        </Text>
        <Button
          fontSize="xs"
          fontWeight="normal"
          id="show-map-hotel"
          asLink
          color="primary"
          onClick={() => setShowMap(true)}
        >
          <Text st="common:view.map" />
        </Button>
      </Box>
      <Divider
        ml="-1rem"
        width="calc(100vw + 1rem)"
        borderColor={'_lightgray'}
      />

      <HStack onClick={() => setShowReviews(true)}>
        <Box px={5} py={1} borderRight="1px solid" borderColor="_lightgray">
          <Text fontSize="2xl" color={getColor(hotel.review_score)[1]}>
            {toFixedOneSingleDigit(hotel.review_score)}
          </Text>
        </Box>
        {roomsData?.reviews && (
          <>
            <Box color="_gray" fontSize="xs" px={3} w="full">
              <Text
                fontSize="xs"
                st="new-hotel-page.review.count.mobile"
                sd={{ review_count: roomsData.reviews.reviewsCount }}
              />
            </Box>
            <HStack>
              {roomsData.reviews.reviewCard?.map((review, idx) => {
                if (idx > 2) return
                return (
                  <ReviewAvatar
                    key={idx}
                    review={review}
                    ml={idx > 0 ? `-20px` : 0}
                  />
                )
              })}
            </HStack>
          </>
        )}
      </HStack>

      <Divider ml="-1rem" width="calc(100vw + 1rem)" />
      <Box position="relative" id="hotel-images" data-section>
        <MobileImageGrid images={images} pb={0} mb={4} />
      </Box>
    </>
  )
}
