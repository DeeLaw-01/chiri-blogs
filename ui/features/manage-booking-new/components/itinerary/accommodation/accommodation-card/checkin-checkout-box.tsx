import { HStack, Box, StackProps } from '@chakra-ui/react'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Text from 'ui/primitives/Text'

type CheckInCheckOutBox = {
  accommodation: HotelDetails
} & StackProps

export default function CheckInCheckOutBox({ accommodation, ...rest }) {
  const formatDate = useFormattedDate()
  return (
    <HStack
      fontSize="sm"
      w="full"
      bg="_lightestgray"
      borderRadius="lg"
      py={2}
      my="3"
      {...rest}
    >
      <Box w="50%" borderRight="1px solid" borderColor="_lightgray" px={5}>
        <Text fontWeight="medium" st="common:price.breakdown.check.in" />
        <Text fontSize="xs">
          {formatDate(accommodation.check_in_date, false)}
          {accommodation.checkin_checkout_times.checkin_from && (
            <>
              {', '}
              {accommodation.checkin_checkout_times.checkin_from}
            </>
          )}
        </Text>
      </Box>
      <Box px={2}>
        <Text fontWeight="medium" st="common:price.breakdown.check.out" />
        <Text fontSize="xs">
          {formatDate(accommodation.check_out_date, false)}
          {accommodation.checkin_checkout_times.checkout_to && (
            <>
              {', '}
              {accommodation.checkin_checkout_times.checkout_to}
            </>
          )}
        </Text>
      </Box>
    </HStack>
  )
}
