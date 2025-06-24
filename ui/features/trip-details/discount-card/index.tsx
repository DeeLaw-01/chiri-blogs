import { Box, HStack, Slider, SliderThumb, Center } from '@chakra-ui/react'
import { useRef } from 'react'
import useCurrency from 'src/hooks/useCurrency'
import { HistorialPrice } from 'src/shared-types/trip-details.type'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import Tooltip from 'ui/primitives/Tooltip'

const gap = 2
const colors = ['_green', 'yellow.400', '_red']

export default function DiscountCard({
  historicalPrice,
  price,
}: {
  historicalPrice: HistorialPrice
  price: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { getConvertedCurrency } = useCurrency()
  const { route_max_price, route_min_price } = historicalPrice

  const max = route_max_price - route_min_price
  const first = Math.ceil(max / 3) + route_min_price
  const second = Math.ceil((max / 3) * 2) + route_min_price

  const sliderValue = () => {
    if (price > first && price < first + gap) return first + gap
    if (price > second && price < second + gap) return second + gap
    return price
  }

  const getColor = () => {
    if (price <= first) return colors[0]
    if (price <= second) return colors[1]
    return colors[2]
  }

  const getTextKey = () => {
    if (price < first) return 'low'
    if (price < second) return 'medium'
    return 'high'
  }

  return (
    <Card
      p={5}
      pb={3}
      bg="_lightestgray"
      overflow="hidden"
      boxShadow={'none'}
      fontSize="sm"
      color="_gray"
    >
      <Text as="span" st="new-trip-page.discount.card.header" color="_black" />
      <Text as="span" color="_green" ml={1} fontWeight="medium">
        {historicalPrice.discount}%
      </Text>

      <Text st="new-trip-page.discount.card.subheader" fontSize="xs" />
      <Box ref={ref}>
        <Slider
          mt="5"
          isReadOnly
          min={historicalPrice.route_min_price}
          max={historicalPrice.route_max_price}
          cursor="default"
          value={sliderValue()}
          aria-label="price-slider"
        >
          <Tooltip
            py="0.5"
            px="1.5"
            hasArrow
            isOpen={true}
            pos="absolute"
            borderRadius="full"
            placement="top"
            portalProps={{
              containerRef: ref,
            }}
            modifiers={[
              {
                name: 'flip',
                options: {
                  fallbackPlacements: [],
                },
              },
            ]}
            label={
              <Text
                fontSize="xs"
                st={`new-trip-page.discount.card.price.${getTextKey()}`}
                sd={{
                  price: getConvertedCurrency(price),
                }}
              />
            }
          >
            <SliderThumb border="2px solid" borderColor={getColor()} />
          </Tooltip>

          <HStack w="full" spacing={1} mt="23px">
            <Box w="full" h="1" bg={colors[0]} borderRadius="full" />
            <Box w="full" h="1" bg={colors[1]} borderRadius="full" />
            <Box w="full" h="1" bg={colors[2]} borderRadius="full" />
          </HStack>

          <Center w="full" mt="1" fontSize="xs">
            <HStack justify="space-between" spacing={12}>
              <Text>{getConvertedCurrency(first)}</Text>
              <Text>{getConvertedCurrency(second)}</Text>
            </HStack>
          </Center>
        </Slider>
      </Box>
    </Card>
  )
}
