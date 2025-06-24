import { Box, HStack, Divider, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

import Stars from 'ui/shared/stars'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import Card, { CardProps } from 'ui/primitives/Card'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { getColor, getReviewText } from '../helpers'
import Image from 'ui/primitives/Image'
import useCurrency from 'src/hooks/useCurrency'

type TinyAccommodationCardProps = {
  hotel: HotelDetails
  onOpenHotelView: () => void
} & CardProps

export default function TinyAccommodationCard({
  hotel,
  onOpenHotelView,
  ...rest
}: TinyAccommodationCardProps) {
  const { getPrettyPrice, getConvertedCurrency } = useCurrency()

  const totalPrice = getPrettyPrice(
    getConvertedCurrency(hotel.price_hotel, {
      prettyPrice: false,
    }),
    false,
    true
  )

  return (
    <Card
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      onClick={onOpenHotelView}
      display={'flex'}
      flexDirection={'column'}
      my={2}
      h="100%"
      minW="300px"
      {...rest}
    >
      <HStack gap="0.2rem" alignItems="flex-start">
        <Box
          position="relative"
          h="6.5rem"
          w="6rem"
          overflow="hidden"
          borderTopLeftRadius={'lg'}
          borderBottomLeftRadius={'lg'}
        >
          <Image
            fill
            alt="Hotel image"
            src={hotel.photo_url}
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <VStack
          pl={2}
          pr="3"
          py="2"
          gap={'0.3rem'}
          mb="-3"
          w="full"
          h="full"
          justifyContent="space-between"
          alignItems="flex-start"
          maxW="calc(100% - 6rem)"
        >
          <HStack maxW="95%">
            <Heading
              as="h4"
              fontSize="md"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {hotel.name}
            </Heading>
          </HStack>
          <HStack>
            {hotel.review_score && (
              <HStack gap="0">
                <Stars pr="2" as="span" amount={hotel.stars} size="2xs" />
                <Box
                  bg={getColor(hotel.review_score)[0]}
                  borderRadius="md"
                  fontSize="2xs"
                  fontWeight="md"
                  color={getColor(hotel.review_score)[1]}
                  px={'2px'}
                  py={'1px'}
                >
                  {hotel.review_score?.toFixed(1) || '7.5'}
                </Box>
                <Text
                  fontSize="2xs"
                  textAlign="right"
                  color="_gray"
                  pl="1"
                  st={getReviewText(hotel.review_score)}
                />
              </HStack>
            )}
          </HStack>
          <Box h="full" />
          <Divider w="90%" margin="0 auto" />
          <HStack justifyContent={'space-between'} w="full">
            <Box>
              <Text fontSize="md" color="_black">
                {totalPrice}
              </Text>
              <Text
                fontSize="xs"
                color="_gray"
                mt="-2"
                textTransform={'lowercase'}
              >
                <Text notag st="common:for" />{' '}
                <Text
                  notag
                  st="common:nights"
                  sd={{ count: hotel.nights_at }}
                />
              </Text>
            </Box>
            <Box>
              <Button
                id="view-hotel"
                fontWeight="normal"
                fontSize="xs"
                rightIcon={
                  <Box _groupHover={{ mr: -1, ml: 1 }} transition="all .2s">
                    <RightArrowSmallIcon width="5px" h="6" />
                  </Box>
                }
                asLink
              >
                <Text notag st="common:view.more" />
              </Button>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Card>
  )
}
