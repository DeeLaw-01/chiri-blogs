import { Box, Stack } from '@chakra-ui/react'
import Link from 'ui/primitives/Link'
import BaseCard from './base-card'
import { BookingType } from '../../types/booking.type'
import RefundCard from './refund/refund-card'

type OtherSectionProps = {
  booking: BookingType
}
export default function OtherSection({ booking }: OtherSectionProps) {
  return (
    <Stack
      direction={['column', 'row']}
      display="flex"
      pb="16"
      alignItems="stretch"
      gap="4"
    >
      <RefundCard />

      {booking.itinerary_url && (
        <Box flex={1}>
          <Link h={'100%'} w={'full'} href={booking.itinerary_url} _hover={{}}>
            <BaseCard
              h={'100%'}
              title="new-manage-booking-page.other.section.itinerary.card.heading"
              description="new-manage-booking-page.other.section.itinerary.card.description"
            />
          </Link>
        </Box>
      )}
      <Box flex={1}>
        <Link w={'full'} href={'/help'} _hover={{}}>
          <BaseCard
            title="new-manage-booking-page.other.section.help.card.heading"
            description="new-manage-booking-page.other.section.help.card.description"
          />
        </Link>
      </Box>
    </Stack>
  )
}
