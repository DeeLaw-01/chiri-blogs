import { API_URL_USER_LOCATION_NEW } from 'src/api/baseUrls'

const baseUrl = API_URL_USER_LOCATION_NEW + '/v1/location/get_locations?'

export default function getLocationQuery(locations: string) {
  const params = new URLSearchParams({
    ...(locations && { locodes: locations }),
  })

  const url = baseUrl + params

  return { url }
}
