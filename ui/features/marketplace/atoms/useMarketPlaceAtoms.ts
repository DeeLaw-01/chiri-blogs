import { atom, useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import {
  CartData,
  ActiveFilter,
  BuyBaggageMergedData,
  ProtectionData,
  SeatInfo,
} from '../types/shared.type'
import { CartItem } from './marketPlaceAtom.type'
import { isBrowser } from 'src/data/environments'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type HotelDetailsAtom = {
  hotel?: HotelDetails
  prefetch?: (hotel: HotelDetails) => boolean
  callback?: (hotel: HotelDetails) => void
  addStayButton?: boolean
}

const atoms = {
  showHotelDetails: atom<HotelDetailsAtom>({}),
  showChangeAccommodation: atom<HotelDetailsAtom>({}),
  activeFilter: atom<ActiveFilter>('ALL'),
  cartItems: atomWithStorage<Array<CartData>>(
    'marketplace-cart',
    [],
    createJSONStorage(() => (isBrowser ? sessionStorage : null))
  ),
  hotelsArray: atom<HotelDetails[] | null>(null),
  buyBaggageMergedData: atom<BuyBaggageMergedData[] | null>(null),
  protectionInfo: atom<ProtectionData | null>(null),
  paymentData: atom(null),
  checkoutCartDrawer: atom<boolean>(false),
  checkingCart: atom<boolean>(false),
  showLuggage: atom<boolean>(true),
  showProtection: atom<boolean>(true),
  showSeats: atom<boolean>(true),
  showHotels: atom<boolean>(true),
  seatsInfo: atom<SeatInfo | null>(null),
  cartId: atomWithStorage<number | null>(
    'marketplace-cart-id',
    null,
    createJSONStorage(() => (isBrowser ? sessionStorage : null))
  ),
  session: atom<string | null>(null),
  cartPrice: atom<number | null>(null),
}

export default function useMarketPlaceAtoms() {
  const [showHotelDetails, setShowHotelDetails] = useAtom(
    atoms.showHotelDetails
  )
  const [showChangeAccommodation, setShowChangeAccommodation] = useAtom(
    atoms.showChangeAccommodation
  )

  const [activeFilter, setActiveFilter] = useAtom(atoms.activeFilter)

  const [cartItems, setCartItems] = useAtom<CartItem[]>(atoms.cartItems)

  const [buyBaggageMergedData, setBuyBaggageMergedData] = useAtom(
    atoms.buyBaggageMergedData
  )

  const [hotelsArray, setHotelsArray] = useAtom(atoms.hotelsArray)

  const [checkoutCartDrawer, setCheckoutCartDrawer] = useAtom(
    atoms.checkoutCartDrawer
  )

  const [paymentData, setPaymentData] = useAtom(atoms.paymentData)

  const [protectionInfo, setProtectionInfo] = useAtom(atoms.protectionInfo)

  const [checkingCart, setCheckingCart] = useAtom(atoms.checkingCart)

  const [showLuggage, setShowLuggage] = useAtom(atoms.showLuggage)

  const [showProtection, setShowProtection] = useAtom(atoms.showProtection)

  const [showSeats, setShowSeats] = useAtom(atoms.showSeats)

  const [showHotels, setShowHotels] = useAtom(atoms.showHotels)

  const [seatInfo, setSeatInfo] = useAtom(atoms.seatsInfo)

  const [cartId, setCartId] = useAtom(atoms.cartId)
  const [session, setSession] = useAtom(atoms.session)
  const [cartPrice, setCartPrice] = useAtom(atoms.cartPrice)

  atoms.session.onMount = (set) => {
    const onUnmount = () => set(null)
    return onUnmount
  }

  return {
    showHotelDetails,
    setShowHotelDetails,
    showChangeAccommodation,
    setShowChangeAccommodation,

    activeFilter,
    setActiveFilter,

    cartItems,
    setCartItems,

    buyBaggageMergedData,
    setBuyBaggageMergedData,

    hotelsArray,
    setHotelsArray,

    checkoutCartDrawer,
    setCheckoutCartDrawer,

    paymentData,
    setPaymentData,

    protectionInfo,
    setProtectionInfo,

    checkingCart,
    setCheckingCart,

    showLuggage,
    setShowLuggage,

    showProtection,
    setShowProtection,

    showSeats,
    setShowSeats,

    showHotels,
    setShowHotels,

    seatInfo,
    setSeatInfo,

    cartId,
    setCartId,

    session,
    setSession,

    cartPrice,
    setCartPrice,
  }
}
