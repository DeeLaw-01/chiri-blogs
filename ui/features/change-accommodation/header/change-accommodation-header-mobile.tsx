import { Box, HStack } from '@chakra-ui/react'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationHeaderMobileProps = {
  accommodation: HotelDetails
  onClose: () => void
}

export default function ChangeAccommodationHeaderMobile({
  accommodation,
  onClose,
}: ChangeAccommodationHeaderMobileProps) {
  return (
    <>
      <Heading
        as="h2"
        py={3}
        mt="8"
        mb="3"
        fontWeight="normal"
        st="hotel-info:hotel.alternatives.drawer.heading"
        sd={{ city: accommodation.city }}
      />
      <Box w={'calc(100% + 2.5rem)'} mt="-5" ml="-5">
        <HStack
          w="full"
          position="fixed"
          top="0"
          zIndex="1"
          justify="space-between"
          px={5}
          pt="5"
        >
          <CircleIconWrapper
            bg="_white"
            onClick={onClose}
            maxW="fit-content"
            alignSelf="flex-start"
          >
            <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
          </CircleIconWrapper>
        </HStack>
      </Box>
    </>
  )
}
