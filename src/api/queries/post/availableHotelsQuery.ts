import { API_URL_HOTEL_SUGGESTION } from 'src/api/baseUrls'

export default function availableHotelsQuery(payload, locale) {
  const url = API_URL_HOTEL_SUGGESTION + '/suggestions'

  return {
    url,
    body: payload,
    json: true,
    locale: locale,
  }
}
