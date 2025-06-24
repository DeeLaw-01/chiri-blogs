import { isBrowser } from 'src/data/environments'
import { Auth } from '@aws-amplify/auth'
import { getCookieItem } from './cookieUtils'
import { getServerUserId } from './serverUserId'

export const setCognitoUserId = (): void => {
  if (!isBrowser) return

  const userId = sessionStorage.getItem('cognitoUserId')

  if (!userId) {
    Auth.currentAuthenticatedUser().then((currentUser) => {
      const cognitoUserId =
        currentUser.signInUserSession.idToken.payload['cognito:username']

      if (cognitoUserId.length > 0)
        sessionStorage.setItem('cognitoUserId', cognitoUserId)
    })
  }
}

export const getUserId = async (): Promise<string> => {
  if (!isBrowser) return await getServerUserId()
  return getCookieItem('userId') || ''
}

export const getClientUserId = (): string => {
  if (!isBrowser) return ''
  return getCookieItem('userId') || ''
}

export const getCognitoUserId = (): string => {
  if (!isBrowser) return ''
  const id = sessionStorage.getItem('cognitoUserId')

  if (id) return id
  return ''
}
