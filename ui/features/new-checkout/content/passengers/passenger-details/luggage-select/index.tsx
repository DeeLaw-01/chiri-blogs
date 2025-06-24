import { Box, Divider, HStack, Stack, VStack } from '@chakra-ui/react'
import getLuggage from 'ui/features/manage-booking-new/utils/getLuggage'
import Text from 'ui/primitives/Text'
import ExtraBag from '@/icons/checkout/luggage/extra-bag.svg'
import PersonalItem from '@/icons/checkout/luggage/personal-item.svg'
import CabinBag from '@/icons/checkout/luggage/cabin-bag.svg'
import Heading from 'ui/primitives/Heading'
import Tag from 'ui/primitives/Tag'
import { useCheckoutAtoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import useCheckoutCart from 'ui/features/new-checkout/hooks/useCheckoutCart'
import Incrementer from 'ui/shared/incrementer'
import { BaggageItem } from 'src/api/queries/get/checkout/checkFlightsQuery/check-flights.type'
import useCurrency from 'src/hooks/useCurrency'
import LuggageLoading from './loading'
import { LuggageItemType } from 'ui/features/manage-booking-new/types/luggage.type'
import Trans from 'ui/shared/trans'
import Scratched from 'ui/shared/scratched'
import { Passenger } from 'ui/features/new-checkout/checkout.type'
import { CartItem } from 'ui/features/new-checkout/hooks/useCheckoutCart/cart.type'
import { getTransportSegments } from 'ui/features/new-checkout/utils/getTransportSegments'

type LuggageSelectProps = {
  passenger: Passenger
  index: number
}

const LUGGAGE_DISCOUNT = 1.3

const luggageIcons = {
  [LuggageItemType.PersonalItem]: PersonalItem,
  [LuggageItemType.CabinBag]: CabinBag,
  [LuggageItemType.HoldBag]: ExtraBag,
}

export default function LuggageSelect({
  passenger,
  index,
}: LuggageSelectProps) {
  const { getConvertedCurrency } = useCurrency()
  const { luggage, trip, setPassengers, passengers } = useCheckoutAtoms()
  const { addToCart } = useCheckoutCart()

  const handleSelect = (value: number, data: BaggageItem): void => {
    const title = getLuggage(data.type)[1]

    const item = {
      title: title,
      key: data.type,
      count: value === 1 ? 1 : -1,
      price: data.price,
      before: data.price * LUGGAGE_DISCOUNT,
    }
    addToCart(item)
    updatePassenger(item, value)
  }

  const getPrice = (price: number) => {
    if (!luggage || !trip) return 0
    else return price / getTransportSegments(trip.itinerary).length
  }
  // The luggage counts needs to be added to the passenger. E.g cabin_bag: 1
  const updatePassenger = (item: CartItem, value: number) => {
    setPassengers((prev) =>
      prev.map((p, i) => {
        if (i !== index) return p
        return { ...p, [item.key]: value }
      })
    )
  }

  if (!luggage || !trip) return <LuggageLoading />

  return (
    <Box w="full" mt="8">
      <Heading as="h3" st="common.passenger.luggage.header" />
      <Text color="_gray" fontSize="sm" mt="2">
        <Trans
          st="checkout-page.passenger.luggage.new.tip"
          sd={{
            tos: (chunks) => (
              <Text as={'span'} fontWeight={'bold'}>
                {chunks}
              </Text>
            ),
          }}
        />
      </Text>
      <Box
        w="full"
        borderRadius="md"
        border="1px solid"
        borderColor="_lightgray"
        mt="5"
      >
        {[...(luggage[passenger.category] || [])].map((item) => {
          const LuggageIcon = luggageIcons[item.type]

          return (
            <Box key={item.type}>
              <Stack direction={['column', 'row']} w="full" p={3}>
                <HStack w="full">
                  <Box minW="5rem">
                    {LuggageIcon && <LuggageIcon width="60" height="60" />}
                  </Box>
                  <Box w="full">
                    <Text notag st={getLuggage(item.type)[1]} />
                    <Text color="_gray" fontSize="sm">
                      {item.dimensions.height} x {item.dimensions.length} x{' '}
                      {item.dimensions.width}cm, {item.dimensions.weight}kg
                    </Text>
                  </Box>
                </HStack>
                <HStack w={'full'} justify={'flex-end'}>
                  {item.price === 0 && (
                    <Tag green fontSize="sm">
                      <Text textTransform={'capitalize'} st="common.free.tag" />
                    </Tag>
                  )}
                  {!!item.price && (
                    <>
                      <HStack gap={4} alignSelf={{ base: 'flex-end', md: '' }}>
                        <VStack
                          gap={0}
                          whiteSpace={'nowrap'}
                          alignItems={'flex-end'}
                        >
                          <Scratched>
                            {getConvertedCurrency(
                              getPrice(item.price) * LUGGAGE_DISCOUNT
                            )}
                          </Scratched>
                          <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            whiteSpace={'nowrap'}
                            position={'relative'}
                          >
                            {getConvertedCurrency(getPrice(item.price))}
                          </Text>
                          <Text
                            mt={-1}
                            fontSize={'2xs'}
                            color={'_gray'}
                            st="checkout-page.luggage.per.segment"
                          />
                        </VStack>
                        <Incrementer
                          defaultValue={passengers[index][item.type]}
                          max={item.quantity}
                          min={0}
                          callback={(v: number) => handleSelect(v, item)}
                        />
                      </HStack>
                    </>
                  )}
                </HStack>
              </Stack>
              <Divider />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
