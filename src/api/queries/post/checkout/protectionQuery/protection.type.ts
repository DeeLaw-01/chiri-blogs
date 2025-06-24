import { Contact, Passenger } from 'ui/features/new-checkout/checkout.type'

type Offer = {
  id: string
  amount: number
  amount_per_passenger?: number
  currency: string
  valid: boolean
}

export type ProtectionResponse = {
  offers: {
    id: string
    flex: Offer
    flight_disruption: Omit<Offer, 'amount_per_passenger'>
    comprehensive: Offer
  }
  error: string | null
}

export type ProtectionRequest = {
  trip_id?: string
  session_id?: string
  passengers: Passenger[]
  price: number
  contact_details?: Contact
  protection: {
    flex: boolean
  }
  has_seats: boolean
}
