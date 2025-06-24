import { chakraComponents } from 'chakra-react-select'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import SelectItem from 'ui/features/new-home/search/mobile-search/trip-search/drawers/arrival-drawer/select-item'

export default function Option({ data, ...props }: { data: LocationResult }) {
  const { updateSearchState } = useSearch()
  const { onewaySearch } = useSearchAtoms()

  const handleSetSingle = (value: LocationResult) => {
    const current = onewaySearch?.includeLocations ?? []
    const isExisting = current.some((loc) => loc.locode === value.locode)

    const updatedLocations = isExisting
      ? current.filter((loc) => loc.locode !== value.locode)
      : [...current, value]

    updateSearchState({
      ...onewaySearch,
      ...{ includeLocations: updatedLocations },
    })
  }

  return (
    // @ts-ignore
    <chakraComponents.Option {...props}>
      <SelectItem
        key={data.locode}
        isSelected={onewaySearch?.includeLocations
          ?.map((loc) => loc.locode)
          .includes(data.locode)}
        loc={data}
        handleSelect={(e) => handleSetSingle(e)}
      />
    </chakraComponents.Option>
  )
}
