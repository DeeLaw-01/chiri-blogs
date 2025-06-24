import {
  Box,
  DrawerCloseButton,
  IconButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import Drawer from 'ui/primitives/Drawer'

import Text from 'ui/primitives/Text'
import CheckoutCartContent from './cart-content'
import { theme } from 'src/styles/theme'
import { useRouter } from 'app/router'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'

import LeftArrowIcon from '@/icons/shared/left-icon.svg'

import CartIcon from '@/icons/marketplace/checkout/nav-cart.icon.svg'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import { useEffect, useState } from 'react'
import Button from 'ui/primitives/Button'
import { CartData } from '../types/shared.type'
import CartItem from '../cart-item'
import { useResponsiveSizes } from 'src/contexts/responsive'

export default function NavCheckoutButton({ isTransparent }) {
  const router = useRouter()
  const { authData } = useAuthData()
  const [currCartItems, setCurrCartItems] = useState([])
  const [currCartItem, setCurrCartItem] = useState<CartData | null>()
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { isMobile } = useResponsiveSizes()

  const {
    cartItems,
    checkoutCartDrawer,
    setCheckoutCartDrawer,
    paymentData,
    setPaymentData,
  } = useMarketPlaceAtoms()

  const showCartButton = router.pathname.includes('manage-booking') && authData

  useEffect(() => {
    if (isMobile) return
    if (cartItems.length > currCartItems.length) {
      onClose()
      let cartItem = cartItems.filter(
        (item) => !currCartItems.includes(item)
      )?.[0]
      setCurrCartItem(cartItem)
      onOpen()
    }
    setCurrCartItems(cartItems)
  }, [cartItems])

  useEffect(() => {
    if (!currCartItem) return
    let cardTimeout = setTimeout(handleTimeOut, 5000)

    return () => {
      clearTimeout(cardTimeout)
    }
  }, [currCartItem])

  const handleTimeOut = () => {
    onClose()
    setCurrCartItem(null)
  }

  return (
    showCartButton && (
      <>
        <Box pl="2">
          <IconButton
            h="auto"
            _hover={{}}
            pos="relative"
            bg="transparent"
            onClick={() => setCheckoutCartDrawer(true)}
            aria-label="Checkout cart"
            icon={
              <>
                <CartIcon
                  stroke={
                    isTransparent ? theme.colors._white : theme.colors.primary
                  }
                />
                <Text
                  top="2%"
                  left="53%"
                  pos="absolute"
                  fontWeight="medium"
                  transform="translateX(-50%)"
                  color={isTransparent ? '_white' : 'primary'}
                >
                  {cartItems.length}
                </Text>
              </>
            }
          />
        </Box>

        {/* {isOpen && currCartItem && ( */}
        {isOpen && currCartItem && (
          <Box
            position="absolute"
            right="5"
            top="4.2rem"
            bg="_white"
            p="5"
            borderRadius="lg"
            boxShadow={'md'}
            w="400px"
          >
            <VStack alignItems={'left'}>
              <CartItem cartData={currCartItem} displayOnly={true} />
              <Button primary onClick={() => setCheckoutCartDrawer(true)}>
                <Text st="manage-booking-page.button.proceed" />
              </Button>
            </VStack>
          </Box>
        )}

        <Drawer
          isOpen={checkoutCartDrawer}
          header={false}
          p={0}
          onClose={() => {
            setCheckoutCartDrawer(false)
            setPaymentData(null)
          }}
        >
          {paymentData ? (
            <IconButton
              w="8"
              h="8"
              left="2"
              top="2"
              zIndex={1}
              minW="auto"
              bg="transparent"
              pos="absolute"
              aria-label="Back"
              icon={
                <LeftArrowIcon
                  width="14"
                  height="14"
                  stroke={theme.colors._black}
                />
              }
              onClick={() => setPaymentData(null)}
            />
          ) : (
            <DrawerCloseButton left="2" zIndex={1} />
          )}

          <CheckoutCartContent />
        </Drawer>
      </>
    )
  )
}
