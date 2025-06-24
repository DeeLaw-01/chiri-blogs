import { API_MANAGE_BOOKING } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function missingFieldsQuery(body) {
  const url = API_MANAGE_BOOKING + '/passenger_data'

  return { url, method: Method.POST, body }
}
