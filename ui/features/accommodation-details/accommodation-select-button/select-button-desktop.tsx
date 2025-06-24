import { Box, Divider, HStack, VStack, ButtonProps } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'
import LastMinuteIcon from '@/icons/homepage-filters/last-minute.svg'
import theme from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import SelectedRoomInfo from './selected-room-info'
import ChangeHotelBanner from '../change-accommodation-banner'
import CheckInCheckOutBox from 'ui/features/manage-booking-new/components/itinerary/accommodation/accommodation-card/checkin-checkout-box'
import CornerBanner from 'ui/features/trip-details/book-button/corner-banner'

type SelectButtonDesktopProps = {
  hotel: HotelDetails
  totalPrice: string
} & ButtonProps

function SelectButtonDesktop({
  hotel,
  totalPrice,
  ...rest
}: SelectButtonDesktopProps) {
  const { getConvertedCurrency } = useCurrency()
  const { viewOnly } = useAccommodationDetailsAtoms()
  const showCheapBanner = hotel.review_score > 8 && hotel.price_hotel > 100

  return (
    <Box
      position="sticky"
      mt={5}
      top={'20px'}
      transition={'all .2s'}
      bg="_white"
    >
      <Card overflow={'hidden'} p={5}>
        <HStack alignItems="flex-start">
          <Text fontSize="3xl" fontWeight="medium">
            {totalPrice}
          </Text>
          {hotel.discount > 0.05 && (
            <>
              <CornerBanner bannerPosition="right" w="160px" bg="_orange">
                <Text
                  st="common:discount.percentage"
                  sd={{ discount: Math.round(hotel.discount * 100) }}
                />
              </CornerBanner>
              <Text as="s" fontSize="sm" color="primary">
                <Text color="_gray">
                  {getConvertedCurrency(
                    hotel.price_hotel * (1 + hotel.discount)
                  )}
                </Text>
              </Text>
            </>
          )}
        </HStack>
        <Text color="_gray" mt="-1 !important" fontSize="sm">
          <Text notag st="new-hotel-page:total.price.for" />
          <Text notag st="common:nights" sd={{ count: hotel.nights_at }} />
        </Text>
        <CheckInCheckOutBox accommodation={hotel} />
        <Divider my="4" w="85%" ml="7%" />

        <SelectedRoomInfo />
        {!viewOnly && (
          <>
            <Button
              primary
              animate
              h={'3.5rem'}
              fontSize="lg"
              id="book-button-desktop"
              bgGradient={theme.gradients.primary}
              w="full"
              {...rest}
            >
              <Text st="new-hotel-page:button.select" />
            </Button>
            <Text
              align="center"
              fontSize="xs"
              color="_gray"
              mt="1"
              st="new-hotel-page:charge.yet"
            />
          </>
        )}
      </Card>
      {showCheapBanner && (
        <Box
          mt="3"
          borderRadius="lg"
          border="1px solid"
          borderColor="_lightgray"
          p={3}
        >
          <HStack alignItems="flex-start">
            <Box mt="1">
              <LastMinuteIcon
                stroke={theme.colors.primary}
                width="45"
                height="35"
              />
            </Box>

            <VStack alignItems="flex-start" gap="0" lineHeight="1.4">
              <Text
                fontWeight="medium"
                fontSize="sm"
                st="new-hotel-page:low.price.banner.title"
              />

              <Text
                color="_gray"
                fontSize="xs"
                st="new-hotel-page:low.price.banner.description"
                sd={{ amount: getConvertedCurrency(hotel.price_hotel / 11) }}
              />
            </VStack>
          </HStack>
        </Box>
      )}
      {!viewOnly && !showCheapBanner && <ChangeHotelBanner hotel={hotel} />}
    </Box>
  )
}

export default SelectButtonDesktop
