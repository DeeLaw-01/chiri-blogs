import { Flex, Icon } from '@chakra-ui/react'
import ChevronRight from '@/icons/new/arrow/chevron-right.svg'

export default function RightArrow() {
  return (
    <Flex
      _groupHover={{ mr: -1, ml: 1 }}
      transition="all .2s"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={ChevronRight} h={'0.75em'} w={'0.75em'} ml="-0.25rem" />
    </Flex>
  )
}
