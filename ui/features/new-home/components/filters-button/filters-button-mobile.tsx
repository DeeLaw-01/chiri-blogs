import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { useHomeModals } from '../../hooks/useHomeModals'
import { useSearchAtoms } from '../../search/hooks/useSearchAtoms/useSearchAtoms'
import getFiltersCount from '../../utils/filters/getFiltersCount'
import { Box, Icon } from '@chakra-ui/react'
import FilterIcon from '@/icons/new/filter.svg'
import Badge from 'ui/primitives/Badge'

export default function FiltersButtonMobile() {
  const { state } = useHomeAtoms()
  const { setShowFilters } = useHomeModals()
  const { filters } = useSearchAtoms()

  const count = getFiltersCount(state, filters)

  return (
    <Box
      position="relative"
      as="button"
      id="filters-button-mobile"
      aria-label="Filters button"
      bg="_white"
      borderRadius="full"
      onClick={() => setShowFilters(true)}
      minW="55px"
      minH="55px"
      w="55px"
      h="55px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Icon as={FilterIcon} fill="primary" w="5" h="5" />
      {count > 0 && (
        <Badge
          position="absolute"
          top={-1.5}
          right={-1.5}
          bg="primary"
          color="_white"
          fontSize={'2xs'}
        >
          {count}
        </Badge>
      )}
    </Box>
  )
}
