import { GridItem } from '@chakra-ui/react'
import { useTripAtoms } from '../useTripAtoms'
import LoadingCard from './card'
import LoadingBar from './loading-bar'
import Text from 'ui/primitives/Text'

export default function TripsLoading() {
  const { tripsLoading, trips } = useTripAtoms()

  if (!tripsLoading) return <></>

  return (
    <>
      {trips.length === 0 && (
        <GridItem gridColumn={'1 / -1'}>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            st="home-page.loading.main.text"
          />
          <LoadingBar />
        </GridItem>
      )}
      {[...Array(6)].map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </>
  )
}
