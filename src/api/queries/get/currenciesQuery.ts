import { API_URL_CURRENCY } from 'src/api/baseUrls'

const baseUrl = API_URL_CURRENCY + '/get_currencies?'

export default function getCurrenciesQuery(page: number, pageSize: number) {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
  })

  const url = baseUrl + params

  return { url }
}
