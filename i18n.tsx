import { getRequestConfig } from 'next-intl/server'
import { ReactNode } from 'react'
import { useMessages, NextIntlClientProvider, useLocale } from 'next-intl'

import fs from 'fs'
import path from 'path'
import { pick } from 'src/utils/pick'
import { namespaces, getNamespace } from 'src/i18n/namespaces'
import { routing } from 'src/i18n/router'

type IntlProviderProps = {
  locale?: string
  page: keyof typeof namespaces
  children: ReactNode
}

export function IntlProvider({ page, children }: IntlProviderProps) {
  const locale = useLocale()
  const messages = useMessages()

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pick(messages, getNamespace(page))}
    >
      {children}
    </NextIntlClientProvider>
  )
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const data = fs.readFileSync(
    path.join(process.cwd(), `public/translations/${locale}/messages.json`),
    'utf8'
  )

  return {
    locale,
    messages: JSON.parse(data),
  }
})
