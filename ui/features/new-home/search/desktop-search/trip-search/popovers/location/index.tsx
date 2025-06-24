import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import TripsLocationContent from './trips'
import OnewayLocationContent from './oneway'

export default function LocationContent() {
  const { state } = useHomeAtoms()
  return (
    <>
      {state === HomeState.TRIP && <TripsLocationContent />}
      {state === HomeState.ONEWAY && <OnewayLocationContent />}
    </>
  )
}
