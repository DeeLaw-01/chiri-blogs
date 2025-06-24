import TripMap from 'ui/features/trip-map'
import Drawer from 'ui/primitives/Drawer'
import { DrawerCloseButton } from '@chakra-ui/react'
import { useTripDetailsAtoms } from '../trip-details/useTripDetailsAtoms'

export type TripMapDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function TripMapDrawer({ isOpen, onClose }: TripMapDrawerProps) {
  const { transportations, accommodations } = useTripDetailsAtoms()

  return (
    <Drawer
      padding={0}
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      header={false}
      size="full"
    >
      <DrawerCloseButton zIndex="100" />
      <TripMap
        fade={false}
        height="100vh"
        hotelLocations={accommodations}
        transportations={transportations}
      />
    </Drawer>
  )
}
