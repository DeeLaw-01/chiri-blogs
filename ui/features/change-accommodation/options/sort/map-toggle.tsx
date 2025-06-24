import MapIcon from '@/icons/map-icon.svg'
import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import theme from 'src/styles/theme'
import { HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

export default function GridToggle() {
  const { showMap, setShowMap, setFilters, filters } =
    useChangeAccommodationAtoms()

  const handleClick = () => {
    if (showMap) resetFilter()

    setShowMap(!showMap)
  }

  const resetFilter = () => {
    setFilters({
      ...filters,
      top_left_coordinate: {},
      bottom_right_coordinate: {},
    })
  }

  return (
    <HStack
      w="fit-content"
      p="3"
      bg={showMap ? 'secondary' : '_white'}
      borderRight="1px solid"
      borderColor="_lightgray"
      _hover={
        showMap
          ? { cursor: 'pointer' }
          : { cursor: 'pointer', bg: '_lightestgray' }
      }
      onClick={() => handleClick()}
      gap="0.25rem"
    >
      <MapIcon
        width="20px"
        stroke={showMap ? theme.colors.primary : theme.colors._darkgray}
      />
      <Text
        fontSize="sm"
        color={showMap ? '_black' : '_gray'}
        st="hotel-info:summary.map"
      />
    </HStack>
  )
}
