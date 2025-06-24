import Drawer from 'ui/primitives/Drawer'
import ChangeAccommodationView from './change-accommodation-view'
import useHashNavigation from 'src/hooks/useHashNavigation'
import { ChangeAccommodationAtomsProvider } from './useChangeAccommodationAtoms'
import ChangeAccommodationModals from './modals'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

export type ChangeAccommodationDrawerProps = {
  accommodation: HotelDetails
  isOpen: boolean
  onClose: () => void
  onOpenAccommodation: (accommodation: HotelDetails) => void
}

export default function ChangeAccommodationDrawer({
  accommodation,
  isOpen,
  onClose,
  onOpenAccommodation,
}: ChangeAccommodationDrawerProps) {
  const { removeHash } = useHashNavigation('change-accommodation', onClose)

  const onCloseHandler = () => {
    removeHash()
    onClose()
  }

  return (
    <ChangeAccommodationAtomsProvider>
      <Drawer
        padding={0}
        header={false}
        placement="bottom"
        blockScrollOnMount={false}
        isOpen={isOpen}
        contentStyle={{
          maxW: '100vw',
          h: '100vh',
          motionProps: { initial: false, animate: false },
        }}
      >
        <ChangeAccommodationView
          accommodation={accommodation}
          onClose={onCloseHandler}
          onOpenAccommodation={onOpenAccommodation}
        />
        <ChangeAccommodationModals onClose={onCloseHandler} />
      </Drawer>
    </ChangeAccommodationAtomsProvider>
  )
}
