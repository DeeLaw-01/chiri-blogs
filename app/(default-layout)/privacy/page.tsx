import { IntlProvider } from 'i18n'
import Privacy from './privacy-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' })

  return {
    title: t('privacy-page.metadata.title'),
    description: t('privacy-page.metadata.description'),
    keywords: t('privacy-page.metadata.keywords'),
  }
}

export default function PrivacyPage() {
  return (
    <IntlProvider page={'/privacy'}>
      <Privacy />
    </IntlProvider>
  )
}
