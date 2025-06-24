import Drawer from 'ui/primitives/Drawer'
import CurrencyView from './view'

export type CurrencyDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function CurrencyDrawer({
  isOpen,
  onClose,
}: CurrencyDrawerProps) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      contentStyle={{
        motionProps: { initial: false, animate: false },
      }}
    >
      <CurrencyView onClose={handleClose} />
    </Drawer>
  )
}
