import { Box, VStack } from '@chakra-ui/react'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import Text from 'ui/primitives/Text'

type SelectedDateItemProps = {
  date?: string
}

export default function SelectedDateItem({ date }: SelectedDateItemProps) {
  const formatDate = useFormattedDate()

  return (
    <Box
      borderRadius="md"
      zIndex="2"
      bg={'rgba(255,255,255, 0.95)'}
      w="3.5rem"
      minW="3.5rem"
      h="4.25rem"
      color={'primary'}
      transform={'scale(1.1)'}
    >
      <VStack h="full" gap="0" p="2">
        <Text fontSize="2xs">{formatDate(date, false, false, true)}</Text>
        <Text fontWeight="medium" fontSize="2xl" lineHeight="1">
          {formatDate(date, false, true, false)}
        </Text>
      </VStack>
    </Box>
  )
}
