import { Box } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

type ChangeAccommodationHeaderDesktopProps = {
  accommodation: HotelDetails
}

export default function ChangeAccommodationHeaderDesktop({
  accommodation,
}: ChangeAccommodationHeaderDesktopProps) {
  const { data } = useChangeAccommodationAtoms()
  const formatDate = useFormattedDate()

  const getCount = () => {
    if (data?.isLoading) return '...'
    if (data?.accommodations?.length === 0) return '0'
    if (data?.accommodations?.length === 30 && data.hasMoreHotels) return '30+'
    else return data?.accommodations?.length
  }

  return (
    <Box w="full">
      <Heading
        as="h2"
        py={3}
        fontWeight="normal"
        st="hotel-info:hotel.alternatives.drawer.heading"
        sd={{ city: accommodation.city }}
      />
      <Text
        color="_gray"
        fontSize="xs"
        mt="-0.5rem"
        mb="4"
        st={'common.search.results'}
        sd={{
          count: getCount(),
          search: `${formatDate(
            accommodation.check_in_date,
            false
          )} - ${formatDate(accommodation.check_out_date, false)}`,
        }}
      />
    </Box>
  )
}
