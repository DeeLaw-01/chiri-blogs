import { HStack, VStack } from '@chakra-ui/react'
import { Transport } from 'src/shared-types/transport.type'
import ChangeTransportationHeader from './header/change-transportation-header'
import ChangeTransportationFilters from './filters'
import ChangeTransportationOptions from './options/change-transportation-options'
import TopLoadingBar from 'ui/shared/top-loading-bar'
import { useChangeTransportationAtoms } from './hooks/useChangeTransportationAtoms'
import ActiveFilters from './filters/active-filters'
import ChangeTransportationSortOptions from './options/sort/sort-options'

type ChangeTransportationViewProps = {
  transport: Transport
  onClose: () => void
}
export default function ChangeTransportationView({
  transport,
  onClose,
}: ChangeTransportationViewProps) {
  const { data } = useChangeTransportationAtoms()

  return (
    <HStack alignItems="flex-start">
      <TopLoadingBar isLoading={data?.isLoading ?? false} />
      <ChangeTransportationFilters transport={transport} onClose={onClose} />
      <VStack p={5} w="full" alignItems="flex-start">
        <ChangeTransportationHeader transport={transport} onClose={onClose} />
        <ActiveFilters transport={transport} />
        <ChangeTransportationSortOptions data={data} maxW="60rem" />
        <ChangeTransportationOptions transport={transport} />
      </VStack>
    </HStack>
  )
}
