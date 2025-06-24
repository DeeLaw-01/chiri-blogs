import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import {
  AccommodationFilters,
  AccommodationSearch,
} from './types/accommodation.types'
import { OnewayFilters, OnewaySearch } from './types/oneway.types'
import { TripFilters, TripSearch } from './types/trip.types'

const initialStates = {
  tripSearch: { type: HomeState.TRIP } as TripSearch,
  tripFilters: {} as TripFilters,

  accommodationSearch: { type: HomeState.ACCOMMODATION } as AccommodationSearch,
  accommodationFilters: {} as AccommodationFilters,

  onewaySearch: { type: HomeState.ONEWAY } as OnewaySearch,
  onewayFilters: {
    arrival: '',
    avoidLocations: [],
    departure: '',
    include_airlines: [],
    max_stop_overs: '',
    sortType: '',
    vehicle_type: '',
    specific_destination_station: '',
    specific_origin_station: '',
    travellingStyle: undefined,
  } as OnewayFilters,
}

export default initialStates
