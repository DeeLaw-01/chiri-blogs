import Card from 'ui/primitives/Card'
// import CoinsBanner from './coins-banner'
import TotalPrice from './total-price'
import { Divider } from '@chakra-ui/react'
import PriceDetails from './price-details'

export default function DesktopPriceOverview() {
  return (
    <Card p={5}>
      <PriceDetails />
      <Divider mt="3" w="85%" ml="7%" />
      <TotalPrice />
      {/* <CoinsBanner /> */}
    </Card>
  )
}
