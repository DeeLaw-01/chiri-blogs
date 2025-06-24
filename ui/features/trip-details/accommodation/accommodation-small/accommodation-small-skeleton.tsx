import { Box, Skeleton, HStack, BoxProps } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'

type SmallAccommodationCardSkeletonProps = {} & BoxProps

export default function SmallAccommodationCardSkeleton({
  ...rest
}: SmallAccommodationCardSkeletonProps) {
  return (
    <Card
      mb={8}
      display={'flex'}
      flexDirection={'column'}
      h="100%"
      gap={2}
      {...rest}
    >
      <Skeleton w="full" h="12rem" endColor="gray.300" />
      <Box px="4" flex={1}>
        <HStack w="full" justify="space-between" mb="2">
          <Skeleton w="60%" endColor="gray.300" h="1.5rem" />
          <Skeleton w="10%" endColor="gray.300" h="1.5rem" />
        </HStack>
        <Skeleton w="full" h="2.5rem" endColor="gray.300" />
        <Skeleton mt="2" w="30%" h="1rem" endColor="gray.300" />
        <Skeleton w="30%" h="1rem" endColor="gray.300" />
      </Box>
      <Box>
        <Skeleton mt="4" endColor="gray.300" h="2.5rem" />
      </Box>
    </Card>
  )
}
