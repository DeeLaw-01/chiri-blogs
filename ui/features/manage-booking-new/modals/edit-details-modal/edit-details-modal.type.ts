import { BookingType } from '../../types/booking.type'

export type EditDetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  booking: BookingType
}

export type EditContactDetailsFormType = {
  name: string
  email: string
  tel: string
}

export type EditContactDetailsFormBody = {
  new_mail: string
} & EditContactDetailsFormType
