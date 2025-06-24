import Text from 'ui/primitives/Text'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import {
  Box,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import { useEffect, useState } from 'react'
import useTranslation from 'src/hooks/useTranslation'

const MAX_BUDGET = 1000

export default function BudgetFilter() {
  const { getConvertedCurrency } = useCurrency()
  const { filters, setFilters } = useChangeAccommodationAtoms()
  const [sliderVal, setSliderVal] = useState<number[]>([0, MAX_BUDGET])
  const { t } = useTranslation()

  const handleChange = (val: number[]) => {
    setFilters((prev) => ({
      ...prev,
      budget_min: val[0].toString(),
      budget_max: val[1].toString(),
    }))
  }

  const getValue = () => {
    if (filters.budget_min && filters.budget_max)
      return [+filters.budget_min, +filters.budget_max]
    else return [0, MAX_BUDGET]
  }

  useEffect(() => {
    setSliderVal(getValue())
  }, [filters])

  return (
    <Box w="full">
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme="orange"
        min={0}
        value={sliderVal}
        max={MAX_BUDGET}
        onChange={(val) => setSliderVal(val)}
        onChangeEnd={handleChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb
          index={0}
          boxSize="5"
          border="1px solid"
          borderColor="_lightgray"
        />
        <RangeSliderThumb
          index={1}
          boxSize="5"
          border="1px solid"
          borderColor="_lightgray"
        />
      </RangeSlider>
      <HStack fontSize="sm" w="full" mt="2">
        <Box
          bg={{ base: '_lightestgray', md: '_white' }}
          p="2"
          borderRadius="md"
          w="50%"
        >
          <Text color="_gray" fontSize="2xs" st="common.general.min" />

          <Text>{getConvertedCurrency(sliderVal[0])}</Text>
        </Box>
        <Text color="_gray">-</Text>
        <Box
          bg={{ base: '_lightestgray', md: '_white' }}
          p="2"
          borderRadius="md"
          w="50%"
        >
          <Text color="_gray" fontSize="2xs" st="common.general.max" />

          <Text>
            {sliderVal[1] === MAX_BUDGET
              ? t('new-hotel-page.change.accommodation.filter.budget.no.limit')
              : getConvertedCurrency(sliderVal[1])}
          </Text>
        </Box>
        ``
      </HStack>
    </Box>
  )
}
