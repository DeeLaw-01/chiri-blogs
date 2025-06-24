import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type PaymentErrorProps = {
  msg?: string
}

export default function PaymentError({ msg }: PaymentErrorProps) {
  return (
    <Alert mt="5" error icon>
      <Text fontSize="sm">{msg || 'An error occured'}</Text>
    </Alert>
  )
}
