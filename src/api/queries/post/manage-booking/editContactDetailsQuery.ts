import { API_MANAGE_BOOKING } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function editContactDetailsQuery(body) {
  const url = API_MANAGE_BOOKING + '/edit_details'

  return { url, method: Method.POST, body }
}
