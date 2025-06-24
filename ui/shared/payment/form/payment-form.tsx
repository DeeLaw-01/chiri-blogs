import { Box } from '@chakra-ui/react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { StripeError } from '@stripe/stripe-js'
import PurchaseButton from './purchase-button'
import PaymentAlerts from './payment-alerts'
import { options } from '../style'
import TermsCheckbox from './terms-and-conditions-checkbox'
import { PaymentAlertDataLayer } from 'src/tracking'
import { CurrentSelectionType, SuccessPaymentData } from '../payment.type'
import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'

type PaymentFormProps = {
  price: number
  redirect: string
  currentSelection: CurrentSelectionType
  successPaymentData: SuccessPaymentData
}

type CheckoutForm = {
  terms: boolean
}

export default function PaymentForm({
  price,
  redirect,
  currentSelection,
  successPaymentData,
}: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const methods = useForm<CheckoutForm>({})
  const [error, setError] = useState<StripeError>()

  const onSubmit = () => {
    if (currentSelection.source === 'stripe') handleStripePayment()
    if (currentSelection.source === 'quidkey') handleQuidPayment()
  }

  const handleStripePayment = async () => {
    if (!elements || !stripe) return

    const result = await stripe?.confirmPayment({
      elements,
      confirmParams: { return_url: redirect },
    })
    if (result.error) handleError(result.error)
  }

  const handleQuidPayment = async () => {
    try {
      const resp = await fetch(API_URL_PAYMENT_INFO + '/initiate_payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bankId: currentSelection.method,
          paymentToken: successPaymentData.direct_bank,
        }),
      }).then((r) => r.json())

      if (resp.success && resp.data.payment_link) {
        window.location.href = resp.data.payment_link
      } else {
        console.error('[Merchant] Quidkey initiation failed:', resp)
      }
    } catch (err) {
      console.log('[Merchant] Quidkey initiation error:', err)
    }
  }

  const handleError = (error: StripeError) => {
    PaymentAlertDataLayer(error.message)
    setError(error)
  }

  useEffect(() => {
    elements?.fetchUpdates()
  }, [price])

  return (
    <FormProvider {...methods}>
      <PaymentAlerts error={error} />
      <Box as="form" w="full" onSubmit={methods.handleSubmit(onSubmit)}>
        <PaymentElement options={options} />
        <TermsCheckbox />
        <PurchaseButton
          price={price}
          stripe={stripe}
          isDisabled={
            !stripe ||
            (successPaymentData.direct_bank &&
              currentSelection.source === 'quidkey' &&
              !currentSelection.method)
          }
        />
      </Box>
    </FormProvider>
  )
}
