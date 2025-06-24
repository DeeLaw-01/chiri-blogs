import { useChangeTransportationAtoms } from 'ui/features/change-transportation/hooks/useChangeTransportationAtoms'
import SortItem from '../sort-item'
import { ChangeTransportationSortType } from '../sort-options'

export default function OptionsButtonsDesktop() {
  const { data } = useChangeTransportationAtoms()

  if (!data) return <></>

  return (
    <>
      <SortItem
        type={ChangeTransportationSortType.RECOMMENDED}
        data={data.transports?.recommended_flights?.[0]}
        isLoading={data.isLoading}
      />
      <SortItem
        type={ChangeTransportationSortType.CHEAPEST}
        data={data.transports?.cheap_flights?.[0]}
        isLoading={data.isLoading}
      />
      <SortItem
        type={ChangeTransportationSortType.FASTEST}
        data={data.transports?.fast_flights?.[0]}
        isLoading={data.isLoading}
      />
    </>
  )
}
