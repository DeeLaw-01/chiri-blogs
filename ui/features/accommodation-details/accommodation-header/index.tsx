import { useResponsiveSizes } from 'src/contexts/responsive'
import MobileAccommodationHeader from './mobile-accommodation-header'
import DesktopAccommodationHeader from './desktop-accommodation-header'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type AccommodationHeaderProps = {
  hotel: HotelDetails
  onClose: () => void
}

export default function AccommodationHeader({
  hotel,
  onClose,
}: AccommodationHeaderProps) {
  const { isMobile } = useResponsiveSizes()

  const images = hotel.hotel_photos
    ?.map((img) => {
      return { src: img.url_original }
    })
    .splice(0, 5)

  return (
    <>
      {isMobile ? (
        <MobileAccommodationHeader
          hotel={hotel}
          images={images}
          onClose={onClose}
        />
      ) : (
        <DesktopAccommodationHeader
          hotel={hotel}
          images={images}
          onClose={onClose}
        />
      )}
    </>
  )
}
