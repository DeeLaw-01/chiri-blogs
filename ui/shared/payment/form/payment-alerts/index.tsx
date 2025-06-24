import { StripeError } from '@stripe/stripe-js'
import Alert from 'ui/primitives/Alert'

type PaymentAlertsProps = {
  error: StripeError | undefined
}

export default function PaymentAlerts({ error }: PaymentAlertsProps) {
  if (!error) return <></>

  return (
    <Alert error icon fontSize="sm" mb="2">
      {error.message}
    </Alert>
  )
}
