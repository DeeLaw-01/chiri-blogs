import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en'], // Only use English locale
  defaultLocale: 'en',
  localePrefix: 'never', // Remove locale prefixes from URLs
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
