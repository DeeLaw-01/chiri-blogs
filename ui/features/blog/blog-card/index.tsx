import { Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import { BlogWithoutContent } from '../types/blog.type'
import Link from 'ui/primitives/Link'
import Heading from 'ui/primitives/Heading'

type BlogCardProps = {
  blog: BlogWithoutContent
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog?.slug}`} _hover={{ textDecor: 'none' }}>
      <VStack
        role="group"
        gap="0"
        align={'flex-start'}
        border="1px solid"
        minW="300px"
        maxW="420px"
        borderColor="_lightgray"
        borderRadius={'lg'}
        cursor="pointer"
        transition="all .2s"
        _hover={{
          md: {
            boxShadow: 'md',
          },
        }}
      >
        <Box
          h={'150px'}
          w={'full'}
          bg="_lightgray"
          borderRadius={'lg'}
          overflow="hidden"
          position={'relative'}
          borderBottomRadius={0}
        >
          <Image
            fill
            sizes="(max-width: 120ch) 100vw, 19rem"
            src={blog.headerImageURL}
            alt={blog.title}
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <VStack p="4" width={'full'} alignItems="flex-start">
          <Text fontSize="xs" color="primary" noOfLines={1}>
            {blog.categories.map((cat) => cat).join(', ')}
          </Text>
          <Heading as="h2" fontSize="md" noOfLines={1}>
            {blog.title}
          </Heading>
          <Text fontSize="sm" color="_gray" noOfLines={2}>
            {blog.description}
          </Text>
        </VStack>
      </VStack>
    </Link>
  )
}
