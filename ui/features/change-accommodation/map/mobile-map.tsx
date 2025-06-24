import { Box, Spinner } from '@chakra-ui/react'
import AccommodationsMapView from './map-view'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type MobileMapProps = {
  onOpenAccommodation: (acc: HotelDetails) => void
}

export default function MobileMap({ onOpenAccommodation }: MobileMapProps) {
  const { setShowMap, showMap, data, filters, setFilters } =
    useChangeAccommodationAtoms()

  const handleClick = () => {
    if (showMap) resetFilter()
    setShowMap(!showMap)
  }

  const resetFilter = () => {
    setFilters({
      ...filters,
      top_left_coordinate: {},
      bottom_right_coordinate: {},
    })
  }

  return (
    <Box
      position="absolute"
      top="0"
      minW="100dvw"
      minH="100dvh"
      bg="_white"
      zIndex="2"
    >
      {data?.isLoading && (
        <Box
          pos="absolute"
          h="100vh"
          w="100vw"
          bg="_white"
          zIndex="1"
          opacity="0.5"
          textAlign="center"
          alignContent="center"
        >
          <Spinner color="primary" />
        </Box>
      )}
      <Box position="absolute" top="0" zIndex="2" pt="2" pl="5">
        <CircleIconWrapper bg="_white" onClick={() => handleClick()}>
          <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
        </CircleIconWrapper>
      </Box>
      <AccommodationsMapView onOpenAccommodation={onOpenAccommodation} />
    </Box>
  )
}
