import { HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Counter from '../../book-button/counter'
import { TravelerCategory } from './change-travelers.type'

type CategoryItemProps = {
  category: TravelerCategory
  value: number
  handleChange: (category: TravelerCategory, value: number) => void
}

export default function CategoryItem({
  category,
  value,
  handleChange,
}: CategoryItemProps) {
  return (
    <HStack
      key={category}
      py="2"
      justifyContent={'space-between'}
      borderBottom="1px solid"
      borderColor="_lightgray"
    >
      <VStack spacing={0} alignItems={'flex-start'}>
        <Text st={`common:${category}`} />
        {category !== TravelerCategory.Adults && (
          <Text
            st={`common:${category}.ages`}
            fontSize={'xs'}
            color={'_gray'}
          />
        )}
      </VStack>
      <Counter
        value={value}
        maxVal={9}
        onIncrement={() => handleChange(category, value + 1)}
        onDecrement={() => handleChange(category, value - 1)}
        minVal={category === TravelerCategory.Adults ? 1 : 0}
      />
    </HStack>
  )
}
