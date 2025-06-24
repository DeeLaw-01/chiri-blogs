import { API_USER_PROFILE_DATA } from '../../baseUrls'
import signRequest from '../../../utils/awsRequestSigner'

export default async function getUserProfileDataQuery(dataToFetch: string) {
  let url = API_USER_PROFILE_DATA + dataToFetch

  const signedRequest = await signRequest(url, 'GET', {})

  url = signedRequest.url
  const method = signedRequest.method
  const headers = signedRequest.headers

  return [url, method, headers]
}
