import Drawer from 'ui/primitives/Drawer'
import LanguageView from './view'

export type LanguageDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function LanguageDrawer({
  isOpen,
  onClose,
}: LanguageDrawerProps) {
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
      <LanguageView onClose={onClose} />
    </Drawer>
  )
}
