import { Metadata } from 'next'
import { IntlProvider } from 'i18n'
import Feedback from './feedback-page'

export const metadata: Metadata = {
  robots: {
    index: false,
  },
}

export default function FeedBackPage() {
  return (
    <IntlProvider page="/feedback">
      <Feedback />
    </IntlProvider>
  )
}
