import Map, { LngLat, MapRef } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useCallback, useRef, useState } from 'react'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import AccommodationMarker from './accommodation-marker'
import AccommodationMapCard from './accommodation-map-card'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { CONFIG_SETTINGS } from 'src/config'

type AccommodationsMapViewProps = {
  onOpenAccommodation: (acc: HotelDetails) => void
}

const BASE_ZOOM = 13
export default function AccommodationsMapView({
  onOpenAccommodation,
}: AccommodationsMapViewProps) {
  const mapRef = useRef<MapRef | null>(null)
  const prevZoom = useRef<number>(BASE_ZOOM)
  const [selected, setSelected] = useState<HotelDetails>()
  const { data, setFilters } = useChangeAccommodationAtoms()

  const initialViewState = {
    latitude: data?.accommodations[0]?.location?.latitude,
    longitude: data?.accommodations[0]?.location?.longitude,
    zoom: BASE_ZOOM,
  }

  const handleMoveEnd = useCallback(() => {
    const bounds = mapRef.current?.getBounds()

    if (bounds) updateFilters(bounds.getSouthWest(), bounds.getNorthEast())
  }, [setFilters])

  const handleZoomEnd = useCallback(() => {
    const zoom = mapRef.current?.getZoom()

    if (!zoom || Math.abs(zoom - prevZoom.current) < 1) return

    prevZoom.current = zoom
    handleMoveEnd()
  }, [prevZoom])

  const updateFilters = (sw: LngLat, ne: LngLat) => {
    const top = { lat: ne.lat.toString(), lon: sw.lng.toString() }
    const bottom = { lat: sw.lat.toString(), lon: ne.lng.toString() }

    setFilters((prev) => ({
      ...prev,
      top_left_coordinate: top,
      bottom_right_coordinate: bottom,
    }))
  }

  return (
    <Map
      ref={mapRef}
      initialViewState={initialViewState}
      onDragEnd={() => handleMoveEnd()}
      onZoomEnd={() => handleZoomEnd()}
      attributionControl={false}
      style={{ height: '100dvh', width: '100%' }}
      minZoom={1.6}
      pitchWithRotate={false}
      dragRotate={false}
      logoPosition="bottom-right"
      mapStyle={CONFIG_SETTINGS.DEFAULT_MAP_STYLE}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
    >
      {data?.accommodations.map((acc) => (
        <AccommodationMarker
          key={acc.booking_id}
          accommodation={acc}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
      {selected && (
        <AccommodationMapCard
          accommodation={selected}
          setSelected={setSelected}
          onClick={() => onOpenAccommodation(selected)}
        />
      )}
    </Map>
  )
}
