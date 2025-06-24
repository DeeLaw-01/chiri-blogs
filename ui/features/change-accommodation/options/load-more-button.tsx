import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { Box } from '@chakra-ui/react'

type LoadMoreButtonProps = {
  isValidating: boolean
  hasMore: boolean
  size: number
  setSize: (n: number) => void
}
export default function LoadMoreButton({
  isValidating,
  hasMore,
  size,
  setSize,
}: LoadMoreButtonProps) {
  return (
    <Box w="full" textAlign="center" mt="4">
      {!isValidating && hasMore && (
        <Button
          secondary
          id="show-more-change-transport"
          w="full"
          onClick={() => setSize(size + 1)}
        >
          <Text st="common.load.more" />
        </Button>
      )}
      {!isValidating && !hasMore && (
        <Text
          color="_gray"
          fontSize={{ base: 'sm', md: 'normal' }}
          st="common.loading.end.message"
        />
      )}
    </Box>
  )
}
