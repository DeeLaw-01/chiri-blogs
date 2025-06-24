import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import { CartItem } from './cart.type'
import { updateCount } from './helpers'

export default function useCheckoutCart() {
  const { cart, setCart, discount } = useCheckoutAtoms()

  const initializeCart = (items: (CartItem | undefined)[]) => {
    setCart(items.filter((item) => item !== undefined))
  }

  const addToCart = (item: CartItem) => {
    const isInCart = cart.find((x) => x.key === item.key)

    if (isInCart) updateItemInCart(item)
    else addNewItemToCart(item)
  }

  const updateItemInCart = (item: CartItem): void => {
    setCart((prev) =>
      prev
        .map((x) => (x.key === item.key ? updateCount(x, item) : x))
        .filter((x) => x !== null)
    )
  }

  const removeItemFromCart = (key: string) => {
    setCart((prev) => prev.filter((x) => x.key !== key))
  }

  const addNewItemToCart = (item: CartItem): void => {
    setCart((prev) => [...prev, { ...item, count: 1 }])
  }

  const getTotalPrice = () => {
    const total = cart.reduce((acc, x) => acc + x.price * x.count, 0)

    return total
  }

  return { initializeCart, getTotalPrice, addToCart, removeItemFromCart }
}
