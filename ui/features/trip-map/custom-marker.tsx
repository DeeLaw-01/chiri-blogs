import { Box, Badge, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { getDate } from 'date-fns'

export default function CustomMarker({ loc, departure, date, color, length }) {
  const formatDate = useFormattedDate()

  return (
    <Box
      transition="all .2s"
      boxShadow="md"
      _hover={{
        transform: 'scale(1.02)',
      }}
      cursor="pointer"
    >
      <Badge
        backgroundColor="_white"
        variant="solid"
        fontSize={{ base: '.8em', md: '1em' }}
        borderRadius={8}
        px={2}
        padding="3px 4px"
        boxShadow="md"
      >
        <HStack>
          <Box
            bg={color}
            fontSize="12"
            padding="0.7em 1em"
            textAlign="center"
            fontWeight="600"
            borderRadius="8px"
            lineHeight="1.1"
          >
            <VStack textTransform="capitalize" spacing={1.1}>
              <span>{getDate(date)}</span>
              <span>{formatDate(date, false, false)}</span>
            </VStack>
          </Box>
          <VStack alignItems="left" padding={0} spacing={3}>
            <Text fontSize="12" color="_black" mt="1" mb="-3" fontWeight="600">
              {loc.locationName}
            </Text>
            {departure && length > 1 ? (
              <Text
                fontSize="10"
                color={color}
                mt="-1"
                fontWeight={400}
                st={`new-trip-page.map.departure.city`}
              />
            ) : (
              <Text
                fontSize="10"
                color={color}
                mt="-1"
                fontWeight={500}
                st="new-trip-page.day"
                sd={{ count: Math.max(1, loc.stay_length) }}
              />
            )}
          </VStack>
        </HStack>
      </Badge>
    </Box>
  )
}
