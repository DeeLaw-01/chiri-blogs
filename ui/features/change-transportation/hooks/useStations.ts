import { useSearchParams } from 'next/navigation'
import getStationsQuery from 'src/api/queries/get/change-transportation/getStationsQuery'
import { useFetch } from 'src/api/useFetch'

export default function useStations(
  origin: string,
  destination: string,
  vehicleType?: string
) {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')

  const {
    data: stations,
    error: stationsError,
    isLoading,
  } = useFetch(
    getStationsQuery(origin, destination, sessionId ?? '', vehicleType ?? '')
  )

  const getDepartureStations = () => {
    return stations?.origin.map((s) => ({
      value: s.id,
      label: s.name,
    }))
  }

  const getArrivalStations = () => {
    return stations?.destination.map((s) => ({
      value: s.id,
      label: s.name,
    }))
  }

  return {
    stations,
    stationsError,
    getArrivalStations,
    isLoading,
    getDepartureStations,
  }
}
