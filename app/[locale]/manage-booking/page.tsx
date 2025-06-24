import ManageBooking from './manage-booking-page'
import { IntlProvider } from 'i18n'
import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'
import { ManageBookingAtomsProvider } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'

type Params = { params: { locale: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('manage-booking-page.metadata.title'),
    description: t('manage-booking-page.metadata.description'),
  }
}

export default function ManageBookingPage() {
  return (
    <IntlProvider page="/manage-booking">
      <ManageBookingAtomsProvider>
        <ManageBooking />
      </ManageBookingAtomsProvider>
    </IntlProvider>
  )
}
