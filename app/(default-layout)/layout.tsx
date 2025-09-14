import { ReactNode } from 'react'
import Navbar from 'ui/features/new-navbar'
import Footer from 'ui/features/shared-layout/footer'
import MainProvider from 'src/providers/main-provider'
import { setRequestLocale } from 'next-intl/server'

export default function Layout({ children }: { children: ReactNode }) {
  // Set English as the default locale
  setRequestLocale('en')

  return (
    <MainProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MainProvider>
  )
}
