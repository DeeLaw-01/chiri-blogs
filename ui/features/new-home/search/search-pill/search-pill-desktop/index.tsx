import { Box, Popover } from '@chakra-ui/react'
import SearchModals from '../../modals'

import LocationContent from '../../desktop-search/trip-search/popovers/location'
import { useSearchModalsAtoms } from '../../hooks/useSearchModals'
import TravelersContent from '../../desktop-search/trip-search/popovers/travelers'
import DatesContent from '../../desktop-search/trip-search/popovers/dates'
import SearchPillDesktopPopoverTrigger from './popover-trigger'
import { MotionBox } from 'ui/primitives/Motion'

export default function SearchPillDesktop() {
  const { showTravelers, showDates, showDeparture, resetSearchModals } =
    useSearchModalsAtoms()
  const isOpen = showDeparture || showDates || showTravelers

  return (
    <MotionBox
      position={'absolute'}
      top={isOpen ? 14 : 'initial'}
      bottom={isOpen ? 'initial' : 10}
      display={{ base: 'none', md: 'initial' }}
    >
      <Popover isOpen={isOpen} autoFocus={false}>
        <SearchPillDesktopPopoverTrigger />

        {showDeparture && <LocationContent />}
        {showDates && <DatesContent />}
        {showTravelers && <TravelersContent />}
      </Popover>

      {/* Background overlay */}
      {isOpen && (
        <Box
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="2"
          pos="fixed"
          overflow="hidden"
          bg="_black"
          opacity={'50%'}
          onClick={resetSearchModals}
        />
      )}
      <SearchModals />
    </MotionBox>
  )
}
