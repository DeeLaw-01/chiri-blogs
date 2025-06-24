import { SimpleGrid, Skeleton } from '@chakra-ui/react'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'

export default function Loading() {
  const { grid } = useChangeAccommodationAtoms()
  return (
    <SimpleGrid
      columns={grid ? 3 : 1}
      spacing={4}
      minChildWidth={grid ? 'min(100%, 350px)' : 'full'}
      w="full"
      maxW={grid ? 'initial' : '60rem'}
    >
      <Skeleton h="12rem" borderRadius="md" />
      <Skeleton h="12rem" borderRadius="md" />
      <Skeleton h="12rem" borderRadius="md" />
    </SimpleGrid>
  )
}
