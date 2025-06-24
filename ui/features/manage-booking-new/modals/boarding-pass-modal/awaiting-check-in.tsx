import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { HStack, VStack } from '@chakra-ui/react'
import {
  parseISO,
  differenceInHours,
  subDays,
  differenceInMinutes,
} from 'date-fns'
import { withLeadingZero } from 'src/utils/numberUtils'
import {
  BoardingPassStatusType,
  TransportBookingData,
} from '../../types/itinerary.type'
import Trans from 'ui/shared/trans'
import BoardingStatusTag from '../../components/itinerary/transport/boarding-status-tag'

type AwaitingCheckInProps = {
  transport: TransportBookingData
}
export default function AwaitingCheckIn({ transport }: AwaitingCheckInProps) {
  const now = new Date()

  const isTimeBeforeNow = () => {
    return subDays(parseISO(transport.departure_time), 1) < now
  }

  const getTimeUntilCheckin = () => {
    if (isTimeBeforeNow()) return { days: 0, hours: 0 }

    const targetDate = subDays(parseISO(transport.departure_time), 1)
    const totalHoursDifference = differenceInHours(targetDate, now)
    const totalMinutesDifference = differenceInMinutes(targetDate, now) % 60

    const hours = totalHoursDifference % 24

    return {
      days: Math.floor(totalHoursDifference / 24),
      hours: hours === 0 && totalMinutesDifference > 0 ? 1 : hours,
    }
  }

  return (
    <VStack fontSize="sm" alignItems="flex-start" gap="2" mt="8">
      <VStack w="full">
        <Heading
          as="h3"
          fontWeight="normal"
          st="new-manage-booking-page.modal.await.check.in.heading"
        />
      </VStack>
      <HStack justify="center" w="full" gap="3">
        <VStack
          gap="0"
          p={3}
          px={4}
          bg="_lightestgray"
          borderRadius="lg"
          boxShadow="md"
        >
          <Text fontSize="4xl" fontWeight="medium" lineHeight={1}>
            {withLeadingZero(getTimeUntilCheckin().days)}
          </Text>
          {getTimeUntilCheckin().days > 1 ? (
            <Text st="common.general.word.days" />
          ) : (
            <Text st="common.general.day" />
          )}
        </VStack>
        <VStack
          gap="0"
          p={3}
          px={4}
          bg="_lightestgray"
          borderRadius="lg"
          boxShadow="md"
        >
          <Text fontSize="4xl" fontWeight="medium" lineHeight={1}>
            {withLeadingZero(getTimeUntilCheckin().hours)}
          </Text>
          {getTimeUntilCheckin().hours > 1 ? (
            <Text st="common.timer.hours" />
          ) : (
            <Text st="common.timer.hour" />
          )}
        </VStack>
      </HStack>

      <Text st="new-manage-booking-page.modal.await.check.in.description.one" />

      <Trans
        st="new-manage-booking-page.modal.await.check.in.description.two.new"
        sd={{
          awaitChecked: () => (
            <BoardingStatusTag status={BoardingPassStatusType.WAITING} />
          ),
          checked: () => (
            <BoardingStatusTag status={BoardingPassStatusType.AVAILABLE} />
          ),
        }}
      />
    </VStack>
  )
}
