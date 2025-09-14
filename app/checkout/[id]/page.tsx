import { Metadata } from 'next'
import { IntlProvider } from 'i18n'
import getServerTranslations from 'src/utils/getServerTranslations'
import Checkout from './new-checkout-page'
import { serverFetch } from 'src/api/serverFetch'
import checkoutTripQuery from 'src/api/queries/get/checkout/checkoutTripQuery'
import { TripDetails } from 'src/shared-types/trip-details.type'
import { CheckoutAtomsProvider } from 'ui/features/new-checkout/useCheckoutAtoms'
import { notFound } from 'next/navigation'

type Params = {
  params: { id: string }
  searchParams: { sessionId: string }
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' }) // Use 'en' as default

  return {
    title: t('checkout-page.metadata.title'),
    robots: { index: false },
  }
}

export const revalidate = 0

async function getCheckoutData(id: string, sessionId: string) {
  const { data } = await serverFetch<TripDetails>(
    checkoutTripQuery(id, sessionId)
  )
  return data
}

export default async function CheckoutPage({ params, searchParams }: Params) {
  let data = null
  try {
    data = await getCheckoutData(params.id, searchParams.sessionId)
  } catch (error) {
    return notFound()
  }

  return (
    <IntlProvider page="/checkout">
      <CheckoutAtomsProvider>
        <Checkout data={data} />
      </CheckoutAtomsProvider>
    </IntlProvider>
  )
}
