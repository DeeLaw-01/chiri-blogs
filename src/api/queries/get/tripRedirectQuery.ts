import { API_REDIRECT_URL } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getTripRedirectQuery(redirect, locale) {
  if (!redirect) return null

  let url = new URL(API_REDIRECT_URL)
  url.searchParams.append('url_text', redirect)

  return {
    url: url.href,
    json: true,
    method: Method.GET,
    locale: locale,
  }
}
