import { Box, Skeleton } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box p={8} w="full">
      <Skeleton h="3rem" w="full" />
      <Skeleton h="7rem" w="full" mt="6" />
      <Skeleton h="2rem" w="full" mt="8" />
      <Skeleton h="2.5rem" w="full" mt="5" />
      <Skeleton h="2.5rem" w="full" mt="5" />
      <Skeleton h="2.5rem" w="full" mt="5" />
      <Skeleton h="2.5rem" w="full" mt="5" />
      <Skeleton h="2.5rem" w="full" mt="5" />
      <Skeleton h="2.5rem" w="full" mt="5" />
    </Box>
  )
}
