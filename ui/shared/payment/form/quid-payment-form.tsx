import { useElements } from '@stripe/react-stripe-js'
import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react'
import { CurrentSelectionType } from '../payment.type'
import { API_QUID_PAYMENT_URL } from 'src/api/baseUrls'

export default function QuidPaymentForm({
  options,
  setCurrentSelection,
}: {
  setCurrentSelection: Dispatch<SetStateAction<CurrentSelectionType>>
  options: { clientSecret: string }
}) {
  const [isOpen, setIsOpen] = useState(false)
  const elements = useElements()
  const elementsRef = useRef(elements)

  useEffect(() => {
    elementsRef.current = elements
  }, [elements])

  useEffect(() => {
    window.addEventListener('message', handleMessageFromQuidIframe)
    return () => {
      window.removeEventListener('message', handleMessageFromQuidIframe)
    }
  }, [])

  useEffect(() => {
    const paymentElement = elements?.getElement('payment')
    if (paymentElement) paymentElement?.on('change', handleChangeFromStripe)
  }, [elements])

  const handleMessageFromQuidIframe = (event: MessageEvent) => {
    if (event.origin !== API_QUID_PAYMENT_URL) return

    setIsOpen(event.data.isListOpen)

    const isSelected =
      event.data.isListOpen ||
      event.data.isPredictedBankSelected ||
      event.data.selectedBankId

    isSelected &&
      setCurrentSelection({
        source: 'quidkey',
        method: event.data.selectedBankId,
      })

    if (event.data.isListOpen || event.data.isPredictedBankSelected) {
      const paymentElement = elementsRef.current?.getElement('payment')
      if (paymentElement) paymentElement.collapse()
    }
  }

  const handleChangeFromStripe = (event: any) => {
    if (!event.collapsed) {
      const quidkeyIframe = document.getElementById(
        'quidkey-iframe'
      ) as HTMLIFrameElement | null

      if (quidkeyIframe) {
        quidkeyIframe?.contentWindow?.postMessage(
          { type: 'quidkey-clear-selection' },
          '*'
        )
      }

      setCurrentSelection({
        source: 'stripe',
        method: null,
      })
    }
  }

  return (
    <div>
      <iframe
        loading="lazy"
        id="quidkey-iframe"
        title="Quidkey checkout"
        style={{
          width: '100%',
          border: '0 !important',
          transition: 'height 0.3s ease',
          height: isOpen ? '420px' : '110px',
        }}
        src={`${API_QUID_PAYMENT_URL}/api/v1/embedded?payment_token=${options.clientSecret}`}
      ></iframe>
    </div>
  )
}
