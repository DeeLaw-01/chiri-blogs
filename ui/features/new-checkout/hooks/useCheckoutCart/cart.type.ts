export type CartItem = {
  title: string
  key: string
  count: number
  price: number
  subItems?: Omit<CartItem, 'description'>[]
  before?: number
  description?: string
}
