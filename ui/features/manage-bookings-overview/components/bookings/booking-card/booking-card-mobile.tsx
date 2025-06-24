import { Box, HStack, Icon, Spinner, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import StatusTag from 'ui/features/manage-booking-new/components/status-tag'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { CardProps } from 'ui/primitives/Card/card.type'
import { Mode } from 'src/shared-types/transport.type'

type BookingCardProps = {
  booking: any
  handleSelect: () => void
  isLoading: boolean
  getType: (item: Mode | 'hotel') => 'svg'
} & CardProps

export default function BookingCardMobile({
  booking,
  handleSelect,
  isLoading,
  getType,
  ...rest
}: BookingCardProps) {
  const format = useFormattedDate()

  return (
    <Card
      position="relative"
      overflow="hidden"
      mb={3}
      role="group"
      onClick={handleSelect}
      p={2}
      py={3}
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      {...rest}
    >
      {isLoading && (
        <Box
          position="absolute"
          top="0"
          left="0"
          bg="whiteAlpha.800"
          w="full"
          h="full"
          zIndex="1"
        >
          <VStack h="full" justify="space-around">
            <Spinner color="primary" />
          </VStack>
        </Box>
      )}
      <HStack alignItems="stretch" gap="0" display="flex">
        <VStack justify="space-around">
          <Box
            position="relative"
            overflow="hidden"
            h="3rem"
            minW="3rem"
            borderRadius="full"
          >
            <Image
              fill
              alt={booking.title}
              src={`${booking.trip_photo}375160.png`}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </VStack>
        <VStack alignItems="flex-start" w="full" mb="auto" ml="2">
          <VStack w="full" alignItems="flex-start" gap="0">
            <HStack justify="space-between" w="full">
              <Text noOfLines={1}>{booking.title}</Text>{' '}
              <StatusTag fontSize="2xs" status={booking.status} />
            </HStack>
            <HStack fontSize="xs" mt="1" color="_gray">
              <Text>{booking.purchase_id}</Text>
              <Text color="primary">•</Text>
              <Text>
                {format(booking.start_date, false)} -{' '}
                {format(booking.end_date, false)}
              </Text>
              <Text color="primary">•</Text>
              <HStack color="gray" gap="0.25rem">
                {booking.includes.map((item) => (
                  <Icon
                    key={item}
                    as={getType(item)}
                    width="3.5"
                    height="4"
                    stroke="_gray"
                  />
                ))}
              </HStack>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Card>
  )
}
