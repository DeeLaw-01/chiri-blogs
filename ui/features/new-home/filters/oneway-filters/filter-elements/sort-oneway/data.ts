import { OnewaySortType } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/oneway.types'

export const data = [
  {
    value: OnewaySortType.PriceAsc,
    label: 'flight-info.sort.type.lowest.price',
  },
  {
    value: OnewaySortType.EarlyDeparture,
    label: 'flight-info.sort.type.early.departure',
  },
  {
    value: OnewaySortType.LateDeparture,
    label: 'flight-info.sort.type.late.departure',
  },
  {
    value: OnewaySortType.LeastDuration,
    label: 'flight-info.sort.type.least.duration',
  },
]
