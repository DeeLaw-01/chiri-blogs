import { API_URL_CURRENCY } from 'src/api/baseUrls'

const baseCurrency = 'EUR'

const baseUrl = API_URL_CURRENCY + '/get_exchange_rates?'

export default function getCurrencyQuery() {
  const params = new URLSearchParams({
    current_currency: baseCurrency,
  })

  const url = baseUrl + params

  return { url }
}
