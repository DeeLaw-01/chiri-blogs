import { Box, BoxProps, Skeleton, VStack } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import Text from 'ui/primitives/Text'
import { DateItemType } from '../change-transportation-dates'

type DateItemProps = {
  date: DateItemType
  isLoading: boolean
} & BoxProps
export default function DateItem({ date, isLoading, ...rest }: DateItemProps) {
  const formatDate = useFormattedDate()
  const { getConvertedCurrency } = useCurrency()

  const notAvailable = !isLoading && date.price_dif === undefined

  const getColor = (date) => {
    if (date.increase) return 'yellow.200'
    else return 'green.200'
  }

  return (
    <Box
      borderRadius="md"
      zIndex="2"
      bg={'rgba(0,0,0, 0.2)'}
      w="3.5rem"
      minW="3.5rem"
      h="4.25rem"
      color={'_white'}
      _hover={{ cursor: 'pointer', bg: 'rgba(0,0,0, 0.3)' }}
      {...rest}
    >
      <VStack h="full" gap="0" p="2">
        <Text fontSize="2xs">{formatDate(date.date, false, false, true)}</Text>
        <Text fontWeight="medium" fontSize="2xl" lineHeight="1">
          {formatDate(date.date, false, true, false)}
        </Text>
        {notAvailable && (
          <Text color="red.200" fontSize="2xs">
            None
          </Text>
        )}
        {!isLoading && date.price_dif === 0 && (
          <Text fontSize="2xs"> {getConvertedCurrency(0)}</Text>
        )}
        {!isLoading && date.price_dif && (
          <Text color={getColor(date)} fontSize="2xs" noOfLines={1}>
            {date.price_dif !== 0 && (date.increase ? '+' : '-')}
            {getConvertedCurrency(date.price_dif)}
          </Text>
        )}
        {isLoading && <Skeleton mt="1" h="0.3rem" w="50%" />}
      </VStack>
    </Box>
  )
}
