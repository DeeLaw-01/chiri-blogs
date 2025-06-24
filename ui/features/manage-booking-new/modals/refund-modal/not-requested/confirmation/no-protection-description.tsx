import { Box } from '@chakra-ui/react'
import ProtectionTag from 'ui/features/manage-booking-new/components/protection-tag'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'

export default function NoProtectionDescription() {
  return (
    <Box>
      <Trans
        st="new-manage-booking-page.modal.refund.no.protection.description.one"
        sd={{
          tos: () => (
            <ProtectionTag product="flex" fontWeight="medium" gap="0" />
          ),
        }}
      />
      <Text
        mt="4"
        st="new-manage-booking-page.modal.refund.no.protection.description.two"
      />
      <Text
        mt="4"
        st="new-manage-booking-page.modal.refund.no.protection.description.three"
      />
    </Box>
  )
}
