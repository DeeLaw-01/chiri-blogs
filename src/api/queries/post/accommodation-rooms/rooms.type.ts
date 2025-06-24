import { Reviews, RoomInfo } from 'src/shared-types/hotel-details.type'

export type AlternativeRoomsResponse = {
  all_rooms_available: RoomInfo[]
  main_rooms: RoomInfo[]
  purchase_id: string
  session_id: string
  hotel_description: string
  hotel_important_information: string
  hotel_facilities: string[]
  reviews: Reviews
}
