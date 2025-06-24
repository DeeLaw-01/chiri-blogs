import { OnewayTripDetails } from 'src/shared-types/oneway-response-type'
import { TripDetails } from 'src/shared-types/trip-details.type'

export enum OnewayResponseType {
  ONEWAY = 'ONE-WAY',
  MODIFICATION = 'MODIFICATION',
  TRIP = 'TRIP',
  END = 'END',
  ERROR = 'ERROR',
}

export type OnewayResponse =
  | OnewayResponseBody
  | OnewayTripResponseBody
  | ModificationResponse
  | EndResponse

type OnewayResponseBody = {
  type: OnewayResponseType.ONEWAY
  body: TripDetails
}

type OnewayTripResponseBody = {
  type: OnewayResponseType.TRIP
  body: OnewayTripDetails
}

type ModificationResponse = {
  type: OnewayResponseType.MODIFICATION
  body: Modification
}

type EndResponse = {
  type: OnewayResponseType.END
  load_more: boolean
  oneway_count: number
}

export type Modification = {
  key: string
  old_value: string
  new_value: string
  message: string
}
