import { Box, Skeleton } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box maxW="60rem" w="full">
      <Skeleton h="12rem" borderRadius="md" w="full" mb="2" />
      <Skeleton h="12rem" borderRadius="md" w="full" />
    </Box>
  )
}
