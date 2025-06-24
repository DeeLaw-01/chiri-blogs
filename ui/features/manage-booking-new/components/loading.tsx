import {
  Box,
  VStack,
  Skeleton,
  SkeletonText,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import Container from 'ui/primitives/Container'

export default function ManageBookingLoadingView() {
  return (
    <Box w="100vw">
      {/* Header skeleton */}
      <Skeleton
        height="20rem"
        width="100%"
        clipPath={'polygon(0 0,100% 0,100% calc(100% - 8vw),0 100%)'}
      />

      <Container mt="16" maxW="100ch">
        <VStack alignItems="flex-start" spacing="8">
          {/* Tabs skeleton */}
          <Skeleton height="50px" width="100%" />

          {/* Itinerary section */}
          <Skeleton width="30%" height={'8'} />
          <SkeletonText noOfLines={1} width="20%" />
          <Skeleton height="200px" width="100%" />

          <SkeletonText noOfLines={1} width="20%" />
          <Skeleton height="200px" width="100%" />

          {/* Passengers section */}
          <Skeleton width="30%" height={'8'} />
          <Skeleton height="400px" width="100%" />

          {/* Travel essentials section */}
          <SkeletonText noOfLines={1} width="20%" />
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={2}
            w={'100%'}
          >
            {[...Array(3)].map((_, idx) => (
              <GridItem key={idx} w={'100%'}>
                <Skeleton height="200px" mb="4" w={'100%'} />
              </GridItem>
            ))}

            {[...Array(2)].map((_, idx) => (
              <GridItem
                key={idx}
                w={'full'}
                colSpan={{ base: 1, md: idx === 0 ? 1 : 2 }}
              >
                <Skeleton height="150px" mb="4" />
              </GridItem>
            ))}
          </Grid>

          {/* Booking details section */}
          <SkeletonText noOfLines={1} width="20%" />
          <Skeleton height="200px" width="100%" />

          {/* Other section */}
          <SkeletonText noOfLines={1} width="20%" />
          <Skeleton height="200px" width="100%" />
        </VStack>
      </Container>
    </Box>
  )
}
