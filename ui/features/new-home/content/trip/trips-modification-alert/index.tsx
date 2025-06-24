import Alert from 'ui/primitives/Alert'
import { useTripAtoms } from '../useTripAtoms'
import { GridItem } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

export default function TripsModificationAlert() {
  const { tripsModification, tripsLoading, trips } = useTripAtoms()

  if (!tripsLoading && trips?.length === 0) return <></>
  if (!tripsModification || tripsModification.length === 0) return <></>

  const firstModification = tripsModification?.find(
    (modification) => modification?.message
  )
  if (!firstModification) return <></>

  return (
    <GridItem gridColumn={'1 / -1'}>
      <Alert info icon>
        <Text st="home-page.package.alert.changed.description" />
      </Alert>
    </GridItem>
  )
}
