import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { Dates } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

type SelectedDatesViewProps = {
  dates: Dates
}

export default function SelectedDatesView({ dates }: SelectedDatesViewProps) {
  const formatDate = useFormattedDate()
  const start = formatDate(dates.windowStart)
  const end = formatDate(dates.windowEnd)

  return (
    <>
      {(dates.exactDates || dates.flexibleDates || dates.windowStart) && (
        <HStack w="full" fontSize="sm" px={6} py={3}>
          <Box w="50%" borderRight="1px" borderColor="_lightgray">
            <Text color="_gray" fontSize="2xs" st="home-page.start.date" />

            <Text fontWeight="medium">{start ?? '-'}</Text>
          </Box>
          <Box w="50%">
            <Text color="_gray" fontSize="2xs" st="home-page.end.date" />

            <Text fontWeight="medium">{start === end ? '-' : end}</Text>
          </Box>
        </HStack>
      )}
    </>
  )
}
