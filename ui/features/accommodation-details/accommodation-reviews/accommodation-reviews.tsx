import { Box, Progress, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Stars from 'ui/shared/stars'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'
import { Reviews } from 'src/shared-types/hotel-details.type'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import Text from 'ui/primitives/Text'

type AccommodationReviewsProps = {
  reviews: Reviews
}

export default function AccommodationReviews({
  reviews,
}: AccommodationReviewsProps) {
  const { setShowReviews } = useAccommodationDetailsAtoms()

  const getColor = (rating: number) => {
    if (rating > 7) return 'green'
    else if (rating >= 6) return 'yellow'
    else return 'red'
  }

  return (
    <Box w="full" px="5" mt="5">
      <HStack gap="5">
        <VStack
          minW={{ base: 'initial', md: '8rem' }}
          gap="0"
          borderRight="1px solid"
          borderColor="_lightgray"
          pr="5"
        >
          <Text
            fontSize="6xl"
            fontWeight="thin"
            color="_darkgray"
            lineHeight="1"
          >
            {toFixedOneSingleDigit(reviews.review_score)}
          </Text>
          <Stars size="xl" amount={Math.ceil(reviews.review_score / 2)} />
          <Text
            color="gray"
            fontSize={{ base: 'xs', md: 'xs' }}
            st="new-hotel-page:review.count.desktop"
            textAlign="center"
            sd={{ review_count: reviews.reviewsCount }}
          />
        </VStack>
        <Box w="full">
          {reviews.ratingScores?.map((score, idx) => {
            if (idx > 3) return
            return (
              <Box key={idx}>
                <HStack
                  justify="space-between"
                  w="full"
                  color="_gray"
                  fontSize="sm"
                >
                  <Text>{score.translation}</Text>
                  <Text>{toFixedOneSingleDigit(score.value)}</Text>
                </HStack>
                <Progress
                  borderRadius="lg"
                  value={score.value * 10}
                  size="xs"
                  colorScheme={getColor(score.value)}
                  mb="3"
                />
              </Box>
            )
          })}
        </Box>
      </HStack>
      <HStack justify="space-around" py={5}>
        <Button
          id="show-reviews"
          onClick={() => setShowReviews(true)}
          asLink
          fontWeight="normal"
          fontSize="sm"
          arrow
        >
          <Text st="new-hotel-page:view.reviews" />
        </Button>
      </HStack>
    </Box>
  )
}
