import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { appearance } from './style'
import PaymentForm from './form/payment-form'
import { isDevelopment } from 'src/data/environments'
import PaymentSkeleton from './skeleton/payment-skeleton'
import QuidPaymentForm from './form/quid-payment-form'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { CurrentSelectionType, SuccessPaymentData } from './payment.type'

type PaymentProps = {
  price: number
  redirect: string
  isLoading: boolean
  successPaymentData: SuccessPaymentData
}

const key = isDevelopment
  ? process.env.NEXT_PUBLIC_STRIPE_DEV_KEY
  : process.env.NEXT_PUBLIC_STRIPE_KEY

const stripe = loadStripe(key!)

export default function Payment({
  successPaymentData,
  price,
  redirect,
  isLoading,
}: PaymentProps) {
  const [currentSelection, setCurrentSelection] =
    useState<CurrentSelectionType>({
      method: null,
      source: successPaymentData?.direct_bank ? 'quidkey' : 'stripe',
    })

  if (isLoading) return <PaymentSkeleton />
  if (!successPaymentData?.stripe) return <></>

  return (
    <>
      <Elements
        stripe={stripe}
        options={{
          clientSecret: successPaymentData.stripe,
          appearance: appearance,
        }}
      >
        {successPaymentData.direct_bank && (
          <>
            <QuidPaymentForm
              setCurrentSelection={setCurrentSelection}
              options={{ clientSecret: successPaymentData.direct_bank }}
            />
            <Box borderBottom="1px solid" borderBottomColor="_lightgray" />
          </>
        )}
        <PaymentForm
          price={price}
          redirect={redirect}
          currentSelection={currentSelection}
          successPaymentData={successPaymentData}
        />
      </Elements>
    </>
  )
}
