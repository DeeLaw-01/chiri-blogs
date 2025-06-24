import { Metadata } from 'next'
import Unsubscribe from './unsubscribe-page'
import { IntlProvider } from 'i18n'
import { redirect } from 'src/i18n/router'

type Params = {
  params: { locale: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  robots: {
    index: false,
  },
}

export default async function UnsubscribePage({
  params,
  searchParams,
}: Params) {
  const { locale } = params
  const { email } = await searchParams

  if (typeof email !== 'string') return redirect({ href: '/', locale: locale })
  return (
    <IntlProvider page="/unsubscribe">
      <Unsubscribe email={email} />
    </IntlProvider>
  )
}
