import { RadioGroup, Stack } from '@chakra-ui/react'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Radio from 'ui/primitives/Radio'
import { data } from './data'

export default function StopsFilter() {
  const { onewayFilters, setOnewayFilters } = useSearchAtoms()

  const handleSelect = (stops: any) => {
    setOnewayFilters((prev) => {
      delete prev.max_stop_overs
      return { ...prev, ...(stops && { max_stop_overs: stops }) }
    })
  }

  return (
    <RadioGroup
      variant={'primary'}
      onChange={(value: any) => handleSelect(value)}
      width={'100%'}
      value={onewayFilters.max_stop_overs}
    >
      <Stack direction={['column', 'row']}>
        {data.map((option, index) => (
          <Radio
            fontSize={{ base: 'sm', md: 'md' }}
            key={index}
            value={option.value}
          >
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}
