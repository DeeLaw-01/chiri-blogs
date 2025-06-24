import { HotelDetails } from 'src/shared-types/hotel-details.type'

export type HotelDetailsResponseType = {
  hotelDetails: HotelDetails[]
  price_hotels: number
  session_id: string
  timestamp: string
}
