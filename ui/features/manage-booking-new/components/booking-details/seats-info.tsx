import { Stack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'
import isTripDisabled from '../../utils/isTripDisabled'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'

type SeatsInfoProps = {
  seats: boolean
}
export default function SeatsInfo({ seats }: SeatsInfoProps) {
  const { booking } = useManageBookingAtoms()
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Stack direction={['column', 'row']} alignItems="flex-start">
      {!seats && (
        <Text w="full" st="new-manage-booking-page.seats.not.selected" />
      )}
      {seats && <Text w="full" st="new-manage-booking-page.seats.selected" />}
      {!seats && !isTripDisabled(booking?.trip.status) && (
        <Button
          id="add-protection"
          asLink
          minW="unset"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <Link href={getMarketplaceUrl('seats')}>
            <Text w="full" st="new-manage-booking-page.add.seats" />
          </Link>
        </Button>
      )}
    </Stack>
  )
}
