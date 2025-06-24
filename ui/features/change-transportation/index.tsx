import Drawer from 'ui/primitives/Drawer'
import ChangeTransportationView from './change-transportation-view'
import { Transport } from 'src/shared-types/transport.type'
import useHashNavigation from 'src/hooks/useHashNavigation'
import ChangeTransportationModals from './modals'
import { ChangeTransportationAtomsProvider } from './hooks/useChangeTransportationAtoms'

export type ChangeTransportationDrawerProps = {
  transport: Transport
  isOpen: boolean
  onClose: () => void
  callback?: (transportDetails: Transport) => void
}

export default function ChangeTransportationDrawer({
  transport,
  isOpen,
  onClose,
  callback,
}: ChangeTransportationDrawerProps) {
  const { removeHash } = useHashNavigation('change-transport', onClose)

  const onCloseHandler = () => {
    removeHash()
    onClose()
  }

  return (
    <ChangeTransportationAtomsProvider>
      <Drawer
        padding={0}
        header={false}
        placement="bottom"
        isOpen={isOpen}
        contentStyle={{
          maxW: '100vw',
          h: '100vh',
          motionProps: { initial: false, animate: false },
        }}
      >
        <ChangeTransportationView
          transport={transport}
          onClose={onCloseHandler}
        />
        <ChangeTransportationModals
          transport={transport}
          onClose={onCloseHandler}
          callback={callback}
        />
      </Drawer>
    </ChangeTransportationAtomsProvider>
  )
}
