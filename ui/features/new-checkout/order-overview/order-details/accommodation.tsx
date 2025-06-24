import { Box, HStack } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Button from 'ui/primitives/Button'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

type AccommodationOrderDetailProps = {
  acc: HotelDetails
}
export default function AccommodationOrderDetail({
  acc,
}: AccommodationOrderDetailProps) {
  const { setShowAccommodationDetails } = useCheckoutAtoms()

  return (
    <HStack justify={'space-between'}>
      <HStack>
        <Box
          w="2.25rem"
          h="2.25rem"
          borderRadius="md"
          bg={{ base: '_white', md: '_lightestgray' }}
          pos="relative"
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
          overflow="hidden"
        >
          <Image src={acc.photo} fill alt={acc.name} />
        </Box>
        <Box>
          <Text noOfLines={1} fontSize="xs">
            {acc.name}
          </Text>
          <Text
            fontSize="2xs"
            color="_gray"
            st="common.nights"
            sd={{ count: acc.nights_at }}
          />
        </Box>
      </HStack>
      <Button
        onClick={() => {
          setShowAccommodationDetails({ accommodation: acc })
        }}
        fontSize="xs"
        fontWeight="normal"
        asLink
        id="view-more-itinerary"
      >
        <Text st="common.view.more" />
      </Button>
    </HStack>
  )
}
