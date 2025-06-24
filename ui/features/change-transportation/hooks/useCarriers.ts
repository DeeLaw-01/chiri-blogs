import changeTransportationCarriersQuery from 'src/api/queries/get/change-transportation/changeTransportationCarriers'
import { useFetch } from 'src/api/useFetch'

export default function useCarriers(
  origin: string,
  destination: string,
  vehicleType?: string
) {
  const {
    data: carriers,
    error: carriersError,
    isLoading,
  } = useFetch(
    changeTransportationCarriersQuery(origin, destination, vehicleType ?? '')
  )

  const getMappedData = () => {
    return carriers?.map((c) => ({
      value: c.code,
      label: c.name,
    }))
  }

  return { carriers, carriersError, getMappedData, isLoading }
}
