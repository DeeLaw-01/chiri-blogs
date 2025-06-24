import { HStack, PopoverBody, PopoverContent } from '@chakra-ui/react'

import theme from 'src/styles/theme'
import DepartureContent from './departure'
import ArrivalContent from './arrival'

export default function TripsLocationContent() {
  return (
    <PopoverContent w="45rem" borderRadius={'2xl'} bg={theme.colors._white}>
      <PopoverBody px={4} py={6}>
        <HStack alignItems={'flex-start'} gap={4}>
          <DepartureContent />
          <ArrivalContent />
        </HStack>
      </PopoverBody>
    </PopoverContent>
  )
}
