import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import TripsDatesView from './trips'
import OnewayDatesView from './oneways'

export default function DateContent() {
  const { state } = useHomeAtoms()
  return (
    <>
      {state === HomeState.TRIP && <TripsDatesView />}
      {state === HomeState.ONEWAY && <OnewayDatesView />}
    </>
  )
}
