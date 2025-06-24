import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import { useOnewayAtoms } from '../useOnewayAtoms'
import TripSearchCard from './card'
import LoadMore from './load-more'

export default function OnewayTrips() {
  const { onewayTrips, searchType } = useOnewayAtoms()

  if (searchType !== OnewayResponseType.TRIP) return <></>

  return (
    <>
      {onewayTrips?.map((trip, idx: number) => (
        <TripSearchCard key={idx} trip={trip} />
      ))}
      <LoadMore />
    </>
  )
}
