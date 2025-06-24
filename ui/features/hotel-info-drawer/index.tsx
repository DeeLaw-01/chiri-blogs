import Drawer from 'ui/primitives/Drawer'
import useHashNavigation from 'src/hooks/useHashNavigation'
import AccommodationView from '../accommodation-details/new-hotel-view'
import { useRef } from 'react'
import { AccommodationDetailsAtomsProvider } from '../accommodation-details/useAccommodationDetailsAtoms'
import type { HotelDetails } from 'src/shared-types/hotel-details.type'

interface HotelViewDetailsDrawerProps {
  hotel: HotelDetails
  isOpen: boolean
  onClose: () => void
  viewOnly?: boolean
  prefetch?: (hotel: HotelDetails) => boolean
  callback?: (hotel: HotelDetails) => void
}

export default function HotelViewDetailsDrawer({
  hotel,
  isOpen,
  onClose,
  viewOnly,
  prefetch,
  callback,
}: HotelViewDetailsDrawerProps) {
  const drawerBodyRef = useRef<HTMLDivElement>(null)
  const { removeHash } = useHashNavigation('accommodation-details', onClose)

  const onCloseHandler = () => {
    removeHash()
    onClose()
  }

  return (
    <AccommodationDetailsAtomsProvider>
      <Drawer
        padding={0}
        header={false}
        ref={drawerBodyRef}
        blockScrollOnMount={false}
        placement="bottom"
        isOpen={isOpen}
        onClose={onCloseHandler}
        contentStyle={{
          maxW: '100vw',
          motionProps: { initial: false, animate: false },
        }}
      >
        <AccommodationView
          drawerBodyRef={drawerBodyRef}
          hotel={hotel}
          onClose={onCloseHandler}
          viewOnly={viewOnly}
          prefetch={prefetch}
          callback={callback}
        />
      </Drawer>
    </AccommodationDetailsAtomsProvider>
  )
}
