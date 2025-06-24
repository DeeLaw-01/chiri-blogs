import { HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import ExtraMenu from './extra-menu'
import BackButton from 'ui/features/trip-details/back-button'
// import BookmarkButton from 'ui/features/trip-details/bookmark-button'
import TripAlerts from 'ui/features/trip-details/trip-alerts'
import DesktopImageGrid from 'ui/shared/image-grid/desktop-image-grid'
import LocationIcon from '@/icons/new/map/location-dot.svg'
import type { TripDetailsResponseType } from 'src/api/queries/get/transportQuery/trip-details.type'

type DesktopTripHeaderProps = { trip: TripDetailsResponseType }

export default function DesktopTripHeader({ trip }: DesktopTripHeaderProps) {
  return (
    <>
      <HStack pt={4} justifyContent={'space-between'} w="full">
        <HStack>
          <BackButton />
          <Heading as="h1" fontWeight="normal" mr="2">
            {trip.title}
          </Heading>
        </HStack>
        <HStack spacing="1">
          {/* <BookmarkButton tripId={trip.id} /> */}
          <ExtraMenu trip={trip} />
        </HStack>
      </HStack>
      <HStack fontSize="sm" w="full" spacing={5} pl="50px">
        <HStack ml="-1" gap="0.2rem" alignItems="center" color="primary">
          <LocationIcon height="0.75rem" />
          <Text secondary>{trip.locations.join(', ')}</Text>
        </HStack>

        {trip.sustainable_trip && (
          <HStack>
            <Text as="span" mr="1">
              🌿
            </Text>
            <Text
              as="span"
              st="new-trip-page:sustainable"
              marginInlineStart={'0 !important'}
            />
          </HStack>
        )}
      </HStack>
      <TripAlerts trip={trip} mt="2" />

      <DesktopImageGrid images={trip.trip_media} />
    </>
  )
}
