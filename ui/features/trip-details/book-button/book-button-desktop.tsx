import { Divider, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

import { TripDetails } from 'src/shared-types/trip-details.type'

import CornerBanner from './corner-banner'
import ChevronDown from '@/icons/shared/chevron-down-icon.svg'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import theme from 'src/styles/theme'
import Card from 'ui/primitives/Card'
import { WithScrollData } from 'src/hooks/useScrollListener'
import TripInfo from './trip-info'
import useCurrency from 'src/hooks/useCurrency'
import { getAverage } from 'src/utils/numberUtils'
import DiscountCard from '../discount-card'
import { AnimatedButton } from 'ui/primitives/AnimatedButton'

type BookButtonDesktopProps = {
  trip: TripDetails
  totalPrice: number
  discountPrice: number
  handlePurchase: () => void
  isLoading: boolean
  isDisabled: boolean
}

export default function BookButtonDesktop({
  trip,
  totalPrice,
  discountPrice,
  isLoading,
  isDisabled,
  handlePurchase,
}: BookButtonDesktopProps) {
  const { setShowChangeTravelers } = useTripDetailsAtoms()
  const { getConvertedCurrency } = useCurrency()

  const getDiscountPercentage = () => {
    if (discountPrice) return getAverage(discountPrice, totalPrice)
  }

  return (
    <>
      <WithScrollData enableScrollBehavior>
        {({ isScrollingDown }) => {
          return (
            <>
              <VStack
                mt={5}
                bg="_white"
                spacing={4}
                position="sticky"
                transition="all .2s"
                top={isScrollingDown ? '20px' : '83px'}
              >
                <Card overflow={'hidden'} p={5}>
                  {discountPrice > 0 && (
                    <CornerBanner bannerPosition="right" w="160px">
                      <Text
                        st="common:discount.percentage"
                        sd={{ discount: getDiscountPercentage() }}
                      />
                    </CornerBanner>
                  )}
                  <HStack alignItems="flex-start">
                    <Text fontSize="3xl" fontWeight="medium">
                      {getConvertedCurrency(totalPrice)}
                    </Text>
                    {discountPrice && (
                      <Text as="s" fontSize="sm" color="primary">
                        <Text color="_gray">
                          {getConvertedCurrency(discountPrice)}
                        </Text>
                      </Text>
                    )}
                  </HStack>
                  <Text color="_gray" mt="-1 !important" fontSize="sm">
                    <Text notag st="new-trip-page:total.price.for" />
                    <Text
                      notag
                      st="common:travelers"
                      sd={{ count: trip.passengers.total_passengers }}
                    />
                  </Text>
                  <Divider mt="4" w="85%" ml="7%" />

                  <TripInfo trip={trip} price={totalPrice} />

                  <Button
                    id="change-passengers"
                    fontWeight="normal"
                    onClick={() => {
                      setShowChangeTravelers(true)
                    }}
                    bg="_white"
                    border="1px solid"
                    borderColor={'_lightgray'}
                    w="full"
                    justifyContent="space-between"
                    _hover={{ bg: '_lightestgray' }}
                    isDisabled={isDisabled}
                    rightIcon={
                      <ChevronDown
                        width="10"
                        height="10"
                        stroke={theme.colors._black}
                      />
                    }
                  >
                    <Text
                      as="span"
                      st="common:travelers"
                      sd={{ count: trip.passengers.total_passengers }}
                    />
                  </Button>
                  <AnimatedButton
                    h={'3.5rem'}
                    mt="2"
                    w="full"
                    id="book-button-desktop"
                    bgGradient={theme.gradients.primary}
                    color="_white"
                    fontSize="lg"
                    isLoading={isLoading}
                    onClick={handlePurchase}
                    isDisabled={isDisabled}
                  >
                    <Text>Book Trip</Text>
                  </AnimatedButton>
                  {trip.available_seats >= trip.passengers.total_passengers && (
                    <Text
                      color="_gray"
                      fontSize="xs"
                      textAlign="center"
                      mt="1"
                      st="new-trip-page:seats.left"
                      sd={{ count: trip.available_seats }}
                    />
                  )}
                </Card>

                {trip.historical_price?.show_info && (
                  <DiscountCard
                    price={trip.price.price_transports}
                    historicalPrice={trip.historical_price}
                  />
                )}
              </VStack>
            </>
          )
        }}
      </WithScrollData>
    </>
  )
}
