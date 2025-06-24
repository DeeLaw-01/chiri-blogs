import RowIcon from '@/icons/row.svg'
import GridIcon from '@/icons/grid.svg'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import theme from 'src/styles/theme'
import { Box } from '@chakra-ui/react'

export default function GridToggle() {
  const { grid, setGrid } = useChangeAccommodationAtoms()
  return (
    <Box
      w="fit-content"
      p="3"
      bg={'_white'}
      borderRight="1px solid"
      borderColor="_lightgray"
      _hover={{ cursor: 'pointer', bg: '_lightestgray' }}
      onClick={() => setGrid(!grid)}
    >
      {grid ? (
        <RowIcon width="20px" stroke={theme.colors._black} />
      ) : (
        <GridIcon width="20px" stroke={theme.colors._black} />
      )}
    </Box>
  )
}
