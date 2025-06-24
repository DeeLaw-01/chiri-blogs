import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import { useDebounce } from 'src/hooks/useDebounce'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Option from './option'
import Select from 'ui/primitives/Select'
import useTranslation from 'src/hooks/useTranslation'
import { useFetchInfinite } from 'src/api/useFetchInfinite'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'

export default function AvoidLocationsFilter() {
  const { onewaySearch, setOnewayFilters, onewayFilters } = useSearchAtoms()
  const [searchInput, setSearchInput] = useDebounce<string>('')
  const { t } = useTranslation()
  const locode = onewaySearch?.initialLocation?.locode

  const {
    data,
    isLoading: loading,
    size,
    setSize,
  } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(locode, searchInput, idx)
  })

  const locations = data?.flat() || []

  const handleChange = (locations: LocationResult[]) => {
    setOnewayFilters((prev) => {
      delete prev.avoidLocations
      return { ...prev, ...(locations && { avoidLocations: locations }) }
    })
  }

  return (
    <Select
      isMulti
      isLoading={loading}
      filterOption={() => true} // Disable the filter, since it's already queried on BE
      defaultValue={onewayFilters?.avoidLocations as LocationResult[]}
      value={onewayFilters?.avoidLocations || ([] as LocationResult[])}
      options={locations}
      onInputChange={(e) => setSearchInput(e)}
      onChange={(e) => handleChange(e as LocationResult[])}
      getOptionLabel={(e) => `${e.value}`}
      components={{ Option: Option }}
      onMenuScrollToBottom={() => setSize(size + 1)}
      placeholder={t('home-page.advanced.search.avoid.locations.placeholder')}
    />
  )
}
