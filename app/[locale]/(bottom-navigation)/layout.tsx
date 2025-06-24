import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import MobileNavbar from 'ui/features/new-home/mobile-navbar'
import Footer from 'ui/features/shared-layout/footer'
import Navbar from 'ui/features/new-navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Box display={{ base: 'initial', md: 'none' }}>
        <MobileNavbar />
      </Box>
      <Footer />
    </>
  )
}
