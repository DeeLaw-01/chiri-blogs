import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { Transport } from 'src/shared-types/transport.type'

export type ItineraryType =
  | { type: 'transport'; content: TransportBookingData }
  | { type: 'accommodation'; content: HotelBookingData }

export type TransportBookingData = {
  booking_data: {
    pnr: string
    status: BoardingPassStatusType
    boarding_documents_link?: string
    flight_number: string
    has_seats: boolean
  }
} & Transport

export type HotelBookingData = {
  bought: boolean
  city_name: string
} & HotelDetails

export enum BoardingPassStatusType {
  AVAILABLE = 'available',
  WAITING = 'waiting_for_checking',
  FAILED = 'failed',
  ACTION = 'action_required',
}
