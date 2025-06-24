import { ChangeTransport } from 'src/shared-types/change-transport.type'
import { ChangeTransportationSortType } from '../options/sort/sort-options'
import { ChangeAccommodationSortType } from 'ui/features/change-accommodation/options/sort/sort-data'

export type SortType = {
  type: ChangeTransportationSortType | ChangeAccommodationSortType
  asc: boolean
}

export default function getSortedOptions(
  transports: ChangeTransport[],
  sortType: SortType
): ChangeTransport[] {
  return sortType.asc ? transports : [...transports].reverse()
}
