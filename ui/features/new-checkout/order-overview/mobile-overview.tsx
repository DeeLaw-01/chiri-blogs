import { Box, HStack, Collapse, useDisclosure } from '@chakra-ui/react'
import ChevronDown from '@/icons/new/arrow/chevron-down.svg'
import Text from 'ui/primitives/Text'
import { useCheckoutAtoms } from '../useCheckoutAtoms'
import OrderDetails from './order-details'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

export default function MobileOrderOverview() {
  const { trip } = useCheckoutAtoms()
  const format = useFormattedDate()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      pos="sticky"
      top="0"
      minH="3rem"
      mt="3"
      zIndex="overlay"
      w="100vw"
      ml="-1rem"
    >
      <Box
        pos="relative"
        bg="_lightestgray"
        px={5}
        py={3}
        borderY="1px solid"
        borderColor="_lightgray"
        onClick={onToggle}
        cursor="pointer"
      >
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
        <Box
          pos="relative"
          bg="_lightestgray"
          borderBottom="1px solid"
          borderColor="_lightgray"
          p={5}
          pt="3"
          fontSize="sm"
        >
          <OrderDetails />
        </Box>
      </Collapse>
    </Box>
  )
}
