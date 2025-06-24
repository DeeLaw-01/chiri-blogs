import { Box, Divider, HStack, RadioGroup } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import { useState } from 'react'
import Radio from 'ui/primitives/Radio'
import Text from 'ui/primitives/Text'
import useCurrency from 'src/hooks/useCurrency'

import SeatsTogetherIllustration from '@/icons/checkout/seats-window.svg'
import SeatsRandomIllustration from '@/icons/checkout/seats-default.svg'
import SeatsWindowOneIllustration from '@/icons/checkout/seats-window-one.svg'
import Button from 'ui/primitives/Button'
import useCheckoutCart from '../../hooks/useCheckoutCart'
import Tag from 'ui/primitives/Tag'
import SectionButton from '../shared/section-button'
import useCheckoutSteps from '../../hooks/useCheckoutSteps'
import { Step } from '../../hooks/useCheckoutSteps/step.type'
import Scratched from 'ui/shared/scratched'
import useTranslation from 'src/hooks/useTranslation'
import { getTransportSegments } from '../../utils/getTransportSegments'

type SeatSelect = 'selected' | 'random'

export default function Seats() {
  const { passengers, trip, seats } = useCheckoutAtoms()
  const { getStepIndex, isCurrentIndex, handleNextStep } = useCheckoutSteps()
  const [value, setValue] = useState<SeatSelect>('random')
  const { addToCart } = useCheckoutCart()
  const { getConvertedCurrency } = useCurrency()
  const { t } = useTranslation()

  if (!trip) return <></>

  const getPrice = () => {
    if (!seats) return 0
    return seats.price / getTransportSegments(trip?.itinerary).length
  }

  const handleSelect = (newValue: SeatSelect) => {
    if (newValue === value || !seats) return

    setValue(newValue)
    addToCart(getSeatsCartItem(newValue))
  }

  const getSeatsCartItem = (value: SeatSelect) => {
    return {
      title: 'checkout-page.selected.seats',
      key: 'seats',
      price: seats?.price ?? 0,
      count: value === 'selected' ? 1 : -1,
    }
  }

  return (
    <Card p={{ base: 3, md: 5 }}>
      <SectionButton
        title={t('checkout-page.seats.form.header')}
        step={getStepIndex(Step.Seats)}
      />
      {isCurrentIndex(Step.Seats) && seats && (
        <>
          <Box
            mt="5"
            border="1px solid"
            borderRadius="lg"
            borderColor="_lightgray"
            p="3"
          >
            <RadioGroup value={value} width="100%" cursor="pointer">
              <HStack
                w="full"
                onClick={() => handleSelect('selected')}
                justify="space-between"
              >
                <HStack>
                  <Box>
                    {passengers.length === 1 ? (
                      <SeatsWindowOneIllustration />
                    ) : (
                      <SeatsTogetherIllustration />
                    )}
                  </Box>
                  <Box>
                    <Text
                      notag
                      st={
                        passengers.length === 1
                          ? 'checkout-page.seats.window'
                          : 'checkout-page.seats.form.window.header'
                      }
                    />
                    <Text
                      color="_gray"
                      fontSize="sm"
                      st={
                        passengers.length === 1
                          ? 'checkout-page.seats.form.window.subtext.single'
                          : 'checkout-page.seats.form.window.subtext'
                      }
                    />
                    <HStack>
                      <Text color="_darkgray">
                        {getConvertedCurrency(getPrice())}
                      </Text>

                      <Scratched>
                        {getConvertedCurrency(getPrice() * 1.1)}
                      </Scratched>
                    </HStack>
                    <Text
                      fontSize={'2xs'}
                      color={'_gray'}
                      st="checkout-page.luggage.per.segment"
                    />
                    <Tag mt={1} green>
                      <Text
                        fontSize="sm"
                        sd={{
                          discount: 10,
                        }}
                        st="checkout-page.seats.form.window.discount"
                      />
                    </Tag>
                  </Box>
                </HStack>
                <Radio value="selected" />
              </HStack>

              <Divider my={3} />
              <HStack
                w="full"
                onClick={() => handleSelect('random')}
                justify="space-between"
              >
                <HStack>
                  <Box>
                    <SeatsRandomIllustration />
                  </Box>
                  <Box>
                    <Text st="checkout-page.seats.form.default.heading" />
                    <Text
                      color="_gray"
                      fontSize="sm"
                      st="checkout-page.seats.form.default.subtext"
                    />
                  </Box>
                </HStack>

                <Radio value="random" />
              </HStack>
            </RadioGroup>
          </Box>
          <Button
            primary
            mt="3"
            id="checkout-seats-details"
            w="full"
            onClick={() => handleNextStep()}
          >
            <Text st="common.next.step" />
          </Button>
        </>
      )}
    </Card>
  )
}
