import { Auth } from '@aws-amplify/auth'
import { Hub } from '@aws-amplify/core'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { useEffect, useState } from 'react'

export interface UseAuthHookResponse {
  currentUser: CognitoUser | null
  signIn: () => void
  signOut: () => Promise<void>
  isUserLoggedIn: boolean
  updateAttribute: (data: object) => void
  attributes: UserAttributes
}

export interface UserAttributes {
  name: string
  email: string
  email_verified: boolean
  initials: string
  coins: number
  phone_number: string
}

const getCurrentUser = async (): Promise<CognitoUser | any> => {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch {
    // currentAuthenticatedUser throws an Error if not signed in
    return null
  }
}

const useAuth = (): UseAuthHookResponse => {
  const [currentUser, setCurrentUser] = useState<CognitoUser | null>(null)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(undefined)
  const [attributes, setAttributes] = useState<any>()

  const getInitials = (str): string => {
    if (!str) return 'AA' // If for some reason the name is not there default to AA
    const firstLetters = str
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2)

    return firstLetters
  }

  useEffect(() => {
    const handleAuthEvent = async (event: string, data: any) => {
      switch (event) {
        case 'signIn':
        case 'autoSignIn':
        case 'signOut':
        case 'oAuthSignOut': {
          updateUser()
          break
        }
      }
    }
    const updateUser = async () => {
      const cognitoUser = await getCurrentUser()
      setIsUserLoggedIn(cognitoUser !== undefined && cognitoUser !== null)
      if (!cognitoUser) return

      const attributes = cognitoUser.attributes
      attributes['initials'] = getInitials(attributes.name)
      attributes['coins'] = attributes['custom:coins']

      setAttributes(attributes)
      setCurrentUser(cognitoUser)
    }

    Hub.listen('auth', ({ payload: { event, data } }) =>
      handleAuthEvent(event, data)
    ) // listen for auth events
    updateUser() // check manually the first time because we won't get a Hub event
    return () =>
      Hub.remove('auth', ({ payload: { event, data } }) =>
        handleAuthEvent(event, data)
      )
  }, [])

  const updateAttribute = async (data: object) => {
    const user = await Auth.currentAuthenticatedUser()
    await Auth.updateUserAttributes(user, data)
  }

  const signIn = () => Auth.federatedSignIn()

  const signOut = async () => {
    setTimeout(async () => {
      try {
        sessionStorage.removeItem('cognitoUserId')
        sessionStorage.setItem('routeTo', `${window.location.href}`) // for routing user back to where they came from post signin
        await Auth.signOut()
      } catch (error) {
        return
      }
    })
  }

  return {
    currentUser,
    signIn,
    signOut,
    isUserLoggedIn,
    attributes,
    updateAttribute,
  }
}

export default useAuth

export { getCurrentUser }
