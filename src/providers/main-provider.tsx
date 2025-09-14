'use client'

import { useEffect } from 'react'
import useUserOnline from 'src/hooks/useUserOnline'
import dynamic from 'next/dynamic'
import useChatBot from 'src/hooks/useChatBot'
import { isBrowser } from 'src/data/environments'
import JSONLD from 'ui/shared/json-ld'
import useClarity from 'src/hooks/useClarity'
import { usePathname } from 'src/i18n/router'
import GlobalModals from 'ui/shared/modals'

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

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  // Always use English locale
  const locale = 'en'
  const { configure: configureChatBot } = useChatBot()
  const { configure: configureClarity } = useClarity()
  useUserOnline()

  useEffect(() => {
    if (!isBrowser) return

    configureChatBot(locale)
    configureClarity()
  }, [configureChatBot, configureClarity, locale])

  // pushing pages for analytics
  useEffect(() => {
    pageview(path)
  }, [path])

  return (
    <>
      <JSONLD path={path} />
      {children}
      <DynamicCookieConsent />
      <DynamicNotifications />
      <GlobalModals />
    </>
  )
}
