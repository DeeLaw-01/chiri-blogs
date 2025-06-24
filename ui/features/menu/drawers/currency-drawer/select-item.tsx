import { Box, HStack, StackProps } from '@chakra-ui/react'
import TickIcon from '@/icons/shared/tick-icon.svg'
import { Currency } from 'src/shared-types/currency'

type SelectItemProps = {
  item: Currency
  isSelected: boolean
} & StackProps

export default function SelectItem({
  item,
  isSelected,
  ...rest
}: SelectItemProps) {
  return (
    <HStack
      borderBottom="1px"
      borderColor="_lightgray"
      py={4}
      _hover={{ cursor: 'pointer' }}
      {...rest}
    >
      <Box minW="5" color="primary">
        {isSelected && <TickIcon height="15" width="15" />}
      </Box>
      <Box w="full" noOfLines={1}>
        {item.currency}
      </Box>
      <Box pr="2">{item.code}</Box>
    </HStack>
  )
}
