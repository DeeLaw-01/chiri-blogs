import { API_MANAGE_BOOKING } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { BookingRequest } from './booking.type'

export default function getBookingQuery(body: BookingRequest) {
  const url = API_MANAGE_BOOKING + '/get_booking'

  return { url, method: Method.POST, body }
}
