import {
  Dates,
  Staylength,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'
import StaylengthForm from '../staylength-form'

export type StaylengthModalProps = {
  isOpen: boolean
  onClose: () => void
  handleSelect: (v: Staylength) => void
  dates: Dates
}

export default function StaylengthModal({
  isOpen,
  onClose,
  handleSelect,
  dates,
}: StaylengthModalProps) {
  const initial = typeof dates.stayLength === 'number' ? dates.stayLength : 1

  const handleConfirm = (amount: number) => {
    handleSelect(amount)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <Heading
        as="h2"
        fontWeight={'normal'}
        st="home-page.search.view.dates.stay.length.popover.heading"
      />

      <StaylengthForm handleConfirm={handleConfirm} initial={initial} />
    </Modal>
  )
}
