import { API_BLOG } from 'src/api/baseUrls'

const baseUrl = API_BLOG + 'relevant?'

export default function getBlogSuggestionsQuery(
  postId: string,
  locode: string,
  locale: string,
  count: number,
  allowEmpty?: boolean
) {
  const params = new URLSearchParams({
    ...(postId && postId !== '' && { post_id: postId }),
    ...(allowEmpty !== undefined && { allow_empty: allowEmpty.toString() }),
    ...(locode && locode !== '' && { location_ref: locode }),
    ...(count && { count: count.toString() }),
  })
  const url = baseUrl + params

  return [url, locale]
}
