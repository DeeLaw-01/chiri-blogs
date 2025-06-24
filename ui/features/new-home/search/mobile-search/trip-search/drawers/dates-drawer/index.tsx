import DatesView from 'ui/features/new-home/search/search-views/dates'
import Drawer from 'ui/primitives/Drawer'

export type DatesDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function DatesDrawer({ isOpen, onClose }: DatesDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      contentStyle={{
        minW: '100vw',
        motionProps: { initial: false, animate: false },
      }}
      onClose={onClose}
    >
      <DatesView />
    </Drawer>
  )
}
