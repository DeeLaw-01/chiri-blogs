import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'

const baseUrl = API_URL_PAYMENT_INFO + '/check_purchase_complete?'

export default function checkCompleteStatus(purchaseId: string) {
  const params = new URLSearchParams({
    purchase_id: purchaseId,
  })

  const url = baseUrl + params

  return { url }
}
