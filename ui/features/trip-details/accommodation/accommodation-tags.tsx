import { Wrap } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import AnimatedTag from 'ui/primitives/AnimatedTag'
import Tag from 'ui/primitives/Tag'
import Text from 'ui/primitives/Text'

type AccommodationTagsProps = {
  hotelData: HotelDetails
}

export default function AccommodationTags({
  hotelData,
}: AccommodationTagsProps) {
  if (!hotelData) return <></>

  const getMealplanTag = () => {
    // Making sure to only return the most prominent one (E.g dont show breakfast if all inclusive...)
    if (hotelData.room_data?.rooms[0]?.all_inclusive)
      return (
        <Tag purple>
          <Text notag st="hotel-info:tag.allinclusive" />
        </Tag>
      )
    else if (hotelData.room_data?.rooms[0]?.full_board)
      return (
        <Tag green>
          <Text st="hotel-info:tag.fullboard" />
        </Tag>
      )
    else if (hotelData.room_data?.rooms[0]?.half_board)
      return (
        <Tag green>
          <Text notag st="hotel-info:tag.halfboard" />
        </Tag>
      )
    else if (hotelData.room_data?.rooms[0]?.breakfast_included)
      return (
        <Tag green>
          <Text notag st="hotel-info:tag.breakfast" />
        </Tag>
      )
  }
  return (
    <Wrap spacing={1}>
      {hotelData.discount > 0.05 && (
        <AnimatedTag yellow>
          <Text
            notag
            st="common.discount.percentage"
            sd={{ discount: Math.round(hotelData.discount * 100) }}
          />
        </AnimatedTag>
      )}
      {getMealplanTag()}
    </Wrap>
  )
}
