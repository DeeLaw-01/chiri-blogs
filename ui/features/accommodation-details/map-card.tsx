import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox'
import Card from 'ui/primitives/Card'
import LocationDot from '../trip-details/overview/map-card/location-dot'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type HotelMapCardProps = {
  hotel: HotelDetails
}

export default function HotelMapCard({ hotel }: HotelMapCardProps) {
  return (
    <Card height="200px" overflow="hidden">
      <Map
        attributionControl={false}
        initialViewState={{
          latitude: hotel.location.latitude,
          longitude: hotel.location.longitude,
          zoom: 15,
        }}
        style={{ height: '100%', width: '100%' }}
        scrollZoom={true}
        minZoom={1.6}
        pitchWithRotate={false}
        dragRotate={false}
        logoPosition="bottom-right"
        mapStyle="mapbox://styles/trypcom/cl2ot66aj000714mf64vg55tc"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
      >
        <NavigationControl style={{ right: 10, top: 10, zIndex: 10 }} />
        <Marker
          offset={[0, 0]}
          longitude={hotel.location.longitude}
          latitude={hotel.location.latitude}
        >
          <LocationDot />
        </Marker>
      </Map>
    </Card>
  )
}
