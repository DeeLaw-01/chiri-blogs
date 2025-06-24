import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { PriceChangeQueryProps } from './price-change.type'

const url = API_URL_PAYMENT_INFO + '/price_change_acceptance'

export default function PriceChangeQuery({
  tripId,
  response,
  sessionId,
}: PriceChangeQueryProps) {
  const body = {
    trip_id: tripId,
    price_accepted: response,
    ...(sessionId && { session_id: sessionId }),
  }

  return { url, body, method: Method.POST }
}
