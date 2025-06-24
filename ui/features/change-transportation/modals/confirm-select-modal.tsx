import { Stack, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Modal from 'ui/primitives/Modal'
import TransportBaseCard from 'ui/features/trip-details/transport/transport-card/transport-base-card'

import useUrlState from 'src/hooks/useUrlState'
import useUpdateTrip from 'ui/features/trip-details/hooks/useUpdateTrip'
import { useRouter } from 'src/i18n/router'
import { confirmTransportationAlternatives } from 'src/tracking/trip-confirm-transportation-alternatives'

import type { Transport } from 'src/shared-types/transport.type'
import type { ChangeTransport } from 'src/shared-types/change-transport.type'

export type ConfirmSelectModalProps = {
  isOpen: boolean
  onClose: () => void
  transport: ChangeTransport
  tripId: string
  callback?: (transportDetails: Transport) => void
}

export default function ConfirmSelectModal({
  isOpen,
  onClose,
  transport,
  tripId,
  callback,
}: ConfirmSelectModalProps) {
  const router = useRouter()
  const { setUrlState } = useUrlState('sessionId')
  const { updateTripHandler, isLoading } = useUpdateTrip()

  const handleSelect = async () => {
    confirmTransportationAlternatives(transport.transportation)

    updateTripHandler(
      {
        trip_id: tripId,
        type: 'transport',
        add: true,
        key: transport.flights_key,
        session_id: transport.session_id,
        position: transport.transportation.position,
      },
      callbackAcceptFlightChangeQuery
    )
  }

  const callbackAcceptFlightChangeQuery = async (data) => {
    if (data?.new_trip_id) navigateToNewTripId(data)
    if (data?.session_id) setUrlState(transport.session_id)
    if (callback) callback(data)
  }

  const navigateToNewTripId = (data) => {
    router.push(`/packages/${data.trip_id}?sessionId=${transport.session_id}`)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'lg'}
      title={
        <Heading
          as="h3"
          fontWeight="normal"
          st="flight-info.flight.change.modal.header"
        />
      }
    >
      <Stack pb="2">
        <TransportBaseCard
          _hover={{}}
          background={'unset'}
          filter={'unset'}
          border="1px solid"
          borderColor="_lightgray"
          transport={transport.transportation.content}
          mb={4}
        />

        <HStack w="full" justify="flex-end" gap="3">
          <Button
            asLink
            pt={1}
            pb={1.5}
            onClick={onClose}
            color="_darkgray"
            fontWeight="normal"
            id="cancel-new-transport-button"
          >
            <Text notag st="common.general.cancel" />
          </Button>
          <Button
            primary
            isLoading={isLoading}
            onClick={handleSelect}
            id="confirm-new-transport-button"
          >
            <Text notag st="common.general.confirm" />
          </Button>
        </HStack>
      </Stack>
    </Modal>
  )
}
