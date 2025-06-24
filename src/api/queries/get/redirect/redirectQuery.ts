import { API_REDIRECT_URL } from 'src/api/baseUrls'

const baseUrl = API_REDIRECT_URL + '?'

export default function redirectQuery(link: string) {
  const params = new URLSearchParams({
    url_text: encodeURIComponent(link),
  })

  const url = baseUrl + params

  return { url }
}
