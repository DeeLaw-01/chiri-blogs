import { GridItem } from '@chakra-ui/react'
import { useOnewayAtoms } from '../useOnewayAtoms'
import TransportLoading from './transport-loading'
import TripsLoading from './trip-loading'
import Text from 'ui/primitives/Text'
import LoadingBar from '../../trip/loading/loading-bar'

export default function OnewayLoading() {
  const { onewayLoading, searchType } = useOnewayAtoms()

  if (!onewayLoading) return <></>

  if (!searchType)
    return (
      <GridItem gridColumn={'1 / -1'}>
        <Text fontSize={{ base: 'lg', md: 'xl' }} st="common.general.loading" />
        <LoadingBar />
      </GridItem>
    )

  return (
    <>
      <TripsLoading />
      <TransportLoading />
    </>
  )
}
