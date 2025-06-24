import theme from 'src/styles/theme'
import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import SortIcon from '@/icons/shared/sort.svg'
import { ChangeAccommodationSortType } from './sort-data'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'

type SortItemProps = {
  type: ChangeAccommodationSortType
}

export default function SortItem({ type }: SortItemProps) {
  const { setSortType, sortType } = useChangeAccommodationAtoms()
  const isSelected = sortType.type === type

  const handleSetSort = () => {
    setSortType({
      type: type,
      asc: sortType.type === type ? !sortType.asc : true,
    })
  }

  return (
    <Box
      w="34%"
      bg={isSelected ? 'secondary' : '_white'}
      borderRight="1px solid"
      borderColor="_lightgray"
      _hover={
        isSelected
          ? { cursor: 'pointer' }
          : { cursor: 'pointer', bg: '_lightestgray' }
      }
      onClick={() => handleSetSort()}
      borderBottom={isSelected ? `2px solid ${theme.colors.primary}` : ''}
    >
      <HStack
        p={{ base: 2, md: 3 }}
        h="full"
        alignItems="center"
        color={isSelected ? 'primary' : '_gray'}
        w="full"
        justify="space-between"
      >
        <Text
          color="_black"
          fontWeight="medium"
          noOfLines={1}
          st={`hotel-info.sort.${type}`}
        />
        <SortIcon width="14px" />
      </HStack>
    </Box>
  )
}
