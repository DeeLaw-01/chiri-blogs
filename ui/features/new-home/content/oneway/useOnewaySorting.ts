import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { TripDetails } from 'src/shared-types/trip-details.type'
import { OnewaySortType } from '../../search/hooks/useSearchAtoms/types/oneway.types'

let priceAsc = true

export default function useOnewaySorting(
  oneway: TripDetails[],
  setOneway: Dispatch<SetStateAction<TripDetails[]>>
) {
  const [sortType, setSortType] = useState<any>()

  useEffect(() => {
    if (setOneway?.length! > 0) return
    if (sortType) sort(sortType)
  }, [oneway?.length])

  const sortByPrice = (arr: TripDetails[]) =>
    arr.sort((a, b) =>
      priceAsc
        ? parseFloat(a.price.price_transports.toString()) -
          parseFloat(b.price.price_transports.toString())
        : parseFloat(b.price.price_transports.toString()) -
          parseFloat(a.price.price_transports.toString())
    )

  const sortByDepartureTime = (
    arr: TripDetails[],
    isAscending: boolean = true
  ) =>
    arr.sort((a, b) => {
      const aTime = getTimeValue(a.itinerary[0].content.departure_time)
      const bTime = getTimeValue(b.itinerary[0].content.departure_time)
      return isAscending ? aTime - bTime : bTime - aTime
    })

  const sortByDuration = (arr: TripDetails[]) =>
    arr.sort(
      (a, b) =>
        a.itinerary[0].content.duration - b.itinerary[0].content.duration
    )

  const getTimeValue = (dateTime: string) => {
    const timePart = dateTime.split('T')[1]
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  const sort = (input: OnewaySortType) => {
    let sortedArray = [...oneway]
    setSortType(input)
    switch (input) {
      case OnewaySortType.PriceAsc:
        sortedArray = sortByPrice(sortedArray)
        break
      case OnewaySortType.EarlyDeparture:
        sortedArray = sortByDepartureTime(sortedArray, true)
        break

      case OnewaySortType.LateDeparture:
        sortedArray = sortByDepartureTime(sortedArray, false)
        break

      case OnewaySortType.LeastDuration:
        sortedArray = sortByDuration(sortedArray)
        break

      default:
        break
    }
    setOneway(sortedArray)
  }

  return { sortType, sort, setSortType }
}
