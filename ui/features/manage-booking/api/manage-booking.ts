import { API_MANAGE_BOOKING } from 'src/api/baseUrls'

const callManageBooking = async (type: string, body, locale?: string) => {
  const res = await fetch(`${API_MANAGE_BOOKING}/${type}`, {
    method: 'POST',
    headers: {
      'accept-language': locale ?? 'en',
    },
    body: JSON.stringify({ ...body }),
  })

  const data = await res.json()
  const ok = res.ok

  return { data, ok }
}

export { callManageBooking }
