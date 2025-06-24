import BookButtonDesktop from './book-button-desktop'
import BookButtonMobile from './book-button-mobile'
import { TripDetails } from 'src/shared-types/trip-details.type'
import useSessionStorage from 'src/hooks/useSessionStorage'
import { EecAddToCartDataLayer } from 'src/tracking'
import { useRouter } from 'app/router'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

type BookButtonProps = {
  trip: TripDetails
  isMobile: boolean
}

export default function BookButton({ trip, isMobile }: BookButtonProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState<boolean>()
  const [, setSessionTimer] = useSessionStorage('persist-timer-checkout')
  const { hotelsLoading } = useTripDetailsAtoms()
  const isDisabled = !trip.available_to_buy

  const getTotalPrice = (): number => {
    let accommodation = getAccommodationPrice()
    let flights = trip.price.price_transports
    return flights + accommodation
  }

  const getAccommodationPrice = (): number => {
    return trip.price.price_hotels
  }

  const getDiscountPrice = (): number => {
    if (!trip.avg_price || trip.avg_price <= trip.price.price_transports)
      return 0
    let accommodation = getAccommodationPrice()
    let flights = trip.avg_price
    return accommodation + flights
  }

  const handlePurchase = (): void => {
    setLoading(true)
    setSessionTimer({ hours: 0, mins: '20', secs: '00' })

    if (trip) {
      EecAddToCartDataLayer()
      const session = searchParams.get('sessionId')
      router.push(
        `/checkout/${trip.id}${session ? `?sessionId=${session}` : ''}`
      )
    }
  }

  if (isMobile)
    return (
      <BookButtonMobile
        totalPrice={getTotalPrice()}
        discountPrice={getDiscountPrice()}
        handlePurchase={handlePurchase}
        trip={trip}
        isLoading={loading || hotelsLoading}
        isDisabled={isDisabled}
      />
    )
  return (
    <BookButtonDesktop
      totalPrice={getTotalPrice()}
      discountPrice={getDiscountPrice()}
      handlePurchase={handlePurchase}
      trip={trip}
      isLoading={loading || hotelsLoading}
      isDisabled={isDisabled}
    />
  )
}
