import dynamic from 'next/dynamic'
import { TransportDetailedModalProps } from 'ui/features/trip-details/transport/transport-detailed'
import { useOnewayModalsAtoms } from '../useOnewayModals'

const DynamicTransportDetailedModal = dynamic<TransportDetailedModalProps>(
  () => import('ui/features/trip-details/transport/transport-detailed')
)

export default function OneWayModals() {
  const { showTransportDetails, setShowTransportDetails } =
    useOnewayModalsAtoms()

  return (
    <>
      {showTransportDetails.transport && (
        <DynamicTransportDetailedModal
          isOpen={showTransportDetails.transport !== null}
          transport={showTransportDetails.transport}
          onClose={() => {
            setShowTransportDetails({})
          }}
        />
      )}
    </>
  )
}
