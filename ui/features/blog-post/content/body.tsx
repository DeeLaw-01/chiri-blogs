import { Box } from '@chakra-ui/react'
import parse from '../parse'
import { BlogType } from 'ui/features/blog/types/blog.type'

type BlogPostBodyProps = {
  blog: BlogType
}

export default function BlogPostBody({ blog }: BlogPostBodyProps) {
  return (
    <Box as="article" w="full" fontSize={{ base: 'sm', md: 'md' }}>
      <Box>{parse(blog.content)}</Box>
    </Box>
  )
}
