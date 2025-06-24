import { HStack, StackProps } from '@chakra-ui/react'
import { useSearchModalsAtoms } from 'ui/features/new-home/search/hooks/useSearchModals'
import SelectItem from './select-item'
import { Dispatch, SetStateAction } from 'react'
import {
  Dates,
  Staylength,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { CustomRangePopover } from './custom-range-popover'
import { getData } from './data'
import useTranslation from 'src/hooks/useTranslation'

type StaylengthSelectProps = {
  dates: Dates
  setDates: Dispatch<SetStateAction<Dates>>
} & StackProps

export default function StaylengthSelect({
  dates,
  setDates,
  ...rest
}: StaylengthSelectProps) {
  const { t } = useTranslation()
  const { setShowStaylength } = useSearchModalsAtoms()
  const isCustom = typeof dates.stayLength === 'number'
  const { isMobile } = useResponsiveSizes()

  const isSelected = (value?: Staylength) => {
    if (isCustom && typeof value === 'number') return true
    return dates.stayLength === value
  }

  const handleSelect = (value: Staylength | undefined) => {
    setDates((prev) => ({
      ...prev,
      stayLength: value,
    }))
  }

  const handleClick = (value: Staylength | undefined) => {
    if (value === 1)
      setShowStaylength({ handleSelect: handleSelect, dates: dates })
    else handleSelect(value)
  }

  if (dates.exactDates) return <></>

  return (
    <HStack
      fontSize="xs"
      py={2}
      px={6}
      overflowX={{ base: 'scroll', md: 'auto' }}
      {...rest}
    >
      {getData(dates.stayLength, t).map((option) =>
        !isMobile && option.value === 1 ? (
          <CustomRangePopover
            key={option.value}
            customOption={option}
            isSelected={isSelected(option.value)}
            handleClick={handleClick}
            dates={dates}
          />
        ) : (
          <SelectItem
            key={option.value}
            item={option}
            selected={isSelected(option.value)}
            onClick={() => handleClick(option.value)}
          />
        )
      )}
    </HStack>
  )
}
