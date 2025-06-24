import { TripDataAtomType } from '../useTripDetailsAtoms'

export const noAccomodationAvailable = (trip: TripDataAtomType) => {
  return (
    trip.data?.itinerary.filter((item) => item.type === 'accommodation')
      .length === 0
  )
}
