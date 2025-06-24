import { Box, HStack, Icon, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import StatusTag from 'ui/features/manage-booking-new/components/status-tag'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { withLeadingZero } from 'src/utils/numberUtils'
import { CardProps } from 'ui/primitives/Card/card.type'
import { Mode } from 'src/shared-types/transport.type'

type BookingCardProps = {
  booking: any
  handleSelect: () => void
  isLoading: boolean
  getType: (item: Mode | 'hotel') => 'svg'
} & CardProps

export default function BookingCardDesktop({
  booking,
  handleSelect,
  isLoading,
  getType,
  ...rest
}: BookingCardProps) {
  const format = useFormattedDate()
  const day = format(booking.start_date, false, true, false)
  const month = format(booking.start_date, false, false, true)

  return (
    <Card
      overflow="hidden"
      mb={4}
      role="group"
      onClick={handleSelect}
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      {...rest}
    >
      <HStack alignItems="stretch" gap="0" display="flex">
        <Box position="relative" overflow="hidden" h="8rem" w="14rem">
          <Image
            fill
            alt={booking.title}
            src={`${booking.trip_photo}375160.png`}
            style={{ objectFit: 'cover' }}
          />
          <Box
            position="absolute"
            left="0"
            w="14rem"
            h="8rem"
            bg="primary"
            opacity="0.45"
          />
          <Box position="absolute" left="0" top="0" w="full" h="100%">
            <VStack
              w="full"
              gap="0"
              justify="space-around"
              color="_white"
              h="100%"
            >
              <VStack gap="0">
                <Text
                  fontSize="6xl"
                  lineHeight={1}
                  textShadow={'black 0px 2px 10px'}
                >
                  {day && withLeadingZero(parseInt(day))}
                </Text>
                <Text textShadow={'black 0px 2px 10px'}>{month}</Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
        <HStack alignItems="flex-start" w="full" p={4} mb="auto">
          <VStack w="full" alignItems="flex-start" gap="0">
            <Text fontSize="lg" noOfLines={1}>
              {booking.title}
            </Text>
            <VStack gap="0" alignItems="flex-start" fontSize="xs" mt="2">
              <HStack justify="space-between" w="full">
                <HStack alignItems="flex-start" gap="0">
                  <Text
                    color="gray"
                    w="90px"
                    st="common.general.status"
                    textTransform={'uppercase'}
                  />

                  <Text w="90px">
                    <StatusTag fontSize="2xs" status={booking.status} />
                  </Text>
                </HStack>
                <HStack alignItems="flex-start" gap="0" w="40%">
                  <Text
                    color="gray"
                    minW="70px"
                    pl="20px"
                    st="common.general.type"
                    textTransform={'uppercase'}
                  />

                  <HStack color="gray" gap="0.1rem">
                    {booking.includes.map((item) => (
                      <Icon
                        key={item}
                        as={getType(item)}
                        width="3.5"
                        height="4"
                        stroke="_gray"
                        mt={'1px'}
                      />
                    ))}
                  </HStack>
                </HStack>
              </HStack>
              <HStack mt="2" justify="space-between" w="full">
                <HStack alignItems="flex-start" gap="0">
                  <Text
                    color="gray"
                    w="90px"
                    st="new-manage-booking-page.booking.details.subheading.one"
                    textTransform={'uppercase'}
                    noOfLines={1}
                  />

                  <Text w="90px">{booking.purchase_id}</Text>
                </HStack>

                <HStack alignItems="flex-start" gap="0" w="40%">
                  <Text
                    color="gray"
                    minW="70px"
                    pl="20px"
                    st="common.general.date"
                    textTransform={'uppercase'}
                  />

                  <Text minW="fit-content">
                    {format(booking.start_date, false)} -{' '}
                    {format(booking.end_date, false)}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          <Box bg="_lightgray" w="1px" h="6rem" mx={2} />
          <Box alignSelf="center">
            <Button id="open" primary h="2.75rem" isLoading={isLoading}>
              <Text st="new-manage-booking-page.title" />
            </Button>
          </Box>
        </HStack>
      </HStack>
    </Card>
  )
}
