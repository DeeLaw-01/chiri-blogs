import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'

import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import { Transport } from 'src/shared-types/transport.type'

type ItineraryNoTransportAddedCardProps = {
  transport: Transport
  isReturnFlight: boolean
}

export default function ItineraryNoTransportCard({
  transport,
  isReturnFlight,
}: ItineraryNoTransportAddedCardProps) {
  const { setShowChangeTransportation, trip } = useTripDetailsAtoms()

  return (
    <Box
      w="full"
      borderRadius="lg"
      border="1px dashed"
      bg="_lightestgray"
      color="gray.400"
      borderColor="_lightgray"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 5px"
    >
      <VStack fontSize="sm" alignItems={'flex-start'} p="2">
        <HStack w="full" justifyContent="space-between" gap={10}>
          {isReturnFlight ? (
            <Text
              sd={{ city: transport.destination }}
              st="new-trip-page.overview.itinerary.transport.return.none.title"
            />
          ) : (
            <Text
              sd={{ city: transport.destination }}
              st="new-trip-page.overview.itinerary.transport.regular.none.title"
            />
          )}
          <Button
            id="itinerary-add-hotel"
            fontSize="xs"
            minW="fit-content"
            asLink
            onClick={(e) => {
              e.stopPropagation()
              setShowChangeTransportation({ transport: transport })
            }}
            rightIcon={<RightArrowSmallIcon width="4px" h="5" />}
            isDisabled={!trip?.data?.available_to_buy}
          >
            <Text st="new-trip-page.overview.itinerary.transport.regular.add" />
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
