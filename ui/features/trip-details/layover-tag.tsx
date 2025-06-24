import Tag from 'ui/primitives/Tag'
import InfoIcon from '@/icons/manage-booking/info-icon.svg'
import Text from 'ui/primitives/Text'
import { HStack } from '@chakra-ui/react'
import { ItineraryContentType } from 'src/shared-types/trip-details.type'

type LayoverTagProps = {
  completeItinerary: ItineraryContentType[]
}

export default function LayoverTag({ completeItinerary }: LayoverTagProps) {
  if (!completeItinerary || completeItinerary.length === 0)
    return (
      <Tag>
        <Text notag st="flight-info:card.tag.direct" />
      </Tag>
    )
  else
    return (
      <Tag yellow>
        <HStack gap="0.2rem">
          <Text
            st="flight-info:card.tag.layover.stop"
            sd={{ count: completeItinerary.length - 1 }}
          />
          <InfoIcon width="12" height="12" stroke={'#DD6B20'} strokeWidth="2" />
        </HStack>
      </Tag>
    )
}
