import { LocationResponse } from 'src/api/queries/get/locationQuery/location.type'
import typeaheadSearchQuery from 'src/api/queries/post/typeaheadSearchQuery'
import { useSelectedLocation } from 'src/contexts/location'
import { useDebounce } from 'src/hooks/useDebounce'
import Select, { SelectProps } from 'ui/primitives/Select'
import { Option } from './option'
import { useFetchInfinite } from 'src/api/useFetchInfinite'

export default function LocationSelect({ ...rest }: SelectProps) {
  const [selectedCity] = useSelectedLocation()
  const [val, setVal] = useDebounce<string>('')

  const {
    data,
    isLoading: loading,
    size,
    setSize,
  } = useFetchInfinite<LocationResponse>((idx) => {
    return typeaheadSearchQuery(selectedCity.locode, val, idx)
  })

  const locations = data?.flat() || []

  return (
    <Select
      isLoading={loading}
      filterOption={() => true} // Disable the filter, since it's already queried on BE
      options={locations}
      onInputChange={(e) => setVal(e)}
      getOptionLabel={(e) => `${e.value}, ${e.country}`}
      components={{ Option: Option }}
      onMenuScrollToBottom={() => setSize(size + 1)}
      {...rest}
    />
  )
}
