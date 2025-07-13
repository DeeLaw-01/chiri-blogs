import { HStack } from '@chakra-ui/react'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import SegmentedSwitch from 'ui/primitives/SegmentedSwitch'

export default function SearchStateTabs () {
  const { setState, state } = useHomeAtoms()

  const handleTabsChange = (newState: any) => {
    setState(newState)
  }

  return (
    <HStack w={'full'} justify={'center'}>
      <SegmentedSwitch
        options={TabSections}
        value={state}
        onChange={handleTabsChange}
      />
    </HStack>
  )
}

export const TabSections = [
  { label: 'home-page.home.state.roundtrip', value: HomeState.ROUNDTRIP },
  { label: 'home-page.home.state.oneway', value: HomeState.ONEWAY },
  { label: 'home-page.home.state.trips', value: HomeState.TRIP }
]
