import { Box, Grid, GridItem, HStack, Skeleton } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import TickIcon from '@/icons/shared/tick-icon.svg'
import ArrowDownIcon from 'ui/icons/navbar/arrow-down.svg'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useAccommodationDetailsAtoms } from './useAccommodationDetailsAtoms'

export default function PropertyFacilities() {
  const { isMobile } = useResponsiveSizes()
  const { setShowFacilities, isRoomsDataLoading, roomsData } =
    useAccommodationDetailsAtoms()

  if (isRoomsDataLoading || !roomsData)
    return (
      <HStack w="full" spacing={4} alignItems="flex-start">
        <Skeleton w="full" h="12rem" endColor="gray.300" borderRadius="lg" />
        <Skeleton w="full" h="12rem" endColor="gray.300" borderRadius="lg" />
        <Skeleton
          w="full"
          h="12rem"
          endColor="gray.300"
          borderRadius="lg"
          display={{ base: 'none', md: 'block' }}
        />
      </HStack>
    )

  const MAX_FACILITIES = isMobile ? 8 : 12
  return (
    <>
      <Grid
        templateColumns={`repeat(${isMobile ? 2 : 3}, 1fr)`}
        columnGap={6}
        rowGap="4"
      >
        {roomsData.hotel_facilities.map((facility, idx) => {
          if (idx > MAX_FACILITIES - 1) return
          return (
            <GridItem key={idx} fontSize="sm">
              <HStack alignItems="flex-start">
                <Box minW="0.7rem">
                  <TickIcon
                    stroke={theme.colors._darkgray}
                    width="0.7rem"
                    height="1.2rem"
                  />
                </Box>
                <Text>{facility}</Text>
              </HStack>
            </GridItem>
          )
        })}
      </Grid>
      {roomsData.hotel_facilities.length > MAX_FACILITIES && (
        <Button
          id="view-all-facilities"
          asLink
          fontWeight="normal"
          fontSize="sm"
          rightIcon={
            <ArrowDownIcon stroke={theme.colors.primary} width="10px" />
          }
          mt="4"
          onClick={() => setShowFacilities(true)}
        >
          <Text st="new-hotel-page:view.all.facilities" />
        </Button>
      )}
    </>
  )
}
