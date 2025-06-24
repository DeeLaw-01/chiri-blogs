import { API_LOGGER } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function loggerQuery(data) {
  const url = API_LOGGER

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
  }

  return {
    url,
    headers,
    body: data,
    method: Method.POST,
  }
}
