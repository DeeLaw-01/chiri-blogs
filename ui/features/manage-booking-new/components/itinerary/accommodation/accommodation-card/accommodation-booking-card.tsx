import { HotelDetails } from 'src/shared-types/hotel-details.type'

import AccommodationBookingCardDesktop from './accommodation-booking-card-desktop'
import { useResponsiveSizes } from 'src/contexts/responsive'
import AccommodationBookingCardMobile from './accommodation-booking-card-mobile'

type BookingAccommodationCardProps = {
  accommodation: HotelDetails
}
export default function BookingAccommodationCard({
  accommodation,
}: BookingAccommodationCardProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <>
      {isMobile ? (
        <AccommodationBookingCardMobile accommodation={accommodation} />
      ) : (
        <AccommodationBookingCardDesktop accommodation={accommodation} />
      )}
    </>
  )
}
