import { HStack, Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { getColor, getReviewText } from './helpers'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ReviewScoreProps = {
  accommodation: HotelDetails
  addText?: boolean
}

export default function ReviewScore({
  accommodation,
  addText,
}: ReviewScoreProps) {
  if (!accommodation.review_score) return <></>
  return (
    <HStack whiteSpace={'nowrap'}>
      {addText && (
        <Text
          fontSize={{ base: '2xs', md: 'xs' }}
          color="_gray"
          textAlign="right"
          st={getReviewText(accommodation.review_score)}
        />
      )}

      <Box
        bg={getColor(accommodation.review_score)[0]}
        borderRadius="md"
        fontSize={{ base: 'xs', md: 'sm' }}
        color={getColor(accommodation.review_score)[1]}
        px={'5px'}
        py={'5px'}
      >
        {accommodation.review_score?.toFixed(1) || '7.5'}
      </Box>
    </HStack>
  )
}
