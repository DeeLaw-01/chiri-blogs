import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import Text from 'ui/primitives/Text'
import FiltersView from './filters-view'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'

export default function FiltersMobile() {
  const { resetFilters, setShowMobileFilters } = useChangeAccommodationAtoms()

  return (
    <VStack
      position="absolute"
      top="0"
      w="full"
      h="100dvh"
      zIndex="overlay"
      bg="_white"
    >
      <Box maxH={'calc(100dvh - 2.5rem)'} w="full" overflow="auto" p={5}>
        <HStack w="full" justify="space-between">
          <HStack>
            <CircleIconWrapper
              bg="_white"
              onClick={() => setShowMobileFilters(false)}
              maxW="fit-content"
              alignSelf="flex-start"
            >
              <LeftIcon
                width="18"
                height="18"
                stroke={theme.colors._darkgray}
              />
            </CircleIconWrapper>
            <Heading as="h2" st="common.filters" />
          </HStack>
          <Button asLink id="reset-filters" onClick={resetFilters}>
            <Text st="common.general.reset" />
          </Button>
        </HStack>
        <Divider w="full" alignSelf="center" py={2} mb="2" />

        <FiltersView />
      </Box>
      <Box
        px="5"
        py={2}
        borderTop="1px solid"
        borderColor="_lightgray"
        w="full"
      >
        <Button
          w="full"
          primary
          id="view-results-mobile-change-transportation"
          onClick={() => setShowMobileFilters(false)}
        >
          <Text st={'common.button.show.results'} />
        </Button>
      </Box>
    </VStack>
  )
}
