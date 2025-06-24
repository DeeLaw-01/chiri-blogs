import { API_URL_HOTEL_SUGGESTION } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

export default function getAccommodationRoomsQuery(
  accommodation: HotelDetails,
  sessionId?: string | null
) {
  const url = API_URL_HOTEL_SUGGESTION + '/get_hotel_details'

  const body = {
    trip_id: accommodation.trip_id,
    hotel_id: accommodation.booking_id,
    position: accommodation.position,
    session_id: sessionId,
    ...(accommodation.meal_plan && {
      meal_plan: accommodation.meal_plan,
    }),
    ...(accommodation.purchase_id && {
      purchase_id: accommodation.purchase_id,
    }),
  }

  return { url, body, method: Method.POST }
}
