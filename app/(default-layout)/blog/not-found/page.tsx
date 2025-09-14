import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'

// We use a /page.tsx instead of nextjs not-found.tsx so we can regex it
// The regex is e.g used in isTransparent to define the colors within the navbar.
// Downside is that a redirect isn't the best approach, as it populates the history.
export default function BlogNotFound() {
  return (
    <Container mt="8">
      <Box minH="75vh">
        <Heading as="h1" st="blog-page.blog.not.found.title" />
        <Text st="blog-page.blog.not.found.description" />
      </Box>
    </Container>
  )
}
