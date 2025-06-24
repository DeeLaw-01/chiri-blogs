import { Box, Grid, HStack, Skeleton } from '@chakra-ui/react'
import { LOAD_MORE_COUNT } from '.'

export default function SavedPassengersLoading() {
  return (
    <Box w="full" mt="5" pos="relative" overflow="hidden">
      <Grid
        gap={4}
        w="full"
        templateColumns={'repeat(auto-fit, minmax(18rem, 1fr))'}
      >
        {[...Array(LOAD_MORE_COUNT)].map((_, index) => (
          <Box
            w="full"
            borderRadius="md"
            border="1px solid"
            borderColor="_lightgray"
            p="5"
            key={index}
          >
            <HStack w="full" justify="space-between" spacing="3">
              <Skeleton h={'20px'} w={'20px'} />
              <Box w="full">
                <Skeleton w={'60%'} h={'20px'} />
                <Skeleton w={'40%'} h={'20px'} mt={1} />
              </Box>
            </HStack>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
