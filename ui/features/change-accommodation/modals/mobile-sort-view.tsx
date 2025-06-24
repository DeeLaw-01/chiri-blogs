import { Box, HStack, Divider, RadioGroup, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Radio from 'ui/primitives/Radio'
import Heading from 'ui/primitives/Heading'
import Drawer from 'ui/primitives/Drawer'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import { ChangeAccommodationSortType } from '../options/sort/sort-data'

export type MobileSortDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSortDrawer({
  isOpen,
  onClose,
}: MobileSortDrawerProps) {
  const { setSortType, sortType, filtersSortValue, setFiltersSortValue } =
    useChangeAccommodationAtoms()

  const handleSetSort = (type: ChangeAccommodationSortType) => {
    setFiltersSortValue(type)
    setSortType({
      type: type,
      asc: sortType.type === type ? !sortType.asc : true,
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
          value={filtersSortValue}
          onChange={(val) =>
            setFiltersSortValue(val as ChangeAccommodationSortType)
          }
        >
          <VStack spacing={5} w="full" align="flex-start">
            <HStack
              w="full"
              justify="space-between"
              onClick={() =>
                handleSetSort(ChangeAccommodationSortType.Recommended)
              }
            >
              <Text fontSize="sm" st="hotel-info.sort.recommended" />
              <Radio value="recommended" />
            </HStack>

            <HStack
              w="full"
              justify="space-between"
              onClick={() => handleSetSort(ChangeAccommodationSortType.Price)}
            >
              <Text fontSize="sm" st="hotel-info.sort.price" />
              <Radio value="price" />
            </HStack>

            <HStack
              w="full"
              justify="space-between"
              onClick={() => handleSetSort(ChangeAccommodationSortType.Rating)}
            >
              <Text fontSize="sm" st="hotel-info.sort.rating" />
              <Radio value="rating" />
            </HStack>
          </VStack>
        </RadioGroup>
      </Box>
    </Drawer>
  )
}
