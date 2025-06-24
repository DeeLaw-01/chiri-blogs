import { IntlProvider } from 'i18n'
import NotFound from 'ui/features/404/not-found-page'

export default function NotFoundPage() {
  return (
    <IntlProvider page="/404">
      <NotFound />
    </IntlProvider>
  )
}
