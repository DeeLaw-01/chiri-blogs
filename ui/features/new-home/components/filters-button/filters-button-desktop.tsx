import Button from 'ui/primitives/Button'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { useHomeModals } from '../../hooks/useHomeModals'
import { useSearchAtoms } from '../../search/hooks/useSearchAtoms/useSearchAtoms'
import getFiltersCount from '../../utils/filters/getFiltersCount'
import { useTripAtoms } from '../../content/trip/useTripAtoms'
import Badge from 'ui/primitives/Badge'
import FilterButtonIcon from '@/icons/hotel-filters/button-icon.svg'
import { Box } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'

export default function FiltersButtonDesktop() {
  const { state } = useHomeAtoms()
  const { setShowFilters } = useHomeModals()
  const { filters } = useSearchAtoms()
  const { sortType } = useTripAtoms()

  const count = getFiltersCount(state, filters) + (sortType ? 1 : 0)

  return (
    <Button
      id="filters-button-desktop"
      secondary
      onClick={() => setShowFilters(true)}
      minW="fit-content"
      gap={2}
      border={count ? '1px solid' : 'initial'}
    >
      <Box>
        <FilterButtonIcon strokeWidth="1.5" stroke={theme.colors.primary} />
      </Box>
      <Text st="common.filters" />

      {count > 0 && (
        <Badge
          position="absolute"
          top={-2}
          right={-2}
          bg="primary"
          color="_white"
          fontSize={'2xs'}
        >
          {count}
        </Badge>
      )}
    </Button>
  )
}
