import { HStack } from '@chakra-ui/react'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import MinusIcon from '@/icons/shared/minus-icon.svg'
import Text from 'ui/primitives/Text'
import AddIcon from '@/icons/shared/add-icon.svg'
import Button from 'ui/primitives/Button'
import theme from 'src/styles/theme'

interface CounterProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  maxVal: number
  minVal?: number
}

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  maxVal,
  minVal = 0,
}: CounterProps) => {
  return (
    <HStack>
      <Button
        id="subtract"
        onClick={onDecrement}
        p={0}
        borderRadius={'full'}
        bg={'white'}
        isDisabled={value <= minVal}
        _hover={{}}
        _active={{}}
      >
        <CircleIconWrapper p={1}>
          <MinusIcon
            width="20"
            height="20"
            strokeWidth="1.5"
            stroke={theme.colors.primary}
          />
        </CircleIconWrapper>
      </Button>

      <Text fontWeight="medium">{value}</Text>
      <Button
        id="add"
        p={0}
        borderRadius={'full'}
        isDisabled={value >= maxVal}
        onClick={onIncrement}
        bg={'white'}
        _hover={{}}
        _active={{}}
      >
        <CircleIconWrapper p={1}>
          <AddIcon
            width="20"
            height="20"
            stroke={theme.colors.primary}
            strokeWidth="1.5"
          />
        </CircleIconWrapper>
      </Button>
    </HStack>
  )
}

export default Counter
