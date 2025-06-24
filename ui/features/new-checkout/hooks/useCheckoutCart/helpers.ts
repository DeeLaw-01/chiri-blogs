import { TripDetails } from 'src/shared-types/trip-details.type'
import { CartItem } from './cart.type'
import { ProtectionResponse } from 'src/api/queries/post/checkout/protectionQuery/protection.type'

export const updateCount = (
  prev: CartItem,
  updated: CartItem
): CartItem | null => {
  const count = prev.count + updated.count
  if (count <= 0) return null
  return { ...prev, count }
}

const getTransportDiscountPrice = (trip: TripDetails) => {
  if (!trip.avg_price || trip.avg_price <= trip.price.price_transports) return
  return trip.avg_price
}

export const getTransportationCartObject = (data: TripDetails) => {
  if (!data.price.price_transports) return

  return {
    title: 'checkout-page.progress.transportation',
    key: 'transport',
    count: 1,
    price: data.price.price_transports,
    before: getTransportDiscountPrice(data),
  }
}

export const getAccommodationCartObject = (data: TripDetails) => {
  if (!data.price.price_hotels) return

  return {
    title: 'common.summary.title.accomodation',
    key: 'accommodation',
    count: 1,
    price: data.price.price_hotels,
  }
}

export const getLuggageCartObject = (data: TripDetails) => {
  if (!data.price.price_transports) return

  return {
    title: 'common.bag.personal',
    key: 'personal_item',
    count: data.passengers.total_passengers,
    price: 0,
  }
}

export const getCheckInCartObject = (data: TripDetails) => {
  return {
    title: 'checkout-page.summary.online-check-in',
    key: 'check_in',
    count: 1,
    price: 0,
    before: 5 * data.passengers.total_passengers,
  }
}

export const getPayLaterCartObject = (data: TripDetails) => {
  if (data.pay_now_details.pay_full_price) return

  return {
    title: 'checkout-page.summary.pay.later',
    key: 'pay_later',
    price: -data.pay_now_details.pay_later,
    count: 1,
  }
}

export const getProtectionCartItem = (
  protection: ProtectionResponse
): CartItem | undefined => {
  if (!protection) return

  return {
    title: 'checkout-page.insurance.details.header',
    key: 'protection',
    price: protection.offers.flex.amount,
    count: 1,
    description: protection.offers.id,
  }
}
