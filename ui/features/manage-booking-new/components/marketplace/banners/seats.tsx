import { Box, VStack } from '@chakra-ui/react'
import Link from 'ui/primitives/Link'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'
import { BookingType } from 'ui/features/manage-booking-new/types/booking.type'
import { BASE_SEAT_PRICE } from '../../header/seats-card'
import useCurrency from 'src/hooks/useCurrency'

type SeatsBannerProps = {
  booking: BookingType
}

export default function SeatsBanner({ booking }: SeatsBannerProps) {
  const { getMarketplaceUrl } = useNavigateToMarketplace()
  const { getConvertedCurrency } = useCurrency()

  const seatsPrice =
    booking.itinerary.filter((x) => x.type === 'transport').length *
    BASE_SEAT_PRICE

  return (
    <Link
      href={getMarketplaceUrl('seats')}
      h="100%"
      _hover={{ textDecor: 'none' }}
    >
      <Card
        position="relative"
        overflow="hidden"
        bgGradient={'linear(to-br, purple.200, purple.400, purple.700)'}
        p="3"
        height="100%"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          h="full"
          w="full"
          backgroundImage={'url(/static/window.png)'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'right'}
          ml={{ base: '25px', md: '0px' }}
          backgroundSize={{ base: '150px', md: '150px' }}
          transform={'rotate(5deg)'}
          zIndex="0"
        />
        <VStack justify={'space-between'} h="100%" alignItems="flex-start">
          <Box transform={'rotate(-3deg)'}>
            <Heading
              as="h1"
              textAlign="center"
              fontWeight="semibold"
              fontSize={{ base: 'min(4vw, 1.75rem)', md: 'xl' }}
              color="_white"
              bg="purple"
              w="fit-content"
              mt="2"
              p="1"
              st="new-manage-booking-page.travel.essentials.seats.heading"
            />

            <Text
              color="purple.800"
              fontSize="xs"
              st="new-manage-booking-page.header.cards.description"
              sd={{ price: getConvertedCurrency(seatsPrice ?? 50) }}
            />
          </Box>
          <Button
            mt="4"
            h={{ base: 8, md: 10 }}
            id="add-seats-button"
            bg="white"
            maxW="100%"
            color="purple.600"
            fontSize={{ base: 'xs', md: 'sm' }}
            _hover={{ opacity: 0.9 }}
            arrow
          >
            <Text
              st="new-manage-booking-page.travel.essentials.seats.button.text"
              textTransform={'uppercase'}
              noOfLines={1}
            />
          </Button>
        </VStack>
      </Card>
    </Link>
  )
}
