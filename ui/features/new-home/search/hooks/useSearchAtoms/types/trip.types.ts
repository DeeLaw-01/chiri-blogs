import {
  LocationResult,
  Location,
} from 'src/api/queries/get/locationQuery/location.type'

export type TripSearch = {
  initialLocation?: Location | LocationResult
  windowStart?: Date
  windowEnd?: Date
  flexibleDates?: boolean
  exactDates?: boolean
  stayLength?: Staylength
  includeLocations?: LocationResult[]
  categories?: Category
  n_adults?: number
  n_children?: number
  n_babies?: number
  avoidLocations?: LocationResult[]
}

export type Category =
  | ''
  | 'beach'
  | 'nature'
  | 'romantic'
  | 'weekend'
  | 'multi-city'
  | 'single-city'
  | 'snow'
  | 'sustainable'

export type Staylength = number | 'weekend-getaway' | 'less_week' | 'more_week'

export enum TravelingStyle {
  budget = 'budget',
  comfort = 'comfort',
  sustainable = 'sustainable',
}

export type Departure = Pick<TripSearch, 'initialLocation'>
export type Arrival = Pick<TripSearch, 'includeLocations'>
export type Travelers = Pick<TripSearch, 'n_adults' | 'n_children' | 'n_babies'>
export type DateType = Pick<TripSearch, 'flexibleDates' | 'exactDates'>
export type Dates =
  | Pick<TripSearch, 'windowStart' | 'windowEnd' | 'stayLength'> & DateType

// -------------------------------------------------------------------------------------
// TRIP FILTERS
// -------------------------------------------------------------------------------------

export type TripFilters = {
  travellingStyle?: TravelingStyle
  avoidLocations?: LocationResult[]
  n_cities?: number
  multiCity?: boolean
  sortType?: string
  trip_id?: number[]
  max_stop_overs?: string
  vehicle_type?: string
}

// Add all TripFilters here as well.
// This is necessary to differentiate between search/filter when populating the states
// from query because you can't directly map from a typescript type, so we need an object.
export const TripFilterItems: Array<keyof TripFilters> = [
  'travellingStyle',
  'avoidLocations',
  'n_cities',
  'multiCity',
  'vehicle_type',
  'max_stop_overs',
]
