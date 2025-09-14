import { Metadata, Viewport } from 'next'
import MainProvider from 'src/providers/main-provider'
import { setRequestLocale } from 'next-intl/server'

export const viewport: Viewport = { maximumScale: 5 }

export async function generateMetadata(): Promise<Metadata> {
  // Use English locale by default for metadata
  const { getMetadata } = await import('./metadata')
  return await getMetadata('en')
}

export default function MainLayout({ children }: { children: JSX.Element }) {
  // Set English as the default locale
  setRequestLocale('en')

  return <MainProvider>{children}</MainProvider>
}
