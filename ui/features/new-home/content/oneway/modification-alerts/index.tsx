import { GridItem } from '@chakra-ui/react'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'
import { useOnewayAtoms } from '../useOnewayAtoms'

export default function OnewayModificationAlert() {
  const { modification } = useOnewayAtoms()

  const firstModification = modification.find(
    (modification) => modification?.message
  )

  if (!firstModification) return <></>

  return (
    <GridItem gridColumn={'1 / -1'}>
      <Alert info icon>
        <Text>{firstModification.message}</Text>
      </Alert>
    </GridItem>
  )
}
