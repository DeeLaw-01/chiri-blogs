import { VStack, HStack, Box, useMediaQuery } from '@chakra-ui/react'
import TransportBaseCard from './transport-base-card'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import AnimatedTag from 'ui/primitives/AnimatedTag'
import Heading from 'ui/primitives/Heading'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import { Transport } from 'src/shared-types/transport.type'

type TransportChangeCardProps = {
  transport: Transport
}

export default function TransportChangeCard({
  transport,
}: TransportChangeCardProps) {
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')
  const { setShowChangeTransportation, setShowTransportDetails, trip } =
    useTripDetailsAtoms()

  return (
    <TransportBaseCard
      transport={transport}
      showDetails={() =>
        setShowTransportDetails({
          transport: transport,
        })
      }
      animate
    >
      <>
        <VStack gap="0">
          {minBreakCard && (
            <HStack
              fontSize="xs"
              color="_darkgray"
              w="full"
              justifyContent="flex-end"
              mt="-2"
              mb={{ base: 0, md: 2 }}
              minH="3"
            >
              <AnimatedTag green ml="2">
                <Text notag st="flight-info:tag.recommended" />
              </AnimatedTag>
            </HStack>
          )}
          <Box
            textAlign={{ base: 'left', md: 'center' }}
            mt={{ base: 0, md: 2 }}
          >
            <Heading
              as="h4"
              fontWeight="normal"
              st="new-trip-page:transport.card.included"
              mb="-1"
            />
            <Text color="_gray" fontSize="xs" as="span" st="common:for" />{' '}
            <Text
              as="span"
              color="_gray"
              fontSize="xs"
              st="common:travelers"
              sd={{ count: transport.passengers.total_passengers }}
            />
          </Box>
        </VStack>
        <Button
          secondary
          id="change-transport"
          isDisabled={!trip?.data?.available_to_buy}
          onClick={(e) => {
            e.stopPropagation()
            setShowChangeTransportation({
              transport: transport,
            })
          }}
        >
          <Text notag st="common:general.change" />
        </Button>
      </>
    </TransportBaseCard>
  )
}
