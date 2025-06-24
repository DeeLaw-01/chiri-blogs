import { HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'
import Passengers from './passengers'
import { FormProvider, useForm } from 'react-hook-form'
import { PassengerType } from '../../types/passenger.type'
import { BookingType } from '../../types/booking.type'
import useMutation from 'src/api/useMutation'
import missingFieldsQuery from 'src/api/queries/post/manage-booking/missingFieldsQuery'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import Text from 'ui/primitives/Text'

export type MissingFieldsFormType = {
  passengers: {
    passengerId: string
    card_number: string
    expiration_date: {
      day: string
      month: string
      year: string
    }
  }[]
}

export type MissingFieldsModalProps = {
  isOpen: boolean
  onClose: () => void
  passengers: PassengerType[]
  booking: BookingType
}

export default function MissingFieldsModal({
  isOpen,
  onClose,
  passengers,
  booking,
}: MissingFieldsModalProps) {
  const { trigger, isMutating } = useMutation((d) => missingFieldsQuery(d))
  const { setBooking, setShowQuestionnaire } = useManageBookingAtoms()
  const methods = useForm<MissingFieldsFormType>({})

  const handleOnSubmit = async (form: any) => {
    const body = {
      email: booking.booking_email,
      purchase_id: booking.booking_id,
    }

    form.passengers.map((passenger: any, idx) => {
      body[passengers[idx].id] = {
        ...passenger,
        ...(passenger.expiration_date && {
          expiration_date: passenger.expiration_date,
        }),
      }
    })

    trigger(body, {
      onSuccess: handleSuccess,
    })
  }

  const handleSuccess = () => {
    setBooking({
      ...booking,
      passengers: booking.passengers.map((passenger) => ({
        ...passenger,
        missing_fields: [],
      })),
    })

    onClose()
    setShowQuestionnaire(true)
  }

  return (
    <Modal
      size={'2xl'}
      onClose={onClose}
      isOpen={isOpen}
      title={
        <Heading
          fontWeight="medium"
          st={'manage-booking-page.passengers.header'}
        />
      }
    >
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleOnSubmit)}
          autoComplete="false"
        >
          <Passengers passengers={passengers} />
          <HStack w="full" justify="flex-end">
            <Button
              primary
              id="add-missing-details"
              type="submit"
              isLoading={isMutating}
            >
              <Text st="common.general.submit" />
            </Button>
          </HStack>
        </form>
      </FormProvider>
    </Modal>
  )
}
