import { Dispatch, SetStateAction } from 'react'

export type CookiePreferences = {
  functional?: boolean
  analytics?: boolean
}

export type ConsentContextProps = {
  consent: CookiePreferences | undefined
  setConsent: Dispatch<SetStateAction<CookiePreferences | undefined>>
}
