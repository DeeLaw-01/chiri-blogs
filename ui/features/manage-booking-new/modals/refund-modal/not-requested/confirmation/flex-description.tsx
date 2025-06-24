import { Box } from '@chakra-ui/react'
import ProtectionTag from 'ui/features/manage-booking-new/components/protection-tag'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'

export default function FlexDescription() {
  return (
    <Box>
      <Text st="new-manage-booking-page.modal.refund.flex.description.one" />

      <Text mt="4">
        <Trans
          st="new-manage-booking-page.modal.refund.flex.description.two"
          sd={{
            tos: () => (
              <ProtectionTag product="flex" fontWeight="medium" gap="0" />
            ),
          }}
        />
      </Text>
      <Text
        mt="4"
        st="new-manage-booking-page.modal.refund.flex.description.three"
      />
    </Box>
  )
}
