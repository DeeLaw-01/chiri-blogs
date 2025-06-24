export interface CartItem {
  isUnavailable: boolean
  type: string
  uuid?: string
  data: {
    price_hotel?: number
    info?: {
      price?: number
    }
    amount?: number
    addedPrice?: number
    position?: number
  }
}
