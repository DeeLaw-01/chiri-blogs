import { useState, useEffect, useRef } from 'react'
import tripTopicQuery from 'src/api/queries/post/tripTopicQuery'
import useMutation from 'src/api/useMutation'
import useWSFetch from 'src/api/useWSFetch'
import generateUUID from 'src/utils/generateUUID'
import { useTripAtoms } from './useTripAtoms'
import * as q from 'src/api/queries/ws/tripWs'
import { objectsIsEqual } from 'src/utils/objectUtils'
import { HomeState } from '../../hooks/useHomeAtoms/types'
import { getSyncPackages } from 'src/api/queries/get/home/getSyncPackages'
import { usePathname } from 'src/i18n/router'
import { useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import {
  EndResponse,
  TripResponse,
  TripResponseType,
} from 'src/api/queries/ws/tripWs/trip.type'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { NonShownPackages } from 'src/tracking/non-shown-packages'
import { PackageDetails } from 'src/shared-types/package-details.type'
import { useSelectedLocation } from 'src/contexts/location'
import { mapTripSearch } from '../../utils/search/mappers/trip-search/mapTripSearch'
import { useSearchAtoms } from '../../search/hooks/useSearchAtoms/useSearchAtoms'

export default function useTripEffects() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams.entries())
  const locale = useLocale()
  const pathname = usePathname()
  const [uuid, setUuid] = useState<string>()
  const { forceSearch, setForceSearch } = useHomeAtoms()
  const [selectedCity] = useSelectedLocation()
  const retryCount = useRef<number>(0)

  const {
    setTrips,
    setTripsLoading,
    previousQuery,
    setPreviousQuery,
    setTripsModification,
    setShowLoadMore,
    loadMore,
    setLoadMore,
    trips,
  } = useTripAtoms()

  const { tripSearch, tripFilters } = useSearchAtoms()

  const callback = (data?: any) => {
    switch (data?.type) {
      case TripResponseType.TRIP:
        setTrips((prev: any) => [...prev, data.body])
        break
      case TripResponseType.MODIFICATION:
        setTripsModification(data.body)
        break
      case TripResponseType.END:
        if (data.trip_count > trips?.length) NonShownPackages() // Temporary tracking of non matching..
        handleEnd(data)
        break
      default:
        break
    }
  }

  const { trigger, unsubscribe, isLoading } = useWSFetch<TripResponse>(
    q,
    callback
  )
  const { trigger: triggerTrip } = useMutation((d) => tripTopicQuery(d, locale))
  const { trigger: triggerSync } = useMutation((d) => getSyncPackages(d))

  useEffect(() => {
    if (!shouldFetch()) return

    handleSearch()
  }, [query, forceSearch])

  useEffect(() => {
    // For load more to take latest param for dislike button
    if (loadMore) handleSearch(mapTripSearch({ ...tripSearch, ...tripFilters }))
  }, [loadMore])

  const shouldFetch = () => {
    if (query?.type && query.type !== HomeState.TRIP) return false
    if (!isLoading && trips.length === 0 && retryCount.current < 2) {
      retryCount.current += 1
      return true
    }
    if (objectsIsEqual(previousQuery, getQuery())) return false
    return true
  }

  const reset = () => {
    setPreviousQuery(getQuery())
    unsubscribe()
    setLoadMore(false)
    setTripsModification([])

    if (!loadMore) setTrips([])
  }

  // To get category from category pages
  const getQuery = () => {
    if (pathname === '/') return query
    const category = pathname?.split('/')[1]

    return {
      ...query,
      categories: category,
    }
  }

  const getInitialLocation = () => {
    if (query.initialLocation) return query.initialLocation
    return selectedCity?.locode
  }

  const handleSearch = (queryParam: any = getQuery()) => {
    const newUuid = generateUUID()
    setUuid(newUuid)
    reset()
    setForceSearch(false)

    // fetch triggers
    trigger(newUuid)

    triggerTrip({
      query: {
        ...queryParam,
        load_more: loadMore,
        last_shown_trip_id: trips?.map((t) => t.id),
        initialLocation: getInitialLocation(),
      },
      uuid: newUuid,
    })
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (trips?.length > 0) return
      unsubscribe()
      triggerSync(uuid, {
        onSuccess: (data) => {
          setTripsLoading(false)
          setTrips(data as PackageDetails[])
        },
      })
    }, 60000)

    return () => clearTimeout(timer)
  }, [trips])

  useEffect(() => {
    setTripsLoading(isLoading)
  }, [isLoading])

  const handleEnd = (data: EndResponse) => {
    setShowLoadMore(data.load_more)
    setTripsLoading(false)
    unsubscribe()
  }
}
