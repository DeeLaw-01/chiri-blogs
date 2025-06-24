import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import { Transport } from 'src/shared-types/transport.type'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import FiltersView from './filters-view'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import theme from 'src/styles/theme'
import LeftIcon from '@/icons/shared/left-icon.svg'
import Text from 'ui/primitives/Text'
import getFiltersCount from '../utils/getFiltersCount'

type FiltersDesktopProps = {
  transport: Transport
  onClose: () => void
}

export default function FiltersDesktop({
  transport,
  onClose,
}: FiltersDesktopProps) {
  const { resetFilters, filters } = useChangeTransportationAtoms()
  return (
    <VStack
      position="sticky"
      top="0"
      minW="25rem"
      maxH="100vh"
      py={'2rem'}
      px={5}
      alignItems="flex-start"
    >
      <HStack mb="4">
        <CircleIconWrapper bg="_white" onClick={onClose} maxW="fit-content">
          <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
        </CircleIconWrapper>
        <Heading fontWeight="normal" as="h2" st="common.general.back" />
      </HStack>
      <VStack
        w="full"
        bg="_lightestgray"
        h="full"
        overflow="auto"
        p={5}
        alignItems="flex-start"
        borderRadius="lg"
      >
        <HStack w="full" justify="space-between">
          <HStack>
            <Heading as="h2" st="common.filters" />
            {getFiltersCount(filters) > 0 && (
              <Text>({getFiltersCount(filters)})</Text>
            )}
          </HStack>
          <Button asLink id="reset-filters" onClick={resetFilters}>
            <Text st="common.general.reset" />
          </Button>
        </HStack>
        <Divider w="80%" alignSelf="center" py={2} />

        <Box h="110vh" w="full">
          <FiltersView transport={transport} />
        </Box>
      </VStack>
    </VStack>
  )
}
