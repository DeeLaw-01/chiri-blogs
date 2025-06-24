export type CoinsResponse = {
  type: 'coins'
  price_before: number
  currency: string
  discount: number
  price_after: number
  promocode: string
  coins_promocode: string
  code_applied: boolean
}

export type CoinsRequest = {
  tripId: string
  coins: boolean
  session: string
  sessionId: string
}
