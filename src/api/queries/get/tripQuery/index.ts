import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export type UpdateTripQueryParams = {
  type: 'accomodation' | 'transport'
  add: boolean
  trip_id: string
  position: 'all' | number
  key?: string
  session_id?: string
  purchase_id?: string
  extra_infos?: Record<string, unknown>
}

export const updateTripQuery = ({
  type,
  add,
  key,
  trip_id,
  position,
  session_id,
  purchase_id,
  extra_infos,
}: UpdateTripQueryParams) => {
  const payload = {
    type: type,
    add: add.toString(),
    trip_id: trip_id.toString(),
    position: position.toString(),
    ...(session_id && { session_id: session_id }),
    ...(key && { key: key }),
    ...(purchase_id && { purchase_id: purchase_id }),
    ...(extra_infos && { extra_infos: extra_infos }),
  }

  const url = API_URL_TRIP_DETAILS + '/update_trip'

  return { url, body: payload, method: Method.POST }
}
