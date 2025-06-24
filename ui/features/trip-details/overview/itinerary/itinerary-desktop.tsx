import { Box, VStack, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'

import CityDaysInTitle from './city-days-in-title'
import LinedVStack from 'ui/shared/lined-vstack'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { ItineraryContentType } from 'src/shared-types/trip-details.type'
import { getSegmentElement } from './itinerary-segment'

type ItineraryDesktopProps = {
  itinerary: ItineraryContentType[]
}

export default function ItineraryDesktop({ itinerary }: ItineraryDesktopProps) {
  const formatDate = useFormattedDate()

  return (
    <VStack w="full" gap={0}>
      {itinerary.map((segment, idx) => {
        const isLast = idx === itinerary.length - 1

        return (
          <HStack
            key={idx}
            w="full"
            mt="-5px !important"
            alignItems="flex-start"
          >
            <LinedVStack
              pt="2"
              w="full"
              left="70%"
              align="flex-start"
              topMargin={idx === 0 ? 12 : 0}
            >
              <HStack alignItems={'flex-start'} pb={!isLast ? 2 : 0} w="full">
                <Box
                  minW="13px"
                  minH="13px"
                  bg={'_gray'}
                  border="1px"
                  borderRadius="full"
                  mt="1"
                  ml="-3px"
                  color="white"
                  fontSize="2xs"
                  textAlign="center"
                  opacity={
                    segment.type === 'transport' && segment.content.is_selected
                      ? 1
                      : 0
                  }
                />
                <VStack
                  w="full"
                  position="relative"
                  alignItems="flex-start"
                  left="calc(-100% - 25px)"
                >
                  {getSegmentElement(segment, idx, isLast)}
                </VStack>
              </HStack>
            </LinedVStack>

            <VStack
              w="30%"
              pt="2"
              minW="30%"
              pl="20px"
              zIndex="10"
              color="_darkgray"
              alignItems="flex-start"
            >
              {segment.type === 'transport' && segment.content.is_selected && (
                <>
                  <Heading as="h4" fontWeight="normal">
                    {formatDate(segment.content.departure_time, true)}
                  </Heading>
                  <Text secondary mt="-2px !important">
                    <CityDaysInTitle
                      isLast={isLast}
                      dest={segment.content.destination}
                      length={segment.content.stay_length}
                      locode={segment.content.destination_locode}
                    />
                  </Text>
                </>
              )}
            </VStack>
          </HStack>
        )
      })}
    </VStack>
  )
}
