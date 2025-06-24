import OnewayFilters from '../../filters/oneway-filters'
import TripFilters from '../../filters/trip-filters'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { HomeState } from '../../hooks/useHomeAtoms/types'

export default function FiltersView() {
  const { state } = useHomeAtoms()

  if (!state) return <></>

  return (
    <>
      {state === HomeState.TRIP && <TripFilters />}
      {state === HomeState.ONEWAY && <OnewayFilters />}
    </>
  )
}
