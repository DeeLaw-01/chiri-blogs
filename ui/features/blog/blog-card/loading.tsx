import { Box, HStack, VStack, Skeleton } from '@chakra-ui/react'

const BlogCardSkeleton = (): JSX.Element => {
  return (
    <VStack
      align={'flex-start'}
      borderRadius={'lg'}
      border={'1px solid'}
      borderColor={'_lightgray'}
    >
      <Skeleton
        w="full"
        h={'11rem'}
        endColor="_lightgray"
        borderRadius={'lg'}
        borderBottomRadius={0}
      />
      <Box p="2" w="full">
        <Skeleton fontWeight={'medium'} endColor="_lightgray" />
        <HStack color={'_darkgray'} spacing={4} fontSize="sm" mt="2">
          <Skeleton w={'full'} h={'1.5rem'} endColor="_lightgray" />
        </HStack>
        <HStack mt={2}>
          <Skeleton w={'full'} h={'1rem'} endColor="_lightgray" />
        </HStack>
      </Box>
    </VStack>
  )
}

export default BlogCardSkeleton
