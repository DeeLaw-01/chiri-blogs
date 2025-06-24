import { chakraComponents } from 'chakra-react-select'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import SelectItem from 'ui/features/new-home/search/mobile-search/trip-search/drawers/departure-drawer/select-item'

export default function Option({ data, ...props }: { data: LocationResult }) {
  const { tripSearch } = useSearchAtoms()

  return (
    // @ts-ignore
    <chakraComponents.Option {...props}>
      <SelectItem
        key={data.locode}
        isSelected={tripSearch?.initialLocation?.locode === data.locode}
        loc={data}
      />
    </chakraComponents.Option>
  )
}
