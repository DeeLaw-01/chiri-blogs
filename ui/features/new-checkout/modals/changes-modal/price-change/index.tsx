import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import useCurrency from 'src/hooks/useCurrency'

import { Changes } from 'ui/features/new-checkout/checkout.type'
import Heading from 'ui/primitives/Heading'
import CircleXMarkIcon from '@/icons/new/alert/circle-xmark.svg'
import CircleCheckIcon from '@/icons/new/alert/circle-check.svg'

type PriceChangeProps = {
  changes: Changes
}

export default function PriceChange({ changes }: PriceChangeProps) {
  const { getConvertedCurrency } = useCurrency()

  return (
    <VStack textAlign="center" pt={5} pb="2">
      <Heading as="h1" st="checkout-page.price.change.modal.heading" />
      <Text
        color="_gray"
        fontSize="sm"
        mt="3"
        st="checkout-page.price.change.new.description"
      />

      <HStack
        fontSize={{ base: 'lg', md: '2xl' }}
        bg="_lightestgray"
        borderRadius="lg"
        py={{ base: 2, md: 4 }}
        my="3"
        w={{ base: 'full', md: 'auto' }}
        textAlign="left"
      >
        <HStack
          w="50%"
          borderRight="1px solid"
          borderColor="_lightgray"
          px={{ base: 3, md: 4 }}
          gap={{ base: 2, md: 4 }}
        >
          <Box color="_red">
            <CircleXMarkIcon width="20" />
          </Box>
          <Box whiteSpace={'nowrap'} mr="3">
            <Text
              color="_gray"
              fontSize="2xs"
              h="0.75lh"
              st="checkout-page.price.change.modal.old.price.heading"
            />

            {getConvertedCurrency(changes?.last_seen_price)}
          </Box>
        </HStack>
        <HStack
          w="50%"
          borderRight="1px solid"
          borderColor="_lightgray"
          px={{ base: 2, md: 4 }}
          gap={{ base: 2, md: 4 }}
        >
          <Box color="_green">
            <CircleCheckIcon width="20" />
          </Box>
          <Box whiteSpace={'nowrap'} mr="3">
            <Text
              color="_gray"
              fontSize="2xs"
              h="0.75lh"
              st="checkout-page.price.change.modal.new.price.heading"
            />
            {getConvertedCurrency(changes?.after.price)}
          </Box>
        </HStack>
      </HStack>
    </VStack>
  )
}
