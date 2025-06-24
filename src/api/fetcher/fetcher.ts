import { getCognitoUserId, getUserId } from 'src/utils/userIdHelper'
import { getSource } from 'src/utils/sourceHelper'
import { Method, Query } from './fetcher.type'
import { handleError } from './error'
import Logger from 'ui/shared/logger'
import getPerformanceQuery from '../queries/post/performance/getPerformanceQuery'
import { API_PERFORMANCE } from '../baseUrls'

export async function fetcher({
  url,
  headers,
  method = Method.GET,
  body,
  locale = 'en',
}: Query) {
  const timestamp = Date.now()
  const options = {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY || '',
      'Accept-Language': locale,
      'user-id': await getUserId(),
      'Cognito-User-Id': getCognitoUserId(),
      'content-type': 'application/json',
      source: getSource(),
      ...headers,
    },
  }

  return fetch(url, options)
    .then(async (res) => {
      if (!res.ok) {
        Logger.error(`Res throw ${res} ${url}`, 'Endpoint', url)
        throw res
      }
      // Used for performance tracking in backend. Sending the req-response time back to measure latency.
      if (url !== API_PERFORMANCE) fetcher(getPerformanceQuery(timestamp, url))

      return res.json()
    })
    .catch((e) => handleError(e as Error, url))
}
