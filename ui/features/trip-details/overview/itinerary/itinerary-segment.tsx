import ItineraryHotelCard from './itinerary-hotel-card'
import ItineraryTransportCard from './itinerary-transport-card'
import ItineraryNoTransportCard from './itinerary-no-transport-card'
import AccommodationSmallEmptyCard from '../../accommodation/accommodation-empty-cards/accommodation-small-empty-card'

export const getSegmentElement = (
  segment: any,
  idx: number,
  isLast: boolean
) => {
  switch (segment.type) {
    case 'transport':
      if (segment.content.is_selected)
        return <ItineraryTransportCard idx={idx} transport={segment.content} />
      else
        return (
          <ItineraryNoTransportCard
            isReturnFlight={isLast}
            transport={segment.content}
          />
        )
    case 'accommodation':
      if (segment.content.is_selected)
        return <ItineraryHotelCard idx={idx} hotel={segment.content} />
      else return <AccommodationSmallEmptyCard hotel={segment.content} />
  }
}
