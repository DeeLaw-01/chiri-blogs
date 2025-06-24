import TravelersView from 'ui/features/new-home/search/search-views/travelers'
import Drawer from 'ui/primitives/Drawer'

export type TravelersDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function TravelersDrawer({
  isOpen,
  onClose,
}: TravelersDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      contentStyle={{
        minW: '100vw',
        motionProps: { initial: false, animate: false },
      }}
      onClose={onClose}
    >
      <TravelersView />
    </Drawer>
  )
}
