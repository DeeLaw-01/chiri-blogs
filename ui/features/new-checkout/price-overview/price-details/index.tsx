import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import PriceItem from './price-item'
import { Divider, VStack } from '@chakra-ui/react'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

export default function PriceDetails() {
  const { cart } = useCheckoutAtoms()

  return (
    <>
      <Heading as="h2" st="checkout-page.summary.price.details" />
      <Text
        color="_gray"
        fontSize="xs"
        st="checkout-page.summary.price.no.hidden.fees"
      />

      <Divider my="3" w="85%" ml="7%" />
      <VStack>
        {cart.map((item, idx) => (
          <PriceItem key={idx} item={item} />
        ))}
      </VStack>
    </>
  )
}
