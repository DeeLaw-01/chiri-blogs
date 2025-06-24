import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'

export default function ArticleNotFound(): JSX.Element {
  return (
    <Container mt="8">
      <Box minH="75vh">
        <Heading as="h1" st="help-page.article.not.found.title" />
        <Text st="help-page.article.not.found.description" />
      </Box>
    </Container>
  )
}
