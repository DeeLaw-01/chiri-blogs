import { Box } from '@chakra-ui/react'
import { Dates } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import Heading from 'ui/primitives/Heading'
import DateRangePicker from '../date-range-picker'
import { RangeKeyDict } from 'react-date-range'
import theme from 'src/styles/theme'
import DateTypeSelect from './date-type-select'
import ConfirmButton from '../../../mobile-search/search-view/confirm-button.tsx'
import { Dispatch, SetStateAction } from 'react'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type DatesViewMobileProps = {
  handleChange: (ranges: RangeKeyDict) => void
  dates: Dates
  setDates: Dispatch<SetStateAction<Dates>>
}

export default function DatesViewMobile({
  handleChange,
  dates,
  setDates,
}: DatesViewMobileProps) {
  const { setShowDates } = useSearchModalsAtoms()

  const getSelectionColor = (): string => {
    if (dates.flexibleDates) return theme.colors._purple
    if (dates.exactDates) return theme.colors._green
    return theme.colors.primary
  }

  return (
    <>
      <Box pb={'10rem'}>
        <Heading
          as="h1"
          fontWeight="normal"
          st="home-page.desktop.pill1.heading"
        />
        <DateTypeSelect dates={dates} setDates={setDates} />
        {dates.exactDates && (
          <Box mx={3} mt="3">
            <Alert info fontSize="xs" textAlign={'left'}>
              <Text st="home-page.search.view.dates.tip" />
            </Alert>
          </Box>
        )}
        <DateRangePicker
          ranges={[
            {
              startDate: dates?.windowStart || new Date(),
              endDate: dates?.windowEnd || new Date(),
              key: 'selection',
              color: getSelectionColor(),
            },
          ]}
          onChange={handleChange}
          showPreview={false}
        />
      </Box>
      <Box
        w="full"
        position="fixed"
        bottom="4rem"
        left="0"
        bg="_white"
        borderTop="1px"
        borderColor="_lightgray"
      >
        <ConfirmButton
          searchUpdate={dates}
          callback={() => setShowDates(false)}
        />
      </Box>
    </>
  )
}
