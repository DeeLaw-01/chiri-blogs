import { Box } from '@chakra-ui/react'
import AccommodationsMapView from './map-view'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type DesktopMapProps = {
  onOpenAccommodation: (acc: HotelDetails) => void
}

export default function DesktopMap({ onOpenAccommodation }: DesktopMapProps) {
  const { setShowMap } = useChangeAccommodationAtoms()

  return (
    <Box minW="50dvw" position="sticky" top="0">
      <Box position="absolute" top="0" zIndex="1" pt="2rem" pl="5">
        <CircleIconWrapper bg="_white" onClick={() => setShowMap(false)}>
          <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
        </CircleIconWrapper>
      </Box>
      <AccommodationsMapView onOpenAccommodation={onOpenAccommodation} />
    </Box>
  )
}
