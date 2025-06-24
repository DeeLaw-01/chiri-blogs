import { Box, VStack, HStack, Skeleton, Spacer } from '@chakra-ui/react'
import CurvedSVG from 'ui/shared/curved -svg'
import LinedVStack from 'ui/shared/lined-vstack'

export default function LoadingCard() {
  return (
    <Box
      zIndex={-2}
      w="full"
      bg="_white"
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      display={'flex'}
      flexDirection={'column'}
      height={{ base: '25rem', md: 'full' }}
    >
      {/* IMAGE */}
      <HStack w="full" h="14rem" position={'relative'}>
        <Skeleton h="full" w="full" endColor="gray.300" />
        <CurvedSVG bottom={-0.5} />
      </HStack>

      {/* MID INFO */}

      <HStack
        alignItems="stretch"
        justify="space-between"
        flex={'1'}
        pos={'relative'}
      >
        <VStack align="flex-start">
          <VStack align={'flex-start'} pl="4" w="full">
            <Skeleton h="6" w={'full'} endColor="gray.300" />
            <Skeleton h="5" w={'80%'} endColor="gray.300" />
            <HStack w="80%">
              <Skeleton h="5" w="20" endColor="gray.300" />
              <Skeleton h="5" w="20" endColor="gray.300" />
            </HStack>
          </VStack>
          <Spacer />
          <Spacer />
        </VStack>

        {/* SIDE LOCATIONS */}
        <LinedVStack
          pt={'4'}
          zIndex={1}
          pos={'absolute'}
          right={'1.5rem'}
          spacing={'4'}
          _before={{
            right: '0.18rem !important',
            left: 'initial !important',
          }}
          mt={-10}
        >
          {[...Array(4).keys()].map((idx) => (
            <HStack key={idx}>
              <Skeleton h="3" w="16" endColor="gray.300" />
              <Box minW="2" minH="2" bg={'gray.300'} borderRadius="full" />
            </HStack>
          ))}
        </LinedVStack>
      </HStack>
      <Skeleton h="4rem" endColor="gray.300" w={'full'} />
    </Box>
  )
}
