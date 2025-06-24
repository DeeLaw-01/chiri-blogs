import { Box, HStack, VStack, ButtonProps } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'
import BottomSheet from 'ui/primitives/Bottom-sheet'
import AccommodationInfo from '../accommodation-info'
import theme from 'src/styles/theme'

type SelectButtonMobileProps = {
  hotel: HotelDetails
  totalPrice: string
} & ButtonProps

function SelectButtonMobile({
  hotel,
  totalPrice,
  ...rest
}: SelectButtonMobileProps) {
  const { viewOnly } = useAccommodationDetailsAtoms()
  return (
    <BottomSheet content={<AccommodationInfo hotel={hotel} />}>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        bg="white"
        minH={'4rem'}
        zIndex="1300"
        p={2}
        px={4}
        borderTop="1px"
        borderColor="_lightgray"
        w="full"
      >
        <HStack justifyContent="space-between">
          <VStack alignItems="flex-start" flex={'1'} gap="0">
            <HStack>
              <Text fontSize="1.35rem" color="_black" fontWeight="medium">
                {totalPrice}
              </Text>
            </HStack>
            <Text fontSize="xs" color="_gray" mt="-5px !important">
              <Text notag st="new-hotel-page:total.price.for" />
              <Text notag st="common:nights" sd={{ count: hotel.nights_at }} />
            </Text>
          </VStack>
          {!viewOnly && (
            <Button
              id="book-button"
              primary
              bgGradient={theme.gradients.primary}
              py={'6 !important'}
              {...rest}
            >
              <Text st="new-hotel-page:button.select" />
            </Button>
          )}
        </HStack>
      </Box>
    </BottomSheet>
  )
}

export default SelectButtonMobile
