import { VStack, Box, useMediaQuery } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import TransportBaseCard from 'ui/features/trip-details/transport/transport-card/transport-base-card'
import useCurrency from 'src/hooks/useCurrency'
import { useOnewayModalsAtoms } from '../useOnewayModals'
import { OnewayDetails } from 'src/shared-types/oneway-response-type'
import TransportTags from 'ui/features/change-transportation/transport-card/transport-tags'
import Link from 'ui/primitives/Link'
import { useState } from 'react'

type TransportHomeCardProps = {
  transport: OnewayDetails
}

export default function TransportHomeCard({
  transport,
}: TransportHomeCardProps) {
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')
  const { getConvertedCurrency } = useCurrency()
  const { setShowTransportDetails } = useOnewayModalsAtoms()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <TransportBaseCard
      transport={transport.itinerary[0].content}
      animate
      showDetails={() =>
        setShowTransportDetails({
          transport: transport.itinerary[0].content,
        })
      }
    >
      <>
        <VStack gap="0">
          {minBreakCard && !!transport.tags?.length && (
            <TransportTags tags={transport.tags} />
          )}

          <Box
            textAlign={{ base: 'left', md: 'center' }}
            mt={{ base: 0, md: 2 }}
          >
            <Heading as="h2" fontWeight="normal" mb="-1">
              {getConvertedCurrency(transport.price.price_transports)}
            </Heading>
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

        <Link href={`/packages/${transport.id}`} w="full">
          <Button
            w={'full'}
            secondary
            id="change-transport"
            isLoading={isLoading}
            onClick={() => setIsLoading(true)}
          >
            <Text st="common.book.now" />
          </Button>
        </Link>
      </>
    </TransportBaseCard>
  )
}
