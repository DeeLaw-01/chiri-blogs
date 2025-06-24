import { API_URL_HOTEL_SUGGESTION } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { Filters } from 'ui/features/change-accommodation/useChangeAccommodationAtoms'
import { SortType } from 'ui/features/change-transportation/utils/getSortedOptions'

export default function changeAccommodationQuery(
  tripId: string,
  position: number,
  sessionId: string,
  filters: Filters,
  sort: SortType,
  idx?: number,
  purchase_id?: string
) {
  const url = API_URL_HOTEL_SUGGESTION + '/suggestions'

  const body = {
    change_hotel: 'true',
    trip_id: tripId,
    position: position.toString(),
    session_id: sessionId,
    load_more_hotels: !!idx && idx > 0,
    // We don't really use page, because backend handle it, but it's here to differentiate the request, so useSWR doesn't ignore it.
    page: idx,
    filters: {
      budget_min: filters.budget_min,
      budget_max: filters.budget_max,
      mealplan: filters.mealplan,
      stars: filters.stars?.join(','),
      hotel_facilities: filters.amenities,
      min_review_score: filters.score,
      accommodation_type: filters.type,
      distance_to_city_center: filters.distance,
      name: filters.search,
      best_deals: filters.best_deals,
      top_left_coordinate: filters.top_left_coordinate,
      botom_right_coordinate: filters.bottom_right_coordinate,
    },
    sort: {
      order_by: sort.type,
      asc: sort.asc,
    },
    ...(purchase_id && { purchase_id: purchase_id }),
  }

  return { url, body, method: Method.POST }
}
