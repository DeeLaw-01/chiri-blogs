import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { PaymentRequest } from './payment.type'

const url = API_URL_PAYMENT_INFO + '/save_booking'

export default function paymentQuery(payload: PaymentRequest) {
  return { url, method: Method.POST, body: payload }
}
