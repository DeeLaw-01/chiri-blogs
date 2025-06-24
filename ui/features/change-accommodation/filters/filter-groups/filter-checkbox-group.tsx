import {
  CheckboxGroup,
  CheckboxGroupProps,
  HStack,
  Skeleton,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button from 'ui/primitives/Button'
import Checkbox from 'ui/primitives/Checkbox'
import { FilterValue } from '../filters-view'
import Text from 'ui/primitives/Text'

type FilterGroupProps = {
  data: FilterValue[]
  threshold?: number
  increase?: number
} & Omit<CheckboxGroupProps, 'children'>

export default function FilterCheckboxGroup({
  data,
  threshold = 5,
  increase = 5,
  ...rest
}: FilterGroupProps) {
  const [count, setCount] = useState<number>(threshold)
  if (!data) return <Skeleton w="full" h="1rem" />

  const handleViewMore = () => {
    setCount((prev) => prev + increase)
  }

  return (
    <CheckboxGroup {...rest}>
      <VStack alignItems="flex-start" w="full">
        {data?.map((item, idx) => {
          if (idx > count) return
          return (
            <HStack key={idx} fontSize="xs" w="full" justify="space-between">
              <Checkbox
                isDisabled={!item.count || item.count < 1}
                value={item.value}
              >
                <Text fontSize="sm">{item.label}</Text>
              </Checkbox>
              {item.count && <Text color="_gray">{item.count}</Text>}
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
    </CheckboxGroup>
  )
}
