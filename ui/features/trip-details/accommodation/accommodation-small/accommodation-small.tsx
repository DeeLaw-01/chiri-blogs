import { Box, HStack, Divider, Wrap } from '@chakra-ui/react'
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
import UrgencySticker from './urgency-sticker'
import InfoIcon from '@/icons/manage-booking/info-icon.svg'
import ReviewScore from '../review-score'
import { CardProps } from 'ui/primitives/Card/card.type'
import AccommodationFeatures from '../accommodation-features'

type SmallAccommodationCardProps = {
  hotel: HotelDetails
  onOpenHotelView: (hotel: any) => void
} & CardProps

export default function SmallAccommodationCard({
  hotel,
  onOpenHotelView,
  ...rest
}: SmallAccommodationCardProps) {
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
      display={'flex'}
      flexDirection={'column'}
      h="100%"
      {...rest}
    >
      <Box
        position="relative"
        h="12rem"
        overflow="hidden"
        borderTopRadius={'lg'}
      >
        <Carousel
          overflow="hidden"
          borderTopRadius="lg"
          altText="Hotel image"
          images={hotelImages}
        />
        {hotel.discount > 0.05 && (
          <UrgencySticker
            icon={
              <InfoIcon
                width="14"
                height="14"
                stroke={theme.colors._white}
                strokeWidth="2"
              />
            }
            discountPercentage={Math.round(hotel.discount * 100)}
          />
        )}
      </Box>
      <HStack
        px={4}
        py={2}
        mb="-3"
        justifyContent="space-between"
        alignItems="flex-start"
        w="full"
      >
        <HStack
          justifyContent={'space-between'}
          alignItems="flex-start"
          maxW="70%"
        >
          <Heading as="h4" fontSize="lg" noOfLines={1}>
            {hotel.name}
            <Stars pl={1} as="span" amount={hotel.stars} size="xs" />
          </Heading>
        </HStack>
        <ReviewScore addText accommodation={hotel} />
      </HStack>

      <Wrap px={4} spacing={1} my={1}>
        <AccommodationTags hotelData={hotel} />
        <AccommodationFeatures accommodation={hotel} />
      </Wrap>

      <Box px={4} pb={2} pt="0" flex={1}>
        {hotel.distance_to_city_center && (
          <HStack fontSize="xs" color="_gray" gap="0.1rem">
            <MapLocationDotIcon fill={theme.colors._gray} height="10" />
            <Text
              pl="1"
              marginInlineStart={'0 !important'}
              noOfLines={1}
              st={'hotel-info.distance.center'}
              sd={{ count: hotel.distance_to_city_center }}
            />
          </HStack>
        )}
        <HStack fontSize="xs" color="_gray" mt="1" gap="0">
          <Box minW="11px">
            <LocationIcon fill={theme.colors._gray} width="10" height="12" />
          </Box>
          <Text pl="1" marginInlineStart={'0 !important'} noOfLines={1}>
            {hotel.address}
          </Text>
        </HStack>
      </Box>
      <Divider w="90%" margin="0 auto" />
      <HStack justifyContent={'space-between'} px={4} py={2}>
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
          <Text fontSize="xs" color="_gray" mt="-2" textTransform={'lowercase'}>
            <Text notag st="common.per.night" />
          </Text>
        </Box>
        <Box>
          <Button
            id="view-hotel"
            fontWeight="normal"
            fontSize="sm"
            arrow
            asLink
          >
            <Text notag st="common:view.more" />
          </Button>
        </Box>
      </HStack>
    </Card>
  )
}
