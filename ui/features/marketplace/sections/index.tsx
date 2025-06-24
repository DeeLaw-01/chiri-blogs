import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { ActiveFilter } from '../types/shared.type'
import dynamic from 'next/dynamic'

const LuggageSection = dynamic(
  () => import('ui/features/marketplace/sections/luggage')
)
const StaysSection = dynamic(
  () => import('ui/features/marketplace/sections/stays')
)
const ProtectionSection = dynamic(
  () => import('ui/features/marketplace/sections/protection')
)

const SeatsSection = dynamic(
  () => import('ui/features/marketplace/sections/seats')
)

import useMarketPlaceAtoms from 'ui/features/marketplace/atoms/useMarketPlaceAtoms'

const getFilteredComponents = (
  filterState: ActiveFilter,
  comps: {
    comp: ReactNode
    name: ActiveFilter
  }[]
) => {
  if (filterState === 'ALL') return comps.map((comp) => comp.comp)

  const singleSection = comps.filter((comp) => comp.name === filterState)

  return singleSection[0].comp
}

export default function FilteredMarketPlaceSections() {
  const { activeFilter } = useMarketPlaceAtoms()

  return (
    <VStack mt={8} spacing={6}>
      {getFilteredComponents(activeFilter, [
        {
          comp: <LuggageSection key={'LUGGAGE'} />,
          name: 'LUGGAGE',
        },
        {
          comp: <StaysSection key={'STAYS'} />,
          name: 'STAYS',
        },
        {
          comp: <ProtectionSection key={'PROTECTION'} />,
          name: 'PROTECTION',
        },
        {
          comp: <SeatsSection key={'SEATS'} />,
          name: 'SEATS',
        },
      ])}
    </VStack>
  )
}
