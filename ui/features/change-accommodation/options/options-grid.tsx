import { Box, SimpleGrid } from '@chakra-ui/react'
import {
  ChangeAccommodationDataAtomType,
  useChangeAccommodationAtoms,
} from '../useChangeAccommodationAtoms'
import SmallAccommodationCard from 'ui/features/trip-details/accommodation/accommodation-small/accommodation-small'
import BigAccommodationCard from 'ui/features/trip-details/accommodation/accommodation-big/accommodation-big'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationOptionsGridProps = {
  data: ChangeAccommodationDataAtomType
  onOpenAccommodation: (acc: HotelDetails) => void
}

export default function ChangeAccommodationOptionsGrid({
  data,
  onOpenAccommodation,
}: ChangeAccommodationOptionsGridProps) {
  const { grid, setHoverItem } = useChangeAccommodationAtoms()

  return (
    <SimpleGrid
      spacing={4}
      minChildWidth={grid ? 'min(100%, 22rem)' : '100%'}
      width="100%"
    >
      {data?.accommodations.map((acc) => {
        return (
          <Box
            key={acc.booking_id}
            onMouseEnter={() => setHoverItem(acc.booking_id)}
            onMouseLeave={() => setHoverItem('')}
          >
            {grid ? (
              <SmallAccommodationCard
                hotel={acc}
                onOpenHotelView={() => onOpenAccommodation(acc)}
              />
            ) : (
              <BigAccommodationCard
                hotel={acc}
                onOpenHotelView={() => onOpenAccommodation(acc)}
              />
            )}
          </Box>
        )
      })}
    </SimpleGrid>
  )
}
