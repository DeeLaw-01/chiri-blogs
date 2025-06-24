import { Wrap } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Tag from 'ui/primitives/Tag'
import Text from 'ui/primitives/Text'

type AccommodationTagsProps = {
  accommodation: HotelDetails
}

export default function AccommodationFeatures({
  accommodation,
}: AccommodationTagsProps) {
  if (!accommodation) return <></>

  const getFeatures = () => {
    const { pool, beach, spa } = accommodation
    const features = []

    if (pool) features.push('hotel-info:change.hotel.option.pool')
    if (beach) features.push('hotel-info:change.hotel.option.beach')
    if (spa) features.push('hotel-info:change.hotel.option.spa')

    return features
  }

  return (
    <Wrap>
      {getFeatures().map((feat) => {
        return (
          <Tag blue key={feat}>
            <Text st={feat} />
          </Tag>
        )
      })}
    </Wrap>
  )
}
