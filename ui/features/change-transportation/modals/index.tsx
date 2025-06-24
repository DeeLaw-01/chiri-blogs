import { Transport } from 'src/shared-types/transport.type'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import dynamic from 'next/dynamic'
import { ConfirmSelectModalProps } from './confirm-select-modal'
import { TransportDetailedModalProps } from 'ui/features/trip-details/transport/transport-detailed'
import { MobileSortDrawerProps } from './mobile-sort-view'

const DynamicConfirmSelectModal = dynamic<ConfirmSelectModalProps>(
  () => import('ui/features/change-transportation/modals/confirm-select-modal')
)

const DynamicTransportDetailedModal = dynamic<TransportDetailedModalProps>(
  () => import('ui/features/trip-details/transport/transport-detailed')
)

const DynamicMobileSortDrawer = dynamic<MobileSortDrawerProps>(
  () => import('ui/features/change-transportation/modals/mobile-sort-view')
)

type ChangeTransportationModalsProps = {
  transport: Transport
  onClose: () => void
  callback: () => any
}

export default function ChangeTransportationModals({
  transport,
  onClose,
  callback,
}: ChangeTransportationModalsProps) {
  const {
    setShowConfirm,
    showConfirm,
    showDetails,
    setShowDetails,
    showSort,
    setShowSort,
  } = useChangeTransportationAtoms()

  return (
    <>
      {showConfirm.transport && (
        <DynamicConfirmSelectModal
          isOpen={showConfirm !== null}
          onClose={() => setShowConfirm({})}
          transport={showConfirm.transport}
          tripId={transport.trip_id}
          callback={callback}
        />
      )}
      {showDetails.transport && (
        <DynamicTransportDetailedModal
          isOpen={showDetails.transport !== null}
          transport={showDetails.transport}
          onClose={() => setShowDetails({})}
        />
      )}
      {showSort && (
        <DynamicMobileSortDrawer
          isOpen={showSort}
          onClose={() => setShowSort(false)}
        />
      )}
    </>
  )
}
