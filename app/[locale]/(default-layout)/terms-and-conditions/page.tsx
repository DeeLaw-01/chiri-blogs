import { IntlProvider } from 'i18n'
import TermsAndConditions from './terms-and-conditions-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

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
