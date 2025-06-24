import { Box, HStack, CloseButton, VStack } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { toFixedOneSingleDigit } from 'src/utils/numberUtils'
import { getColor } from 'ui/features/trip-details/accommodation/helpers'
import Card from 'ui/primitives/Card'
import { CardProps } from 'ui/primitives/Card/card.type'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import Stars from 'ui/shared/stars'

type AccommodationMapCardProps = {
  accommodation: HotelDetails
  setSelected: (acc?: HotelDetails) => void
} & CardProps

export default function AccommodationMapCard({
  accommodation,
  setSelected,
  ...rest
}: AccommodationMapCardProps) {
  const { getConvertedCurrency } = useCurrency()
  return (
    <Card
      position="absolute"
      bottom={{ base: '2rem', md: '5rem' }}
      mx="auto"
      left="0"
      right="0"
      w="min(350px, 90%)"
      bg="_white"
      overflow="hidden"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      {...rest}
    >
      <HStack alignItems="flex-start">
        <Box position="relative" w="6rem" h="6rem">
          <Image
            src={accommodation.photo_url}
            alt={accommodation.name}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="100%"
          />
        </Box>
        <VStack
          p="1"
          justify="space-between"
          h="6rem"
          w="100%"
          alignItems="flex-start"
        >
          <Box w="full">
            <HStack w="full" justify="space-between">
              <Text fontSize="md" noOfLines={1}>
                {accommodation.name}
              </Text>
              <CloseButton
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected()
                }}
              />
            </HStack>
            <HStack mt="-1">
              <Stars amount={accommodation.stars} size="xs" />
              <Box
                borderRight="1px solid "
                borderColor="_lightgray"
                h="1rem"
                w="1px"
              />
              <Box
                px={1}
                bg={getColor(accommodation.review_score)[0]}
                borderRadius="md"
              >
                <Text
                  fontSize="2xs"
                  color={getColor(accommodation.review_score)[1]}
                >
                  {toFixedOneSingleDigit(accommodation.review_score)}
                </Text>
              </Box>
              <Text fontSize="2xs" color="_gray">
                {accommodation.review_score_word}
              </Text>
            </HStack>
          </Box>
          <HStack w="full" justify="flex-end" p="2">
            {accommodation.discount > 0.05 && (
              <Text as="s" color="primary" fontSize="xs">
                <Text color="_gray">
                  {getConvertedCurrency(
                    accommodation.price_per_night_without_discount
                  )}
                </Text>
              </Text>
            )}
            <Text fontSize="md">
              {getConvertedCurrency(accommodation.price_per_night)}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Card>
  )
}
