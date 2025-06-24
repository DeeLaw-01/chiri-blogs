import Map, { MapRef, Marker, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useState, useEffect, useRef } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { theme } from 'src/styles/theme'

import HotelIcon from '@/icons/checkout/hotel-icon.svg'
import CustomMarker from './custom-marker'
import { useResponsiveSizes } from 'src/contexts/responsive'

import { Transport } from 'src/shared-types/transport.type'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useTripDetailsAtoms } from '../trip-details/useTripDetailsAtoms'
import HotelMapCard from '../hotels-map/hotel-map-card'
import { CONFIG_SETTINGS } from 'src/config'

const navControlStyle = {
  right: 10,
  top: 10,
  zIndex: 10,
}
const colors = [
  'primary',
  '#177E89',
  '#120D31',
  '#80475E',
  '#416137',
  '#563440',
  '#07767B',
]

const initialViewState = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
  bearing: 0,
  pitch: 0,
}

type TripMapProps = {
  transportations: Transport[]
  height: string
  fade: boolean
  hotelLocations?: HotelDetails[]
  tripId?: number
}

export default function TripMap({
  transportations,
  height,
  fade,
  hotelLocations,
  tripId,
}: TripMapProps) {
  const { isMobile } = useResponsiveSizes()
  const mapRef = useRef<MapRef>()
  const [, setZoom] = useState(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [selectedHotel, setSelectedHotel] = useState<HotelDetails | null>(null)
  const { setShowHotelDetails, isAccommodationAdded } = useTripDetailsAtoms()

  const handleMapLoad = (locations) => {
    const map = mapRef?.current?.getMap()
    if (!map || !locations) return
    // prepare route array - add initial location to create round-trip
    let allLocations = transportations.map((loc) => [
      loc.city_location?.longitude ?? loc.airport_location?.longitude,
      loc.city_location?.latitude ?? loc.airport_location?.latitude,
    ])
    allLocations.push([
      locations[0].city_location?.longitude ??
        locations[0].airport_location?.longitude,
      locations[0].city_location?.latitude ??
        locations[0].airport_location?.latitude,
    ])

    // Animate translation to zoom based on first location
    if (
      locations &&
      locations[0]?.airport_location?.longitude &&
      locations[0]?.airport_location?.latitude
    ) {
      map.flyTo({
        center: [
          locations[0].airport_location.longitude,
          locations[0].airport_location.latitude,
        ],
        zoom: 3,
        speed: 0.9,
      })
    }

    if (map.getSource('route') !== undefined) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    if (map.getSource('route') === undefined && map.isStyleLoaded()) {
      // Draw map routes..
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: allLocations,
          },
        },
      })
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': theme.colors.primary,
          'line-width': 2,
          'line-dasharray': [3, 3],
        },
      })
    }
    setLoaded(true)
  }

  useEffect(() => {
    if (transportations) {
      handleMapLoad(transportations)
    }
  }, [transportations, mapRef])

  useEffect(() => {
    const map = mapRef?.current?.getMap()
    if (hotelLocations && hotelLocations[0]?.location?.longitude && map) {
      map.flyTo({
        center: [
          hotelLocations[0]?.location.longitude,
          hotelLocations[0]?.location.latitude,
        ],
        zoom: 3,
        speed: 0.9,
      })
    }
  }, [hotelLocations, mapRef])

  const getUniqueMax = (locs: Transport[]) => {
    // Get the maximum staylength to the marker if city is present multiple times
    return locs.filter((loc) => {
      const previous = locs.find((loc2) => loc2.origin === loc.origin)
      if (previous === loc) return true
      return (
        previous?.stay_length > Math.max(previous?.stay_length, loc.stay_length)
      )
    })
  }

  const onLoadMap = () => {
    handleMapLoad(transportations)
  }

  const renderMap = () => {
    return (
      <Map
        ref={mapRef}
        attributionControl={false}
        initialViewState={initialViewState}
        style={{ height: !height ? '100vh' : height }}
        onZoom={(e) => setZoom(e.viewState.zoom)}
        minZoom={3}
        onLoad={() => onLoadMap()}
        pitchWithRotate={false}
        dragRotate={false}
        logoPosition="top-left"
        mapStyle={CONFIG_SETTINGS.DEFAULT_MAP_STYLE}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
      >
        {!isMobile && (
          <NavigationControl position="bottom-right" style={navControlStyle} />
        )}
        {transportations && loaded && (
          <>
            {getUniqueMax(transportations).map((loc, idx) => (
              <Marker
                longitude={
                  loc.city_location?.longitude ??
                  loc.airport_location?.longitude
                }
                latitude={
                  loc.city_location?.latitude ?? loc.airport_location?.latitude
                }
                key={idx}
              >
                <CustomMarker
                  loc={loc}
                  length={transportations.length}
                  departure={transportations.slice(-1)[0] === loc}
                  date={
                    idx !== transportations.length - 1
                      ? new Date(transportations[idx].arrival_time)
                      : new Date(transportations[0].departure_time)
                  }
                  color={
                    colors[
                      (transportations.length - 1 - idx) % (colors.length - 1)
                    ]
                  }
                />
              </Marker>
            ))}
          </>
        )}

        {isAccommodationAdded &&
          hotelLocations?.length &&
          hotelLocations.map((loc, idx) => (
            <Marker
              key={idx}
              offset={[0, 0]}
              longitude={loc?.location.longitude}
              latitude={loc?.location.latitude}
              onClick={() => setSelectedHotel(loc)}
            >
              <IconButton
                _hover={{}}
                bg="#16ADAD"
                aria-label="Hotel"
                icon={
                  <HotelIcon
                    stroke={theme.colors._white}
                    fill={theme.colors._white}
                  />
                }
              ></IconButton>
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
              onOpenHotelView={() =>
                setShowHotelDetails({ hotel: selectedHotel })
              }
              onCloseMap={() => setSelectedHotel(null)}
            />
          </Box>
        )}
      </Map>
    )
  }
  if (!fade) return renderMap()

  return (
    <>
      <Box
        width="100%"
        height={!height ? '100vh' : height}
        zIndex="-1"
        marginBottom={fade && '-20vh'}
      >
        {renderMap()}
        <Box
          width="100%"
          height="10vh"
          position="absolute"
          transform="translateY(-98%)"
          background="linear-gradient(
          to top,
          #ffffff,
          rgba(255, 255, 255, 0.9) 15%,
          rgba(240, 240, 240, 0.35) 75%,
          rgba(255, 255, 255, 0) 100%
      
        )"
        ></Box>
      </Box>
    </>
  )
}
