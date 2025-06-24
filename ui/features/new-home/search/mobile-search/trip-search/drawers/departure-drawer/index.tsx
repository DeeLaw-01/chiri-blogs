import Drawer from 'ui/primitives/Drawer'
import DepartureView from './departure-view'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import OnewayDepartureView from '../../../one-way-search/drawers/departure-drawer'

export type DepartureDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function DepartureDrawer({
  isOpen,
  onClose,
}: DepartureDrawerProps) {
  const { state } = useHomeAtoms()

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      contentStyle={{
        motionProps: { initial: false, animate: false },
      }}
    >
      {state === HomeState.TRIP && <DepartureView onClose={onClose} />}
      {state === HomeState.ONEWAY && <OnewayDepartureView onClose={onClose} />}
    </Drawer>
  )
}
