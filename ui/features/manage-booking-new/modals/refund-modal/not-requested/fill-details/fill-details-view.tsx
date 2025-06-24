import { HStack, VStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import useCurrency from 'src/hooks/useCurrency'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import DataTable from 'ui/features/manage-booking-new/components/data-table'
import BICInput from './inputs/bic'
import AccountNameInput from './inputs/account-name'
import IBANInput from './inputs/iban'
import useMutation from 'src/api/useMutation'
import requestRefundQuery from 'src/api/queries/post/manage-booking/requestRefundQuery'

export type RefundFormType = {
  account_name: string
  iban: string
  bic: string
}

export default function FillRefundDetails() {
  const { trigger, isMutating } = useMutation((d) => requestRefundQuery(d))
  const { getConvertedCurrency } = useCurrency()
  const { booking, setBooking } = useManageBookingAtoms()
  const methods = useForm<RefundFormType>({})

  const flex = booking?.protection?.find((p) => p.product === 'flex')

  const onSubmit = (payload: RefundFormType) => {
    let body = {
      purchase_id: booking?.booking_id,
      email: booking?.booking_email,
      ...payload,
    }
    trigger(body, { onSuccess: onSuccess })
  }

  const onSuccess = () => {
    if (!booking) return
    setBooking({
      ...booking,
      refund: {
        status: 'requested',
      },
    })
  }

  const rows = [
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.refund.modal.account.input.label"
        />
      ),
      content: <AccountNameInput />,
    },
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.refund.modal.bic.input.label"
        />
      ),
      content: <BICInput />,
    },
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.refund.modal.account.number.input.label"
        />
      ),
      content: <IBANInput />,
    },
  ]

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack gap="0" mb="4">
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            You are eligible for a refund of:{' '}
          </Text>
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium">
            {getConvertedCurrency(flex?.max_compensation, {
              nearestOne: false,
            })}
          </Text>
        </VStack>
        {/* TODO: Fix test 123 above */}
        <DataTable data={rows} borderStyle={{ base: 'none', md: 'solid' }} />
        <HStack w="full" justify="flex-end" mt="2">
          <Button
            id="refund-proceed"
            secondary
            type="submit"
            isLoading={isMutating}
          >
            <Text st="common.general.continue" />
          </Button>
        </HStack>
      </form>
    </FormProvider>
  )
}
