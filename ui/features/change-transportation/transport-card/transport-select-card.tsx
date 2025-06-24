import { VStack, Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import TransportBaseCard from 'ui/features/trip-details/transport/transport-card/transport-base-card'
import { ChangeTransport } from 'src/shared-types/change-transport.type'
import useCurrency from 'src/hooks/useCurrency'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import TransportTags, { TransportTagType } from './transport-tags'

type TransportSelectCardProps = {
  transport: ChangeTransport
  totalNumberPeople?: number
  tags: TransportTagType[]
}

export default function TransportSelectCard({
  transport,
  totalNumberPeople,
  tags,
}: TransportSelectCardProps) {
  const { setShowConfirm, setShowDetails } = useChangeTransportationAtoms()
  const { getConvertedCurrency } = useCurrency()

  const getPriceColor = () => {
    if (transport.price_difference === 0) return '_black'
    else if (transport.price_increased) return '_red'
    else return '_green'
  }

  const getPriceIcon = () => {
    if (transport.price_difference === 0) return ''
    else if (transport.price_increased) return '+'
    else return '-'
  }

  return (
    <TransportBaseCard
      transport={transport.transportation.content}
      mb="4"
      _hover={
        transport.transportation?.content.layover?.length > 0
          ? { cursor: 'pointer' }
          : {}
      }
      showDetails={() =>
        setShowDetails({
          transport: transport.transportation.content,
        })
      }
    >
      <VStack gap="0">
        <TransportTags tags={tags} />
        <Box textAlign={{ base: 'left', md: 'center' }} mt={{ base: 0, md: 4 }}>
          <Heading
            as="h2"
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight={{ base: 'medium', md: 'normal' }}
            mb={{ base: -2, md: -1 }}
            color={getPriceColor()}
          >
            {getPriceIcon()}
            {getConvertedCurrency(transport.price_difference)}
          </Heading>
          <Text
            fontSize={{ base: '2xs', md: 'xs' }}
            color="_gray"
            as="span"
            st="common:for"
          />{' '}
          <Text
            as="span"
            color="_gray"
            fontSize={{ base: '2xs', md: 'xs' }}
            st="common:travelers"
            sd={{
              count: totalNumberPeople
                ? totalNumberPeople
                : transport.transportation.content.total_passengers,
            }}
          />
        </Box>
      </VStack>
      <Button
        secondary
        id="change-transport"
        onClick={(e) => {
          e.stopPropagation()
          setShowConfirm({ transport: transport })
        }}
      >
        <Text notag st="common:general.select" />
      </Button>
    </TransportBaseCard>
  )
}
