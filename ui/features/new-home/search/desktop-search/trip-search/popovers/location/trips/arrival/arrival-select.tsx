import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import { useFetchInfinite } from 'src/api/useFetchInfinite'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Option from './option'
import { useDebounce } from 'src/hooks/useDebounce'
import useTranslation from 'src/hooks/useTranslation'
import Select from 'ui/primitives/Select'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'

type DepartureSearchInputProps = {
  handleSet: (location: LocationResult[]) => void
}

export default function ArrivalSelect({
  handleSet,
}: DepartureSearchInputProps) {
  const { tripSearch } = useSearchAtoms()
  const [val, setVal] = useDebounce<string>('')
  const { t } = useTranslation()
  const locode = tripSearch?.initialLocation?.locode

  const {
    data,
    isLoading: loading,
    size,
    setSize,
  } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(locode, val, idx)
  })

  const locations = data?.flat() || []

  return (
    <Select
      isMulti
      isLoading={loading}
      filterOption={() => true} // Disable the filter, since it's already queried on BE
      defaultValue={tripSearch?.includeLocations as LocationResult[]}
      value={tripSearch?.includeLocations as LocationResult[]}
      placeholder={t('home-page.advanced.search.input.placeholder')}
      options={locations}
      onInputChange={(e) => setVal(e)}
      onChange={(e) => handleSet(e as LocationResult[])}
      getOptionLabel={(e) => `${e.value}`}
      components={{ Option: Option }}
      onMenuScrollToBottom={() => setSize(size + 1)}
    />
  )
}
