import {
  Box,
  HStack,
  UnorderedList,
  VStack,
  ListItem,
  ListIcon,
  useToast,
} from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'

import useTranslation from 'src/hooks/useTranslation'
import { useResponsiveSizes } from 'src/contexts/responsive'

import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import { useEffect } from 'react'

import type { CartData } from 'ui/features/marketplace/types/shared.type'

import SmallCheckIcon from '@/icons/shared/tick-icon.svg'
import DiscountIcon from '@/icons/marketplace/hotel/discount-shape.svg'
import SmallAccommodationCard from 'ui/features/trip-details/accommodation/accommodation-small/accommodation-small'
import SmallAccommodationCardSkeleton from 'ui/features/trip-details/accommodation/accommodation-small/accommodation-small-skeleton'
import ErrorState from './error-state'
import useUpdateTrip from 'ui/features/trip-details/hooks/useUpdateTrip'
import { useSearchParams } from 'next/navigation'

const StayBestDealCard = ({ hotel, onOpenHotelView }) => {
  return (
    <>
      <VStack
        px="6"
        bg="_lightestgray"
        overflow="hidden"
        borderRadius="lg"
        alignSelf="stretch"
        minW={{ base: '18rem', md: '20rem' }}
      >
        <VStack w="full" align="flex-start" justify="center" h="60%">
          <Box color="_black">
            <DiscountIcon />
            <Text fontWeight="medium" fontSize="xl"></Text>
            <UnorderedList mt="3" listStyleType="none" ml="0">
              <ListItem>
                <ListIcon as={SmallCheckIcon} color="_black" />
                <Text
                  notag
                  st="manage-booking-page.marketplace.listitem.best.deal"
                />
              </ListItem>
              <ListItem mt="1">
                <ListIcon as={SmallCheckIcon} color="_black" />
                <Text
                  notag
                  st="manage-booking-page.marketplace.listitem.customizable"
                />
              </ListItem>
              <ListItem mt="1">
                <ListIcon as={SmallCheckIcon} color="_black" />
                <Text
                  notag
                  sd={{ name: hotel.city }}
                  st="manage-booking-page.marketplace.best.deals.items"
                />
              </ListItem>
            </UnorderedList>
          </Box>
        </VStack>

        <Button
          id="show"
          px="4"
          py="3.5"
          w="full"
          h="auto"
          primary
          onClick={onOpenHotelView}
          borderRadius="lg"
          fontWeight="medium"
          arrow
        >
          <Text notag st="manage-booking-page.view.all.options" />
        </Button>
      </VStack>
    </>
  )
}

