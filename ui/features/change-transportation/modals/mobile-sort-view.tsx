import { Box, HStack, Divider, RadioGroup, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Radio from 'ui/primitives/Radio'
import Heading from 'ui/primitives/Heading'
import Drawer from 'ui/primitives/Drawer'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import { ChangeTransportationSortType } from '../options/sort/sort-options'

export type MobileSortDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSortDrawer({
  isOpen,
  onClose,
}: MobileSortDrawerProps) {
  const { setSortType, sortType } = useChangeTransportationAtoms()

  const handleSetSort = (type: ChangeTransportationSortType) => {
    setSortType({
      type: type,
      asc: true,
    })

    onClose()
  }

  return (
    <Drawer
      padding={0}
      header={false}
      placement="bottom"
      isOpen={isOpen}
      onClose={onClose}
      contentStyle={{
        maxW: '100vw',
        h: '40vh',
        borderTopRadius: '20px',
      }}
    >
      <Box h={'calc(40vh - 2.5rem)'} w="full" overflow="auto" p={5}>
        <Heading as="h2" st="common.general.sort.by" />
        <Divider w="full" alignSelf="center" py={2} mb="2" />

        <RadioGroup
          mt="4"
          value={sortType.type}
          onChange={(val: ChangeTransportationSortType) => handleSetSort(val)}
        >
          <VStack spacing={5} w="full" align="flex-start">
            <HStack
              w="full"
              justify="space-between"
              onClick={() =>
                handleSetSort(ChangeTransportationSortType.RECOMMENDED)
              }
            >
              <Text fontSize="sm" st="flight-info.filter.recommended" />
              <Radio value={ChangeTransportationSortType.RECOMMENDED} />
            </HStack>

            <HStack
              w="full"
              justify="space-between"
              onClick={() =>
                handleSetSort(ChangeTransportationSortType.CHEAPEST)
              }
            >
              <Text fontSize="sm" st="flight-info.filter.cheapest" />
              <Radio value={ChangeTransportationSortType.CHEAPEST} />
            </HStack>

            <HStack
              w="full"
              justify="space-between"
              onClick={() =>
                handleSetSort(ChangeTransportationSortType.FASTEST)
              }
            >
              <Text fontSize="sm" st="flight-info.filter.fastest" />
              <Radio value={ChangeTransportationSortType.FASTEST} />
            </HStack>
          </VStack>
        </RadioGroup>
      </Box>
    </Drawer>
  )
}
