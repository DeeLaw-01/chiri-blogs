import { Box, Skeleton, HStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'

export default function BigAccommodationCardSkeleton() {
  return (
    <Card mb={8}>
      <HStack w="full">
        <Skeleton minW="37%" h="12rem" endColor="gray.300" />
        <Box px="4" py="3" w="full">
          <HStack w="full" justify="space-between" mb="2">
            <Skeleton w="60%" endColor="gray.300" h="1.5rem" />
            <Skeleton w="10%" endColor="gray.300" h="1.5rem" />
          </HStack>
          <Skeleton w="30%" h="1rem" endColor="gray.300" mb="2" />
          <Skeleton w="full" h="2.5rem" endColor="gray.300" />
          <Skeleton mt="2" w="30%" h="1rem" endColor="gray.300" />

          <Skeleton mt="4" endColor="gray.300" h="2rem" />
        </Box>
      </HStack>
    </Card>
  )
}
