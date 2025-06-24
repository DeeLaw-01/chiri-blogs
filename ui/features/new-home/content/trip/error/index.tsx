import Error from '../../error'
import { useTripAtoms } from '../useTripAtoms'

export default function TripsError() {
  const { tripsLoading, trips } = useTripAtoms()

  if (tripsLoading || trips?.length > 0) return <></>
  return <Error />
}
