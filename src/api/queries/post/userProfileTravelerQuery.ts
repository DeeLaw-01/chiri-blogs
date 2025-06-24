import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import signRequest from 'src/utils/awsRequestSigner'

export default async function getSignedEditPassengerDataQuery(payload) {
  let url = API_USER_PROFILE_DATA + '/traveler'

  const signedRequest = await signRequest(url, 'POST', payload)

  url = signedRequest.url
  const method = signedRequest.method
  const headers = signedRequest.headers
  const body = signedRequest.data

  return { url, method, headers, body }
}

export async function getSignedDeletePassengerDataQuery(id) {
  let url = API_USER_PROFILE_DATA + '/traveler?traveler_id=' + id

  const signedRequest = await signRequest(url, 'DELETE', null)

  url = signedRequest.url
  const method = signedRequest.method
  const headers = signedRequest.headers

  return { url, method, headers }
}
