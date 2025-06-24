import { HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

import { Transport } from 'src/shared-types/transport.type'
import Modal from 'ui/primitives/Modal'
import Button from 'ui/primitives/Button'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import TransportDetailedView from './transport-detailed-view'

export type TransportDetailedModalProps = {
  transport: Transport
  addChangeButton?: boolean
  isOpen: boolean
  onClose: () => void
}

export default function TransportDetailedModal({
  transport,
  addChangeButton = false,
  isOpen,
  onClose,
}: TransportDetailedModalProps) {
  const { setShowChangeTransportation } = useTripDetailsAtoms()

  const handleChangeClick = () => {
    onClose()
    setShowChangeTransportation({ transport: transport })
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalContentStyle={{
        overflow: 'hidden',
        maxH: { base: '70vh', md: 'initial' },
      }}
      modalBodyStyle={{ p: 0, overflowX: 'hidden' }}
      footer={
        addChangeButton && (
          <HStack mt={'-4 !important'}>
            <Button
              fontSize="sm"
              secondary
              id="change-transport-modal"
              onClick={handleChangeClick}
            >
              <Text notag st="common:general.change" />
            </Button>
          </HStack>
        )
      }
    >
      <TransportDetailedView transport={transport} />
    </Modal>
  )
}
