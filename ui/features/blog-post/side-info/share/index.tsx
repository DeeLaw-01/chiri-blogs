import { Box, Divider, HStack } from '@chakra-ui/react'
import { BlogType } from 'ui/features/blog/types/blog.type'

import Text from 'ui/primitives/Text'
import { CONFIG_SITE } from 'src/config'
import ShareIcon from './share-icon'
import { data } from './data'

type BlogPostShareProps = {
  blog: BlogType
}

export default function BlogPostShare({ blog }: BlogPostShareProps) {
  const link = CONFIG_SITE.BASE_LINK + '/blog/' + blog.slug
  return (
    <Box>
      <HStack w="full" fontSize="xs" color="_gray" my={3}>
        <Divider />
        <Text
          whiteSpace={'nowrap'}
          textTransform={'uppercase'}
          st="common.share.link"
        />

        <Divider />
      </HStack>
      <HStack justifyContent="center">
        {data(link).map((item) => (
          <ShareIcon key={item.type} item={item} />
        ))}
      </HStack>
    </Box>
  )
}
