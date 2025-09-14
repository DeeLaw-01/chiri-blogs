import { ReactNode } from 'react'
import Navbar from 'ui/features/new-navbar'
import Footer from 'ui/features/shared-layout/footer'

export default function BlogsLayout({ children }: { children: ReactNode }) {
  console.log('🏗️ BlogsLayout rendering')

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
