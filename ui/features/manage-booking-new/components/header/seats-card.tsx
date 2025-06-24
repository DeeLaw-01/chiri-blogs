import { Box, HStack, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import SeatIcon from '@/icons/marketplace/filter-select/seat-icon.svg'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import theme from 'src/styles/theme'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'
import { BookingType } from '../../types/booking.type'
import useCurrency from 'src/hooks/useCurrency'

type SeatsCardProps = {
  booking: BookingType
}

export const BASE_SEAT_PRICE = 12

export default function SeatsCard({ booking }: SeatsCardProps) {
  const { getConvertedCurrency } = useCurrency()
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  const seatsPrice =
    booking.itinerary.filter((x) => x.type === 'transport').length *
    BASE_SEAT_PRICE

  return (
    <Link href={getMarketplaceUrl('seats')} _hover={{ textTransform: 'none' }}>
      <Card
        w="300px"
        p="3"
        position="relative"
        overflow="hidden"
        role="group"
        _hover={{ cursor: 'pointer' }}
      >
        <Box
          position="absolute"
          left="-1rem"
          top="-25%"
          bg="primary"
          w="4rem"
          h="150%"
          transform={'rotate(20deg)'}
        />
        <HStack>
          <Box zIndex="1">
            <SeatIcon width="25" stroke="white" />
          </Box>
          <VStack pl="1rem" alignItems="flex-start" gap="0" w="full">
            <Heading
              as="h5"
              fontWeight="medium"
              st={
                booking.passengers.length > 1
                  ? 'new-manage-booking-page.sit.together'
                  : 'new-manage-booking-page.avoid.middle.seat'
              }
            />

            <Text
              color="_gray"
              fontSize="xs"
              st="new-manage-booking-page.header.cards.description"
              sd={{ price: getConvertedCurrency(seatsPrice ?? 50) }}
            />
          </VStack>
          <Box _groupHover={{ mr: -1, ml: 1 }} transition="all .2s">
            <RightArrowSmallIcon
              stroke={theme.colors.primary}
              height={13}
              weidth={7}
            />
          </Box>
        </HStack>
      </Card>
    </Link>
  )
}
