import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import locales from 'src/data/locales'

export const routing = defineRouting({
  locales: locales.map((locale) => locale.value),

  defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
