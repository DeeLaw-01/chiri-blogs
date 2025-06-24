import Tag from 'ui/primitives/Tag'
import { TagProps } from '@chakra-ui/react'
import { BoardingPassStatusType } from 'ui/features/manage-booking-new/types/itinerary.type'
import Text from 'ui/primitives/Text'

type StatusTagProps = {
  status: BoardingPassStatusType
} & TagProps

export default function BoardingStatusTag({ status, ...rest }: StatusTagProps) {
  switch (status) {
    case BoardingPassStatusType.ACTION:
      return (
        <Tag yellow>
          <Text
            st="new-manage-booking-page.boarding.status.action.required"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case BoardingPassStatusType.WAITING:
      return (
        <Tag blue {...rest}>
          <Text
            st="new-manage-booking-page.boarding.status.awaiting.check.in"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case BoardingPassStatusType.FAILED:
      return (
        <Tag red {...rest}>
          <Text
            st="new-manage-booking-page.boarding.status.failed"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    case BoardingPassStatusType.AVAILABLE:
      return (
        <Tag green {...rest}>
          <Text
            st="new-manage-booking-page.boarding.status.checked.in"
            textTransform={'uppercase'}
          />
        </Tag>
      )
    default:
      return <></>
  }
}
