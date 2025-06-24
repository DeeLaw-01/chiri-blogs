'use client'

import { useState, useEffect } from 'react'
import Heading from 'ui/primitives/Heading'
import { Box, VStack } from '@chakra-ui/react'
import Image from 'ui/primitives/Image'
import Link from 'ui/primitives/Link'
import Container from 'ui/primitives/Container'
import { BlogWithoutContent } from '../types/blog.type'

type BlogHeaderProps = {
  blogs: BlogWithoutContent[]
}
export default function BlogHeader({ blogs }: BlogHeaderProps) {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const slide = setInterval(() => {
      if (index === blogs.length - 1) return setIndex(0)
      setIndex(index + 1)
    }, 5000)
    return () => clearInterval(slide)
  }, [index])

  return (
    <Box
      h={'22rem'}
      w={`calc(${100 * (index + 1)}vw)`}
      overflow="hidden"
      transition="all .4s ease-in-out"
      transform={`translateX(${-100 * index}vw)`}
      color="_white"
      bg="_black"
    >
      {blogs.map((blog, idx) => (
        <Box pos="absolute" h="full" left={`${100 * idx}vw`} w="full" key={idx}>
          <Image
            src={blog.headerImageURL}
            fill
            alt={blog.title}
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <VStack
            pos="absolute"
            h="full"
            w="100vw"
            zIndex={1}
            bg="rgba(0,0,0,.5)"
            justify="flex-end"
          >
            <Container mb={4}>
              <Link href={'/blog/' + blog.slug}>
                <Heading as="h2">{blog.title}</Heading>
              </Link>
            </Container>
          </VStack>
        </Box>
      ))}
    </Box>
  )
}