export default function StaysSection() {
  const toast = useToast()
  const { t } = useTranslation()
  const { authData } = useAuthData()
  const { isMobile } = useResponsiveSizes()
  const searchParams = useSearchParams()
  const isPaymentComplete = Boolean(
    searchParams?.get('complete') &&
      searchParams?.get('redirect_status') !== 'failed'
  )

  const {
    cartItems,
    setCartItems,
    setShowHotelDetails,
    setShowChangeAccommodation,
  } = useMarketPlaceAtoms()

  const {
    activeFilter,
    setActiveFilter,
    hotelsArray,
    setHotelsArray,
    showHotels,
    setShowHotels,
  } = useMarketPlaceAtoms()

  const { updateTripHandler } = useUpdateTrip()

  useEffect(() => {
    !isPaymentComplete &&
      updateTripHandler(
        {
          trip_id: authData?.trip.id,
          purchase_id: authData?.booking_id,
          position: 'all',
          type: 'accomodation',
          add: true,
        },
        getAllHotelsQuerySuccess,
        getAllHotelsQueryError
      )
  }, [])

  const getAllHotelsQuerySuccess = (data) => {
    const hotels =
      data?.trip.itinerary
        .filter((trip) => trip.type === 'accommodation')
        .filter((trip) => trip.content.is_selected)
        .map((itinerary) => itinerary.content) || []

    if (hotels.length === 0) {
      setShowHotels(false)
    }

    setHotelsArray(hotels)
  }

  const getAllHotelsQueryError = () => {
    toast({
      description: t('common.error.subheading'),
      position: 'bottom',
      status: 'error',
      duration: 3000,
    })
  }

  const prefetchSelectHotel = (selectedHotel) => {
    const alreadyInCart = cartItems.some(
      (item) => item.uuid === selectedHotel.booking_id
    )

    if (alreadyInCart) {
      toast({
        title: 'Hotel is already in cart',
        status: 'warning',
        duration: 4000,
        position: isMobile ? 'top' : 'bottom',
      })
      return false
    }

    const sameCityHotelExists = cartItems.some(
      (item) =>
        item.type === 'STAYS' && item.data.position === selectedHotel.position
    )

    if (sameCityHotelExists) {
      toast({
        title: 'Hotel of same city is already added in the cart',
        status: 'warning',
        duration: 4000,
        position: isMobile ? 'top' : 'bottom',
      })
      return false
    }

    return true
  }

  const handleSelectHotel = (data) => {
    const newAcceptedHotelArray =
      data?.trip.itinerary
        .filter((trip) => trip.type === 'accommodation')
        .filter((trip) => trip.content.added_in_cart)
        .map((itinerary) => itinerary.content) || []

    if (newAcceptedHotelArray.length === 0) {
      return toast({
        description: t('common.error.subheading'),
        position: 'bottom',
        status: 'error',
        duration: 3000,
      })
    }

    const newAcceptedHotel = newAcceptedHotelArray[0]

    setCartItems((previousItems) => {
      const newLuggageItem: CartData = {
        uuid: newAcceptedHotel.booking_id,
        data: newAcceptedHotel,
        type: 'STAYS',
        isUnavailable: false,
        priceChange: {
          status: false,
        },
      }
      return [...previousItems, newLuggageItem]
    })

    toast({
      title: t('manage-booking-page.marketplace.add.item.to.cart'),
      status: 'success',
      duration: 4000,
      position: isMobile ? 'top' : 'bottom',
    })
    setShowHotelDetails({})
    setShowChangeAccommodation({})
  }

  if (!showHotels) return <ErrorState />

  if (activeFilter === 'ALL')
    return (
      <Box w="full">
        <HStack pb="6" w="full" justify="space-between">
          <Text
            fontSize="2xl"
            st="manage-booking-page.marketplace.itemcard.place.to.stay"
          />
          <Button
            id="set-stays-btn"
            asLink
            h="auto"
            fontWeight="normal"
            onClick={() => setActiveFilter('STAYS')}
          >
            <Text notag st="common.view.more" />
          </Button>
        </HStack>

        <HStack maxW="100vw" overflowX="auto" spacing={6} pl="2" pb="4">
          {hotelsArray ? (
            <>
              {hotelsArray.map((hotel) => (
                <SmallAccommodationCard
                  key={hotel.id}
                  hotel={hotel}
                  minW={{ base: '70vw', md: '20rem' }}
                  maxW={{ base: '80vw', md: '20rem' }}
                  onOpenHotelView={() =>
                    setShowHotelDetails({
                      hotel: hotel,
                      callback: handleSelectHotel,
                      prefetch: prefetchSelectHotel,
                    })
                  }
                />
              ))}

              <VStack
                px="6"
                bg="_lightestgray"
                overflow="hidden"
                borderRadius="lg"
                alignSelf="stretch"
                minW={{ base: '18rem', md: '20rem' }}
              >
                <VStack w="full" align="flex-start" justify="center" h="60%">
                  <Box color="_black">
                    <DiscountIcon />
                    <Text fontWeight="medium" fontSize="xl"></Text>
                    <UnorderedList mt="3" listStyleType="none" ml="0">
                      <ListItem>
                        <ListIcon as={SmallCheckIcon} color="_black" />
                        <Text
                          notag
                          st="manage-booking-page.marketplace.listitem.best.deal"
                        />
                      </ListItem>
                      <ListItem mt="1">
                        <ListIcon as={SmallCheckIcon} color="_black" />
                        <Text
                          notag
                          st="manage-booking-page.marketplace.listitem.customizable"
                        />
                      </ListItem>
                      <ListItem mt="1">
                        <ListIcon as={SmallCheckIcon} color="_black" />
                        <Text
                          notag
                          st="manage-booking-page.marketplace.listitem.hundred.plus.deals"
                        />
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </VStack>

                <Button
                  id="stays"
                  px="4"
                  py="3.5"
                  w="full"
                  h="auto"
                  primary
                  borderRadius="lg"
                  fontWeight="medium"
                  onClick={() => setActiveFilter('STAYS')}
                  arrow
                >
                  <Text notag st="manage-booking-page.view.all.options" />
                </Button>
              </VStack>
            </>
          ) : (
            <>
              <SmallAccommodationCardSkeleton
                minW={{ base: '70vw', md: '20rem' }}
                maxW={{ base: '80vw', md: '20rem' }}
              />
              <SmallAccommodationCardSkeleton
                minW={{ base: '70vw', md: '20rem' }}
                maxW={{ base: '80vw', md: '20rem' }}
              />
            </>
          )}
        </HStack>
      </Box>
    )

  return (
    <Box w="full">
      {hotelsArray ? (
        hotelsArray.map((hotel) => (
          <Box w="full" pb="4" key={hotel.id}>
            <HStack pb="4" w="full" justify="space-between">
              <Text fontSize="2xl">Stay in {hotel.city}</Text>
            </HStack>

            <HStack maxW="100vw" overflowX="auto" spacing={6} pl="2" pb="4">
              <SmallAccommodationCard
                hotel={hotel}
                minW={{ base: '70vw', md: '20rem' }}
                maxW={{ base: '80vw', md: '20rem' }}
                onOpenHotelView={() =>
                  setShowHotelDetails({
                    hotel: hotel,
                    callback: handleSelectHotel,
                    prefetch: prefetchSelectHotel,
                  })
                }
              />
              <StayBestDealCard
                hotel={hotel}
                onOpenHotelView={() =>
                  setShowChangeAccommodation({
                    hotel: hotel,
                    callback: handleSelectHotel,
                    prefetch: prefetchSelectHotel,
                  })
                }
              />
            </HStack>
          </Box>
        ))
      ) : (
        <>
          <HStack maxW="100vw" overflowX="auto" spacing={6} pb="4">
            <SmallAccommodationCardSkeleton
              minW={{ base: '70vw', md: '20rem' }}
              maxW={{ base: '80vw', md: '20rem' }}
            />
            <SmallAccommodationCardSkeleton
              minW={{ base: '70vw', md: '20rem' }}
              maxW={{ base: '80vw', md: '20rem' }}
            />
          </HStack>
        </>
      )}
    </Box>
  )
}
