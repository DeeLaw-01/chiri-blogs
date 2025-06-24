import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'
import { VStack, HStack, Divider, Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import BookingComIcon from '@/icons/booking-com.svg'
import theme from 'src/styles/theme'
import ReviewItem from '../accommodation-reviews/review-item'
import { Reviews } from 'src/shared-types/hotel-details.type'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import { getColor } from 'ui/features/trip-details/accommodation/helpers'

type ReviewsModalProps = {
  isOpen: boolean
  onClose: () => void
  reviews?: Reviews
  rating: {
    word: string
    score: number
  }
}
export default function ReviewsModal({
  isOpen,
  onClose,
  reviews,
  rating,
}: ReviewsModalProps) {
  if (!reviews) return
  return (
    <Modal
      modalBodyStyle={{ padding: 0 }}
      modalContentStyle={{
        overflow: 'hidden',
        m: { base: '0', md: '16' },
      }}
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', md: 'xl' }}
      addCloseButton={false}
      blockScrollOnMount={true}
    >
      <VStack
        alignItems="flex-start"
        bg="_lightestgray"
        w="full"
        p={5}
        position={{ base: 'sticky', md: 'relative' }}
        top="0"
        zIndex="1"
        borderBottom="1px solid"
        borderColor="_lightgray"
      >
        <CircleIconWrapper
          w="2rem"
          bg="_white"
          left={{ base: 4, md: 8 }}
          onClick={onClose}
        >
          <LeftArrowIcon width="13" height="13" stroke={theme.colors._black} />
        </CircleIconWrapper>
        <Heading
          as="h1"
          fontWeight="normal"
          st="new-hotel-page:review.modal.heading"
        />

        <HStack>
          <Text
            fontSize="5xl"
            fontWeight="normal"
            color={getColor(reviews.review_score)[1]}
            lineHeight="1"
          >
            {toFixedOneSingleDigit(rating.score)}
          </Text>
          <Text color="_gray" fontSize="xl" as="span">
            {rating.word}
          </Text>
        </HStack>
        <Text
          color="_gray"
          fontSize="sm"
          st="new-hotel-page:review.count.mobile"
          sd={{ review_count: reviews.reviewsCount }}
        />
      </VStack>
      <Heading
        as="h4"
        pl={4}
        pt="4"
        st="new-hotel-page:reviews.modal.subheading"
      />

      {reviews.reviewCard?.map((review, idx) => {
        return (
          <Box key={idx}>
            <ReviewItem review={review} />
            <Divider w="80%" margin="0 auto" />
          </Box>
        )
      })}
      <HStack w="full" justify="flex-end" p="2">
        <Text fontSize="2xs" mr="-1">
          Provided by
        </Text>
        <Box mt="0.5">
          <BookingComIcon fill="#003b95" height="10" />
        </Box>
      </HStack>
    </Modal>
  )
}
