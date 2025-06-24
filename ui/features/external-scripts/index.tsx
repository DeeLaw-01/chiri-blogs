import { GoogleTagManager } from '@next/third-parties/google'
import { isProduction } from 'src/data/environments'
import { useCookieConsent } from 'src/contexts/cookie-consent'
import { CONFIG_TRACKING } from 'src/config'

export default function ExternalScripts() {
  const { consent } = useCookieConsent()
  if (!isProduction || !consent?.analytics) return null

  return (
    <>
      <GoogleTagManager gtmId={CONFIG_TRACKING.GTM_ID} />
    </>
  )
}
