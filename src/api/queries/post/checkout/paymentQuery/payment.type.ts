import { Currency } from 'src/shared-types/currency'
import {
  Changes,
  Contact,
  Passenger,
} from 'ui/features/new-checkout/checkout.type'

export type PaymentRequest = {
  trip_id: string
  session_id: string
  passengers: Passenger[]
  price: string
  currency: Currency
  contact_details: Contact | null
  protection: { flex: boolean }
  has_seats: boolean
}

export type PaymentResponse = {
  changes: Changes
  discount: Discount
  purchase_id: string
  request_uuid: string
  success: {
    direct_bank: string
    stripe: string
  }
  error: string
  time_left_for_payment: number
}

type Discount = {
  price_before: number
  currency: string
  discount: number
  price_after: number
  promocode: string
  code_applied: boolean
  error?: {
    code: string
    msg: string
  }
}
