import { Box, HStack, Stack, VStack, useToast } from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import useCurrency from 'src/hooks/useCurrency'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import TickIcon from '@/icons/shared/tick-icon.svg'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import type { CartData, SeatInfo } from '../types/shared.type'
import theme from 'src/styles/theme'
import Image from 'ui/primitives/Image'
import Button from 'ui/primitives/Button'
import { useResponsiveSizes } from 'src/contexts/responsive'
import useTranslation from 'src/hooks/useTranslation'
import getSeatsQuery from 'src/api/queries/post/getSeatsMarketplace'
import { useRouter } from 'app/router'
import ErrorState from './error-state'
import { useFetch } from 'src/api/useFetch'

const tickPoints = [
  'manage-booking-page.marketplace.seats.listitem.one',
  'manage-booking-page.marketplace.seats.listitem.two',
  'manage-booking-page.marketplace.seats.listitem.three',
]

export default function ProtectionSection() {
  const { authData } = useAuthData()
  const router = useRouter()
  const toast = useToast()
  const { isMobile } = useResponsiveSizes()
  const { t } = useTranslation()
  const {
    showSeats,
    setShowSeats,
    seatInfo,
    setSeatInfo,
    cartItems,
    setCartItems,
    activeFilter,
  } = useMarketPlaceAtoms()

  const { getConvertedCurrency } = useCurrency()

  const getSeatsInfoQueryPayload = () => {
    const payload = {
      purchase_id: authData?.booking_id,
      session_id: router.query.sessionId,
    }

    return payload
  }

  const { data } = useFetch(
    seatInfo ? null : getSeatsQuery(getSeatsInfoQueryPayload()),
    {
      onSuccess: (data) => callbackSeatsInfoOnSuccess(data),
      onError: (err) => callbackSeatsInfoOnError(err),
    }
  )

  const callbackSeatsInfoOnError = (res): void => {
    setShowSeats(false)
    if (activeFilter === 'SEATS')
      toast({
        description: t('common.error.subheading'),
        position: 'bottom',
        status: 'error',
        duration: 3000,
      })
  }

  const callbackSeatsInfoOnSuccess = (data: SeatInfo) => setSeatInfo(data)

  const addToCart = () => {
    setCartItems((previousItems) => {
      const newSeatsItem: CartData = {
        uuid: 'SEATS',
        data: {
          price: seatInfo?.price,
        },
        type: 'SEATS',
        isUnavailable: false,
        priceChange: {
          status: false,
        },
      }

      return [...previousItems, newSeatsItem]
    })

    toast({
      title: t('manage-booking-page.marketplace.add.item.to.cart'),
      status: 'success',
      duration: 4000,
      position: isMobile ? 'top' : 'bottom',
    })
  }

  return (
    <>
      {showSeats ? (
        <Stack direction={['column', 'row']} w="full">
          <Box
            w="full"
            position="relative"
            minH={{ base: '10rem', md: '15rem' }}
          >
            <Image
              alt={'seats'}
              fill
              src="/static/seats.png"
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box w="full" p={4}>
            <VStack alignItems="flex-start">
              {tickPoints.map((point, idx) => {
                return (
                  <HStack key={idx} w="full" verticalAlign="center">
                    <TickIcon stroke={theme.colors._black} height="10px" />
                    <Text
                      st={
                        idx === 0 && authData?.passengers.length === 1
                          ? 'manage-booking-page:marketplace.seats.listitem.one.single.passenger'
                          : point
                      }
                    />
                  </HStack>
                )
              })}
              <Button
                primary
                id="buy-seats"
                minW="10rem"
                mt={4}
                p={6}
                isLoading={!seatInfo}
                onClick={() => addToCart()}
                isDisabled={
                  cartItems.some((item) => item.type === 'SEATS') ||
                  seatInfo?.already_purchased_seats
                }
              >
                {seatInfo?.already_purchased_seats ? (
                  <Text st="manage-booking-page.marketplace.seats.buy.disabled" />
                ) : (
                  <Text
                    st="manage-booking-page.marketplace.seats.buy.button"
                    sd={{
                      price: getConvertedCurrency(
                        seatInfo?.price / authData?.passengers.length
                      ),
                    }}
                  />
                )}
              </Button>
            </VStack>
          </Box>
        </Stack>
      ) : (
        <ErrorState />
      )}
    </>
  )
}
