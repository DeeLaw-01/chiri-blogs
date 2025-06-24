import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import Modal from 'ui/primitives/Modal'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { Box } from '@chakra-ui/react'
import BedIcon from '@/icons/trip-details-page/bed-icon.svg'
import theme from 'src/styles/theme'
import { CONFIG_SETTINGS } from 'src/config'

type AccommodationMapModalProps = {
  isOpen: boolean
  onClose: () => void
  hotel: HotelDetails
}

export default function AccommodationMapModal({
  isOpen,
  onClose,
  hotel,
}: AccommodationMapModalProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'full', md: '6xl' }}
        modalContentStyle={{
          overflow: 'hidden',
          margin: { base: '0', md: '16' },
        }}
        modalBodyStyle={{
          p: { base: '0 !important', md: 'initial' },
          position: 'relative',
        }}
      >
        <Map
          attributionControl={false}
          initialViewState={{
            latitude: hotel.location.latitude,
            longitude: hotel.location.longitude,
            zoom: 15,
          }}
          style={{ height: isMobile ? '100vh' : '85vh', zIndex: 0 }}
          minZoom={1.6}
          pitchWithRotate={false}
          dragRotate={false}
          logoPosition="top-left"
          mapStyle={CONFIG_SETTINGS.DEFAULT_MAP_STYLE}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        >
          {!isMobile && (
            <NavigationControl
              position="bottom-right"
              style={{ right: 10, top: 10, zIndex: 10 }}
            />
          )}
          <Marker
            offset={[0, 0]}
            longitude={hotel.location.longitude}
            latitude={hotel.location.latitude}
          >
            <Box
              bg="secondary"
              border="3px solid"
              borderColor="primary"
              p="2"
              borderRadius="full"
              aspectRatio={1 / 1}
              boxShadow="lg"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                top: '100%',
                left: '27%',
                borderTop: `7px solid ${theme.colors.primary}`,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
              }}
            >
              <BedIcon
                stroke={theme.colors.primary}
                width="1.5rem"
                height="1.5rem"
                strokeWidth="1.5"
              />
            </Box>
          </Marker>
        </Map>
      </Modal>
    </>
  )
}
