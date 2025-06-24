import Modal from 'ui/primitives/Modal'
import FiltersView from './filters-view'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { Divider, Flex, VStack } from '@chakra-ui/react'

export type FiltersModalProps = {
  isOpen: boolean
  onClose: () => void
  handleSearch: () => void
  handleReset: () => void
}

export default function FiltersModal({
  isOpen,
  onClose,
  handleSearch,
  handleReset,
}: FiltersModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={'inside'}
      closeOnEsc={false}
      modalContentStyle={{
        minW: '750px',
      }}
      modalHeaderStyles={{ fontWeight: 'medium', textAlign: 'center' }}
      title={
        <VStack>
          <Text notag st="common.filters" />
          <Divider />
        </VStack>
      }
    >
      <FiltersView />
      <Flex justify={'space-between'} w="full" my={2}>
        <Button id="reset-filters" color="_black" asLink>
          <Text st="common.general.reset" onClick={() => handleReset()} />
        </Button>
        <Button id="filters-search" secondary onClick={handleSearch}>
          <Text st="common.general.search" />
        </Button>
      </Flex>
    </Modal>
  )
}
