import { Box, HStack, StackProps } from '@chakra-ui/react'
import CountryFlag from 'ui/shared/country-flag'
import TickIcon from '@/icons/shared/tick-icon.svg'
import { Locale } from 'src/utils/languageUtils'

type SelectItemProps = {
  item: Locale
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
      <Box w="full">{item.label}</Box>
      <Box pr="2">
        <CountryFlag height={25} width={25} country={item.countryName} />
      </Box>
    </HStack>
  )
}
