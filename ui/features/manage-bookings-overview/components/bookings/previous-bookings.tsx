import { Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import BookingsList from './bookings-list'
import { BookingResponse } from 'src/api/queries/get/manage-booking/previous-bookings/bookings.type'
import Button from 'ui/primitives/Button'
import { useSignedFetchInfinite } from 'src/api/useSignedFetchInfinite'
import getPreviousBookingsQuery from 'src/api/queries/get/manage-booking/previous-bookings/previousBookingsQuery'

export default function PreviousBookings() {
  const { data, isLoading, size, setSize, isValidating } =
    useSignedFetchInfinite<BookingResponse>(
      (idx) => getPreviousBookingsQuery(idx),
      { revalidateFirstPage: false }
    )

  const handleViewMore = () => {
    setSize(size + 1)
  }

  const bookings = data?.flatMap((item) => item.purchased_trips || [])
  return (
    <Box>
      {bookings?.length === 0 && !isLoading && (
        <Text
          color="_gray"
          st="new-manage-booking-page.upcoming.bookings.no.booking"
        />
      )}
      <BookingsList
        bookings={bookings}
        isLoading={isLoading}
        isValidating={isValidating}
      />
      {data?.[data.length - 1].has_more && !isLoading && !isValidating && (
        <VStack w="full">
          <Button asLink onClick={handleViewMore} id="view-more-trips">
            <Text st="common.view.more" />
          </Button>
        </VStack>
      )}
    </Box>
  )
}
