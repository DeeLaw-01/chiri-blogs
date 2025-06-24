import changeTransportationQuery from 'src/api/queries/get/change-transportation/changeTransportationQuery'
import { useChangeTransportationAtoms } from './useChangeTransportationAtoms'
import changeTransportationDates from 'src/api/queries/get/change-transportation/changeTransportationDates'
import { useEffect } from 'react'
import { Transport } from 'src/shared-types/transport.type'
import { DateItemType } from '../header/change-transportation-dates'
import { ChangeTransportResponseType } from 'src/shared-types/change-transport.type'
import { useFetch } from 'src/api/useFetch'
import { useSearchParams } from 'next/navigation'

export const useChangeTransportationEffects = (transport: Transport) => {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { filters, setFilters, availableDates, setAvailableDates, setData } =
    useChangeTransportationAtoms()

  // Fetch the transports. Refetches on filter changes
  const {
    data: transports,
    isLoading: transportsLoading,
    error: transportsError,
    isValidating: transportsValidating,
  } = useFetch<ChangeTransportResponseType>(
    filters.date && filters.date !== ''
      ? changeTransportationQuery(
          transport.trip_id,
          transport.position,
          filters,
          sessionId ?? ''
        )
      : null
  )

  // Fetch the available dates. (Check on filters.date to secure the initial state is set in the useEffect)
  const {
    data: dates,
    isLoading: datesLoading,
    error: datesError,
  } = useFetch<DateItemType[]>(
    filters.date &&
      changeTransportationDates(
        transport.trip_id,
        transport.position,
        filters,
        sessionId
      )
  )

  // Used for the date-selector. We need the initial date on the transport object.
  useEffect(() => {
    if (!filters.date)
      setFilters((prev) => ({ ...prev, date: transport.departure_time }))
  }, [filters])

  // To improve UX (big delay on endpoint) keep the available dates and only update the prices of each.
  useEffect(() => {
    if (!availableDates && dates) setAvailableDates(dates)
    else {
      const newDates = availableDates?.map((curr) => {
        if (curr.price_dif === 0) return curr
        const val = dates?.find((d) => d.date === curr.date)
        return {
          ...curr,
          price_dif: val?.price_dif,
          increase: val?.increase,
        }
      })

      setAvailableDates(newDates)
    }
  }, [dates])

  useEffect(() => {
    setData({
      transports: transports,
      isLoading: transportsLoading,
      error: transportsError,
      isValidating: transportsValidating,
    })
  }, [transports, transportsLoading, transportsError, transportsValidating])

  return {
    transports,
    transportsError,
    transportsLoading,
    dates,
    datesLoading,
    datesError,
  }
}
