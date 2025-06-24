import { Box } from '@chakra-ui/react'
import { BlogType } from 'ui/features/blog/types/blog.type'
import Card from 'ui/primitives/Card'

import BlogPostInfo from '../side-info/blog-info'
import RelatedArticles from '../side-info/related-articles'
import BlogPostShare from './share'

type BlogPostSideInfoProps = {
  blog: BlogType
}

export default function BlogPostSideInfo({ blog }: BlogPostSideInfoProps) {
  return (
    <Box
      position="sticky"
      mt={5}
      top={'20px'}
      transition={'all .2s'}
      bg="_white"
    >
      <Card w="full" p="5" fontSize="sm">
        <BlogPostInfo blog={blog} />
        <BlogPostShare blog={blog} />
      </Card>
      <Card p={5} mt={5} fontSize="sm">
        <RelatedArticles blog={blog} />
      </Card>
    </Box>
  )
}
