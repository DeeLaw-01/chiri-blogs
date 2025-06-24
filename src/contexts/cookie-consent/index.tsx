'use client'

import { createContext, useContext, useEffect } from 'react'
import { ConsentContextProps, CookiePreferences } from './cookie.type'
import { googleTagManagerConsent } from 'src/tracking/consent'
import { clarityConsent } from 'src/tracking/clarity/consent'
import useLocalStorage from 'src/hooks/useLocalStorage'

const ConsentContext = createContext<ConsentContextProps | null>(null)

export const ConsentProvider = ({ children }: { children: JSX.Element }) => {
  const [consent, setConsent] = useLocalStorage<CookiePreferences>(
    'cookie_consent',
    undefined
  )

  useEffect(() => {
    if (consent) {
      googleTagManagerConsent(consent)
      clarityConsent()
    }
  }, [consent])

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  )
}

export const useCookieConsent = () => {
  const context = useContext(ConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within a ConsentProvider')
  }
  return context
}
