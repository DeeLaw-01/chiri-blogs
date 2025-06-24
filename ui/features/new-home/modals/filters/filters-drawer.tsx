import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import { Box, Divider, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Drawer from 'ui/primitives/Drawer'
import FiltersView from './filters-view'

export type FiltersDrawerProps = {
  isOpen: boolean
  onClose: () => void
  handleSearch: () => void
  handleReset: () => void
}

export default function FiltersDrawer({
  isOpen,
  onClose,
  handleSearch,
  handleReset,
}: FiltersDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      size="full"
      onClose={onClose}
      contentStyle={{
        motionProps: { initial: false, animate: false },
      }}
    >
      <Heading as="h1" fontWeight="normal" st="common.filters" />
      <Divider w="full" alignSelf="center" py={2} mb="2" />
      <Box mb={20}>
        <FiltersView />
      </Box>
      <Box
        w="full"
        position="fixed"
        bottom="0"
        left="0"
        p={3}
        px={6}
        bg="_white"
        borderTop="1px"
        borderColor="_lightgray"
        zIndex={'sticky'}
      >
        <HStack w="full" justify="space-between">
          <Text st="common.general.reset" onClick={() => handleReset()} />
          <Button
            id="filters-search-button"
            primary
            onClick={() => handleSearch()}
          >
            <Text st="common.general.apply" />
          </Button>
        </HStack>
      </Box>
    </Drawer>
  )
}
