import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'
import SelectItem, { SelectItemOption } from './select-item'
import { useSearchModalsAtoms } from 'ui/features/new-home/search/hooks/useSearchModals'
import StaylengthForm from '../staylength-form'
import {
  Staylength,
  Dates,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import Text from 'ui/primitives/Text'

export function CustomRangePopover({
  customOption,
  isSelected,
  handleClick,
  dates,
}: {
  customOption: SelectItemOption
  isSelected: boolean
  handleClick: (value: Staylength | undefined) => void
  dates: Dates
}) {
  const initial = typeof dates.stayLength === 'number' ? dates.stayLength : 1

  const { showStaylength, setShowStaylength } = useSearchModalsAtoms()

  const handleConfirm = (amount: any) => {
    showStaylength?.handleSelect(amount)
    setShowStaylength(null)
  }

  return (
    <Popover
      isOpen={!!showStaylength}
      placement="top"
      onClose={() => setShowStaylength(null)}
    >
      <PopoverTrigger>
        <Box>
          <SelectItem
            item={customOption}
            selected={isSelected}
            onClick={() => handleClick(customOption.value)}
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text st="home-page.search.view.dates.stay.length.popover.heading" />
        </PopoverHeader>
        <PopoverBody>
          <StaylengthForm handleConfirm={handleConfirm} initial={initial} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
