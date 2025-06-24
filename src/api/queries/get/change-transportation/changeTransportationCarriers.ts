import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

const testURl = 'https://qi38mg1zbf.execute-api.eu-central-1.amazonaws.com/test'

export default function changeTransportationCarriersQuery(
  origin: string,
  destination: string,
  vehicleType: string
) {
  const baseUrl = API_URL_TRIP_DETAILS + '/get_carriers?'

  const params = new URLSearchParams({
    page: '0',
    size: '200',
    origin: origin,
    destination: destination,
    ...(vehicleType && { vehicle_type: vehicleType }),
  })

  const url = baseUrl + params
  return { url }
}
