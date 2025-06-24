import React from 'react'
import { VStack, Box, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react'

import theme from 'src/styles/theme'

export default function MobileSkeleton() {
  return (
    <>
      <Box marginBottom={'60px'} position={'relative'}>
        <Box
          background={theme.colors._white}
          position={'absolute'}
          borderRadius={'lg'}
          zIndex={1}
          h={'82px'}
          w="calc(89% + 2px)"
          bottom={'0'}
          left={'50%'}
          transform={'translateX(-50%) translateY(50%)'}
        />
        <Skeleton
          endColor="gray.300"
          position={'absolute'}
          borderRadius={'lg'}
          zIndex={1}
          h={'82px'}
          w="89%"
          bottom={'0'}
          left={'50%'}
          transform={'translateX(-50%) translateY(calc(50% + 1px))'}
        />
        <Skeleton
          w={'full'}
          h={'40vh'}
          borderBottomRadius={20}
          endColor="gray.300"
        />

        <HStack
          paddingY={4}
          paddingX={5}
          width={'full'}
          position={'absolute'}
          left={0}
          top={'4px'}
          height={'76px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          background={'transparent'}
        >
          <Box
            width={'44px'}
            height={'44px'}
            background={theme.colors._white}
            borderRadius={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <SkeletonCircle width={10} height={'10'} endColor="gray.300" />
          </Box>
          <Box
            width={'44px'}
            height={'44px'}
            background={theme.colors._white}
            borderRadius={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <SkeletonCircle width={10} height={'10'} endColor="gray.300" />
          </Box>
        </HStack>
      </Box>

      <VStack px={'1rem'} width={'full'} alignItems={'flex-start'}>
        <HStack width={'full'} gap={1}>
          <Skeleton h={'50px'} w={'full'} endColor="gray.300" />
          <Skeleton h={'50px'} w={'full'} endColor="gray.300" />
          <Skeleton h={'50px'} w={'full'} endColor="gray.300" />
          <Skeleton h={'50px'} w={'full'} endColor="gray.300" />
        </HStack>
        <HStack width={'full'} mt={2} gap={4}>
          <SkeletonCircle width={'50px'} height={'50px'} endColor="gray.300" />
          <SkeletonCircle width={'50px'} height={'50px'} endColor="gray.300" />
        </HStack>

        <VStack
          mt={3}
          mb={10}
          gap={10}
          alignItems={'flex-start'}
          width={'full'}
        >
          {[0, 1, 2].map((_, idx) => {
            return (
              <HStack key={idx} alignItems={'stretch'} width={'full'} gap={3}>
                <HStack alignItems={'flex-start'} position={'relative'}>
                  <Box
                    width={'10px'}
                    height={'10px'}
                    borderRadius={'full'}
                    border={'1px solid'}
                    borderColor={'gray.300'}
                    background={idx % 2 !== 0 ? 'gray.300' : '_white'}
                    position={'absolute'}
                    top={'0px'}
                    left={'1px'}
                    zIndex={5}
                    transform={`translateX(-50%)`}
                  />
                  <Skeleton
                    height={idx === 2 ? '170px' : '300px'}
                    width={'2px'}
                    endColor={'gray.300'}
                    position={'absolute'}
                  />
                </HStack>
                <VStack width={'full'} alignItems={'flex-start'}>
                  <Skeleton h={'20px'} w="40%" endColor="gray.300" />

                  <Skeleton
                    endColor="gray.300"
                    width={'full'}
                    height={'85px'}
                  />
                  <Skeleton
                    endColor="gray.300"
                    width={'full'}
                    height={'50px'}
                  />
                </VStack>
              </HStack>
            )
          })}
        </VStack>
      </VStack>
    </>
  )
}
