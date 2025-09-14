import { IntlProvider } from 'i18n'
import Loyalty from './loyalty-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' })

  return {
    title: t('rewards-history-page.metadata.title'),
    description: t('rewards-history-page.metadata.description'),
  }
}

export default function LoyaltyPage() {
  return (
    <IntlProvider page={'/loyalty'}>
      <Loyalty />
    </IntlProvider>
  )
}
