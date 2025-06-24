import BlogCard from 'ui/features/blog/blog-card'
import { BlogWithoutContent } from 'ui/features/blog/types/blog.type'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import HorizontalSlider from 'ui/shared/horizontal-slider'

type BlogSuggestionsProps = {
  blogs: BlogWithoutContent[] | undefined
}

export default function BlogSuggestions({ blogs }: BlogSuggestionsProps) {
  if (!blogs) return <></>
  return (
    <Container my="8">
      <Heading as="h2" st="home-page.travel.articles.header" />
      <HorizontalSlider>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </HorizontalSlider>
    </Container>
  )
}
