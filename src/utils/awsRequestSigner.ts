import { Auth, Signer } from 'aws-amplify'

const signRequest = async (url, method, body, locale = 'en') => {
  let currCredentials = await Auth.currentCredentials()
  const essentialCredentials = Auth.essentialCredentials(currCredentials)

  const accessInfo = {
    access_key: essentialCredentials.accessKeyId,
    secret_key: essentialCredentials.secretAccessKey,
    session_token: essentialCredentials.sessionToken,
  }

  const serviceInfo = { region: 'eu-central-1', service: 'execute-api' }

  let params = {
    method: method,
    url: url,
    headers: {
      'Accept-Language': locale,
    },
  }

  if (method === 'POST') params['data'] = JSON.stringify({ ...body })

  const signedCredentials = Signer.sign(params, accessInfo, serviceInfo)
  return signedCredentials
}

export default signRequest
