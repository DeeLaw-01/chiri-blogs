import { Box, Divider, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import { Transport } from 'src/shared-types/transport.type'
import TransportInfoSmall from './transport-info-small'
import LuggageInfo from './transport-luggage-info'

type TransportInfoProps = {
  transport: Transport
  animate?: boolean
}

export default function TransportInfo({
  transport,
  animate,
}: TransportInfoProps) {
  const carriers = transport.carriers ?? []

  return (
    <Box w="full" p={2}>
      <HStack justifyContent="space-between" pb="2">
        <HStack px={{ base: 0, md: 2 }}>
          <HStack
            borderRadius={'lg'}
            p="2"
            border="1px solid"
            borderColor={'_lightgray'}
            maxW={8}
            maxH={8}
          >
            {carriers.map((carrier, idx) => {
              if (idx > 1) return
              return (
                <Box
                  key={idx}
                  minW="4"
                  minH="4"
                  borderRadius={'full'}
                  overflow={'hidden'}
                  pos="relative"
                  ml={idx > 0 ? `-17px` : carriers.length > 1 ? '-3px' : 0}
                  zIndex={3 - idx}
                >
                  <Image
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    src={carrier.carrier_logo}
                    alt={carrier.carrier_name}
                    sizes="100%"
                  />
                </Box>
              )
            })}
          </HStack>
          <Text fontSize="xs" color="_darkgray" noOfLines={1} maxW="250px">
            {carriers?.map((carrier) => carrier.carrier_name).join(', ')}
          </Text>
        </HStack>
        <LuggageInfo transport={transport} color="_gray" />
      </HStack>
      <Divider />
      <TransportInfoSmall transport={transport} animate={animate} />
    </Box>
  )
}
