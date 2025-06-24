import { PopoverBody, PopoverContent } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import TravelersView from 'ui/features/new-home/search/search-views/travelers'

export default function TravelersContent() {
  return (
    <PopoverContent
      w="45rem"
      border={'none'}
      bg={'transparent'}
      alignItems={'flex-end'}
    >
      <PopoverBody
        py={5}
        w={'30rem'}
        borderRadius={'2xl'}
        bg={theme.colors._white}
      >
        <TravelersView />
      </PopoverBody>
    </PopoverContent>
  )
}
