import type { HotelsInfo } from 'src/shared-types/hotels-info.type'
import type { TripDetails } from 'src/shared-types/trip-details.type'
import useSessionStorage from './useSessionStorage'

type CheckoutObject = {
  tripCheckoutObject: TripDetails
  hotelCheckoutObject?: HotelsInfo
}

export default function useCheckoutObject() {
  const [checkoutObject, setCheckoutObject] = useSessionStorage<
    CheckoutObject | undefined
  >('checkoutObject', undefined)

  const tripCheckoutObject = checkoutObject?.tripCheckoutObject
  const hotelCheckoutObject = checkoutObject?.hotelCheckoutObject

  return {
    tripCheckoutObject,
    hotelCheckoutObject,
    /*
     * The idea with this setter is to have this run in just one place in our codebase,
     * likey the booked-trip button on package details page, and then have all the data
     * needed for the checkout page be set in one place, DO NOT try to add helper functions
     * here like `settripCheckoutObject` or `setHotelsInfo` because that will make it harder to reason
     * about where the data is coming from.
     */
    setCheckoutObject,
  }
}
