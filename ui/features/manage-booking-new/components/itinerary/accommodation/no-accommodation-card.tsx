import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import HotelIllustration from 'ui/icons/hotel/hotel-illustaration-two.svg'
import Button from 'ui/primitives/Button'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'

export default function NoAccommodationCard({
  destination,
}: {
  destination: string
}) {
  const { navigateToMarketplace } = useNavigateToMarketplace()
  return (
    <Box
      p={2}
      bg="_lightestgray"
      border="1px dashed"
      borderRadius="lg"
      color="gray.400"
      mb="8"
      mt="-2"
    >
      <HStack justify="flex-start">
        <Box w="60px" maxW="20%" filter="grayscale(100%)">
          <HotelIllustration width="100%" />
        </Box>
        <VStack
          alignItems="flex-start"
          gap={{ base: '0', md: 'initial' }}
          pl={{ base: 0, md: 1 }}
        >
          <Text
            fontSize={{ base: '2xs', md: 'sm' }}
            fontWeight="medium"
            st="new-manage-booking-page.no.accommodation.banner.heading"
            sd={{ destination }}
          />

          <Text fontSize={{ base: '2xs', md: 'xs' }}>
            <Text st="new-manage-booking-page.no.accommodation.banner.description" />
            <Button
              display={'flex'}
              role="group"
              fontWeight="normal"
              asLink
              arrow
              id="add-accommodation-booking"
              fontSize="inherit"
              onClick={() => navigateToMarketplace('stays')}
            >
              <Text st="common.add.accomodation" />
            </Button>
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
