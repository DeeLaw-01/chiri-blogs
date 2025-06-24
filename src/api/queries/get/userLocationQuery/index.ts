import { API_URL_USER_LOCATION_NEW } from 'src/api/baseUrls'

const baseUrl = API_URL_USER_LOCATION_NEW + '/v1/location/user_location?'

export default function userLocationQuery(
  ip: string,
  lat: string,
  long: string,
  locode?: string
) {
  const params = new URLSearchParams({
    ...(ip && { ip: ip }),
    ...(lat && { lat: lat }),
    ...(long && { long: long }),
    ...(locode && { locode: locode }),
  })

  const url = baseUrl + params

  return { url }
}
