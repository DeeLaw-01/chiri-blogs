'use client'

import { useEffect } from 'react'
import useUserOnline from 'src/hooks/useUserOnline'
import dynamic from 'next/dynamic'
import useChatBot from 'src/hooks/useChatBot'
import { isBrowser } from 'src/data/environments'
import JSONLD from 'ui/shared/json-ld'
import useClarity from 'src/hooks/useClarity'
import { usePathname } from 'src/i18n/router'
import { useLocale } from 'next-intl'
import GlobalModals from 'ui/shared/modals'

const DynamicEmailSignUpModal = dynamic(() => {
  return import('ui/features/signup-banner/modal')
})

const DynamicCookieConsent = dynamic(() => import('ui/features/cookie-consent'))

const DynamicNotifications = dynamic(() => {
  return import('ui/features/notifications')
})

const pageview = (url: string) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  })
}

export default function MainProvider({ children }) {
  const path = usePathname()
  const locale = useLocale()
  const { configure: configureChatBot } = useChatBot()
  const { configure: configureClarity } = useClarity()
  useUserOnline()

  useEffect(() => {
    if (!isBrowser) return

    configureChatBot(locale)
    configureClarity()
  }, [])

  // pushing pages for analytics
  useEffect(() => {
    pageview(path)
  }, [path])

  return (
    <>
      <JSONLD path={path} />
      {children}
      <DynamicEmailSignUpModal />
      <DynamicCookieConsent />
      <DynamicNotifications />
      <GlobalModals />
    </>
  )
}
