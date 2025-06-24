import { PopoverBody, PopoverContent } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import DatesView from 'ui/features/new-home/search/search-views/dates'

export default function DatesContent() {
  return (
    <PopoverContent
      w="45rem"
      h="fit-content"
      borderRadius={'2xl'}
      bg={theme.colors._white}
    >
      <PopoverBody px={4} py={6}>
        <DatesView />
      </PopoverBody>
    </PopoverContent>
  )
}
