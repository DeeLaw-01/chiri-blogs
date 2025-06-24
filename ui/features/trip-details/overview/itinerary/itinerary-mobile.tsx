import { Box, VStack, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

import LinedVStack from 'ui/shared/lined-vstack'
import CityDaysInTitle from './city-days-in-title'
import { getSegmentElement } from './itinerary-segment'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import type { ItineraryContentType } from 'src/shared-types/trip-details.type'

type ItineraryMobileProps = {
  itinerary: ItineraryContentType[]
}

export default function ItineraryMobile({ itinerary }: ItineraryMobileProps) {
  const formatDate = useFormattedDate()

  return (
    <LinedVStack topMargin={20} pt="2" align="flex-start" minW={'30%'}>
      {itinerary.map((segment, idx) => {
        const isLast = idx === itinerary.length - 1

        return (
          <HStack
            key={idx}
            w="full"
            alignItems="flex-start"
            pb={!isLast && segment.type === 'accommodation' ? 5 : 0}
          >
            <Box
              mt="1"
              ml="-1"
              minW="14px"
              minH="14px"
              bg="_gray"
              border="1px"
              color="white"
              fontSize="2xs"
              textAlign="center"
              borderRadius="full"
              opacity={
                segment.type === 'transport' && segment.content.is_selected
                  ? 1
                  : 0
              }
            />
            <VStack alignItems="flex-start" w="full">
              {segment.type === 'transport' && segment.content.is_selected && (
                <>
                  <Heading as="h3" fontSize="md" fontWeight="normal">
                    {formatDate(segment.content.departure_time, true)}
                  </Heading>
                  <Text secondary mt={'-0.5rem'}>
                    <CityDaysInTitle
                      isLast={isLast}
                      dest={segment.content.destination}
                      length={segment.content.stay_length}
                      locode={segment.content.destination_locode}
                    />
                  </Text>
                </>
              )}

              {getSegmentElement(segment, idx, isLast)}
            </VStack>
          </HStack>
        )
      })}
    </LinedVStack>
  )
}
