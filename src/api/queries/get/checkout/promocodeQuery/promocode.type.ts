export type PromocodeResponse = {
  type: 'coins'
  price_before: number
  currency: string
  discount: number
  price_after: number
  promocode: string
  coins_promocode: string
  code_applied: boolean
  error: PromocodeError
}

export type PromocodeError = {
  code: string
  msg: string
}

export type PromocodeRequest = {
  tripId: string
  promocode: string
  session: string
  sessionId?: string
  remove?: boolean
}
