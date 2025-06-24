import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'
import { useCookieConsent } from 'src/contexts/cookie-consent'

import { isBrowser } from 'src/data/environments'
import { getClientUserId } from 'src/utils/userIdHelper'
import { useIsMounted } from './useIsMounted'

const CLARITY_ID = '9dat3oc9vo'

const useClarity = () => {
  const { consent } = useCookieConsent()
  const mounted = useIsMounted()

  useEffect(() => {
    configure()
  }, [consent])

  const configure = (): void => {
    if (!isBrowser || !mounted || !consent?.analytics) return

    Clarity.init(CLARITY_ID)
    Clarity.consent()
    Clarity.identify(getClientUserId())

    mounted.current = true
  }

  return { configure }
}

export default useClarity
