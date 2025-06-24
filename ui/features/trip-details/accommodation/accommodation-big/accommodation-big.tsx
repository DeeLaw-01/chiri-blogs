import { Box, Divider, HStack, VStack, Wrap } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

import LocationIcon from '@/icons/location-pin.svg'
import MapLocationDotIcon from 'ui/icons/new/map/map-location-dot.svg'
import theme from 'src/styles/theme'
import Stars from 'ui/shared/stars'
import Card from 'ui/primitives/Card'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import AccommodationTags from '../accommodation-tags'
import Carousel from 'ui/shared/carousel'
import useCurrency from 'src/hooks/useCurrency'
import ReviewScore from '../review-score'
import { CardProps } from 'ui/primitives/Card/card.type'
import AccommodationFeatures from '../accommodation-features'

type BigAccommodationCardProps = {
  hotel: HotelDetails
  onOpenHotelView: (hotel: any) => void
} & CardProps

export default function BigAccommodationCard({
  hotel,
  onOpenHotelView,
  ...rest
}: BigAccommodationCardProps) {
  const { getPrettyPrice, getConvertedCurrency } = useCurrency()

  const hotelImages = hotel?.hotel_photos
    ?.map((imgObj) => imgObj.url_original)
    .splice(0, 5)
  const totalPrice = getPrettyPrice(
    getConvertedCurrency(hotel.price_per_night, {
      prettyPrice: false,
    }),
    false,
    true
  )
  const discountedPrice = getPrettyPrice(
    getConvertedCurrency(hotel.price_per_night_without_discount, {
      prettyPrice: false,
    }),
    false,
    true
  )
  return (
    <Card
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      onClick={onOpenHotelView}
      mb={4}
      {...rest}
    >
      <HStack w="full" h="full" alignItems="stretch" gap={0}>
        <Box
          position="relative"
          minH="100%"
          minW="37%"
          overflow="hidden"
          borderLeftRadius={'lg'}
          borderRightRadius={0}
        >
          <Box
            w="full"
            h="full"
            _groupHover={{ transform: 'scale(1.01)' }}
            transition=".3s ease"
          >
            <Carousel
              overflow="hidden"
              altText="Hotel image"
              images={hotelImages}
            />
          </Box>
        </Box>
        <VStack
          pt="4"
          pb="2"
          justifyContent="space-between"
          w="full"
          alignItems="flex-start"
        >
          <HStack
            px={4}
            mb="-3"
            justifyContent="space-between"
            w="full"
            alignItems="flex-start"
          >
            <HStack alignItems="flex-start" mr="2">
              <Heading
                as="h4"
                fontSize="lg"
                fontWeight="normal"
                w="fit-content"
              >
                <Text as="span" noOfLines={1}>
                  {hotel.name}
                </Text>
              </Heading>
              <Stars amount={hotel.stars} size="sm" as="span" mb="2" />
            </HStack>

            <ReviewScore addText accommodation={hotel} />
          </HStack>
          <Wrap px={4} spacing={1}>
            <AccommodationTags hotelData={hotel} />
            <AccommodationFeatures accommodation={hotel} />
          </Wrap>
          <VStack px={4} mt="0 !important" alignItems="flex-start" gap="0">
            {hotel.distance_to_city_center && (
              <HStack fontSize="xs" color="_gray" gap="0.1rem">
                <MapLocationDotIcon fill={theme.colors._gray} width="10" />
                <Text
                  pl="1"
                  marginInlineStart={'0 !important'}
                  noOfLines={1}
                  st={'hotel-info.distance.center'}
                  sd={{ count: hotel.distance_to_city_center }}
                />
              </HStack>
            )}
            <HStack fontSize="xs" color="_gray" gap="0.1rem">
              <LocationIcon fill={theme.colors._gray} width="10" height="10" />
              <Text pl="1" marginInlineStart={'0 !important'} noOfLines={1}>
                {hotel.address}
              </Text>
            </HStack>
          </VStack>
          <Box w="full" px={1}>
            <Divider w="100%" />
          </Box>

          <HStack
            justifyContent={'space-between'}
            mt="1 !important"
            w="full"
            px="4"
            alignItems="flex-end"
          >
            <Box>
              <Text fontSize="xl" color="_black">
                {totalPrice}
                {hotel.discount > 0.05 && (
                  <Text
                    as="s"
                    color="primary"
                    fontSize="sm"
                    ml={2}
                    pos={'absolute'}
                  >
                    <Text color="_gray">{discountedPrice}</Text>
                  </Text>
                )}
              </Text>
              <Text
                fontSize="xs"
                color="_gray"
                mt="-2"
                textTransform={'lowercase'}
              >
                <Text notag st="common.per.night" />
              </Text>
            </Box>
            <Button
              id="view-hotel"
              fontWeight="normal"
              fontSize="sm"
              pb="1"
              arrow
              asLink
            >
              <Text notag st="common:view.more" />
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Card>
  )
}
