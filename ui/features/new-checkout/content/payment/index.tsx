import Card from 'ui/primitives/Card'
import Payment from 'ui/shared/payment'
import useCheckoutCart from '../../hooks/useCheckoutCart'
import { usePathname } from 'src/i18n/router'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import Protection from './protection'
// import Discount from './discount'
import paymentQuery from 'src/api/queries/post/checkout/paymentQuery'
import { useSelectedCurrency } from 'src/contexts/currency'
import { PaymentResponse } from 'src/api/queries/post/checkout/paymentQuery/payment.type'
import { CartItem } from '../../hooks/useCheckoutCart/cart.type'
import { useAffiliateContext } from 'src/contexts/affiliate'
import SectionButton from '../shared/section-button'
import useCheckoutSteps from '../../hooks/useCheckoutSteps'
import { Step } from '../../hooks/useCheckoutSteps/step.type'
import Confirm from './confirm-details'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import PaymentError from './error'
import { CONFIG_SITE } from 'src/config'
import useMutation from 'src/api/useMutation'
import generateUUID from 'src/utils/generateUUID'
import useTranslation from 'src/hooks/useTranslation'
import { useSearchParams } from 'next/navigation'
import Discount from './discount'

enum PaymentStep {
  Protection,
  Confirm,
  Payment,
}

type PaymentError = {
  msg?: string
}

export default function CheckoutPayment() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { isCurrentIndex, getStepIndex } = useCheckoutSteps()
  const { selectedCurrency } = useSelectedCurrency()

  const {
    contact,
    trip,
    passengers,
    promocode,
    cart,
    step,
    session,
    setPaymentLoading,
    setChangesModal,
  } = useCheckoutAtoms()
  const [paymentStep, setPaymentStep] = useState<PaymentStep>(0)
  const { getTotalPrice, removeItemFromCart } = useCheckoutCart()
  const [paymentData, setPaymentData] = useState<PaymentResponse>()
  const [error, setError] = useState<PaymentError>()
  const { affiliate } = useAffiliateContext()
  const { trigger, isMutating } = useMutation<PaymentResponse>((d) =>
    paymentQuery(d)
  )

  const uuid = generateUUID()

  const { t } = useTranslation()

  useEffect(() => {
    setPaymentLoading(isMutating)
  }, [isMutating])

  useEffect(() => {
    if (isCurrentIndex(Step.Payment)) {
      setPaymentStep(PaymentStep.Protection)
      setError(undefined)
      removeItemFromCart('protection')
    }
  }, [step])

  const getRequestData = () => {
    const email = contact?.email

    const protectionItem = cart.find((x: CartItem) => x.key === 'protection')
    const price =
      (trip?.price.price_transports ?? 0) + (trip?.price.price_hotels ?? 0)

    return {
      trip_id: trip?.id ?? '',
      session_id: sessionId,
      promocode: promocode ?? affiliate,
      passengers: passengers,
      contact_details: contact,
      currency: selectedCurrency,
      price: price,
      protection: {
        flex: Boolean(protectionItem),
        id: protectionItem?.description ?? '',
      },
      has_seats: cart.some((x: CartItem) => x.key === 'seats'),
      uuid: uuid,
      checkout_session: session,
      redirect_urls: {
        success_url: `${
          window.location.host
        }${pathname}?complete=true&email=${email}&bid=0&price=${getTotalPrice()}`,
        failure_url: `${
          window.location.host
        }${pathname}?complete=false&email=${email}&bid=0&price=${getTotalPrice()}&redirect_status=failed`,
      },
    }
  }

  const getRedirectLink = () => {
    const email = contact?.email
    const bid = paymentData?.purchase_id
    const price = getTotalPrice()

    return `${CONFIG_SITE.BASE_LINK}${pathname}?complete=true&email=${email}&bid=${bid}&price=${price}`
  }

  const next = () => {
    if (paymentStep + 1 === PaymentStep.Confirm) handleSaveBooking()
    setPaymentStep((prev) => prev + 1)
  }

  const handleSaveBooking = () => {
    trigger(getRequestData(), {
      onSuccess: (data) => handleSuccess(data),
      onError: (data) => handleError(data as PaymentError),
    })
  }

  const handleSuccess = (data: PaymentResponse) => {
    if (uuid !== data.request_uuid) return
    if (data.changes) setChangesModal({ changes: data.changes })
    setPaymentData(data)
  }

  const handleError = (data: PaymentError) => {
    setError(data)
  }

  return (
    <Card p={{ base: 3, md: 5 }}>
      <SectionButton
        title={t('checkout-page.payment.header')}
        step={getStepIndex(Step.Payment)}
      />
      {isCurrentIndex(Step.Payment) && (
        <>
          {error && <PaymentError msg={error.msg} />}

          {!error && paymentStep === PaymentStep.Protection && (
            <Protection next={next} />
          )}
          {!error && paymentStep === PaymentStep.Confirm && (
            <Confirm next={next} />
          )}
          {!error && paymentStep === PaymentStep.Payment && (
            <Box mt="5">
              {paymentData?.success && <Discount />}
              <Payment
                isLoading={isMutating}
                price={getTotalPrice()}
                redirect={getRedirectLink()}
                successPaymentData={paymentData?.success!}
              />
            </Box>
          )}
        </>
      )}
    </Card>
  )
}
