import PillSearchIcon from '@/icons/new-homepage/pill-search.svg'
import useSearch from '../../hooks/useSearch'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { Icon } from '@chakra-ui/react'
import { useSearchModalsAtoms } from '../../hooks/useSearchModals'

export default function SearchButton() {
  const { resetSearchModals } = useSearchModalsAtoms()
  const { makeSearch } = useSearch()

  const handleSearch = () => {
    resetSearchModals()
    makeSearch()
  }

  return (
    <Button
      id="make-search-desktop"
      primary
      fontWeight={'normal'}
      borderRadius="full"
      px={6}
      height="calc(4.5rem - 20px)"
      mr={2}
      onClick={() => handleSearch()}
      leftIcon={
        <Icon
          as={PillSearchIcon}
          width="3.5"
          height="3.5"
          strokeWidth={2}
          stroke="_white"
        />
      }
    >
      <Text st="common.general.search" />
    </Button>
  )
}
