import { Box } from '@chakra-ui/react'
import BookingCard from './booking-card'
import SkeletonBookingCard from './booking-card/skeleton-booking-card'
import { Booking } from 'src/api/queries/get/manage-booking/previous-bookings/bookings.type'
import { MotionBox } from 'ui/primitives/Motion'
import { Item } from './animation-variants'
import { AnimatePresence } from 'framer-motion'

type BookingsListProps = {
  bookings: Booking[] | undefined
  isLoading: boolean
  isValidating: boolean
}

export default function BookingsList({
  bookings,
  isLoading,
  isValidating,
}: BookingsListProps) {
  return (
    <Box>
      {isLoading && <SkeletonBookingCard />}
      {bookings?.map((b) => (
        <MotionBox
          w="full"
          key={b.id}
          variants={Item}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatePresence initial={false}>
            <BookingCard booking={b} />
          </AnimatePresence>
        </MotionBox>
      ))}
      {isValidating && <SkeletonBookingCard />}
    </Box>
  )
}
