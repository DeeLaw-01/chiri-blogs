import { RadioGroup, Stack } from '@chakra-ui/react'
import Radio from 'ui/primitives/Radio'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { data } from './data'

export default function ModeFilter() {
  const { tripFilters, setTripFilters } = useSearchAtoms()

  const handleSelect = (mode: any) => {
    setTripFilters((prev) => {
      return { ...prev, vehicle_type: mode }
    })
  }

  return (
    <RadioGroup
      variant={'primary'}
      onChange={(value: any) => handleSelect(value)}
      width={'100%'}
      value={tripFilters.vehicle_type ?? ''}
    >
      <Stack direction={['column', 'row']}>
        {data.map((option) => (
          <Radio
            key={option.value}
            fontSize={{ base: 'sm', md: 'md' }}
            value={option.value}
          >
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}
