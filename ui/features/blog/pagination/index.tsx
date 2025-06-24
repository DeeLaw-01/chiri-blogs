import { Box, HStack } from '@chakra-ui/react'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'
import ChevronLeft from '@/icons/new/arrow/chevron-left.svg'
import ChevronRight from '@/icons/new/arrow/chevron-right.svg'

type PaginationProps = {
  current: number
  total: number
}

export default function Pagination({ current, total }: PaginationProps) {
  const SHOW_NEXT = current !== total
  const SHOW_PREV = current !== 1

  const getPages = () => {
    const pages = new Set([1, total])
    for (let i = -2; i <= 2; i++) {
      const page = current + i
      if (page > 1 && page < total) pages.add(page)
    }
    return [...pages].sort((a, b) => a - b)
  }

  const pages = getPages()

  return (
    <HStack gap="0.25rem" justify="center" w="full" mt="8">
      {SHOW_PREV && (
        <Link href={`/blog/page/${current - 1}`} rel="prev">
          <Text>
            <ChevronLeft width="20" />
          </Text>
        </Link>
      )}
      {pages.map((num, idx) => (
        <>
          {idx > 0 && num > pages[idx - 1] + 1 && <Box>...</Box>}
          <Link key={num} href={`/blog/page/${num}`}>
            <Box
              borderRadius="md"
              py={2}
              px={4}
              border="1px solid"
              borderColor={num === current ? '_lightgray' : 'transparent'}
              _hover={{ bg: num === current ? 'none' : '_lightestgray' }}
            >
              {num}
            </Box>
          </Link>
        </>
      ))}
      {SHOW_NEXT && (
        <Link href={`/blog/page/${current + 1}`} rel="next">
          <ChevronRight width="20" />
        </Link>
      )}
    </HStack>
  )
}
