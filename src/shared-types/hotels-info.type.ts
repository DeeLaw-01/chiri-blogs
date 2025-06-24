import { HotelDetails } from './hotel-details.type'

export type HotelsInfo = {
  hotelDetails: Array<HotelDetails>
  price_hotels: number
  price_per_passenger: number
  pay_now_details: {
    pay_now: number
    pay_later: number
    pay_full_price: boolean
  }
  new_rooms_chosen: boolean
  session_id: any
  timestamp: string
}
