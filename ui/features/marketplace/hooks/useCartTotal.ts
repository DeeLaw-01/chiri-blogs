import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'

export default function useCartTotal() {
  const { cartPrice } = useMarketPlaceAtoms()

  const calculateCartTotal = () => {
    if (!cartPrice) return 0
    return cartPrice
  }

  return { calculateCartTotal }
}
