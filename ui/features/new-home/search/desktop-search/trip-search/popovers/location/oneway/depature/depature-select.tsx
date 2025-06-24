import {
  LocationResponse,
  LocationResult,
} from 'src/api/queries/get/locationQuery/location.type'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'
import { useSelectedLocation } from 'src/contexts/location'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Option from './option'
import { useDebounce } from 'src/hooks/useDebounce'
import useTranslation from 'src/hooks/useTranslation'
import Select from 'ui/primitives/Select'
import { useFetchInfinite } from 'src/api/useFetchInfinite'

type DepartureSearchInputProps = {
  handleSet: (location: LocationResult) => void
}

export default function DepartureSelect({
  handleSet,
}: DepartureSearchInputProps) {
  const { onewaySearch } = useSearchAtoms()
  const [selectedCity, setSelectedCity] = useSelectedLocation()
  const [val, setVal] = useDebounce<string>('')
  const { t } = useTranslation()

  const {
    data,
    isLoading: loading,
    size,
    setSize,
  } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(selectedCity.locode, val, idx, false)
  })

  const locations = data?.flat() || []

  const handleSelectOption = (e: LocationResult) => {
    setSelectedCity(e)
    handleSet(e)
  }

  return (
    <Select
      isLoading={loading}
      filterOption={() => true} // Disable the filter, since it's already queried on BE
      defaultValue={onewaySearch?.initialLocation ?? selectedCity}
      placeholder={t('home-page.advanced.search.input.placeholder')}
      options={locations}
      onInputChange={(e) => setVal(e)}
      onChange={(e) => handleSelectOption(e as LocationResult)}
      getOptionLabel={(e) => `${e.value}, ${e.country}`}
      components={{ Option: Option }}
      onMenuScrollToBottom={() => setSize(size + 1)}
    />
  )
}
