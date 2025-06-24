import { Box } from '@chakra-ui/react'

import SmallAccommodationCard from './accommodation-small/accommodation-small'
import BigAccommodationCard from './accommodation-big/accommodation-big'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type AccommodationCardProps = {
  hotel: HotelDetails
  onOpenHotelView: (hotel: any) => void
}

export default function AccommodationCard({
  hotel,
  onOpenHotelView,
}: AccommodationCardProps) {
  const { isMobile } = useResponsiveSizes()

  return (
    <Box w="full">
      {isMobile ? (
        <SmallAccommodationCard
          hotel={hotel}
          onOpenHotelView={onOpenHotelView}
        />
      ) : (
        <BigAccommodationCard hotel={hotel} onOpenHotelView={onOpenHotelView} />
      )}
    </Box>
  )
}
