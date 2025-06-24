import { PackageDetails } from 'src/shared-types/package-details.type'

export enum TripResponseType {
  TRIP = 'TRIP',
  MODIFICATION = 'MODIFICATION',
  END = 'END',
}

export type TripResponse = TripResponseBody | ModificationResponse | EndResponse

export type TripResponseBody = {
  type: TripResponseType.TRIP
  body: PackageDetails
}

export type ModificationResponse = {
  type: TripResponseType.MODIFICATION
  body: TripModification
}

export type EndResponse = {
  type: TripResponseType.END
  load_more: boolean
  trip_count: number
}

export type TripModification = {
  key: string
  old_value: string
  new_value: string
  message: string
}
