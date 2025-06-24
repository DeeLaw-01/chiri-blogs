import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import getTransportQuery from 'src/api/queries/get/transportQuery'
import { useTripDetailsAtoms } from './useTripDetailsAtoms'
import {
  deleteSessionId,
  getSessionId,
  setSessionId,
} from 'src/utils/sessionIdHelper'
import { useScrollPosition } from 'src/hooks/primitives/useScrollPosition'
import { useNotification } from 'src/contexts/notification'
import { useFetch } from 'src/api/useFetch'
import useUpdateTrip from './hooks/useUpdateTrip'
import useSessionStorage from 'src/hooks/useSessionStorage'

export const useTripDetailsEffects = (id: string) => {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')
  const [hideEmailTrip, setHideEmailTrip] = useSessionStorage(
    `email-trip-${id}`,
    false
  )

  const { trip, setTrip, setCityInfo, setHotelsLoading } = useTripDetailsAtoms()

  const {
    data,
    error: tripError,
    isLoading: tripLoading,
    isValidating: tripValidating,
  } = useFetch(getTransportQuery(id, sessionId), {
    dedupingInterval: 0,
  })

  const { updateTripHandler } = useUpdateTrip()
  const handleAddAllHotels = async () => {
    setHotelsLoading(true)
    updateTripHandler(
      {
        trip_id: trip.data?.id!,
        position: 'all',
        type: 'accomodation',
        add: true,
      },
      (data) => {
        setHotelsLoading(false)
        setTrip({
          data: data.trip,
          isLoading: false,
          error: false,
          isValidating: false,
        })
      },
      () => {
        setHotelsLoading(false)
      }
    )
  }

  const { sendNotification } = useNotification()

  useEffect(() => {
    setTrip({
      data: data,
      error: tripError,
      isLoading: tripLoading,
      isValidating: tripValidating,
    })
  }, [tripLoading, tripError, data])

  useScrollPosition(
    ({ currPos }) => {
      if (hideEmailTrip) return
      if (Math.abs(currPos.y) > 1000) {
        sendNotification({
          type: 'email-trip',
          data: {
            tripId: id,
          },
        })
        setHideEmailTrip(true)
      }
    },
    [hideEmailTrip]
  )

  useEffect(() => {
    handleSessionId(searchParams.get('sessionId'))
    if (!trip.data) return

    !sessionId && searchParams.get('hotels') && handleAddAllHotels()
    sessionStorage.setItem('tripId', trip?.data.id)
  }, [trip, searchParams])

  const handleSessionId = (sessionId: string | null) => {
    let currId = getSessionId()
    if (currId && !sessionId) deleteSessionId()
    else sessionId && setSessionId(sessionId)
  }

  useEffect(() => {
    setCityInfo([])
  }, [])

  return { trip }
}
