import Error from '../../error'
import { useOnewayAtoms } from '../useOnewayAtoms'

export default function OnewayError() {
  const { onewayLoading, onewayTrips, oneway } = useOnewayAtoms()

  if (onewayLoading || onewayTrips?.length > 0 || oneway.length > 0)
    return <></>
  return <Error />
}
