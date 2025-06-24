import Modal from 'ui/primitives/Modal'
import { Changes } from '../../checkout.type'

import ItineraryChange from './itinerary'
import PriceChange from './price-change'
import { useEffect, useState } from 'react'
import { tripChangesDataLayer } from 'src/tracking'
import AcceptDeclineButton from './accept-decline-buttons'

export type ChangesModalProps = {
  changes: Changes
}

export default function ChangesModal({ changes }: ChangesModalProps) {
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    tripChangesDataLayer(changes)
  }, [changes])

  if (!changes.price_changed && changes.isTheSame) return <></>

  return (
    <Modal
      size={'xl'}
      isOpen={showModal}
      onClose={handleClose}
      scrollBehavior="inside"
      closeOnOverlayClick={false}
      closeOnEsc={false}
      addCloseButton={false}
      modalContentStyle={{ overflow: 'hidden' }}
      autoFocus={false}
    >
      {changes.price_changed && <PriceChange changes={changes} />}
      {!changes.isTheSame && <ItineraryChange changes={changes} />}
      <AcceptDeclineButton changes={changes} onClose={handleClose} />
    </Modal>
  )
}
