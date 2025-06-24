import {
  Box,
  VStack,
  Stack,
  Skeleton,
  HStack,
  SkeletonCircle,
  Divider,
  SkeletonText,
  useMediaQuery,
} from '@chakra-ui/react'
import Card from 'ui/primitives/Card'

export default function TransportBaseLoadingCard() {
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')

  const backgroundGradient = !minBreakCard
    ? 'radial-gradient(10px at left 70%, #0000 100%, #fff) left, radial-gradient(10px at right 70%, #0000 100%, #fff) right'
    : 'radial-gradient(10px at 70% top, #0000 100%, #fff) top, radial-gradient(10px at 70% bottom, #0000 100%, #fff) bottom'

  return (
    <Card
      className="transport-card-loading"
      w="full"
      boxShadow="none"
      background={backgroundGradient}
      backgroundSize={!minBreakCard ? '51% 100%' : '100% 51%'}
      backgroundRepeat="no-repeat"
      bg="_white"
      filter="drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.18))"
      mb={8}
      py={minBreakCard ? 4 : 0}
      px={!minBreakCard ? 4 : 0}
      position="relative"
      aria-busy="true"
      aria-live="polite"
    >
      <Stack
        direction={['column', 'row']}
        alignItems="stretch"
        bg="_white"
        borderRadius="lg"
        minH="9rem"
        filter="drop-shadow(0) !important"
      >
        {/* Placeholder for TransportInfoFull */}
        <Box w="full" p={2}>
          {/* Top Section: Carrier Logos and Luggage Info */}
          <HStack justifyContent="space-between" pb={2}>
            <HStack px={{ base: 0, md: 2 }}>
              {/* Carrier Logos Placeholder */}
              <HStack
                borderRadius="lg"
                p={2}
                border="1px solid"
                borderColor="_lightgray"
                maxW={8}
                maxH={8}
              >
                <SkeletonCircle size="4" aria-hidden="true" />
                <SkeletonCircle size="4" ml="-3" aria-hidden="true" />
              </HStack>

              {/* Carrier Names Placeholder */}
              <Skeleton height="12px" width="150px" ml={2} aria-hidden="true" />
            </HStack>

            {/* Luggage Info Placeholder */}
            <Skeleton height="12px" width="50px" aria-hidden="true" />
          </HStack>
          <Divider />
          {/* Transport Info Small Placeholder */}
          <HStack
            p={4}
            px={{ base: 0, md: 4 }}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {/* Departure Details Placeholder */}
            <VStack alignItems="flex-start" w="30%" gap={2}>
              <Skeleton height="10px" width="60px" aria-hidden="true" />
              <Skeleton height="20px" width="50px" aria-hidden="true" />
              <SkeletonText
                noOfLines={1}
                skeletonHeight="10px"
                width="100px"
                aria-hidden="true"
              />
            </VStack>

            {/* Duration and Transport Icon Placeholder */}
            <VStack w="40%" gap={2}>
              <Skeleton height="10px" width="80px" aria-hidden="true" />
              <Box
                fontSize="sm"
                color="_gray"
                w="full"
                mt={5}
                borderBottom="3px dotted lightgray"
                alignItems="center"
              />
              <VStack mt={4}>
                <Skeleton height="20px" width="100px" aria-hidden="true" />
              </VStack>
            </VStack>

            {/* Arrival Details Placeholder */}
            <VStack alignItems="flex-end" w="30%" textAlign="right" gap={2}>
              <Skeleton height="10px" width="60px" aria-hidden="true" />
              <Skeleton height="20px" width="50px" aria-hidden="true" />
              <SkeletonText
                noOfLines={1}
                skeletonHeight="10px"
                width="100px"
                aria-hidden="true"
              />
            </VStack>
          </HStack>
        </Box>

        {/* Placeholder for children content */}
        <VStack
          minW="30%"
          maxW={!minBreakCard ? '100%' : '30%'}
          justifyContent="space-around"
          px={0}
        >
          <Stack
            direction={['row', 'column']}
            w="full"
            h="100%"
            borderLeft={!minBreakCard ? 'none' : '1px dotted lightgray'}
            justifyContent="space-between"
            px={!minBreakCard ? 0 : 4}
            py={4}
          >
            <Skeleton height="20px" width="80%" aria-hidden="true" />
            <Skeleton height="20px" width="60%" aria-hidden="true" />
          </Stack>
        </VStack>
      </Stack>

      {!minBreakCard && (
        <Box
          position="absolute"
          top="70%"
          borderTop="1px dotted lightgray"
          right="10px"
          left="10px"
        >
          <Skeleton height="1px" aria-hidden="true" />
        </Box>
      )}
    </Card>
  )
}
