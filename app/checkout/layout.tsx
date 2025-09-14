import { ReactNode } from 'react'
import MainProvider from 'src/providers/main-provider'
import { setRequestLocale } from 'next-intl/server'

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  // Set English as the default locale
  setRequestLocale('en')

  return <MainProvider>{children}</MainProvider>
}
