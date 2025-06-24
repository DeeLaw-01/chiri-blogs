import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { Box } from '@chakra-ui/react'
import { theme } from 'src/styles/theme'

import Drawer from 'ui/primitives/Drawer'
import HotelsMap from '../hotels-map'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import { useTripDetailsAtoms } from '../trip-details/useTripDetailsAtoms'

interface HotelMapProps {
  isHotelMapOpen: boolean
  onClose: () => void
  hotel: HotelDetails
  onOpenHotelViewOverride?: () => void
}

function HotelMap({
  isHotelMapOpen,
  onClose,
  hotel,
  onOpenHotelViewOverride,
}: HotelMapProps): JSX.Element {
  const { setShowHotelDetails } = useTripDetailsAtoms()
  return (
    <Drawer
      size={'full'}
      padding="0"
      header={false}
      onClose={onClose}
      isOpen={isHotelMapOpen}
      contentStyle={{
        maxW: '100vw',
        motionProps: { initial: false, animate: false },
      }}
    >
      <Box pos="relative">
        <CircleIconWrapper
          pos="absolute"
          top="4"
          zIndex={1}
          w="2rem"
          bg="_white"
          left={{ base: 4, md: 8 }}
          onClick={onClose}
        >
          <LeftArrowIcon width="13" height="13" stroke={theme.colors._black} />
        </CircleIconWrapper>

        <HotelsMap
          hotel={hotel}
          onCloseMap={onClose}
          isHotelsLoading={false}
          hotelLocations={[hotel]}
          onOpenHotelView={
            onOpenHotelViewOverride
              ? onOpenHotelViewOverride
              : () => setShowHotelDetails({ hotel: hotel })
          }
        />
      </Box>
    </Drawer>
  )
}

export default HotelMap
