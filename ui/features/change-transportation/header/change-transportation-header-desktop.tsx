import { Box, HStack, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import theme from 'src/styles/theme'
import { Transport } from 'src/shared-types/transport.type'
import ChangeTransportationDates from './change-transportation-dates'
import Image from 'ui/primitives/Image'

type ChangeTransportationHeaderDesktopProps = {
  transport: Transport
}

export default function ChangeTransportationHeaderDesktop({
  transport,
}: ChangeTransportationHeaderDesktopProps) {
  return (
    <Box w="full">
      <Box
        position="relative"
        overflow="hidden"
        h="13rem"
        w="full"
        borderRadius="md"
        mb="2"
      >
        <Box position="absolute" left="0" top="0" w="full" h="13rem">
          <Image
            fill
            alt="World Map"
            src="/static/home-page/world-map.png"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
        <Box
          position="absolute"
          left="0"
          w="full"
          h="13rem"
          bgGradient={theme.gradients.primary}
          opacity="0.85"
        />
        <VStack h="full" color="_white" zIndex="1" p={2} w="full">
          <HStack
            position="relative"
            mt="2"
            h="full"
            w="100%"
            textShadow={'black 0px 2px 10px'}
          >
            <VStack alignItems="flex-end" w="45%" gap="0" textAlign="right">
              <Heading as="h1" fontSize={{ base: 'xl', md: '4xl' }}>
                {transport.origin}
              </Heading>
            </VStack>
            <VStack w="10%">
              <Box>
                <ArrowRightIcon stroke="white" />
              </Box>
            </VStack>
            <VStack alignItems="flex-start" w="45%" gap="0" textAlign="left">
              <Heading as="h1" fontSize={{ base: 'xl', md: '4xl' }}>
                {transport.destination}
              </Heading>
            </VStack>
          </HStack>
          <ChangeTransportationDates transport={transport} />
        </VStack>
      </Box>
    </Box>
  )
}
