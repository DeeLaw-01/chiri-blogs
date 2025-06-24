import { Box, VStack, Flex, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Card from 'ui/primitives/Card'

import MapIllustration from '@/icons/shared/map-vector.svg'
import LocationDot from './location-dot'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import Button from 'ui/primitives/Button'

export default function MapCard() {
  const { setShowMap } = useTripDetailsAtoms()
  return (
    <Card
      onClick={() => setShowMap(true)}
      overflow="hidden"
      maxH="160px"
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
    >
      <Box opacity={0.5}>
        <MapIllustration />
      </Box>
      <Box position="absolute" top="7px" right="75px">
        <LocationDot />
      </Box>
      <Box
        width="full"
        height="100%"
        position="absolute"
        top={0}
        p={5}
        background="linear-gradient(
          to top,
          #ffffff,
          rgba(255, 255, 255, 1) 30%,
          rgba(255, 255, 255, 0.9) 50%,
          rgba(255, 255, 255, 0) 100%)"
      >
        <Flex alignItems="flex-end" h="full">
          <HStack alignItems="flex-end" justifyContent="space-between">
            <VStack alignItems="flex-start" gap="0">
              <Button
                id="show-trip-map"
                asLink
                arrow
                fontSize={{ base: 'md', md: 'lg' }}
                color="unset"
                _hover={{}}
              >
                <Text notag st="new-trip-page:overview.map.title" />
              </Button>
              <Text
                secondary
                mt="0 !important"
                st="new-trip-page:overview.map.description"
              />
            </VStack>
          </HStack>
        </Flex>
      </Box>
    </Card>
  )
}
