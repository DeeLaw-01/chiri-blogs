import { IntlProvider } from 'i18n'
import TermsAndConditions from './terms-and-conditions-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' })

  return {
    title: t('terms-page.metadata.title'),
    description: t('terms-page.metadata.description'),
  }
}

export default function TermsAndConditionsPage() {
  return (
    <IntlProvider page="/terms-and-conditions">
      <TermsAndConditions />
    </IntlProvider>
  )
}
