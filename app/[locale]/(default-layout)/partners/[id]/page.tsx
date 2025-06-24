import IndividualPartner from './individual-partners-page'
import { IntlProvider } from 'i18n'

type Params = { params: { id: string } }

export default function IndividualPartnersPage({ params }: Params) {
  return (
    <IntlProvider page="/packages/[id]">
      <IndividualPartner id={params.id} />
    </IntlProvider>
  )
}
