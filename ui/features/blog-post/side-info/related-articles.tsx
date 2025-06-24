import { Box, Divider } from '@chakra-ui/react'
import { BlogType } from 'ui/features/blog/types/blog.type'
import Heading from 'ui/primitives/Heading'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'

type RelatedArticlesProps = {
  blog: BlogType
}

export default function RelatedArticles({ blog }: RelatedArticlesProps) {
  return (
    <>
      <Heading as="h3" st="blog-page.blog.suggestions.header" />
      {blog.relatedPosts.map((post, idx) => {
        if (idx > 2) return
        return (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Box mt={3}>
              {idx !== 0 && <Divider my="3" />}
              <Text noOfLines={1}>{post.title}</Text>
              <Text noOfLines={1} fontSize="xs" color="_gray">
                {post.description}
              </Text>
            </Box>
          </Link>
        )
      })}
      <Box w="full" textAlign="center" mt="2">
        <Link href="/blog" fontSize="sm" color="primary">
          <Text st="common.view.all" />
        </Link>
      </Box>
    </>
  )
}
