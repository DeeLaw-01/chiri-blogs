import { Box, HStack, Icon } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import useSearch from '../../../hooks/useSearch'
import { useHomeModals } from 'ui/features/new-home/hooks/useHomeModals'
import SearchIcon from '@/icons/new/search.svg'

export default function SearchButton() {
  const { setShowMobileSearch } = useHomeModals()
  const { makeSearch, resetSearchState } = useSearch()

  const handleSearch = () => {
    makeSearch()
    setShowMobileSearch(false)
  }

  return (
    <Box
      w="full"
      position="fixed"
      bottom="0"
      left="0"
      p={3}
      px={6}
      borderTop="1px"
      borderColor="_lightgray"
    >
      <HStack w="full" justify="space-between">
        <Text onClick={() => resetSearchState()} st="common.general.reset" />
        <Button id="search-button" primary onClick={() => handleSearch()}>
          <Icon
            as={SearchIcon}
            stroke="_white"
            w="4"
            h="4"
            mr="1"
            strokeWidth={2}
          />
          <Text st="common.general.search" />
        </Button>
      </HStack>
    </Box>
  )
}
