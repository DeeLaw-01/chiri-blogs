import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { Review } from 'src/shared-types/hotel-details.type'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useState } from 'react'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import ReviewAvatar from '../reviews/review-avatar'
import { getColor } from 'ui/features/trip-details/accommodation/helpers'

type ReviewItemProps = {
  review: Review
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const [showFullReply, setShowFullReply] = useState<boolean>(false)
  const formatDate = useFormattedDate()

  return (
    <Box p={5}>
      <HStack justify="space-between">
        <HStack>
          <ReviewAvatar h="9" review={review} />
          <Box>
            <Text fontWeight="medium" fontSize="sm" lineHeight={1.1}>
              {review.guestDetails.username}
            </Text>
            <Text color="_gray" fontSize="xs">
              {review.guestDetails.countryName} ·{' '}
              {formatDate(new Date(review.reviewedDate * 1000), false)}
            </Text>
          </Box>
        </HStack>
        <Box
          borderRadius="lg"
          bg={getColor(review.reviewScore)[0]}
          color={getColor(review.reviewScore)[1]}
          px="1"
          py={0.5}
        >
          {toFixedOneSingleDigit(review.reviewScore)}
        </Box>
      </HStack>
      <Box color="_gray" pt={2} fontSize="sm">
        {review.textDetails.positiveText}
      </Box>
      {review.partnerReply && (
        <Box
          bg="_lightestgray"
          fontSize="xs"
          mt="2"
          borderRadius="lg"
          p={2}
          color="_gray"
          border="1px solid"
          borderColor="_lightgray"
        >
          <Text
            fontWeight="medium"
            color="_darkgray"
            st="new-hotel-page:review.partner.reply"
          />

          <Text as="span">
            {renderTrimmedString(
              review.partnerReply.reply,
              showFullReply ? 9999 : 50,
              false
            )}
          </Text>
          <Button
            display="inline"
            asLink
            fontWeight="normal"
            id="see-more-review"
            fontSize="xs"
            ml="1"
            onClick={() => setShowFullReply(!showFullReply)}
          >
            <Text
              st={showFullReply ? 'common.view.less' : 'common.view.more'}
            />
          </Button>
        </Box>
      )}
    </Box>
  )
}
