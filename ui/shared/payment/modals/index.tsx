import useMutation from 'src/api/useMutation'
import PaymentErrorModal from './payment-error'
import PaymentLoadingModal from './payment-loading'
import PaymentSuccessfulModal from './payment-successful'
import checkCompleteStatus from 'src/api/queries/get/checkout/checkCompleteStatus'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PaymentStatus, PaymentTypes, RedirectStatus } from '../payment.type'

export default function PaymentModals({
  redirect,
  bid,
  type,
}: {
  bid: string
  redirect: string
  type: PaymentTypes
}) {
  const searchParams = useSearchParams()
  const redirectStatus = searchParams.get('redirect_status')
  const { trigger } = useMutation<boolean>((d) => checkCompleteStatus(d))
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>()

  useEffect(() => {
    if (bid.split('-')[1]) getPaymentStatus()
  }, [bid])

  const getPaymentStatus = () => {
    if (redirectStatus === RedirectStatus.FAILED) return

    trigger(bid, {
      onSuccess: (d) => handleSuccess(d),
    })
  }

  const handleSuccess = (data: boolean) => {
    const res = data.toString()

    if (res === PaymentStatus.SUCCESS) setPaymentStatus(PaymentStatus.SUCCESS)
    if (res === PaymentStatus.PENDING) handlePending()
  }

  const handlePending = () => {
    setTimeout(() => {
      getPaymentStatus()
    }, 3000)
  }

  if (redirectStatus === RedirectStatus.FAILED) return <PaymentErrorModal />
  if (paymentStatus === PaymentStatus.SUCCESS)
    return <PaymentSuccessfulModal redirect={redirect} type={type} />
  return <PaymentLoadingModal />
}
