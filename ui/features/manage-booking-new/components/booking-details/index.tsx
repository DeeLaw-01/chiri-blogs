import StatusTag from '../status-tag'
import ProtectionInfo from './protection-info'
import ContactDetails from './contact-details'
import DataTable from '../data-table'
import Text from 'ui/primitives/Text'
import { BookingType } from '../../types/booking.type'
import SeatsInfo from './seats-info'

type BookingDetailsSectionProps = {
  booking: BookingType
}

export default function BookingDetailsSection({
  booking,
}: BookingDetailsSectionProps) {
  const data = [
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.booking.details.subheading.one"
        />
      ),
      content: booking.booking_id,
    },
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.booking.details.subheading.two"
        />
      ),
      content: <StatusTag fontSize="xs" status={booking.trip.status} />,
    },
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.booking.details.subheading.three"
        />
      ),
      content: <ProtectionInfo protection={booking.protection} />,
    },
    {
      label: <Text minW="200px" st="common.general.seats" />,
      content: <SeatsInfo seats={booking.already_purchased_seats} />,
    },
    {
      label: (
        <Text
          minW="200px"
          st="new-manage-booking-page.booking.details.subheading.four"
        />
      ),
      content: <ContactDetails booking={booking} />,
    },
  ]

  return <DataTable w="full" data={data} py={4} />
}
