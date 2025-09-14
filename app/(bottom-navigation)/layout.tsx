import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import MobileNavbar from 'ui/features/new-home/mobile-navbar'
import Footer from 'ui/features/shared-layout/footer'
import Navbar from 'ui/features/new-navbar'
import MainProvider from 'src/providers/main-provider'
import { setRequestLocale } from 'next-intl/server'

export default function Layout({ children }: { children: ReactNode }) {
  // Set English as the default locale
  setRequestLocale('en')

  return (
    <MainProvider>
      <Navbar />
      <main>{children}</main>
      <Box display={{ base: 'initial', md: 'none' }}>
        <MobileNavbar />
      </Box>
      <Footer />
    </MainProvider>
  )
}
