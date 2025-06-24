import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import { useOnewayAtoms } from '../../useOnewayAtoms'
import { GridItem } from '@chakra-ui/react'
import TransportBaseLoadingCard from 'ui/features/trip-details/transport/transport-card/transport-base-loading-card'
import { THRESHOLD } from '../../oneways'

export default function TransportLoading() {
  const { searchType, oneway } = useOnewayAtoms()

  if (searchType !== OnewayResponseType.ONEWAY) return <></>
  if (oneway.length > THRESHOLD) return <></>

  return (
    <>
      {[...Array(6)].map((_, index) => (
        <GridItem gridColumn={'1 / -1'} key={index}>
          <TransportBaseLoadingCard />
        </GridItem>
      ))}
    </>
  )
}
