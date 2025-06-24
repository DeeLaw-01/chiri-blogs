import { Box, Grid, HStack, VStack } from '@chakra-ui/react'

import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import Stars from 'ui/shared/stars'

import useCurrency from 'src/hooks/useCurrency'
import { theme } from 'src/styles/theme'
import { renderTrimmedString } from 'src/utils/renderUtils'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

import ArrowRightIcon from '@/icons/arrow-right.svg'
import CrossIcon from '@/icons/shared/cross-icon.svg'

import type { HotelDetails } from 'src/shared-types/hotel-details.type'

export default function HotelMapCard({
  hotel,
  onOpenHotelView,
  onCloseMap,
}: {
  hotel: HotelDetails
  onOpenHotelView: any
  onCloseMap: any
}) {
  const { getConvertedCurrency } = useCurrency()

  const handleSelect = () => {
    onOpenHotelView(hotel)
  }

  return (
    <Box
      w="full"
      h="8rem"
      bg="_white"
      boxShadow="lg"
      borderRadius="lg"
      onClick={() => handleSelect()}
      maxW={{ base: '90%', md: '25rem' }}
      transition="transform 0.2s ease-in-out"
      _hover={{ cursor: 'pointer', transform: 'scale(1.02)' }}
    >
      <Grid templateColumns={'8rem 1fr'} h="full">
        <Box
          h="full"
          pos="relative"
          overflow="hidden"
          position="relative"
          borderLeftRadius="md"
        >
          <CircleIconWrapper
            top={2}
            left={2}
            zIndex={1}
            bg="_white"
            border="none"
            pos="absolute"
            w="fit-content"
            onClick={(e) => {
              e.stopPropagation()
              onCloseMap()
            }}
          >
            <Box w="2" h="2">
              <CrossIcon strokeWidth="3" />
            </Box>
          </CircleIconWrapper>

          <Image
            src={hotel.photo_url}
            alt={hotel.name}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="100%"
          />
        </Box>

        <VStack
          p="5"
          h="full"
          w="full"
          justifyContent="space-between"
          fontSize={{ base: 'sm', md: 'lg' }}
        >
          <HStack w="full" justify="space-between">
            <Text>{renderTrimmedString(hotel.name, 18)}</Text>
            <Box minW="1.2rem">
              <ArrowRightIcon stroke={theme.colors.primary} />
            </Box>
          </HStack>

          <HStack w="full" justify="space-between">
            <Text>
              {getConvertedCurrency(hotel.price_per_night)} /{' '}
              <Text notag st="common.per.night" />
            </Text>

            {hotel.stars && (
              <HStack>
                <Text>{hotel.stars}</Text>
                <Stars amount={1} size={'md'} />
              </HStack>
            )}
          </HStack>
        </VStack>
      </Grid>
    </Box>
  )
}

export { HotelMapCard }
