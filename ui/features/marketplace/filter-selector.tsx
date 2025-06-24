import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react'

import { createElement, ReactNode } from 'react'
import { theme } from 'src/styles/theme'
import { MotionBox } from 'ui/primitives/Motion'
import Text from 'ui/primitives/Text'
import useMarketPlaceAtoms from './atoms/useMarketPlaceAtoms'

import EssentialsIcon from '@/icons/marketplace/filter-select/essentials-icon.svg'
import StaysIcon from '@/icons/marketplace/filter-select/stays-icon.svg'
import LugaggeIcon from '@/icons/marketplace/filter-select/luggage-icon.svg'
import ProtectionsIcon from '@/icons/marketplace/filter-select/protection-icon.svg'
import SeatIcon from '@/icons/marketplace/filter-select/seat-icon.svg'

import type { ActiveFilter } from './types/shared.type'

type FilterButtonProps = {
  type: ActiveFilter
  isActive: boolean
  label: ReactNode
  icon: any
}

const FilterButton = ({ type, isActive, label, icon }: FilterButtonProps) => {
  const { setActiveFilter } = useMarketPlaceAtoms()

  return (
    <Box pos="relative">
      <Button
        py="4"
        h="auto"
        _hover={{}}
        minW="5rem"
        bg="transparent"
        borderRadius="none"
        fontWeight="normal"
        onClick={() => setActiveFilter(type)}
        color={isActive ? 'primary' : '_black'}
      >
        <VStack>
          <Center color="primary" h="10" w="10">
            {createElement(icon, {
              stroke: isActive ? theme.colors.primary : theme.colors._black,
            })}
          </Center>
          <Text>{label}</Text>
        </VStack>
      </Button>

      {isActive && (
        <MotionBox
          h="1px"
          w="full"
          left="0"
          right="0"
          bottom="0"
          bg="primary"
          pos="absolute"
          layoutId="underline"
        />
      )}
    </Box>
  )
}

export default function FilterSelector() {
  const { activeFilter } = useMarketPlaceAtoms()

  return (
    <HStack py="2" spacing={6} maxW="100vw" overflowX="auto">
      <FilterButton
        type="ALL"
        label={
          <Text st="manage-booking-page.marketplace.filter.all.essentials" />
        }
        icon={EssentialsIcon}
        isActive={activeFilter === 'ALL'}
      />

      <FilterButton
        type="LUGGAGE"
        label={<Text st="common.passenger.luggage.header" />}
        icon={LugaggeIcon}
        isActive={activeFilter === 'LUGGAGE'}
      />

      <FilterButton
        type="STAYS"
        label={<Text st="manage-booking-page.marketplace.filter.stays" />}
        icon={StaysIcon}
        isActive={activeFilter === 'STAYS'}
      />

      <FilterButton
        type="PROTECTION"
        label={<Text st="manage-booking-page.marketplace.filter.protection" />}
        icon={ProtectionsIcon}
        isActive={activeFilter === 'PROTECTION'}
      />

      <FilterButton
        type="SEATS"
        label={<Text st="manage-booking-page.marketplace.filter.seats" />}
        icon={SeatIcon}
        isActive={activeFilter === 'SEATS'}
      />
    </HStack>
  )
}
