import Map, { MapRef, Marker, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useState, useEffect, useRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'

import { HotelDetails } from 'src/shared-types/hotel-details.type'
import HotelMapCard from './hotel-map-card'
import HotelMarker from './HotelMarker'
import { CONFIG_SETTINGS } from 'src/config'

const navControlStyle = {
  right: 10,
  top: 10,
  zIndex: 10,
}

const initialViewState = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
  bearing: 0,
  pitch: 0,
}

type HotelsMapProps = {
  hotelLocations?: HotelDetails[]
  onCloseMap: any
  onOpenHotelView: any
  isHotelsLoading: boolean
  hotel?: HotelDetails
}

export default function HotelsMap({
  hotelLocations,
  onCloseMap,
  onOpenHotelView,
  isHotelsLoading,
  hotel,
}: HotelsMapProps) {
  const { isMobile } = useResponsiveSizes()
  const mapRef = useRef<MapRef>()
  const [selectedHotel, setSelectedHotel] = useState<HotelDetails>(hotel)
  const [, setZoom] = useState(0)

  useEffect(() => {
    handleMapLoad(hotelLocations)
  }, [hotelLocations, mapRef])

  const handleMapLoad = (hotelLocations) => {
    const map = mapRef?.current?.getMap()
    if (!map || !hotelLocations) return
    if (hotelLocations && hotelLocations[0]?.location?.longitude && map) {
      map.flyTo({
        center: [
          hotelLocations[0]?.location.longitude,
          hotelLocations[0]?.location.latitude,
        ],
        zoom: 12,
        speed: 0.9,
      })
    }
  }

  const onLoadMap = () => {
    handleMapLoad(hotelLocations)
  }

  return (
    <Map
      ref={mapRef}
      attributionControl={false}
      initialViewState={initialViewState}
      style={{ height: '100vh', width: '100%' }}
      scrollZoom={true}
      onZoom={(e) => setZoom(e.viewState.zoom)}
      minZoom={1.6}
      pitchWithRotate={false}
      onLoad={() => onLoadMap()}
      dragRotate={false}
      logoPosition="bottom-right"
      mapStyle={CONFIG_SETTINGS.DEFAULT_MAP_STYLE}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
    >
      {!isMobile && <NavigationControl style={navControlStyle} />}
      {hotelLocations &&
        hotelLocations.length > 0 &&
        hotelLocations.map((loc, idx) => (
          <Marker
            key={idx}
            offset={[0, 0]}
            longitude={loc.location.longitude}
            latitude={loc.location.latitude}
          >
            <HotelMarker
              loc={loc}
              onSelectHotel={() => setSelectedHotel(loc)}
              selectedHotel={selectedHotel}
            />
          </Marker>
        ))}
      {selectedHotel && (
        <Box
          w="full"
          display="flex"
          position="absolute"
          justifyContent={'center'}
          bottom={{ base: '2rem', md: '7rem' }}
        >
          <HotelMapCard
            hotel={selectedHotel}
            onOpenHotelView={onOpenHotelView}
            onCloseMap={() => setSelectedHotel(null)}
          />
        </Box>
      )}
      {isHotelsLoading && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            position="absolute"
            width="100%"
            opacity={'0.6'}
            height="100%"
            bg="_white"
          />
          <Spinner color="primary" size={{ base: 'lg', md: 'xl' }} />
        </Box>
      )}
    </Map>
  )
}
