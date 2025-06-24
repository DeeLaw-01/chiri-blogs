import { Skeleton, VStack } from '@chakra-ui/react'

export default function RoomsLoading() {
  return (
    <VStack w="full" spacing={6} align="flex-start">
      {[...Array(3)].map((_, idx) => (
        <Skeleton
          key={idx}
          h="10rem"
          w="full"
          endColor="gray.300"
          borderRadius="lg"
        />
      ))}
    </VStack>
  )
}
