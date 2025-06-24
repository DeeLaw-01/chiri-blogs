import { getRequestConfig } from 'next-intl/server'
import path from 'path'
import fs from 'fs'
import { routing } from './router'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as string

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
