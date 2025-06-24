import { IntlProvider } from 'i18n'
import Rewards from './rewards-page'

export default function RewardsPage() {
  return (
    <IntlProvider page="/profile/rewards">
      <Rewards />
    </IntlProvider>
  )
}
