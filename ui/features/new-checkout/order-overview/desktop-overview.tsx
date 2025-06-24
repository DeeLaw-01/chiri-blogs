import { Box, HStack, Collapse, useDisclosure } from '@chakra-ui/react'
import ChevronDown from '@/icons/new/arrow/chevron-down.svg'
import Text from 'ui/primitives/Text'
import { useCheckoutAtoms } from '../useCheckoutAtoms'
import Card from 'ui/primitives/Card'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import OrderDetails from './order-details'

export default function DesktopOrderOverview() {
  const { trip } = useCheckoutAtoms()
  const format = useFormattedDate()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Card mb="3">
      <Box px={5} py={3} onClick={onToggle} cursor="pointer">
        <HStack w="full" justify="space-between">
          <Box w="full">
            <Text fontWeight="medium">{trip?.title}</Text>
            <Text noOfLines={1} color="_gray" fontSize="2xs" display="flex">
              {format(trip?.start_date)} - {format(trip?.end_date)}
            </Text>
          </Box>

          <Box
            w="1rem"
            transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
            transition="transform 0.3s"
          >
            <ChevronDown />
          </Box>
        </HStack>
      </Box>

      <Collapse in={isOpen}>
        <Box p={5} pt="0">
          <OrderDetails />
        </Box>
      </Collapse>
    </Card>
  )
}
