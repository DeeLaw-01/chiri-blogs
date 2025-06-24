import Tag from 'ui/primitives/Tag'
import { TagProps } from '@chakra-ui/react'
import { TripStatusType } from '../types/trip.type'
import Text from 'ui/primitives/Text'

type StatusTagProps = {
  status: TripStatusType
} & TagProps

export default function StatusTag({ status, ...rest }: StatusTagProps) {
  switch (status?.toLowerCase()) {
    case TripStatusType.Refunded:
      return (
        <Tag blue {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.refunded"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.RefundRequested:
      return (
        <Tag yellow {...rest}>
          <Text
            st={'new-manage-booking-page.booking.status.refund.request'}
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.RefundDenied:
      return (
        <Tag red {...rest}>
          <Text
            st={'new-manage-booking-page.booking.status.refund.denied'}
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.Pending:
      return (
        <Tag yellow {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.pending"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.NotBookedYet:
      return (
        <Tag red {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.failed"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.Canceled:
      return (
        <Tag red {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.cancelled"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.Confirmed:
      return (
        <Tag green {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.confirmed"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.Traveled:
      return (
        <Tag {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.traveled"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case TripStatusType.Travelling:
      return (
        <Tag green {...rest}>
          <Text
            st="new-manage-booking-page.booking.status.traveling"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    default:
      return <></>
  }
}
