import { Transport } from 'src/shared-types/transport.type'
import { ItineraryContentType } from 'src/shared-types/trip-details.type'

export const getTransportSegments = (
  itinerary: ItineraryContentType[]
): Transport[] => {
  const segments = itinerary
    .filter((value) => value.type === 'transport')
    .map((x) => x.content)
  return segments
}
