import { Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useTripAtoms } from '../useTripAtoms'

export default function EndMessage() {
  const { tripsLoading, showLoadMore, trips } = useTripAtoms()

  if (!trips.length || showLoadMore || tripsLoading) return <></>
  return (
    <Box w="full" textAlign={'center'} my={2}>
      <Text st="home-page.end.description" />
    </Box>
  )
}
