import Text from 'ui/primitives/Text'
import Radio from 'ui/primitives/Radio'
import { RadioGroup, Stack } from '@chakra-ui/react'
import { OnewaySortType } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/oneway.types'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { data } from './data'

export default function SortOneway() {
  const { onewayFilters, setOnewayFilters } = useSearchAtoms()

  const handleSelect = (sortType: OnewaySortType) => {
    setOnewayFilters((prev) => {
      delete prev.sortType
      return { ...prev, ...(sortType && { sortType: sortType }) }
    })
  }

  return (
    <RadioGroup
      variant={'primary'}
      onChange={(value: any) => handleSelect(value)}
      width={'100%'}
      value={onewayFilters.sortType?.toString()}
    >
      <Stack direction={['column', 'row']}>
        {data.map((option) => (
          <Radio key={option.value} value={option.value}>
            <Text fontSize={{ base: 'sm', md: 'md' }} st={option.label} />
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}
