import theme from 'src/styles/theme'
import { useChangeTransportationAtoms } from '../../hooks/useChangeTransportationAtoms'
import useCurrency from 'src/hooks/useCurrency'
import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import formatHours from 'src/utils/getFormattedHours'
import { ChangeTransportationSortType } from './sort-options'
import SortIcon from '@/icons/shared/sort.svg'

type SortItemProps = {
  type: ChangeTransportationSortType
  data: any
  isLoading: boolean
}

export default function SortItem({ type, data, isLoading }: SortItemProps) {
  const { setSortType, sortType } = useChangeTransportationAtoms()
  const { getConvertedCurrency } = useCurrency()

  const isSelected = sortType.type === type

  const handleSetSort = () => {
    setSortType({
      type: type,
      asc: sortType.type === type ? !sortType.asc : true,
    })
  }

  if (!data && !isLoading) return <></>

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
      onClick={handleSetSort}
      borderBottom={isSelected ? `2px solid ${theme.colors.primary}` : ''}
    >
      <VStack alignItems="flex-start" gap="0" p={{ base: 2, md: 3 }} h="full">
        <HStack
          justify={'space-between'}
          w={'full'}
          color={isSelected ? 'primary' : '_gray'}
        >
          <Text
            fontWeight="medium"
            st={`flight-info.filter.${type}`}
            color="_black"
          />
          <SortIcon width="14px" />
        </HStack>
        {isLoading ? (
          <Skeleton w={'100px'} height={'10px'} />
        ) : (
          <Text fontSize={{ base: '3xs', md: '2xs' }} color="_gray">
            {getConvertedCurrency(data?.price)} •{' '}
            {formatHours(data?.transportation?.content.duration)}
          </Text>
        )}
      </VStack>
    </Box>
  )
}
