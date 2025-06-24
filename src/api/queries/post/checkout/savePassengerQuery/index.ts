import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { Passenger } from 'ui/features/new-checkout/checkout.type'

const url = API_USER_PROFILE_DATA + '/traveler'

type Payload = {} & Passenger

export default function savePassengerQuery(payload: Payload) {
  return { url, method: Method.POST, body: payload }
}
