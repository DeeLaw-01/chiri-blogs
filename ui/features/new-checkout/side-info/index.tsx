import PriceOverview from '../price-overview'
import { Box } from '@chakra-ui/react'
import PromocodeInput from '../content/promocode'
import { useResponsiveSizes } from 'src/contexts/responsive'
import OrderOverview from '../order-overview'

export default function CheckoutSideInfo() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <PriceOverview />

  return (
    <Box w="full" pos="sticky" top="2">
      <OrderOverview />
      <PriceOverview />
      <PromocodeInput />
    </Box>
  )
}
