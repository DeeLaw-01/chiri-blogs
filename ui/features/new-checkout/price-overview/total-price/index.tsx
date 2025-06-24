import { Box, HStack } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import useCheckoutCart from '../../hooks/useCheckoutCart'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

export default function TotalPrice() {
  const { passengers } = useCheckoutAtoms()
  const { getTotalPrice } = useCheckoutCart()
  const { getConvertedCurrency } = useCurrency()

  return (
    <HStack justify="space-between" w="full" mt={{ base: 0, md: 3 }}>
      <Box>
        <Heading as="h4" st="checkout-page.price.information.total.header" />
        <Text fontSize={{ base: '2xs', md: 'xs' }} color="_gray">
          <Text st="common.price.for" notag />{' '}
          <Text st="common.travelers" sd={{ count: passengers.length }} notag />
        </Text>
      </Box>
      <Heading as="h2">
        {getConvertedCurrency(getTotalPrice(), { includeCommaValues: true })}
      </Heading>
    </HStack>
  )
}
