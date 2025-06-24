'use client'

import { Box, Center, Spinner, VStack } from '@chakra-ui/react'
import getUserProfilePreviousTripsDataQuery from 'src/api/queries/get/userPreviousTripsQuery'

import TripCard from 'ui/features/profile/trip-card'
import EmptySeatsBackground from 'ui/features/profile/empty-seats'
import { useSignedFetch } from 'src/api/useSignedFetch'
import { BookingResponse } from 'src/api/queries/get/manage-booking/previous-bookings/bookings.type'

export default function PreviousTrips() {
  const { data, isLoading } = useSignedFetch<BookingResponse>(
    getUserProfilePreviousTripsDataQuery()
  )

  return isLoading ? (
    <Center mt="10vh">
      <Spinner size="xl" color="primary" />
    </Center>
  ) : (
    <VStack spacing={8}>
      {data?.purchased_trips?.map((trip: any, idx: number) => {
        return (
          <Box w={'full'} key={idx}>
            <TripCard packageInfo={trip} />
          </Box>
        )
      })}
      {!isLoading && !data?.purchased_trips?.length && (
        <EmptySeatsBackground message={'empty.message.one'} />
      )}
    </VStack>
  )
}
