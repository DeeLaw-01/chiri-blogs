import { IntlProvider } from 'i18n'
import Loyalty from './loyalty-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('loyalty-page.metadata.title'),
    description: t('loyalty-page.metadata.description'),
    keywords: t('loyalty-page.metadata.keywords'),
  }
}

export default function LoyaltyPage() {
  return (
    <IntlProvider page={'/loyalty'}>
      <Loyalty />
    </IntlProvider>
  )
}
