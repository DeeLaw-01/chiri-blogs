import {
  Box,
  Center,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { HomeState } from '../../hooks/useHomeAtoms/types'
import useSearch from '../../search/hooks/useSearch'
import ChevronDownIcon from '@/icons/new/arrow/chevron-down.svg'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { getLabel } from '../../utils/getStateLabel'

export default function StateSelect () {
  const { setState, state, setForceSearch } = useHomeAtoms()
  const { makeSearch } = useSearch()

  const handleChange = (newState: HomeState) => {
    setState(newState)
    setForceSearch(true)
    makeSearch(undefined, newState)
  }

  const states = [HomeState.ROUNDTRIP, HomeState.ONEWAY, HomeState.TRIP]

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          secondary
          borderRadius='md'
          px={{ base: 2, md: 4 }}
          py={2}
        >
          <HStack fontSize={'sm'} gap={2}>
            <Center w='1rem' h='1rem'>
              <Icon as={getLabel(state)[0]} width='full' height='full' />
            </Center>
            <Text st={getLabel(state)[1]} />
            <ChevronDownIcon height='17px' />
          </HStack>
        </MenuButton>

        <MenuList zIndex={'popover'}>
          {states.map(menuState => {
            const [icon, label] = getLabel(menuState)
            return (
              <MenuItem
                key={menuState}
                onClick={() => handleChange(menuState)}
                display='flex'
                alignItems='center'
                gap={2}
                py={2}
                px={4}
              >
                <HStack gap={4}>
                  <Center w='1rem' h='1rem'>
                    <Icon as={icon} width='full' height='full' />
                  </Center>
                  <Text fontSize='sm' st={label} />
                </HStack>
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}
