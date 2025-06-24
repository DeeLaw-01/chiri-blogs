import { chakraComponents } from 'chakra-react-select'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import SelectItem from 'ui/features/new-home/search/mobile-search/trip-search/drawers/departure-drawer/select-item'

export function Option({ data, ...props }: { data: LocationResult }) {
  return (
    // @ts-ignore
    <chakraComponents.Option {...props}>
      <SelectItem key={data.locode} loc={data} />
    </chakraComponents.Option>
  )
}
