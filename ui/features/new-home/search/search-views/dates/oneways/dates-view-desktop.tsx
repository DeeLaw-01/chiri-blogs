import { Dates } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

import { RangeKeyDict } from 'react-date-range'
import theme from 'src/styles/theme'

import { Dispatch, SetStateAction, useEffect } from 'react'

import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'
import { Box } from '@chakra-ui/react'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'

import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import useSearch from '../../../hooks/useSearch'
import DateTypeSelect from './date-type-select'
import DateRangePicker from '../date-range-picker'

type DatesViewDesktopProps = {
  handleChange: (ranges: RangeKeyDict) => void
  dates: Dates
  setDates: Dispatch<SetStateAction<Dates>>
}

export default function DatesViewDesktop({
  handleChange,
  dates,
  setDates,
}: DatesViewDesktopProps) {
  const { updateSearchState } = useSearch()
  const { search } = useSearchAtoms()
  const { state } = useHomeAtoms()

  const getSelectionColor = (): string => {
    if (dates.flexibleDates) return theme.colors._purple
    if (dates.exactDates) return theme.colors._green
    return theme.colors.primary
  }

  useEffect(() => {
    const stateSearch = getStateSearch(state, search)
    updateSearchState({ ...stateSearch, ...dates })
  }, [dates])

  return (
    <>
      <DateTypeSelect dates={dates} setDates={setDates} />
      <DateRangePicker
        showPreview={false}
        ranges={[
          {
            startDate: dates?.windowStart || new Date(),
            endDate: dates?.windowEnd || new Date(),
            key: 'selection',
            color: getSelectionColor(),
          },
        ]}
        onChange={handleChange}
      />
      {dates.exactDates && (
        <Box mx={3}>
          <Alert info icon fontSize="sm" textAlign={'left'}>
            <Text st="home-page.search.view.dates.tip" />
          </Alert>
        </Box>
      )}
    </>
  )
}
