import GiftCard from './giftcard-page'
import { IntlProvider } from 'i18n'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: 'en' })

  return {
    title: t('gift-card.metadata.title'),
    description: t('gift-card.metadata.description'),
  }
}

export default function GiftCardPage() {
  return (
    <IntlProvider page="/giftcard">
      <GiftCard />
    </IntlProvider>
  )
}
