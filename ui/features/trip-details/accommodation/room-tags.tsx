import { Wrap } from '@chakra-ui/react'
import { RoomInfo } from 'src/shared-types/hotel-details.type'
import Tag from 'ui/primitives/Tag'
import Text from 'ui/primitives/Text'

type RoomTagsProps = {
  roomData: RoomInfo
}

export default function RoomTags({ roomData }: RoomTagsProps) {
  // Making sure to only return the most prominent one (E.g dont show breakfast if all inclusive...)
  const getTag = () => {
    if (roomData.all_inclusive)
      return (
        <Tag purple>
          <Text notag st="hotel-info:tag.allinclusive" />
        </Tag>
      )
    else if (roomData.full_board)
      return (
        <Tag green>
          <Text notag st="hotel-info:tag.fullboard" />
        </Tag>
      )
    else if (roomData.half_board)
      return (
        <Tag green>
          <Text notag st="hotel-info:tag.halfboard" />
        </Tag>
      )
    else if (roomData.breakfast_included)
      return (
        <Tag green>
          <Text notag st="hotel-info:tag.breakfast" />
        </Tag>
      )
  }
  return <Wrap spacing={1}>{getTag()}</Wrap>
}
