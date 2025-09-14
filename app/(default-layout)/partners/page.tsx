import Partners from './partners-page'
import { IntlProvider } from 'i18n'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' })

  return {
    title: t('partners-page.metadata.title'),
    description: t('partners-page.metadata.description'),
    keywords: t('partners-page.metadata.keywords'),
  }
}

export default function PartnersPage() {
  return (
    <IntlProvider page="/partners">
      <Partners />
    </IntlProvider>
  )
}
