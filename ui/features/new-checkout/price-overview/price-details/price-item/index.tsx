import { Box, HStack } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import useTranslation from 'src/hooks/useTranslation'
import { CartItem } from 'ui/features/new-checkout/hooks/useCheckoutCart/cart.type'
import Text from 'ui/primitives/Text'
import Scratched from 'ui/shared/scratched'

type PriceItemProps = {
  item: CartItem
}

export default function PriceItem({ item }: PriceItemProps) {
  const { getConvertedCurrency } = useCurrency()
  const { t } = useTranslation()

  const getPriceColor = () => {
    if (item.price <= 0) return '_green'
    else return '_black'
  }

  const getPrice = (value: number) => {
    if (value === 0) return t('common.free')
    const price = value * item.count
    return getConvertedCurrency(price, { includeCommaValues: true })
  }

  const getCount = (count: number) => {
    if (count === 1) return
    else return count + 'x'
  }

  return (
    <HStack
      w="full"
      justify="space-between"
      alignItems="flex-start"
      fontSize="sm"
    >
      <Box>
        <Text>
          {getCount(item.count)} {t(item.title)}
        </Text>
        {item.subItems?.map((subItem, idx) => (
          <Text key={idx} color="_gray" fontSize="xs">
            {getCount(item.count)} {t(subItem.title)}
          </Text>
        ))}
      </Box>
      <Text color="_gray">
        {item.before && <Scratched>{getPrice(item.before)}</Scratched>}
        <Text as="span" fontWeight="medium" pl="1" color={getPriceColor()}>
          {getPrice(item.price)}
        </Text>
      </Text>
    </HStack>
  )
}
