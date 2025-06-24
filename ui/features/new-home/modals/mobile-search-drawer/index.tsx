import Drawer from 'ui/primitives/Drawer'
import MobileSearchDrawerView from '../../search/mobile-search/search-view'
import SearchModals from '../../search/modals'

export type MobileSearchDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSearchDrawer({
  isOpen,
  onClose,
}: MobileSearchDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      contentStyle={{
        motionProps: { initial: false, animate: false },
      }}
    >
      <MobileSearchDrawerView />
      <SearchModals />
    </Drawer>
  )
}
