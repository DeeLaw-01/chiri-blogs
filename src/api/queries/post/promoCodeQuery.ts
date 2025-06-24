import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { getSessionId } from 'src/utils/sessionIdHelper'

export type PromoCodeQueryParams = {
  bookingId: string
  affiliate: string
  promocode: string
  paymentIntent: any
  withCoins?: boolean
}

export default function promoCodeQuery({
  affiliate,
  bookingId,
  paymentIntent,
  promocode,
  withCoins,
}: PromoCodeQueryParams) {
  const baseUrl = API_URL_PAYMENT_INFO + '/promocode'
  const tripIdParam = `?trip_id=${bookingId}`
  const promocodeParam = `&promocode=${promocode || affiliate}`
  const withCoinsParam = `&with_coins=true`
  const intentParam = `&intent=${paymentIntent?.clientSecret}`
  const sessionId = `&session_id=${getSessionId()}`

  let url = baseUrl + tripIdParam + promocodeParam + intentParam + sessionId

  if (withCoins) {
    url += withCoinsParam
  }

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
  }

  return { url, headers, method: Method.GET }
}
