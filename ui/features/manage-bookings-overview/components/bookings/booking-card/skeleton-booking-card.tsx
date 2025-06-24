import { Box, Skeleton, HStack, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'

export default function SkeletonBookingCard() {
  return (
    <Card overflow="hidden" mb={4}>
      <HStack alignItems="stretch" gap="0" display="flex">
        <Box
          position="relative"
          overflow="hidden"
          h={{ md: '8rem' }}
          w={{ md: '14rem' }}
          minH={{ base: '3rem' }}
          minW={{ base: '3rem' }}
          borderRadius={{ base: 'full', md: 'md' }}
          m={{ base: 2, md: 0 }}
        >
          <Skeleton w="full" h="full" />
        </Box>
        <HStack
          alignItems="flex-start"
          w="full"
          p={{ base: 3, md: 4 }}
          pl={{ base: 0 }}
          mb="auto"
        >
          <VStack w="full" alignItems="flex-start">
            <Skeleton h={{ base: '1rem', md: '1.5rem' }} w="40%" />
            <Skeleton mt={{ base: 0, md: 1 }} h="1rem" w="60%" />
            <Skeleton
              display={{ base: 'none', md: 'initial' }}
              h="1rem"
              w="60%"
            />
          </VStack>
        </HStack>
      </HStack>
    </Card>
  )
}
