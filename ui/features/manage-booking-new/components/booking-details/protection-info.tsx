import { Stack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'
import { ProtectionType } from '../../types/protection.type'
import ProtectionTag from '../protection-tag'
import isTripDisabled from '../../utils/isTripDisabled'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'

type ProtectionInfoProps = {
  protection?: ProtectionType[]
}
export default function ProtectionInfo({ protection }: ProtectionInfoProps) {
  const { booking } = useManageBookingAtoms()
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Stack direction={['column', 'row']} alignItems="flex-start">
      {!protection && (
        <Text w="full" st="new-manage-booking-page.protection.not.selected" />
      )}
      {protection?.map((p) => {
        return <ProtectionTag key={p.type} product={p.product} />
      })}
      {!protection && !isTripDisabled(booking?.trip.status) && (
        <Button
          id="add-protection"
          asLink
          minW="unset"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <Link href={getMarketplaceUrl('protection')}>
            <Text w="full" st="new-manage-booking-page.get.protected" />
          </Link>
        </Button>
      )}
    </Stack>
  )
}
