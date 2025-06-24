import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import { HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import AwaitingCheckIn from './awaiting-check-in'
import FailedCheckIn from './failed-check-in'
import {
  BoardingPassStatusType,
  TransportBookingData,
} from '../../types/itinerary.type'
import getTransportStatus from '../../utils/getTransportStatus'
import ActionRequired from './action-required'

export type BoardingPassModalProps = {
  transport: TransportBookingData
  isOpen: boolean
  onClose: () => void
}
export default function BoardingPassModal({
  transport,
  isOpen,
  onClose,
}: BoardingPassModalProps) {
  const getModalView = () => {
    switch (getTransportStatus(transport)) {
      case BoardingPassStatusType.FAILED:
        return <FailedCheckIn transport={transport} />
      case BoardingPassStatusType.ACTION:
        return <ActionRequired transport={transport} />
      case BoardingPassStatusType.WAITING:
        return <AwaitingCheckIn transport={transport} />
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'md', md: 'md' }}
      addCloseButton
    >
      {getModalView()}
      <HStack w="full" justify="end" my={2}>
        <Button secondary id="close-boarding-pass-modal" onClick={onClose}>
          <Text st="common:general.close" />
        </Button>
      </HStack>
    </Modal>
  )
}
