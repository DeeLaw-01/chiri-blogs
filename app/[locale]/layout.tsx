import { Metadata, Viewport } from 'next'
import MainProvider from 'src/providers/main-provider'
import { setRequestLocale } from 'next-intl/server'
import { getMetadata } from './metadata'

type Params = { children: JSX.Element; params: { locale: string } }

export const viewport: Viewport = { maximumScale: 5 }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return await getMetadata(params.locale)
}

export default function Layout({ children, params: { locale } }: Params) {
  setRequestLocale(locale)

  return <MainProvider>{children}</MainProvider>
}
