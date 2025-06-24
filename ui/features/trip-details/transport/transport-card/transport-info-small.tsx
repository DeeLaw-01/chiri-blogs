import { Box, VStack, HStack, StackProps } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import Text from 'ui/primitives/Text'

import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { MotionBox } from 'ui/primitives/Motion'
import formatHours from 'src/utils/getFormattedHours'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Transport } from 'src/shared-types/transport.type'

import LayoverTag from '../../layover-tag'
import TransportIcon from '../transportIcon'

type TransportInfoSmallProps = {
  transport: Transport
  animate?: boolean
} & StackProps

export default function TransportInfoSmall({
  transport,
  animate,
  ...rest
}: TransportInfoSmallProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const formatDate = useFormattedDate()

  return (
    <HStack
      p={4}
      px={{ base: 0, md: 4 }}
      justifyContent={'space-between'}
      alignItems="flex-start"
      {...rest}
    >
      <VStack alignItems="flex-start" w="30%" gap="0">
        <Text color="_gray" fontSize="xs">
          {formatDate(transport.departure_time)}
        </Text>
        <Text
          color="_darkgray"
          fontSize={{ base: 'xl', md: '2xl' }}
          mt="0 !important"
        >
          {format(parseISO(transport.departure_time), 'HH:mm')}
        </Text>
        <Text color="_gray" fontSize="xs" mt="0 !important">
          <Text as="span" fontWeight="medium">
            {transport.origin}
          </Text>{' '}
          ({transport.origin_display})
        </Text>
      </VStack>
      <VStack w="40%" gap="0">
        <Text color="_gray" fontSize="xs" mt="2" mb="-1">
          {formatHours(transport.duration)}
        </Text>
        <Box
          fontSize="sm"
          color="_gray"
          w="full"
          mt="5"
          borderBottom="3px dotted lightgray"
          alignItems="center"
        >
          <HStack
            position="relative"
            mb="-4"
            w="full"
            justifyContent="flex-start"
          >
            <MotionBox
              ref={ref}
              mt="2"
              position="absolute"
              left={!animate && '50%'}
              transform={'translateX(-50%)'}
              animate={isInView && animate ? { left: '50%' } : ''}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: 0,
              }}
            >
              <TransportIcon modes={transport.modes} />
            </MotionBox>
          </HStack>
        </Box>
        <VStack mt="4 !important">
          <LayoverTag completeItinerary={transport.complete_itinerary} />
        </VStack>
      </VStack>
      <VStack alignItems="flex-end" w="30%" textAlign="right" gap="0">
        <Text color="_gray" fontSize="xs">
          {formatDate(transport.arrival_time)}
        </Text>
        <Text
          color="_darkgray"
          fontSize={{ base: 'xl', md: '2xl' }}
          mt="0 !important"
        >
          {format(parseISO(transport.arrival_time), 'HH:mm')}
        </Text>
        <Text color="_gray" fontSize="xs" mt="0 !important">
          <Text as="span" fontWeight="medium">
            {transport.destination}
          </Text>{' '}
          ({transport.destination_display})
        </Text>
      </VStack>
    </HStack>
  )
}
