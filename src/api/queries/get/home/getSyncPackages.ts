import { API_URL_SYNCHRONOUS_TRIPS } from 'src/api/baseUrls'

export const getSyncPackages = (id: string) => {
  const baseUrl = API_URL_SYNCHRONOUS_TRIPS + '?'

  const params = new URLSearchParams({
    tripTopic: id,
  })

  const url = baseUrl + params

  return { url }
}
