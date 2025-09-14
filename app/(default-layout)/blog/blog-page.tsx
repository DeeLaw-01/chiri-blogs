import { Grid } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import BlogCard from 'ui/features/blog/blog-card'
import Pagination from 'ui/features/blog/pagination'
import { BlogsResponse } from 'src/api/queries/get/blogs/getBlogsQuery/blogs.type'
import { PAGE_SIZE } from 'src/api/queries/get/blogs/getBlogsQuery'
import Heading from 'ui/primitives/Heading'

type BlogProps = {
  data: BlogsResponse
  page?: string
}

export default function Blog({ data, page }: BlogProps) {
  const PAGE_COUNT = Math.floor(data.total / +PAGE_SIZE)

  return (
    <Container mt="8" mb="8">
      <Heading as="h1" st="blog-page.latest.articles" />
      <Grid
        templateColumns={'repeat(auto-fill, minmax(19rem, 1fr))'}
        gap={4}
        w={'full'}
        mt={{ base: 4, md: 8 }}
      >
        {data.blogs?.map((blog) => {
          return <BlogCard key={blog.slug} blog={blog} />
        })}
      </Grid>
      <Pagination current={page ? +page : 1} total={PAGE_COUNT} />
    </Container>
  )
}
