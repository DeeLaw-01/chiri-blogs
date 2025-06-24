import {
  HStack,
  RadioGroup,
  RadioGroupProps,
  Skeleton,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button from 'ui/primitives/Button'
import Radio from 'ui/primitives/Radio'
import Text from 'ui/primitives/Text'
import { FilterValue } from '../filters-view'

type FilterGroupProps = {
  data: FilterValue[]
  threshold?: number
  increase?: number
} & Omit<RadioGroupProps, 'children'>

export default function FilterRadioGroup({
  data,
  threshold = 4,
  increase = 5,
  ...rest
}: FilterGroupProps) {
  const [count, setCount] = useState<number>(threshold)
  if (!data) return <Skeleton w="full" h="1rem" />

  const handleViewMore = () => {
    setCount((prev) => prev + increase)
  }

  return (
    <RadioGroup w="full" {...rest}>
      <VStack alignItems="flex-start" w="full">
        {data?.map((item, idx) => {
          if (idx > count) return
          return (
            <HStack key={idx} fontSize="xs" w="full" justify="space-between">
              <Radio
                value={item.value}
                isDisabled={!item.count || item.count < 1}
              >
                <Text fontSize="sm">{item.label}</Text>
              </Radio>
              <Text color="_gray">{item.count}</Text>
            </HStack>
          )
        })}
        {data.length - 1 > count && (
          <Button
            fontSize="sm"
            fontWeight="normal"
            asLink
            onClick={handleViewMore}
            id="view-more-filters"
          >
            <Text st="common.view.more" />
          </Button>
        )}
      </VStack>
    </RadioGroup>
  )
}
