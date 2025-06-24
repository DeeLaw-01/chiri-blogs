import { Marker } from 'react-map-gl/mapbox'
import { Box } from '@chakra-ui/react'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import useCurrency from 'src/hooks/useCurrency'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type AccommodationMarkerProps = {
  accommodation: HotelDetails
  setSelected: (acc: HotelDetails) => void
  selected: HotelDetails | undefined
}
export default function AccommodationMarker({
  accommodation,
  setSelected,
  selected,
}: AccommodationMarkerProps) {
  const { hoverItem } = useChangeAccommodationAtoms()
  const { getConvertedCurrency } = useCurrency()

  let bookingId = accommodation.booking_id
  let isActive = hoverItem === bookingId || selected?.booking_id === bookingId

  return (
    <Marker
      key={accommodation.booking_id}
      offset={[0, 0]}
      longitude={accommodation.location.longitude}
      latitude={accommodation.location.latitude}
    >
      <Box
        position="relative"
        _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
        onClick={() => setSelected(accommodation)}
        cursor={isActive ? 'pointer' : 'initial'}
        bg={isActive ? 'primary' : '_white'}
        p={1}
        borderRadius="md"
        color={isActive ? '_white' : '_gray'}
        border="1px solid"
        borderColor={isActive ? '_white' : 'primary'}
        boxShadow="md"
        _after={{
          content: '""',
          position: 'absolute',
          top: '100%',
          right: '50%',
          marginRight: '-5px',
          width: 0,
          height: 0,
          borderTop: '5px solid white',
          borderColor: isActive ? 'primary' : '_white',
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderBottom: '5px solid transparent',
        }}
        _before={{
          content: '""',
          position: 'absolute',
          top: '100%',
          right: '50%',
          marginRight: '-6px',
          width: 0,
          height: 0,
          borderTop: '6px solid',
          borderColor: isActive ? '_white' : 'primary',
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
        }}
      >
        {getConvertedCurrency(accommodation.price_per_night)}
      </Box>
    </Marker>
  )
}
