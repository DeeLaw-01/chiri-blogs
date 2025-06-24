import { Box } from '@chakra-ui/react'
import { BlogType } from 'ui/features/blog/types/blog.type'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import Image from 'ui/primitives/Image'

type BlogPostHeaderProps = {
  blog: BlogType
}

export default function BlogPostHeader({ blog }: BlogPostHeaderProps) {
  return (
    <Box
      pos="relative"
      as="header"
      h={{ base: '18rem', md: '22rem' }}
      mt="0"
      display="flex"
      alignItems="flex-end"
    >
      <Box pos="absolute" h="full" w="full">
        <Image
          fill
          sizes="100vw"
          src={blog.headerImageURL}
          alt={blog.title}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box
        pos="absolute"
        bgGradient={'linear(to-b, rgba(0, 0, 0, 0.5) 10%, _black 95%)'}
        h="full"
        w="full"
      />
      <Container mb="5" zIndex="1">
        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} color="_white">
          {blog.title}
        </Heading>
      </Container>
    </Box>
  )
}
