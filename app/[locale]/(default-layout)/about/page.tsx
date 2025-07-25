import About from './about-page'
import { IntlProvider } from 'i18n'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('about-page.metadata.title'),
    description: t('about-page.metadata.description'),
    keywords: t('about-page.metadata.keywords'),
  }
}

export default function AboutPage() {
  return (
    <IntlProvider page="/about">
      <About />
    </IntlProvider>
  )
}
