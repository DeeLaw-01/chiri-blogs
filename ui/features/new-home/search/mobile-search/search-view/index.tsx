import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import SearchButton from './search-button'
import SearchView from './search-view'
import SearchStateTabs from './state-tabs'

export default function MobileSearchDrawerView() {
  return (
    <>
      <Box py={2}>
        <Heading as="h1" fontWeight="normal" st="common.general.search" />
        <SearchStateTabs />
        <SearchView />
      </Box>
      <SearchButton />
    </>
  )
}
