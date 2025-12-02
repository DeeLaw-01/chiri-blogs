import { ReactNode } from 'react'
import Navbar from 'ui/features/new-navbar'
import Footer from 'ui/features/shared-layout/footer'

export default function BlogsLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
