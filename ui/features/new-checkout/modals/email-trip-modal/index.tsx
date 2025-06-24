import { VStack } from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'

import useMutation from 'src/api/useMutation'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import { EmailMeSubmittedDataLayer } from 'src/tracking'
import checkoutemailSubmitQuery from 'src/api/queries/post/checkoutemailSubmitQuery'
import MailInput from './email-input'
import { useSelectedLocation } from 'src/contexts/location'
import { useSelectedCurrency } from 'src/contexts/currency'

type EmailForm = { email: string }

export type EmailTripModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function EmailTripModal({
  isOpen,
  onClose,
}: EmailTripModalProps) {
  const { trip } = useCheckoutAtoms()
  const [selectedCity] = useSelectedLocation()
  const { selectedCurrency } = useSelectedCurrency()
  const methods = useForm<EmailForm>({})

  const { trigger, isMutating } = useMutation((d) =>
    checkoutemailSubmitQuery(d)
  )

  const onSubmit: SubmitHandler<EmailForm> = (data) => {
    const payload = {
      ...data,
      tripId: trip?.id,
      name: '',
      locode: selectedCity?.locode,
      currency: selectedCurrency?.code,
    }
    trigger(payload, { onSuccess: handleSuccess })
  }

  const handleSuccess = () => {
    EmailMeSubmittedDataLayer()
    onClose()
  }

  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <VStack as="form" w="full" onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading as="h2" mt="2" st="checkout-page.modal.email.trip.header" />
          <Text
            color="_gray"
            fontSize="sm"
            textAlign="center"
            my="3"
            st="checkout-page.modal.email.trip.description"
          />
          <MailInput />
          <Button
            w="full"
            primary
            type="submit"
            isLoading={isMutating}
            id="send-trip-checkout"
          >
            <Text notag st={'common.general.continue'} />
          </Button>
        </VStack>
      </FormProvider>
    </Modal>
  )
}
