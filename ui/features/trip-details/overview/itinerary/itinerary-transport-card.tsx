import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import LayoverTag from '../../layover-tag'

import useUpdateTrip from '../../hooks/useUpdateTrip'
import { parseISO, format } from 'date-fns'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

import TransportIcon from '../../transport/transportIcon'
import TransportText from '../../transport/transport-text'
import { Transport } from 'src/shared-types/transport.type'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import DeleteTransportButton from '../delete-button/delete-transport-button'

type ItineraryTransportCardProps = {
  idx: number
  transport: Transport
}

export default function ItineraryTransportCard({
  idx,
  transport,
}: ItineraryTransportCardProps) {
  const formatDate = useFormattedDate()
  const { updateTripHandler, isLoading } = useUpdateTrip()
  const {
    trip,
    setTrip,
    setShowTransportDetails,
    setShowChangeTransportation,
  } = useTripDetailsAtoms()

  const handleRemoveTransport = async () => {
    await updateTripHandler(
      {
        trip_id: trip.data?.id!,
        position: idx,
        type: 'transport',
        add: false,
      },
      (data) => {
        setTrip({
          data: data.trip,
          isLoading: false,
          error: false,
          isValidating: false,
        })
      }
    )
  }

  return (
    <>
      <Box
        p="2"
        borderRadius="lg"
        bg="_white"
        w="full"
        pos="relative"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 5px"
      >
        {transport.can_be_removed && (
          <VStack
            position="absolute"
            left={{ base: '-27px', md: '-30px' }}
            h="100%"
            justify="space-around"
          >
            <DeleteTransportButton
              isLoading={isLoading}
              handleDelete={handleRemoveTransport}
            />
          </VStack>
        )}

        <VStack
          fontSize="sm"
          alignItems={'flex-start'}
          w="full"
          onClick={() => {
            setShowTransportDetails({ transport: transport })
          }}
          cursor={'pointer'}
        >
          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Text id="transport-details-heading" textAlign={'left'}>
              <TransportText modes={transport.modes} />{' '}
              <Text
                notag
                st="new-trip-page:from.destination"
                sd={{ destination: transport.origin }}
              />{' '}
              <Text
                notag
                st="new-trip-page:to.destination"
                sd={{ destination: transport.destination }}
              />
            </Text>
            <HStack
              minW={20}
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              onClick={(e) => {
                e.stopPropagation()
                setShowChangeTransportation({ transport: transport })
              }}
            >
              <Button
                asLink
                fontSize="xs"
                id="itinerary-change-transport"
                minWidth={'fit-content'}
                isDisabled={!trip?.data?.available_to_buy}
                arrow
              >
                <Text notag st="common:general.change" />
              </Button>
            </HStack>
          </HStack>
          <HStack
            justifyContent={'space-between'}
            alignItems="flex-start"
            w="full"
          >
            <VStack alignItems="flex-start" w="30%" gap="0">
              <Text color="_gray" fontSize="xs">
                {formatDate(transport.departure_time, false)}
              </Text>
              <Text color="_darkgray" mt="0 !important">
                {format(parseISO(transport.departure_time), 'HH:mm')}
              </Text>
            </VStack>
            <VStack w="40%" gap="0">
              <Box
                fontSize="sm"
                color="_gray"
                w="full"
                borderBottom="3px dotted lightgray"
                alignItems="center"
              >
                <HStack
                  position="relative"
                  mb="-3"
                  w="full"
                  justifyContent="center"
                >
                  <TransportIcon modes={transport.modes} />
                </HStack>
              </Box>
              <VStack mt="4 !important">
                <LayoverTag completeItinerary={transport.complete_itinerary} />
              </VStack>
            </VStack>
            <VStack alignItems="flex-end" w="30%" textAlign="right" gap="0">
              <Text color="_gray" fontSize="xs">
                {formatDate(transport.arrival_time, false)}
              </Text>
              <Text color="_darkgray" mt="0 !important">
                {format(parseISO(transport.arrival_time), 'HH:mm')}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}
