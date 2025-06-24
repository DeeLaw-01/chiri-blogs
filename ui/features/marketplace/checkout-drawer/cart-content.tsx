import { Box, Center, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { MotionBox, MotionCenter, MotionVStack } from 'ui/primitives/Motion'
import { AnimatePresence } from 'framer-motion'
import useCurrency from 'src/hooks/useCurrency'
import useCartTotal from '../hooks/useCartTotal'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import Payment from 'ui/shared/payment'
import MarketplaceSummary from 'ui/features/marketplace/marketplace-summary'
import EmptyCartIcon from '@/icons/marketplace/checkout/empty-cart-icon.svg'
import CartSummaryPlane from '@/icons/marketplace/checkout/cart-summary-plane.svg'
import CartItem from '../cart-item'
import Promocode from './promocode'

export default function CheckoutCartContent() {
  const { authData } = useAuthData()
  const { calculateCartTotal } = useCartTotal()
  const { getConvertedCurrency } = useCurrency()
  const { cartItems, paymentData } = useMarketPlaceAtoms()

  const redirect =
    window.location.origin +
    `/manage-booking/marketplace?bid=${authData.booking_id}&email=${
      authData.booking_email
    }&complete=true&price=${getConvertedCurrency(calculateCartTotal(), {
      prettyPrice: false,
    })}`

  return (
    <>
      <Box
        pt="6"
        w="full"
        h="10rem"
        bg="_lightestgray"
        pos="relative"
        borderBottomRadius="lg"
      >
        <Box pos="absolute" right={0}>
          <CartSummaryPlane />
        </Box>
        <Center h="full">
          <Text
            color="black"
            fontSize="2xl"
            st={`manage-booking-page.${
              paymentData ? 'cart.complete.checkout' : 'cart.order.summary'
            }`}
          />
        </Center>
      </Box>

      <Box mt="8" px="4">
        <Box pb="32">
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <MotionCenter
                minH="60vh"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <VStack>
                  <EmptyCartIcon />
                  <Text
                    fontSize="xl"
                    st="manage-booking-page.cart.empty.here"
                  />
                </VStack>
              </MotionCenter>
            ) : (
              <>
                {paymentData ? (
                  <MotionBox
                    w="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Payment
                      isLoading={false}
                      redirect={redirect}
                      price={calculateCartTotal()}
                      successPaymentData={paymentData}
                    />
                  </MotionBox>
                ) : (
                  <MotionVStack
                    w="full"
                    align="flex-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <AnimatePresence>
                      {cartItems.map((data) => (
                        <CartItem key={data.uuid} cartData={data} />
                      ))}
                      <Promocode />
                    </AnimatePresence>
                  </MotionVStack>
                )}
              </>
            )}
          </AnimatePresence>
        </Box>
      </Box>

      {!paymentData && <MarketplaceSummary />}
    </>
  )
}
