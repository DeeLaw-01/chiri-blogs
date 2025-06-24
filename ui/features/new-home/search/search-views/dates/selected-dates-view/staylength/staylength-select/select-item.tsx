import { Box, BoxProps } from '@chakra-ui/react'
import { Staylength } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

export type SelectItemOption = {
  label: string
  value?: Staylength
}
type SelectItemProps = {
  item: SelectItemOption
  selected?: boolean
} & BoxProps

export default function SelectItem({
  item,
  selected,
  ...rest
}: SelectItemProps) {
  return (
    <Box
      borderRadius="full"
      border={selected ? '1.5px solid' : '1px solid'}
      borderColor={selected ? '_black' : '_lightgray'}
      py={1}
      px={2}
      whiteSpace={'nowrap'}
      _hover={{ cursor: 'pointer', bg: '_lightestgray' }}
      {...rest}
    >
      {item.label}
    </Box>
  )
}
