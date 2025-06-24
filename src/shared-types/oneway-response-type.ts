import { PackageDetails, Location } from './package-details.type'

export type OnewayTripDetails = Omit<PackageDetails, 'locations'> & {
  itinerary: Location[]
  locations: string[]
}
