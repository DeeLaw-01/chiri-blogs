import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'
import Navbar from 'ui/features/navbar'
import Footer from 'ui/features/shared-layout/footer'

export default function PackageNotFound() {
  return (
    <>
      <Navbar />
      <Container>
        <Box minH="75vh" mt={{ base: '6rem', md: '4xl' }}>
          <Heading as="h1" st="new-trip-page.package.not.found.title" />
          <Text st="new-trip-page.package.not.found.description" />
        </Box>
      </Container>
      <Footer />
    </>
  )
}
