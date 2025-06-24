import Modal from 'ui/primitives/Modal'
import DataTable from '../../components/data-table'
import Heading from 'ui/primitives/Heading'
import { HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import 'react-phone-input-2/lib/style.css'
import Text from 'ui/primitives/Text'
import { FormProvider, useForm } from 'react-hook-form'
import EmailInput from './inputs/email'
import TelInput from './inputs/tel'
import useMutation from 'src/api/useMutation'
import editContactDetailsQuery from 'src/api/queries/post/manage-booking/editContactDetailsQuery'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import { useRouter } from 'src/i18n/router'
import {
  EditContactDetailsFormBody,
  EditContactDetailsFormType,
  EditDetailsModalProps,
} from './edit-details-modal.type'

export default function EditDetailsModal({
  isOpen,
  onClose,
  booking,
}: EditDetailsModalProps) {
  const router = useRouter()
  const { trigger, isMutating } = useMutation((d) => editContactDetailsQuery(d))
  const { setBooking } = useManageBookingAtoms()
  const methods = useForm<EditContactDetailsFormType>({})

  const onSubmit = async (data: EditContactDetailsFormType) => {
    const body = {
      purchase_id: booking.booking_id,
      email: booking.booking_email,
      name: data.name,
      new_mail: data.email,
      tel: data.tel,
    }
    trigger(body, { onSuccess: () => handleSuccess(body) })
  }

  const handleSuccess = (body: EditContactDetailsFormBody) => {
    setBooking({
      ...booking,
      contact_details: {
        email: body.new_mail,
        name: booking.contact_details.name,
        tel: body.tel,
      },
    })
    handleRoute(body.new_mail)
    onClose()
  }

  const handleRoute = (email: string) => {
    if (booking.booking_email !== email)
      router.push(`/manage-booking?email=${email}&bid=${booking.booking_id}`)
  }

  const rows = [
    {
      label: <Text minW="200px" st="common.contact.details.email.label" />,
      content: <EmailInput details={booking.contact_details} />,
    },
    {
      label: <Text minW="200px" st="common.contact.details.phone.label" />,
      content: <TelInput details={booking.contact_details} />,
    },
  ]

  return (
    <Modal
      size={'xl'}
      onClose={onClose}
      isOpen={isOpen}
      title={
        <Heading
          as="h2"
          st="new-manage-booking-page.modal.edit.details.heading"
        />
      }
      modalBodyStyle={{ overflow: 'visible' }}
    >
      <Text
        mb="4"
        color="_gray"
        fontSize="sm"
        mt="-2"
        st="new-manage-booking-page.modal.edit.details.description"
      />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DataTable
            data={rows}
            py={{ base: 2, md: 4 }}
            borderStyle={{ base: 'none', md: 'solid' }}
          />
          <HStack w="full" justify="flex-end" mt="2">
            <Button
              primary
              id="edit-contact-details"
              type="submit"
              isLoading={isMutating}
            >
              <Text st="common.general.save" />
            </Button>
          </HStack>
        </form>
      </FormProvider>
    </Modal>
  )
}
