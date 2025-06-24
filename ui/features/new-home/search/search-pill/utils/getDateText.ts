import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import { TripSearch } from '../../hooks/useSearchAtoms/types/trip.types'

export default function getDateText(
  search: TripSearch,
  state: HomeState | undefined,
  format: Function,
  translations: Function
) {
  if (!search) return translations('home-page.search.range.anytime')
  if (!search.windowStart) return translations('home-page.search.range.anytime')

  const prepend = state !== HomeState.ONEWAY && search.flexibleDates ? '+' : ''
  const start = format(search.windowStart, false)
  const end = format(search.windowEnd, false)

  if (start === end && state === HomeState.ONEWAY) return `${start}`

  return `${prepend} ${start} - ${end}`
}
