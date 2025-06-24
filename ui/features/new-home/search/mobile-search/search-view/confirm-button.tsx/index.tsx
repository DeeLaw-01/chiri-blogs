import { Box, HStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'
import { TripSearch } from '../../../hooks/useSearchAtoms/types/trip.types'
import useSearch from '../../../hooks/useSearch'
import Text from 'ui/primitives/Text'

type ConfirmButtonProps = {
  searchUpdate: TripSearch
  callback: () => void
}

export default function ConfirmButton({
  searchUpdate,
  callback,
}: ConfirmButtonProps) {
  const { state } = useHomeAtoms()
  const { search } = useSearchAtoms()
  const { updateSearchState } = useSearch()

  const handleSearch = () => {
    const stateSearch = getStateSearch(state, search)
    updateSearchState({ ...stateSearch, ...searchUpdate })
    callback()
  }

  return (
    <Box
      w="full"
      position="fixed"
      bottom="0"
      left="0"
      p={3}
      px={6}
      bg="_white"
      borderTop="1px"
      borderColor="_lightgray"
    >
      <HStack w="full" justify="flex-end">
        <Button id="confirm-button" primary onClick={() => handleSearch()}>
          <Text st="common.general.confirm" />
        </Button>
      </HStack>
    </Box>
  )
}
