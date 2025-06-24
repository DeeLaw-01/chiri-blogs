import { BoxProps, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import useChatBot from 'src/hooks/useChatBot'
import { useRouter } from 'src/i18n/router'
import Text from 'ui/primitives/Text'
import BookingIdInput from '../inputs/booking-id'
import EmailInput from '../inputs/email'
import Button from 'ui/primitives/Button'

type FindBookingFormProps = {} & BoxProps

type ManageBookingSignInForm = {
  email: string
  bookingId: string
}

export default function FindBookingForm({ ...rest }: FindBookingFormProps) {
  const router = useRouter()
  const { showAndOpen } = useChatBot()

  const methods = useForm<ManageBookingSignInForm>({})

  const onSubmit = (data: ManageBookingSignInForm) => {
    const email = data.email?.trim()
    const bid = data.bookingId?.trim()

    router.push(`/manage-booking?email=${email}&bid=${bid}`)
  }

  return (
    <FormProvider {...methods}>
      <VStack
        w="full"
        alignItems="flex-start"
        mb="12"
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}
      >
        <FormControl>
          <FormLabel>
            {' '}
            <Text st="common.booking.id" />
          </FormLabel>
          <BookingIdInput />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>
            {' '}
            <Text st="common.email" />
          </FormLabel>
          <EmailInput />
        </FormControl>
        <Button
          type="submit"
          mt="4"
          id="manage-booking-signin-email"
          w="full"
          primary
          isLoading={methods.formState.isSubmitSuccessful}
        >
          <Text st="common.hamburger.signin" />
        </Button>
        <Button
          id="manage-booking-forgot-details"
          fontWeight="normal"
          asLink
          color="_gray"
          fontSize="xs"
          alignSelf="center"
          onClick={() => showAndOpen && showAndOpen()}
        >
          <Text st="new-manage-booking-page.forgot.details.button.text" />
        </Button>
      </VStack>
    </FormProvider>
  )
}
