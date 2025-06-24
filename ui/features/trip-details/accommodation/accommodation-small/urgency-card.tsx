import { Box } from '@chakra-ui/react'
import SmallAccommodationCard from './accommodation-small'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import InfoIcon from '@/icons/manage-booking/info-icon.svg'
import UrgencySticker from './urgency-sticker'
import theme from 'src/styles/theme'

type UrgencyCardProps = {
  hotel: HotelDetails
  onOpenHotelView: () => void
}

function UrgencyCard({ hotel, onOpenHotelView }: UrgencyCardProps) {
  return (
    <Box
      borderRadius="xl"
      w="full"
      bgGradient="linear-gradient(to-br, rgba(255, 155, 0, 0.7), rgba(255, 100, 0, 0.6))"
      boxShadow="rgba(255, 200, 0, 0.8) 0px 1px 5px"
      p={'0.18rem'}
      position={'relative'}
    >
      <SmallAccommodationCard hotel={hotel} onOpenHotelView={onOpenHotelView} />
      <UrgencySticker
        icon={
          <InfoIcon
            width="14"
            height="14"
            stroke={theme.colors._white}
            strokeWidth="2"
          />
        }
        discountPercentage={Math.round(hotel.discount * 100)}
      />
    </Box>
  )
}

export default UrgencyCard
