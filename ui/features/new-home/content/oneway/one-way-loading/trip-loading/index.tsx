import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import { useOnewayAtoms } from '../../useOnewayAtoms'
import LoadingCard from './card'

export default function TripsLoading() {
  const { searchType, onewayTrips } = useOnewayAtoms()
  const loadingCount = Math.max(6 - onewayTrips.length, 2)

  if (searchType !== OnewayResponseType.TRIP) return <></>

  return (
    <>
      {[...Array(loadingCount)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </>
  )
}
