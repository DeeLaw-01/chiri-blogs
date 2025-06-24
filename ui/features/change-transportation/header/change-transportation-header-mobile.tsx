import { Box, HStack, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import { Transport } from 'src/shared-types/transport.type'
import ChangeTransportationDates from './change-transportation-dates'
import Image from 'ui/primitives/Image'

type ChangeTransportationHeaderMobileProps = {
  transport: Transport
  onClose: () => void
}

export default function ChangeTransportationHeaderMobile({
  transport,
  onClose,
}: ChangeTransportationHeaderMobileProps) {
  return (
    <Box w={'calc(100% + 2.5rem)'} mt="-5" ml="-5">
      <Box position="relative" overflow="hidden" h="14rem" w="full" mb="2">
        <Box position="absolute" left="0" top="0" w="full" h="14rem">
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
          h="14rem"
          bgGradient={theme.gradients.primary}
          opacity="0.85"
        />

        <HStack
          w="full"
          position="fixed"
          top="0"
          zIndex="1"
          justify="space-between"
          px={5}
          pt="5"
        >
          <CircleIconWrapper
            bg="_white"
            onClick={onClose}
            maxW="fit-content"
            alignSelf="flex-start"
          >
            <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
          </CircleIconWrapper>
        </HStack>
        <VStack h="full" color="_white" zIndex="1" pt="2rem" px={5} gap="0">
          <HStack
            position="relative"
            h="full"
            w="full"
            textShadow={'black 0px 2px 10px'}
          >
            <VStack alignItems="flex-end" w="45%" gap="0" textAlign="right">
              <Heading as="h1" fontSize="min(6vw, 1.75rem)">
                {transport.origin}
              </Heading>
            </VStack>
            <VStack w="10%">
              <Box>
                <ArrowRightIcon stroke="white" />
              </Box>
            </VStack>
            <VStack alignItems="flex-start" w="45%" gap="0" textAlign="left">
              <Heading
                as="h1"
                fontSize="min(6vw, 1.75rem)"
                wordBreak={'break-word'}
              >
                {transport.destination}
              </Heading>
            </VStack>
          </HStack>
          <HStack minH="4.5rem" w="full" justify="center">
            <ChangeTransportationDates
              transport={transport}
              transform={'scale(0.9)'}
            />
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}
