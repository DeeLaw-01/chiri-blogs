import { API_URL_EMAIL } from 'src/api/baseUrls'

type emailSignupQueryProps = {
  email: string
  locode: string
  currency: string
  campaign?: string
}

export default function emailSignupQuery({
  email,
  locode,
  currency,
  campaign,
}: emailSignupQueryProps) {
  const baseUrl = API_URL_EMAIL + '?'

  const params = new URLSearchParams({
    event_type: 'subscribe',
    email: email,
    location: locode,
    user_currency: currency,
    ...(campaign && { campaign: campaign }),
  })

  const url = baseUrl + params

  return { url }
}
