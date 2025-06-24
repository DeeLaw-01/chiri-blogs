import { API_URL_PARTNER_INFORMATION } from '../../baseUrls'

const baseUrl = API_URL_PARTNER_INFORMATION + '?'

export default function getPartnerInformationQuery(queryId: string) {
  const params = new URLSearchParams({
    aid: queryId,
  })

  const url = baseUrl + params

  return { url }
}
