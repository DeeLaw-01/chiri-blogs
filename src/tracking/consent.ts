import { CookiePreferences } from 'src/contexts/cookie-consent/cookie.type'

function googleTagManagerConsent(consent: CookiePreferences): void {
  if (window.dataLayer === undefined) return

  window.dataLayer.push({
    event: 'consent',
    ad_storage: consent.analytics ? 'granted' : 'denied',
    ad_user_data: consent.analytics ? 'granted' : 'denied',
    ad_personalization: consent.analytics ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
  })
}

export { googleTagManagerConsent }
