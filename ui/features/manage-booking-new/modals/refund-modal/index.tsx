import Modal from 'ui/primitives/Modal'
import RefundStatus from './requested/refund-status-view'
import RefundNotRequested from './not-requested/not-requested-view'
import { BookingType, RefundStatusType } from '../../types/booking.type'
import RefundDenied from './denied/refund-denied-view'
import RefundAccepted from './accepted/refund-accepted-view'

export type RefundModalProps = {
  isOpen: boolean
  onClose: () => void
  booking: BookingType
}
export default function RefundModal({
  isOpen,
  onClose,
  booking,
}: RefundModalProps) {
  const status = booking.refund?.status

  return (
    <Modal size={'xl'} onClose={onClose} isOpen={isOpen}>
      {status === RefundStatusType.Requested && (
        <RefundStatus onClose={onClose} />
      )}
      {status === RefundStatusType.NotRequested && (
        <RefundNotRequested onClose={onClose} />
      )}
      {status === RefundStatusType.Refunded && (
        <RefundAccepted onClose={onClose} />
      )}
      {status === RefundStatusType.Denied && <RefundDenied onClose={onClose} />}
    </Modal>
  )
}
