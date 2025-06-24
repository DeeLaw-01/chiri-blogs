import Drawer from 'ui/primitives/Drawer'
import ArrivalView from './arrival-view'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import OnewayArrivalView from '../../../one-way-search/drawers/arrival-drawer'

export type ArrivalDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ArrivalDrawer({ isOpen, onClose }: ArrivalDrawerProps) {
  const { state } = useHomeAtoms()

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      contentStyle={{
        minW: '100vw',
        motionProps: { initial: false, animate: false },
      }}
    >
      {state === HomeState.TRIP && <ArrivalView onClose={onClose} />}
      {state === HomeState.ONEWAY && <OnewayArrivalView onClose={onClose} />}
    </Drawer>
  )
}
