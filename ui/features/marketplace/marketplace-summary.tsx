import { Box, HStack, useDisclosure, useToast } from '@chakra-ui/react'

import Container from 'ui/primitives/Container'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import useCurrency from 'src/hooks/useCurrency'
import useCartTotal from './hooks/useCartTotal'
import useTranslation from 'src/hooks/useTranslation'
import useMarketPlaceAtoms from './atoms/useMarketPlaceAtoms'

import { AnimatePresence } from 'framer-motion'
import { MotionBox } from 'ui/primitives/Motion'
import { useAuthData } from '../manage-booking/atoms/useAuthDataAtom'
import { useEffect, useState } from 'react'
import { useSelectedCurrency } from 'src/contexts/currency'
import { useRouter } from 'app/router'
import { useSearchParams } from 'next/navigation'
import { purchaseCartQuery } from 'src/api/queries/get/purchaseCartQuery'
import useMutation from 'src/api/useMutation'
import generateUUID from 'src/utils/generateUUID'

// import { theme } from 'src/styles/theme'

export default function MarketplaceSummary() {
  const toast = useToast()
  const router = useRouter()
  const { t } = useTranslation()
  const { authData } = useAuthData()

  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  const { calculateCartTotal } = useCartTotal()
  const { getConvertedCurrency } = useCurrency()
  const { isOpen, onToggle } = useDisclosure()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const { selectedCurrency } = useSelectedCurrency()
  const { trigger, isMutating } = useMutation((d) => purchaseCartQuery(d))

  const {
    setCartId,
    cartItems,
    checkingCart,
    checkoutCartDrawer,
    setCheckoutCartDrawer,
    setPaymentData,
    session,
  } = useMarketPlaceAtoms()

  useEffect(() => {
    let disbaled = true

    // if even one item is available let users
    // make the checkout with stripe form
    cartItems.forEach((item) => {
      if (item.isUnavailable === false) {
        disbaled = false
        return
      }
    })

    setIsDisabled(disbaled)
  }, [cartItems])

  const onCheckoutHandler = () => {
    const UID = generateUUID()
    sessionStorage.setItem('mb-uuid', UID)

    const payload = {
      session_id: sessionId ?? '',
      purchase_id: authData.booking_id,
      currency: selectedCurrency?.code,
      checkout_session: session,
      redirect_urls: {
        success_url:
          window.location.host +
          `/manage-booking/marketplace?bid=${authData?.booking_id}&email=${
            authData?.booking_email
          }&complete=true&price=${getConvertedCurrency(calculateCartTotal(), {
            prettyPrice: false,
          })}`,
        failure_url:
          window.location.host +
          `/manage-booking/marketplace?bid=${authData?.booking_id}&email=${
            authData?.booking_email
          }&complete=false&price=${getConvertedCurrency(calculateCartTotal(), {
            prettyPrice: false,
          })}&redirect_status=failed`,
      },
    }

    trigger(
      { payload, UID },
      {
        onSuccess: purchaseCartQuerySuccess,
        onError: purchaseCartQueryError,
      }
    )
  }

  const purchaseCartQuerySuccess = (res) => {
    // get latest request id
    const checkoutUUID = sessionStorage.getItem('mb-uuid')

    // don't process response if not the latest request
    if (checkoutUUID) {
      if (res.request_uuid !== checkoutUUID) return
    }

    setCartId(res.cart_id)
    setPaymentData(res.success)
  }

  const purchaseCartQueryError = () => {
    toast({
      title: t('common.error.general'),
      status: 'error',
      duration: 4000,
      isClosable: false,
    })
  }

  return (
    <AnimatePresence>
      {cartItems.length > 0 && (
        <MotionBox
          bottom={0}
          left="0"
          right="0"
          pos="fixed"
          zIndex="docked"
          initial={{ opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { type: 'tween' } }}
        >
          {/* <Collapse in={isOpen} animateOpacity>
            <Box h="70vh" bg="gray.200" />
          </Collapse>

          <Box bg="_lightestgray" borderTopRadius="2rem">
            <Container py="4">
              <HStack
                w="full"
                justify="space-between"
                px="2"
                onClick={onToggle}
              >
                <Text color="primary" fontWeight="medium" fontSize="xl">
                  Your itinerary
                </Text>
                <Box
                  transition="transform .2s ease"
                  transform={`rotate(${isOpen ? -180 : 0}deg)`}
                >
                  <BiChevronDown fontSize="24px" color={theme.colors.primary} />
                </Box>
              </HStack>
            </Container>
          </Box> */}

          <Box bg="_white" borderTop="1px solid" borderTopColor="_lightgray">
            <Container py="4">
              <HStack w="full" justify="space-between">
                <Box>
                  <Text
                    color="_darkgray"
                    st="manage-booking-page.marketplace.cart.total"
                  />
                  <Text fontSize="lg">
                    {getConvertedCurrency(calculateCartTotal(), {
                      includeCommaValues: true,
                    })}
                  </Text>
                </Box>

                <Button
                  px="4"
                  py="3.5"
                  h="auto"
                  primary
                  isDisabled={isDisabled}
                  isLoading={isMutating || checkingCart}
                  borderRadius="lg"
                  fontWeight="normal"
                  mt={{ base: 3, md: 0 }}
                  onClick={
                    checkoutCartDrawer
                      ? onCheckoutHandler
                      : () => setCheckoutCartDrawer(true)
                  }
                >
                  {!checkoutCartDrawer
                    ? t('manage-booking-page.checkout.drawer.button.open')
                    : t('manage-booking-page.checkout.drawer.button.proceed')}
                </Button>
              </HStack>
            </Container>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}
