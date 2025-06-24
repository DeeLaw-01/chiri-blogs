import Heading from 'ui/primitives/Heading'
import TinyAccommodationCard from '../trip-details/accommodation/accommodation-tiny/accommodation-tiny'
import { Box } from '@chakra-ui/react'
import HorizontalSlider from 'ui/shared/horizontal-slider'

export default function SimilarAccommodation({ hotel }) {
  return (
    <Box maxW="100%">
      <HorizontalSlider
        heading={
          <Heading as="h1" fontWeight="normal">
            Similar hotels you may like
          </Heading>
        }
        px={1}
        pb={2}
      >
        <TinyAccommodationCard hotel={hotel} onOpenHotelView={() => {}} />
        <TinyAccommodationCard hotel={hotel} onOpenHotelView={() => {}} />
        <TinyAccommodationCard hotel={hotel} onOpenHotelView={() => {}} />
      </HorizontalSlider>
    </Box>
  )
}
