import { IntlProvider } from 'i18n'
import Help from './help-page'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('help-page.metadata.title'),
    description: t('help-page.metadata.description'),
    keywords: t('help-page.metadata.keywords'),
  }
}

export default function HelpPage() {
  return (
    <IntlProvider page={'/help'}>
      <Help />
    </IntlProvider>
  )
}
