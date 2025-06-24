import React from 'react'
import {
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react'
import PageGrid from 'ui/features/shared-layout/page-grid'
import Container from 'ui/primitives/Container'

export default function DesktopSkeleton() {
  return (
    <Container mt={16}>
      <HStack
        py={4}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        w="full"
      >
        <HStack alignItems={'flex-start'} justifyContent={'center'}>
          <SkeletonCircle width={10} height={'10'} endColor="gray.300" />
          <VStack alignItems="flex-start">
            <Skeleton h={'35px'} w="40rem" endColor="gray.300" />
            <Skeleton h={'20px'} w="16rem" endColor="gray.300" />
          </VStack>
        </HStack>
        <HStack>
          <SkeletonCircle width={10} height={10} endColor="gray.300" />
          <SkeletonCircle width={10} height={10} endColor="gray.300" />
        </HStack>
      </HStack>

      <Grid
        h="45ch"
        maxH="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
      >
        {[0, 1, 2, 3, 4].map((_, idx) => {
          return (
            <GridItem
              key={idx}
              rowSpan={idx === 0 ? 2 : 1}
              colSpan={idx === 0 ? 2 : 1}
            >
              <Skeleton
                position="relative"
                h="full"
                borderRadius={12}
                overflow="hidden"
                endColor="gray.300"
              />
            </GridItem>
          )
        })}
      </Grid>

      <Skeleton h={'45px'} w="fill" mt={5} endColor="gray.300" />
      <PageGrid
        sideComp={
          <Box>
            <Skeleton endColor="gray.300" width={'full'} height={'320px'} />
          </Box>
        }
      >
        <VStack width={'full'} alignItems={'flex-start'}>
          <HStack width={'full'}>
            <Skeleton h={'35px'} w={'full'} endColor="gray.300" />
            <Skeleton h={'35px'} w={'full'} endColor="gray.300" />
            <Skeleton h={'35px'} w={'full'} endColor="gray.300" />
            <Skeleton h={'35px'} w={'full'} endColor="gray.300" />
          </HStack>
          <HStack width={'full'} mt={2} gap={4}>
            <SkeletonCircle
              width={'67px'}
              height={'67px'}
              endColor="gray.300"
            />
            <SkeletonCircle
              width={'67px'}
              height={'67px'}
              endColor="gray.300"
            />
          </HStack>

          <VStack mt={5} alignItems={'flex-start'} width={'full'}>
            {[0, 1, 2].map((_, idx) => {
              return (
                <HStack
                  key={idx}
                  alignItems={'flex-start'}
                  justifyContent={'space-between'}
                  width={'full'}
                  gap={10}
                >
                  <VStack width={'full'} alignItems={'flex-start'}>
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
                  <HStack
                    gap={3}
                    alignItems={'flex-start'}
                    minW={'30%'}
                    height={'200px'}
                    position={'relative'}
                  >
                    <Box
                      width={'10px'}
                      height={'10px'}
                      borderRadius={'full'}
                      border={'1px solid'}
                      borderColor={'gray.300'}
                      background={idx % 2 !== 0 ? 'gray.300' : 'transparent'}
                      position={'absolute'}
                      top={'-10px'}
                      left={'1px'}
                      zIndex={5}
                      transform={`translateX(-50%)`}
                    />
                    <Skeleton
                      height={'full'}
                      width={'2px'}
                      endColor={'gray.300'}
                    />

                    <VStack width={'full'} alignItems={'flex-start'}>
                      <Skeleton h={'20px'} w="8rem" endColor="gray.300" />
                      <Skeleton h={'20px'} w="5rem" endColor="gray.300" />
                    </VStack>
                  </HStack>
                </HStack>
              )
            })}
          </VStack>
        </VStack>
      </PageGrid>
    </Container>
  )
}
