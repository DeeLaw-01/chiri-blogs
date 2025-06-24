import { useState } from 'react'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import { Box, Divider, Stack, HStack, Icon } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import theme from 'src/styles/theme'
import { data } from './data'
import useMutation from 'src/api/useMutation'
import submitReferralSourceQuery from 'src/api/queries/post/manage-booking/user-referral-source'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import { ReferralSourceOption } from 'src/api/queries/post/manage-booking/user-referral-source/type'
import { CONFIG_COMPANY } from 'src/config'

export type ReferralSourceModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ReferralSourceModal({
  isOpen,
  onClose,
}: ReferralSourceModalProps) {
  const [selected, setSelected] = useState<ReferralSourceOption>('')
  const { trigger, isMutating } = useMutation((d) =>
    submitReferralSourceQuery(d)
  )
  const { booking } = useManageBookingAtoms()

  const handleSubmit = () => {
    const body = {
      purchase_id: booking?.booking_id ?? '',
      source: selected,
      trip_id: booking?.trip.id ?? '',
    }

    trigger(body)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'md', md: '2xl' }}
      addCloseButton
      title={
        <Heading
          as="h2"
          st="new-manage-booking-page.referral.source.modal.heading.one"
        />
      }
    >
      <Divider mt={2} />

      <Heading
        color={'primary'}
        my={4}
        as="h3"
        st="new-manage-booking-page.referral.source.modal.heading.two"
        sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
      />

      <Stack mt={4} gap={2}>
        {data.map(({ label, icon, value }) => (
          <Box
            key={label}
            onClick={() => setSelected(value)}
            cursor="pointer"
            borderWidth={1}
            borderRadius="md"
            borderColor={selected === value ? 'primary' : '_lightgray'}
            boxShadow={
              selected === value
                ? `0 0 0 1px ${theme.colors.primary}`
                : 'initial'
            }
            px={4}
            py={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="full"
            bg={selected === value ? '_lightestgray' : 'initial'}
            transition="all 0.2s ease"
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            <HStack spacing={3}>
              <Icon color={'_gray'} as={icon} h={'20px'} />

              <Text st={`new-manage-booking-page.${label}`} />
            </HStack>
          </Box>
        ))}
      </Stack>

      <Button
        w="full"
        primary
        id="questionnaire-submit-button"
        mt={6}
        mb={2}
        isDisabled={!selected}
        isLoading={isMutating}
        onClick={handleSubmit}
      >
        <Text st="common.general.submit" />
      </Button>
    </Modal>
  )
}
