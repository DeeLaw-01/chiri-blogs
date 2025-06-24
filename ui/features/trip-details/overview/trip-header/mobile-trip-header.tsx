import { Box, HStack, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MotionBox } from 'ui/primitives/Motion'
import BackButton from '../../back-button'
// import ExtraMenu from './extra-menu'
// import BookmarkButton from 'ui/features/trip-details/bookmark-button'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import TripAlerts from 'ui/features/trip-details/trip-alerts'
import useHistory from 'src/hooks/useHistory'
import LocationDot from '@/icons/new/map/location-dot.svg'
import type { TripDetailsResponseType } from 'src/api/queries/get/transportQuery/trip-details.type'
import VideoImage from 'ui/primitives/VideoImage'

type MobileTripHeaderProps = { trip: TripDetailsResponseType }

export default function MobileTripHeader({ trip }: MobileTripHeaderProps) {
  const { history } = useHistory()

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-200%'])

  return (
    <>
      <HStack
        p={5}
        position="absolute"
        top={history.length <= 1 ? '16' : '0'}
        left="0"
        zIndex="1"
        justifyContent={'space-between'}
        w="full"
      >
        <BackButton />
        {/* <BookmarkButton tripId={trip.id} /> */}
      </HStack>
      <MotionBox style={{ y: imageY }}>
        <FullScreenCarousel
          images={trip.trip_media.map((img) => img.src)}
          currentImageIndex={0}
        >
          <Box
            position="relative"
            h="40vh"
            borderBottomRadius={20}
            overflow="hidden"
          >
            <VideoImage
              fill
              alt="city-image"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectFit: 'cover' }}
              src={trip.trip_media[0].src}
            />
          </Box>
        </FullScreenCarousel>
      </MotionBox>
      <Box position="relative" bg="_white" zIndex="999" pt="-5">
        <HStack justifyContent={'space-around'} alignItems="flex-start">
          <MotionBox
            boxShadow="lg"
            borderRadius="lg"
            w="87%"
            bg="white"
            mt="-7"
            mb="5"
            zIndex="10"
            style={{ y: textY }}
          >
            <VStack p={3} alignItems="flex-start" gap="0">
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                w="full"
              >
                <Heading as="h2" fontWeight="medium" mr="2">
                  {trip.title}
                </Heading>
              </HStack>
              <HStack mt="0 !important" fontSize="xs" w="full" spacing={3}>
                <HStack gap="0.2rem" color="primary">
                  <LocationDot height="0.7rem" />
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
            </VStack>
          </MotionBox>
        </HStack>
      </Box>
      <TripAlerts trip={trip} px={4} />
    </>
  )
}
