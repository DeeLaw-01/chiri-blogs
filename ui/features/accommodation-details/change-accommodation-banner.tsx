import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useTripDetailsAtoms } from '../trip-details/useTripDetailsAtoms'
import HotelIllustration from 'ui/icons/hotel/hotel-illustaration-two.svg'
import Card, { CardProps } from 'ui/primitives/Card'

type ChangeAccommodationBannerProps = {
  hotel: HotelDetails
} & CardProps

function ChangeAccommodationBanner({
  hotel,
  ...rest
}: ChangeAccommodationBannerProps) {
  const { setShowChangeAccommodation, setShowHotelDetails } =
    useTripDetailsAtoms()
  return (
    <Card
      p={3}
      mt="2"
      boxShadow={'none'}
      border="1px solid"
      borderColor="_lightgray"
      role="group"
      _hover={{ cursor: 'pointer' }}
      onClick={() => {
        setShowChangeAccommodation({ hotel: hotel })
        setShowHotelDetails({})
      }}
      {...rest}
    >
      <HStack alignItems="flex-start">
        <Box mt="1">
          <HotelIllustration width="45" height="45" />
        </Box>

        <VStack alignItems="flex-start" gap="0" lineHeight="1.4">
          <Text
            fontWeight="medium"
            fontSize="sm"
            st="new-hotel-page.change.hotel.banner.heading"
          />

          <Text color="_gray" fontSize="xs">
            <Text st="new-hotel-page.change.hotel.banner.description" notag />
            {'  '}
            <Button
              asLink
              arrow
              fontSize="xs"
              fontWeight="normal"
              id="details-change-accommodation"
            >
              <Text notag st="common:general.change" />
            </Button>
          </Text>
        </VStack>
      </HStack>
    </Card>
  )
}

export default ChangeAccommodationBanner
