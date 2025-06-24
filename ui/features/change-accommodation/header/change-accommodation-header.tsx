import { Box } from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import ChangeAccommodationHeaderMobile from './change-accommodation-header-mobile'
import ChangeAccommodationHeaderDesktop from './change-accommodation-header-desktop'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationHeaderProps = {
  accommodation: HotelDetails
  onClose: () => void
}

export default function ChangeAccommodationHeader({
  accommodation,
  onClose,
}: ChangeAccommodationHeaderProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <Box w="full">
      {isMobile && (
        <ChangeAccommodationHeaderMobile
          accommodation={accommodation}
          onClose={onClose}
        />
      )}
      {!isMobile && (
        <ChangeAccommodationHeaderDesktop accommodation={accommodation} />
      )}
    </Box>
  )
}
