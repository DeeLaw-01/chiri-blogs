import AccommodationCard from 'ui/features/trip-details/accommodation/accommodation-card'
import { VStack } from '@chakra-ui/react'
import { accommodations } from '../../data/accommodations'

export default function AccommodationContent() {
  return (
    <VStack>
      {accommodations.map((accommodation, idx: number) => (
        <AccommodationCard
          key={idx}
          hotel={accommodation}
          onOpenHotelView={() => {}}
        />
      ))}
    </VStack>
  )
}
