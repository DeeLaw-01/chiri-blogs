import { useResponsiveSizes } from 'src/contexts/responsive'
import BookingCardMobile from './booking-card-mobile'
import BookingCardDesktop from './booking-card-desktop'
import { useState } from 'react'
import useAuth from 'src/hooks/useAuth'
import { CardProps } from 'ui/primitives/Card/card.type'
import getTransportIcon from 'ui/features/trip-details/transport/get-transport-icon'
import BedIcon from '@/icons/trip-details-page/bed-icon.svg'
import { Booking } from 'src/api/queries/get/manage-booking/previous-bookings/bookings.type'
import { Mode } from 'src/shared-types/transport.type'
import { useRouter } from 'src/i18n/router'

type BookingCardProps = {
  booking: Booking
} & CardProps

export default function BookingCard({ booking, ...rest }: BookingCardProps) {
  const router = useRouter()
  const { isMobile } = useResponsiveSizes()
  const { attributes } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSelect = () => {
    setLoading(true)
    router.push(
      `/manage-booking?email=${attributes?.email}&bid=${booking.purchase_id}`
    )
  }

  const getType = (item: Mode | 'hotel') => {
    if (item === 'hotel') return BedIcon
    else return getTransportIcon(item)
  }

  return (
    <>
      {isMobile ? (
        <BookingCardMobile
          booking={booking}
          handleSelect={handleSelect}
          isLoading={loading}
          getType={getType}
          {...rest}
        />
      ) : (
        <BookingCardDesktop
          booking={booking}
          handleSelect={handleSelect}
          isLoading={loading}
          getType={getType}
          {...rest}
        />
      )}
    </>
  )
}
