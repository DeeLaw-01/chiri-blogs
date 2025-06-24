import { API_URL_HOTEL_SUGGESTION } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { SelectedRooms } from 'ui/features/accommodation-details/useAccommodationDetailsAtoms'
import { Filters } from 'ui/features/change-accommodation/useChangeAccommodationAtoms'

export type ChangeHotelQueryBody = {
  tripId: string
  purchaseId: string
  hotelPosition: number
  bookingId: string
  sessionId?: string
  chosenRooms: Omit<SelectedRooms, 'name'>[]
  rooms: SelectedRooms[]
  filters?: Filters
}

export default function changeHotelQuery({
  tripId,
  purchaseId,
  hotelPosition,
  bookingId,
  sessionId,
  chosenRooms,
  rooms,
  filters,
}: ChangeHotelQueryBody) {
  const url = API_URL_HOTEL_SUGGESTION + '/accept_hotel'

  const payload = {
    trip_id: tripId,
    position: hotelPosition,
    ...(chosenRooms && { chosen_rooms: chosenRooms }),
    ...(purchaseId && { purchase_id: purchaseId }),
    filters: {
      no_rooms: rooms,
      mealplan: filters?.mealplan,
      stars: filters?.stars?.join(','),
      hotel_facilities: filters?.amenities,
      min_review_score: filters?.score,
      accommodation_type: filters?.type,
      distance_to_city_center: filters?.distance,
    },
  }

  if (bookingId !== '') {
    Object.assign(payload, {
      booking_id: bookingId,
    })
  }

  if (sessionId !== '') {
    Object.assign(payload, {
      session_id: sessionId,
    })
  }

  return { url, body: payload, method: Method.POST }
}
