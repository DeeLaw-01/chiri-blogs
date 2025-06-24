import getServerTranslations from 'src/utils/getServerTranslations'
import ProfileView from './profile-page'
import { Metadata } from 'next'
import { IntlProvider } from 'i18n'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('profile-page.metadata.title'),
    description: t('partners-page.metadata.description'),
  }
}

export default function ProfilePage() {
  return (
    <IntlProvider page={'/profile'}>
      <ProfileView />
    </IntlProvider>
  )
}
