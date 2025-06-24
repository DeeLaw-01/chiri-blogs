import { TripDetails } from 'src/shared-types/trip-details.type'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import ChangeTravelersView from './change-travelers-view'

export type ChangeTravelersModalProps = {
  trip: TripDetails
  isOpen: boolean
  onClose: () => void
}

export default function ChangeTravelersModal({
  trip,
  isOpen,
  onClose,
}: ChangeTravelersModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<Text st="new-trip-page:modal.travelers.title" />}
    >
      <ChangeTravelersView trip={trip} onClose={onClose} />
    </Modal>
  )
}
