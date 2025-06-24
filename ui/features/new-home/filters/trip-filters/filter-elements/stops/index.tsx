import { RadioGroup, Stack } from '@chakra-ui/react'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Radio from 'ui/primitives/Radio'
import { data } from './data'

export default function StopsFilter() {
  const { tripFilters, setTripFilters } = useSearchAtoms()

  const handleSelect = (stops: any) => {
    setTripFilters((prev) => {
      return { ...prev, max_stop_overs: stops }
    })
  }

  return (
    <RadioGroup
      variant={'primary'}
      onChange={(value: any) => handleSelect(value)}
      width={'100%'}
      value={tripFilters.max_stop_overs ?? ''}
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
