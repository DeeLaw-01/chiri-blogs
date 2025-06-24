import {
  TripFilters,
  TripSearch,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

export function getFilterLabel(
  key: keyof (TripSearch & TripFilters),
  t: any
): string {
  switch (key) {
    case 'includeLocations':
      return t('home-page.filter.arrival.locations')
    case 'avoidLocations':
      return t('home-page.trip.avoid.header')
    case 'categories':
      return t('common.categories')
    case 'windowEnd':
      return t('home-page.step1.select.exact')
    case 'trip_id':
      return t('home-page.filter.similar.trip')
    case 'travellingStyle':
      return t('home-page.step3.radiogroup.header')
    default:
      return ''
  }
}
