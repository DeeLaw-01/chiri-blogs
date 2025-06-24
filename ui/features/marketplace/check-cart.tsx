import useMarketPlaceAtoms from './atoms/useMarketPlaceAtoms'
import useLocalStorage from 'src/hooks/useLocalStorage'
import useUrlState from 'src/hooks/useUrlState'
import { useEffect } from 'react'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import { useRouter } from 'app/router'
import { useInterval } from 'src/hooks/primitives/useInterval'

import type { CartData, CheckCartResponse } from './types/shared.type'
import checkCartQuery from 'src/api/queries/post/checkCartQuery'
import useMutation from 'src/api/useMutation'
import generateUUID from 'src/utils/generateUUID'
import useCurrency from 'src/hooks/useCurrency'
import useCartTotal from './hooks/useCartTotal'

export default function CheckCart() {
  const { getConvertedCurrency } = useCurrency()
  const { isReady, query } = useRouter()
  const { authData } = useAuthData()
  const { calculateCartTotal } = useCartTotal()
  const { setUrlState } = useUrlState('sessionId')
  const [cartId, setCartId] = useLocalStorage('cart-purchase-id', null)
  const {
    cartItems,
    setCartItems,
    setCheckingCart,
    checkoutCartDrawer,
    session,
    setSession,
    setCartPrice,
  } = useMarketPlaceAtoms()
  const { trigger } = useMutation((d) => checkCartQuery(d))

  useEffect(() => {
    if (cartId) {
      if (cartId !== authData.booking_id) {
        // reset cart since user opened a different booking id
        setCartItems([])
        setCartId(authData.booking_id)
      }
    } else {
      setCartId(authData.booking_id)
    }
  }, [])

  const getHotelIds = (cartItems: CartData[]) => {
    return cartItems
      .filter((item) => item.type === 'STAYS')
      .map((item) => item.data.booking_id)
  }

  const getProtectionObject = (cartItems: CartData[]) => {
    const payload = {
      id: null,
      fdc: false,
      comprehensive: false,
      flex: false,
    }

    cartItems
      .filter((item) => item.type === 'PROTECTION')
      .forEach((item) => {
        payload.id = item.data.passengerId

        if (item.data.type === 'flex') {
          payload.flex = true
        }

        if (item.data.type === 'comprehensive') {
          payload.comprehensive = true
        }

        if (item.data.type === 'flight_disruption') {
          payload.fdc = true
        }
      })

    return payload
  }

  const getLuggageObject = (cartItems: CartData[]) => {
    const payload = {}

    cartItems
      .filter((item) => item.type === 'LUGGAGE')
      .forEach((item) => {
        const uuid = item.uuid.split('-')
        const passengerId = uuid[0]
        const luggageType = uuid[1]

        payload[passengerId] = payload[passengerId]
          ? [...payload[passengerId]]
          : []
        payload[passengerId].push(luggageType)
      })

    return payload
  }

  const updateCartItemsAvailability = (res: CheckCartResponse) => {
    if (res.hotels_unavailable) {
      setCartItems((items) => {
        // go through each cart items
        items.forEach((item) => {
          // go through each hotel booking_ids
          res.hotels_unavailable.forEach((booking_id) => {
            // check if cart hotel booking_id matches with booking_id sent vai BE
            if (item.data.booking_id === booking_id) {
              // if yes then that hotel is no longer available
              item.isUnavailable = true
            }
          })
        })

        // return the locally mutated array
        return items
      })
    }

    if (res.luggage_unavailable) {
      setCartItems((items) => {
        // go through each cart items
        items.forEach((item) => {
          // go through each lugagge unique ids (passengerId_lugaggeType)
          res.luggage_unavailable.forEach((uniqueLuggageString) => {
            // if matches then the luggage is no longer available
            if (item.uuid === uniqueLuggageString) {
              item.isUnavailable = true
            }
          })
        })

        // return the locally mutated array
        return items
      })
    }

    if (res.protection_unavailable) {
      setCartItems((items) => {
        // go through each cart items
        items.forEach((item) => {
          // go through each protection type flex | comprehensive | fdc
          res.protection_unavailable.forEach((protectionType) => {
            // if uuid (type_id) matches then the protection is no longer available
            if (item.uuid.includes(protectionType)) {
              item.isUnavailable = true
            }
          })
        })

        // return the locally mutated array
        return items
      })
    }
  }

  const checkForPriceChanges = (res: CheckCartResponse) => {
    if (res.price_changes_hotels) {
      setCartItems((items) => {
        // go through each cart items
        items.forEach((item) => {
          // go through each hotel (with booking_ids)
          Object.keys(res.price_changes_hotels).forEach((booking_id) => {
            // find the exact hotel in cart
            if (item.data.booking_id === parseInt(booking_id)) {
              // update priceChange obj with new values
              item.priceChange = {
                status: true,
                before_price: item.data.price_hotel,
                after_price: res.price_changes_hotels[booking_id],
              }

              // update hotel object price
              item.data.price_hotel = res.price_changes_hotels[booking_id]
            }
          })
        })

        // return the locally mutated array
        return items
      })
    }
  }

  const checkForEmptyCartItem = () => {
    if (cartItems.length === 1 && cartItems[0].type === 'PROMOCODE') {
      setCartItems([])
      setSession(generateUUID())
    }
  }

  const checkCart = () => {
    setCheckingCart(true)

    checkForEmptyCartItem()

    const payload = {
      session_id: query.sessionId ?? '',
      purchase_id: authData.booking_id,
      hotels: getHotelIds(cartItems),
      insurance: [getProtectionObject(cartItems)],
      luggage: getLuggageObject(cartItems),
      seats: cartItems.some((item) => item.type === 'SEATS'),
      checkout_session: session,
    }

    const onSuccess = (res) => {
      updateCartItemsAvailability(res)
      checkForPriceChanges(res)
      setCheckingCart(false)
      setCartPrice(res.total_price)

      if (res.session_id && query.sessionId !== res.session_id) {
        setUrlState(res.session_id)
      }
    }

    const onError = () => {
      setCheckingCart(false)
    }

    trigger(payload, { onSuccess: onSuccess, onError })
  }

  useEffect(() => {
    if (isReady) {
      if (query.complete === 'true') {
        setCartItems([])
      }
    }
  }, [isReady])

  useEffect(() => {
    if (checkoutCartDrawer) checkCart()
  }, [checkoutCartDrawer, cartItems.length])

  useEffect(() => {
    //  This is needed , since the promocode is saved in the sessionStorage along with other cart items,
    // removing it so on refresh the promocode is cleared, since the price is from check_cart on refresh the promocode value won't be added

    const filteredItems = cartItems.filter((item) => item.type !== 'PROMOCODE')

    if (filteredItems.length !== cartItems.length) {
      setCartItems(filteredItems)
    }
  }, [])

  useInterval(() => {
    checkCart()
  }, 300000)

  return null
}
