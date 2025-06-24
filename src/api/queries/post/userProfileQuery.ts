import { API_USER_PROFILE_DATA } from '../../baseUrls'
import signRequest from '../../../utils/awsRequestSigner'

export default async function getUserProfileDataPost(
  dataToModify: string,
  body: object
) {
  let url = API_USER_PROFILE_DATA + dataToModify

  const signedRequest = await signRequest(url, 'POST', body)

  url = signedRequest.url
  const method = signedRequest.method
  const headers = signedRequest.headers
  body = signedRequest.data

  return [url, method, body, headers]
}
