import { Box, Stack } from '@chakra-ui/react'
import useChatBot from 'src/hooks/useChatBot'
import Link from 'ui/primitives/Link'
import BaseCard from 'ui/features/manage-booking-new/components/other/base-card'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'

export default function OtherSection() {
  const { showAndOpen } = useChatBot()
  const { setShowFindBooking } = useManageBookingAtoms()

  return (
    <Stack
      direction={['column', 'row']}
      display="flex"
      pb="16"
      alignItems="stretch"
      gap="4"
    >
      <BaseCard
        title="new-manage-booking-page.other.section.find.booking.card.heading"
        description="new-manage-booking-page.other.section.find.booking.card.description"
        onClick={() => setShowFindBooking(true)}
      />
      <Box flex={1}>
        <Link w={'full'} href={'/help'} _hover={{}}>
          <BaseCard
            title="new-manage-booking-page.other.section.help.card.heading"
            description="new-manage-booking-page.other.section.help.card.description"
          />
        </Link>
      </Box>

      <BaseCard
        title="new-manage-booking-page.other.section.support.team.card.heading"
        description="new-manage-booking-page.other.section.support.team.card.description"
        onClick={() => showAndOpen && showAndOpen()}
      />
    </Stack>
  )
}
