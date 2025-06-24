import { TripDetails } from 'src/shared-types/trip-details.type'
import { getTransportSegments } from 'ui/features/new-checkout/utils/getTransportSegments'

function packageSoldOutDataLayer(data: TripDetails): void {
  if (window.dataLayer === undefined) return

  let { title, id, price, itinerary } = data

  let tripSegments = getTransportSegments(itinerary)

  let trip_route_array: string[] = []
  tripSegments.map((item) => {
    return trip_route_array.push(item.location_code)
  })
  let trip_route = trip_route_array.join(',')

  window.dataLayer?.push({
    event: 'package_sold_out',
    package_id: id,
    package_name: title,
    package_price: price.price_transports.toFixed(1),
    package_route: trip_route,
  })
}

export { packageSoldOutDataLayer }
