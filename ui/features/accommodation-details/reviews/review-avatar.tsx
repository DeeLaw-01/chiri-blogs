import { Box, BoxProps } from '@chakra-ui/react'
import { Review } from 'src/shared-types/hotel-details.type'

type AvatarProps = {
  review: Review
} & BoxProps

export default function ReviewAvatar({ review, ...rest }: AvatarProps) {
  const getColor = (): string => {
    const numb = Math.floor(Math.random() * 3)
    return numb === 1 ? '_orange' : numb === 2 ? '_blue' : '_purple'
  }

  return (
    <Box
      borderRadius="full"
      overflow="hidden"
      position="relative"
      h="27px"
      border="1px solid white"
      aspectRatio={1 / 1}
      bg={getColor()}
      textAlign="center"
      color="_white"
      {...rest}
    >
      {/* Workaround to add letter if avatarUrl fails, and if not show the avatarUrl on top */}
      {review.guestDetails?.username?.charAt(0)}
      <Box
        position="absolute"
        top="0"
        h="full"
        w="full"
        backgroundImage={review.guestDetails?.avatarUrl}
        backgroundSize={'cover'}
      />
    </Box>
  )
}
