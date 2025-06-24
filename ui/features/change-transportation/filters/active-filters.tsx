import { Wrap } from '@chakra-ui/react'

import {
  Filters,
  useChangeTransportationAtoms,
} from '../hooks/useChangeTransportationAtoms'
import { data as StopsData } from './filter-elements/stops'
import { data as ModeData } from './filter-elements/mode'
import getFiltersCount from '../utils/getFiltersCount'
import ActiveFilterButton from 'ui/shared/active-filter-button'

import useCarriers from '../hooks/useCarriers'
import useStations from '../hooks/useStations'

export default function ActiveFilters({ transport }) {
  const { filters, setFilters } = useChangeTransportationAtoms()

  const { getDepartureStations, getArrivalStations } = useStations(
    transport.origin_locode,
    transport.destination_locode
  )

  const { getMappedData: getCarriers } = useCarriers(
    transport.origin_locode,
    transport.destination_locode
  )

  if (getFiltersCount(filters) === 0) return <></>

  const hasValue = (key: keyof Filters) => {
    const value = filters[key]
    return Array.isArray(value) ? value.length > 0 : !!value
  }

  const getLabels = (key: keyof Filters, value: any) => {
    switch (key) {
      case 'stops':
        return StopsData.filter((d) => value.includes(d.value))
      case 'mode':
        return ModeData.filter((d) => value.includes(d.value))
      case 'carriers':
        return getCarriers().filter((d) => value.includes(d.value))
      case 'departure':
        return getDepartureStations().filter((item) => item.value === value)
      case 'arrival':
        return getArrivalStations().filter((item) => item.value === value)
    }
  }

  const removeFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(prev[key])
        ? prev[key].filter((v) => v !== value)
        : '',
    }))
  }

  return (
    <Wrap spacing={2} mb={2}>
      {Object.keys(filters).map((key: keyof Filters) => {
        if (!hasValue(key)) return
        return getLabels(key, filters[key])?.map((item: any, idx: number) => (
          <ActiveFilterButton
            key={idx}
            id={item.value}
            label={item?.label}
            onClick={() => removeFilter(key, item.value)}
          />
        ))
      })}
    </Wrap>
  )
}
