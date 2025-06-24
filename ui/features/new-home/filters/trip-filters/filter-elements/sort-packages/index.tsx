import Text from 'ui/primitives/Text'
import Radio from 'ui/primitives/Radio'
import { RadioGroup, Stack } from '@chakra-ui/react'
import { SortTripType } from 'ui/features/new-home/search/hooks/useSearchAtoms/types'
import { useTripAtoms } from 'ui/features/new-home/content/trip/useTripAtoms'

const radioOptions = [
  { value: SortTripType.PriceAsc, label: 'home-page.sort.price.low.to.high' },
  { value: SortTripType.CitiesAsc, label: 'home-page.sort.cities.low.to.high' },
  {
    value: SortTripType.CitiesDesc,
    label: 'home-page.sort.cities.high.to.low',
  },
]

export default function SortPackages() {
  const { sortType, setSortType } = useTripAtoms()

  return (
    <>
      <RadioGroup
        variant={'primary'}
        onChange={(value: SortTripType) => setSortType(value)}
        width={'100%'}
        value={sortType?.toString()}
      >
        <Stack direction={['column', 'row']}>
          {radioOptions.map((option) => (
            <Radio key={option.value} value={option.value}>
              <Text fontSize={{ base: 'sm', md: 'md' }} st={option.label} />
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  )
}
