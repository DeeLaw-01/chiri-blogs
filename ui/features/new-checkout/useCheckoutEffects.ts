'use client'

import { useFetch } from 'src/api/useFetch'
import { useCheckoutAtoms } from './useCheckoutAtoms'
import { useEffect } from 'react'
import checkFlightsQuery from 'src/api/queries/get/checkout/checkFlightsQuery'
import {
  BaggageInfo,
  CheckFlightsResponse,
} from 'src/api/queries/get/checkout/checkFlightsQuery/check-flights.type'
import { useSearchParams } from 'next/navigation'
import { Revalidator, RevalidatorOptions } from 'swr'
import { EecCheckoutDataLayer } from 'src/tracking'
import useCheckoutCart from './hooks/useCheckoutCart'
import {
  getAccommodationCartObject,
  getCheckInCartObject,
  getLuggageCartObject,
  getPayLaterCartObject,
  getTransportationCartObject,
} from './hooks/useCheckoutCart/helpers'
import { Step } from './hooks/useCheckoutSteps/step.type'
import generateUUID from 'src/utils/generateUUID'

export const useCheckoutEffects = () => {
  const searchParams = useSearchParams()
  const complete = searchParams.get('complete')
  const sessionId = searchParams.get('sessionId')

  const { initializeCart, addToCart } = useCheckoutCart()
  const {
    setLuggage,
    setSeats,
    passengers,
    setPassengers,
    setCompleteModal,
    setSteps,
    trip,
    session,
    setSession,
    setChangesModal,
    setSoldOutModal,
  } = useCheckoutAtoms()

  const handleCheckFlightError = (
    error: { statusCode: number },
    key: string,
    config: any,
    revalidate: Revalidator,
    { retryCount }: Required<RevalidatorOptions>
  ) => {
    if (error.statusCode !== 504) setSoldOutModal(true)
    if (error.statusCode === 504 && retryCount <= 3) revalidate({ retryCount })
  }

  const { data: luggage } = useFetch<CheckFlightsResponse>(
    !complete && trip && session
      ? checkFlightsQuery(
          trip.id,
          trip.price.price_transports + trip.price.price_hotels,
          session,
          sessionId ?? null
        )
      : null,
    { onErrorRetry: handleCheckFlightError }
  )

  const addLuggageToCart = (data: BaggageInfo) => {
    data?.adult.map((item) => {
      if (item.price !== 0 || !trip || item.type === 'personal_item') return
      addToCart({
        title: item.name,
        key: item.type,
        count: trip.passengers.total_passengers,
        price: item.price,
      })
    })
  }

  useEffect(() => {
    if (!session) setSession(generateUUID())
  }, [])

  useEffect(() => {
    if (!luggage?.success || !trip) return

    if (luggage.success) setLuggage(luggage.success.baggage_info)
    if (luggage.success) addLuggageToCart(luggage.success.baggage_info)
    if (luggage.changes) setChangesModal({ changes: luggage.changes })
    if (luggage.success) setSeats({ price: luggage.success.seats_price })
  }, [luggage])

  useEffect(() => {
    if (!trip || passengers.length > 0) return
    setPassengers([
      ...Array(trip.passengers.n_adults).fill({ category: 'adult' }),
      ...Array(trip.passengers.n_children).fill({ category: 'child' }),
      ...Array(trip.passengers.n_babies).fill({ category: 'infant' }),
    ])
  }, [trip])

  useEffect(() => {
    if (!trip) return

    setSteps([
      Step.Contact,
      ...Array(trip.passengers.total_passengers).fill(Step.Passenger),
      Step.Seats,
      Step.Payment,
    ])
  }, [trip])

  useEffect(() => {
    setCompleteModal(!!complete)
  }, [complete])

  useEffect(() => {
    if (!trip) return

    initializeCart([
      getTransportationCartObject(trip),
      getAccommodationCartObject(trip),
      getPayLaterCartObject(trip),
      getLuggageCartObject(trip),
      getCheckInCartObject(trip),
    ])
  }, [trip])

  useEffect(() => {
    EecCheckoutDataLayer()
  }, [])
}
