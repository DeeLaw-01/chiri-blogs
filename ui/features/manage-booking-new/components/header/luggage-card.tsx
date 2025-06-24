import { Box, HStack, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import LuggageIcon from '@/icons/marketplace/filter-select/luggage-icon.svg'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import theme from 'src/styles/theme'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'

import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import useCurrency from 'src/hooks/useCurrency'

export default function LuggageCard() {
  const { booking } = useManageBookingAtoms()
  const { getMarketplaceUrl } = useNavigateToMarketplace()
  const { getConvertedCurrency } = useCurrency()

  const luggage = booking?.passengers[0].allowed_luggage

  const price =
    luggage && luggage?.length > 0
      ? luggage?.reduce(
          (min, bag) => (bag.price > 0 && bag.price < min ? bag.price : min),
          luggage[0].price
        )
      : 100

  return (
    <Link
      href={getMarketplaceUrl('luggage')}
      _hover={{ textTransform: 'none' }}
    >
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
            <LuggageIcon width="25" stroke="white" />
          </Box>
          <VStack pl="1rem" alignItems="flex-start" gap="0" w="full">
            <Heading
              as="h5"
              fontWeight="medium"
              st="new-manage-booking-page.luggage.card.banner.heading"
            />

            <Text
              color="_gray"
              fontSize="xs"
              st="new-manage-booking-page.header.cards.description"
              sd={{ price: getConvertedCurrency(price) }}
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
