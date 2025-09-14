import { Metadata } from 'next'
import Unsubscribe from './unsubscribe-page'
import { IntlProvider } from 'i18n'
import { redirect } from 'next/navigation'

type Params = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  robots: {
    index: false,
  },
}

export default async function UnsubscribePage({ searchParams }: Params) {
  const { email } = await searchParams

  if (typeof email !== 'string') return redirect('/')
  return (
    <IntlProvider page="/unsubscribe">
      <Unsubscribe email={email} />
    </IntlProvider>
  )
}
