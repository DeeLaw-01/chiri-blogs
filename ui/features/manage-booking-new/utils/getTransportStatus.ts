import { differenceInHours } from 'date-fns'
import {
  BoardingPassStatusType,
  TransportBookingData,
} from '../types/itinerary.type'

export default function getTransportStatus(
  transport: TransportBookingData
): BoardingPassStatusType {
  if (transport.booking_data.status === BoardingPassStatusType.ACTION)
    return BoardingPassStatusType.ACTION
  const departureTime = new Date(transport.departure_time)
  const currentTime = new Date()
  const timeDifference = differenceInHours(departureTime, currentTime)
  if (timeDifference < 6 && !transport.booking_data.boarding_documents_link)
    return BoardingPassStatusType.FAILED
  else return transport.booking_data.status
}
