import { useEffect } from 'react'
import { useManageBookingAtoms } from './useManageBookingAtoms'
import { useSearchParams } from 'next/navigation'
import { useFetch } from 'src/api/useFetch'
import { BookingType } from '../types/booking.type'
import getBookingQuery from 'src/api/queries/post/manage-booking/booking/getBookingQuery'

export const useManageBookingEffects = () => {
  const searchParams = useSearchParams()
  const bid = searchParams.get('bid')
  const email = searchParams.get('email')
  const { booking, setBooking, setLoading } = useManageBookingAtoms()

  useEffect(() => {
    if (!bid || !email || bid === booking?.booking_id) setBooking(undefined)
  }, [bid, email])

  const { data, isLoading } = useFetch<BookingType>(
    bid && email && bid !== booking?.booking_id
      ? getBookingQuery({ purchase_id: bid, email: email })
      : null
  )

  useEffect(() => {
    if (data) setBooking(data)
    setLoading(isLoading)
  }, [data, isLoading])

  return {}
}
