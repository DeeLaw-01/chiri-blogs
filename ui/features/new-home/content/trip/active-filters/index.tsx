import { GridItem, Wrap } from '@chakra-ui/react'
import ActiveFilterButton from 'ui/shared/active-filter-button'
import { useSearchAtoms } from '../../../search/hooks/useSearchAtoms/useSearchAtoms'
import {
  TripFilters,
  TripSearch,
} from '../../../search/hooks/useSearchAtoms/types/trip.types'
import { useTripAtoms } from '../useTripAtoms'
import useSearch from '../../../search/hooks/useSearch'
import { mapTripSearch } from '../../../utils/search/mappers/trip-search/mapTripSearch'
import { getFilterLabel } from './getFilterLabel'
import useTranslation from 'src/hooks/useTranslation'

type FilterKey = keyof (TripSearch & TripFilters)

export default function ActiveFilters() {
  const { tripsModification } = useTripAtoms()
  const { t } = useTranslation()
  const { tripFilters, tripSearch, setTripSearch, setTripFilters } =
    useSearchAtoms()
  const { makeSearch } = useSearch()

  const search: Record<string, unknown> = {
    ...tripSearch,
    ...tripFilters,
  }

  const hasValue = (value: any) => {
    return Array.isArray(value) ? value.length > 0 : !!value
  }

  const updateSearchAndRun = (updated: Partial<TripSearch & TripFilters>) => {
    const query = mapTripSearch({
      ...tripSearch,
      ...tripFilters,
      ...updated,
    })
    makeSearch(query)
  }

  const handleRemoveTripSearch = (key: keyof TripSearch) => {
    setTripSearch((prev) => {
      const updated = { ...prev, [key]: undefined }
      if (key === 'windowEnd') {
        updated.windowStart = undefined
      }
      updateSearchAndRun({
        [key]: undefined,
        ...(key === 'windowEnd' && { windowStart: undefined }),
      })
      return updated
    })
  }

  const handleRemoveTripFilter = (key: keyof TripFilters) => {
    setTripFilters((prev) => {
      const updated = { ...prev, [key]: undefined }
      updateSearchAndRun({ [key]: undefined })
      return updated
    })
  }

  const handleRemoveFilter = (key: FilterKey) => {
    if (key in tripSearch) {
      handleRemoveTripSearch(key as keyof TripSearch)
    } else if (key in tripFilters) {
      handleRemoveTripFilter(key as keyof TripFilters)
    }
  }

  if (!tripsModification.length) return <></>

  return (
    <GridItem gridColumn="1 / -1">
      <Wrap spacing={2} mb={2}>
        {Object.entries(search)
          .filter(([, value]) => hasValue(value))
          .map(([key]) => {
            const typedKey = key as FilterKey
            const label = getFilterLabel(typedKey, t)
            if (!label) return <></>
            return (
              <ActiveFilterButton
                key={typedKey}
                id={typedKey}
                onClick={() => handleRemoveFilter(typedKey)}
                label={label}
              />
            )
          })}
      </Wrap>
    </GridItem>
  )
}
