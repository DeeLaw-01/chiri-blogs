import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export type GiftCardQueryBody = {
  amount: number
  address?: string
  ref?: string
  user_currency?: string
  user_name: string
  product: string
  code: string
  email: string
  custom_message: string
}

export default function giftCardQuery(body: GiftCardQueryBody) {
  const url = API_URL_PAYMENT_INFO + '/gift_card'

  return { url, body, method: Method.POST }
}
