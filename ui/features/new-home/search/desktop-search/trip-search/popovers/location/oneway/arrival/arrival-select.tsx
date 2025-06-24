import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Option from './option'
import { useDebounce } from 'src/hooks/useDebounce'
import useTranslation from 'src/hooks/useTranslation'
import Select from 'ui/primitives/Select'
import { useSelectedLocation } from 'src/contexts/location'
import { useFetchInfinite } from 'src/api/useFetchInfinite'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'

type DepartureSearchInputProps = {
  handleSet: (location: LocationResult[]) => void
}

export default function ArrivalSelect({
  handleSet,
}: DepartureSearchInputProps) {
  const { onewaySearch } = useSearchAtoms()
  const [val, setVal] = useDebounce<string>('')
  const { t } = useTranslation()
  const [selectedCity] = useSelectedLocation()

  const {
    data,
    isLoading: loading,
    size,
    setSize,
  } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(selectedCity?.locode, val, idx)
  })

  const locations = data?.flat() || []

  return (
    <Select
      isMulti
      isLoading={loading}
      filterOption={() => true} // Disable the filter, since it's already queried on BE
      defaultValue={onewaySearch?.includeLocations as LocationResult[]}
      value={onewaySearch?.includeLocations as LocationResult[]}
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
