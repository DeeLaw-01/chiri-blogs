import { HStack, StackProps } from '@chakra-ui/react'
import { ChangeTransportationDataAtomType } from '../../hooks/useChangeTransportationAtoms'
import OptionsButtons from './options-buttons'

export enum ChangeTransportationSortType {
  RECOMMENDED = 'recommended',
  CHEAPEST = 'cheapest',
  FASTEST = 'fastest',
}

type ChangeTransportSortOptionsProps = {
  data?: ChangeTransportationDataAtomType
} & StackProps

export default function ChangeTransportationSortOptions({
  data,
  ...rest
}: ChangeTransportSortOptionsProps) {
  if (!data) return <></>

  return (
    <HStack w="full" justify="center" {...rest}>
      <HStack
        border="1px solid"
        borderColor="_lightgray"
        borderRadius="md"
        w="full"
        mb={{ base: 2, md: 4 }}
        justify="space-between"
        fontSize={{ base: 'xs', md: 'sm' }}
        overflow="hidden"
        gap="0"
        alignItems="stretch"
      >
        <OptionsButtons />
      </HStack>
    </HStack>
  )
}
