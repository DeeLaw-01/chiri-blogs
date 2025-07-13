import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import oneWayTestQuery from 'src/api/queries/post/onewayQuery'
import * as q from 'src/api/queries/ws/onewayWs/index'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import useMutation from 'src/api/useMutation'
import useWSFetch from 'src/api/useWSFetch'
import { usePathname } from 'src/i18n/router'
import generateUUID from 'src/utils/generateUUID'
import { objectsIsEqual } from 'src/utils/objectUtils'
import { HomeState } from '../../hooks/useHomeAtoms/types'
import { useOnewayAtoms } from './useOnewayAtoms'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { useSelectedLocation } from 'src/contexts/location'

export default function useOnewayEffects () {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams!.entries())
  const pathname = usePathname()
  const retryCount = useRef<number>(0)
  const typeQuery = searchParams.get('type')

  const callback = (data?: any) => {
    switch (data.type) {
      case OnewayResponseType.ONEWAY:
        setOneway(prev => [...prev, data.body])
        break
      case OnewayResponseType.TRIP:
        setOnewayTrips(prev => [...prev, data.body])
        break
      case OnewayResponseType.MODIFICATION:
        setModification(data.body)
        break
      case OnewayResponseType.END:
        handleEnd(data)
        break
      case OnewayResponseType.ERROR:
        handleEnd(data)
        break
      default:
        break
    }
  }
  const { trigger, unsubscribe, isLoading, data } = useWSFetch<any>(q, callback)
  const { trigger: triggerOneway } = useMutation(d => oneWayTestQuery(d))
  const { forceSearch, setForceSearch } = useHomeAtoms()
  const [selectedCity] = useSelectedLocation()

  const {
    setOneway,
    setModification,
    setOnewayLoading,
    previousQuery,
    setPreviousQuery,
    setOnewayTrips,
    oneway,
    onewayTrips,
    setShowLoadMore,
    loadMore,
    setLoadMore
  } = useOnewayAtoms()

  const getQuery = () => {
    if (pathname === '/') return query
    const category = pathname?.split('/')[1]
    return { ...query, categories: category }
  }

  useEffect(() => {
    if (!shouldFetch()) return

    handleSearch()
  }, [query, forceSearch])

  useEffect(() => {
    if (loadMore) handleSearch()
  }, [loadMore])

  const shouldFetch = () => {
    if (query.type && query.type !== HomeState.ONEWAY) return false
    const isEmpty = oneway.length === 0 && onewayTrips.length === 0
    if (isEmpty && !isLoading && retryCount.current < 2) {
      retryCount.current += 1
      return true
    }
    if (objectsIsEqual(previousQuery, query)) return false
    return true
  }

  const getInitialLocation = () => {
    if (query.initialLocation) return query.initialLocation
    return selectedCity?.locode
  }

  const reset = () => {
    setPreviousQuery(query)
    unsubscribe()
    setLoadMore(false)
    setModification([])
    if (!loadMore) setOnewayTrips([])
    setOneway([])
  }

  const handleSearch = () => {
    const newUuid = generateUUID()
    reset()
    setForceSearch(false)
    // Fetch triggers
    trigger(newUuid)
    const searchQuery = getQuery()

    triggerOneway({
      query: {
        ...searchQuery,
        load_more: loadMore,
        initialLocation: getInitialLocation()
      },
      uuid: newUuid
    })
  }

  useEffect(() => {
    if (!typeQuery) return
    setOnewayLoading(isLoading)
  }, [isLoading, typeQuery])

  const handleEnd = (data: any) => {
    setShowLoadMore(data.load_more)
    setOnewayLoading(false)
    unsubscribe()
  }
}
