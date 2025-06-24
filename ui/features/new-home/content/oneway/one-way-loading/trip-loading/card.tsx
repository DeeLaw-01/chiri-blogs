import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'

export default function LoadingCard() {
  return (
    <Card>
      <Box
        h={'10rem'}
        w={'full'}
        bg="_lightgray"
        borderRadius={'lg'}
        overflow="hidden"
        position={'relative'}
        borderBottomRadius={0}
      >
        <Skeleton height="100%" width="100%" endColor="gray.300" />
      </Box>

      <Box px="2" py="4" width={'full'}>
        <HStack justify={'space-between'} w={'full'}>
          <VStack w="full" align="flex-start">
            <Skeleton
              height="20px"
              width="80%"
              borderRadius="full"
              endColor="gray.300"
            />
            <Skeleton
              height="16px"
              width="40%"
              borderRadius="full"
              endColor="gray.300"
            />
          </VStack>
          <VStack align="flex-end" w="full">
            <Skeleton
              height="10px"
              width="30%"
              borderRadius="full"
              endColor="gray.300"
            />
            <Skeleton
              height="20px"
              width="40%"
              borderRadius="full"
              endColor="gray.300"
            />
          </VStack>
        </HStack>
      </Box>
    </Card>
  )
}
