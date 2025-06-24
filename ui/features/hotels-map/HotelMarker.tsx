import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Badge from 'ui/primitives/Badge'
import useCurrency from 'src/hooks/useCurrency'
import { useState } from 'react'

const HotelMarker = ({
  loc,
  onSelectHotel,
  selectedHotel,
}: {
  loc: HotelDetails
  selectedHotel: HotelDetails
  onSelectHotel: (hotel: HotelDetails) => void
}) => {
  const { getConvertedCurrency } = useCurrency()
  const [hovering, setHovering] = useState(false)

  const shrinked =
    loc.review_score > 7 || hovering || loc.address === selectedHotel?.address
      ? false
      : true

  return (
    <Badge
      py={shrinked ? '3' : '2'}
      px="3"
      boxShadow={'lg'}
      border="1.6px solid"
      borderColor="#00000014"
      _hover={{ cursor: 'pointer' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      bg={loc.address === selectedHotel?.address ? 'secondary' : 'primary'}
      color={loc.address === selectedHotel?.address ? '_black' : '_white'}
      onClick={() => onSelectHotel(loc)}
    >
      {!shrinked && getConvertedCurrency(loc.price_hotel)}
    </Badge>
  )
}

export default HotelMarker
