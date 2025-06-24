import { TripDetails } from 'src/shared-types/trip-details.type'

export type EditTravelersResponse = {
  timestamp: string
  trip: TripDetails
  tripID: string
}
