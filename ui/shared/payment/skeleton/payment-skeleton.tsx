import { Box, Divider, HStack, Skeleton } from '@chakra-ui/react'

export default function PaymentSkeleton() {
  return (
    <Box mt="6">
      <HStack>
        <Skeleton w="1rem" h="1rem" borderRadius="full" endColor="gray.300" />
        <Skeleton w="10rem" h="1rem" borderRadius="full" endColor="gray.300" />
      </HStack>
      <Skeleton
        mt="4"
        w="full"
        h="3.5rem"
        borderRadius="lg"
        endColor="gray.300"
      />
      <Skeleton
        mt="4"
        w="full"
        h="3.5rem"
        borderRadius="lg"
        endColor="gray.300"
      />
      <Divider w="full" py="2" />
      <HStack pt="4">
        <Skeleton w="1rem" h="1rem" borderRadius="full" endColor="gray.300" />
        <Skeleton w="10rem" h="1rem" borderRadius="full" endColor="gray.300" />
      </HStack>
      <Divider w="full" py="2" />
      <HStack pt="4">
        <Skeleton w="1rem" h="1rem" borderRadius="full" endColor="gray.300" />
        <Skeleton w="10rem" h="1rem" borderRadius="full" endColor="gray.300" />
      </HStack>
      <Divider w="full" py="2" />
      <Skeleton
        mt="4"
        w="60%"
        h="1rem"
        borderRadius="full"
        endColor="gray.300"
      />
      <Skeleton
        mt="4"
        w="full"
        h="3rem"
        borderRadius="lg"
        endColor="gray.300"
      />
      <HStack w="full" justify="center">
        <Skeleton
          mt="4"
          w="50%"
          h="1rem"
          borderRadius="full"
          endColor="gray.300"
        />
      </HStack>
    </Box>
  )
}
