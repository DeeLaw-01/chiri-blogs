import { Center } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { Dates } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import SegmentedSwitch from 'ui/primitives/SegmentedSwitch'

type DateTypeSelectProps = {
  dates: Dates
  setDates: Dispatch<SetStateAction<Dates>>
}

const options = [
  { label: 'home-page.search.range.anytime', value: 'anytime' },
  { label: 'home-page.step1.select.flexible', value: 'flexible' },
  { label: 'home-page.step1.select.exact', value: 'exact' },
]

export default function DateTypeSelect({
  dates,
  setDates,
}: DateTypeSelectProps) {
  const handleChange = (type: any) => {
    setDates((prev) => ({
      ...prev,
      exactDates: type === 'exact' ? true : undefined,
      flexibleDates: type === 'flexible' ? true : undefined,
      ...(type === 'anytime' && {
        windowStart: undefined,
        windowEnd: undefined,
      }),
      ...(type === 'exact' && {
        windowStart: dates.windowStart,
        windowEnd: dates.windowStart,
      }),
    }))
  }

  const getSelectedValue = () => {
    if (dates.exactDates) return 'exact'
    if (dates.flexibleDates || dates.windowStart) return 'flexible'
    return 'anytime'
  }

  return (
    <Center mt={3}>
      <SegmentedSwitch
        options={options}
        value={getSelectedValue()}
        onChange={handleChange}
      />
    </Center>
  )
}
