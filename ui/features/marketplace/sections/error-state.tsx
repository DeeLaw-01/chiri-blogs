import { VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import DogIcon from '@/icons/dog.svg'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'

function ErrorState() {
  const { activeFilter } = useMarketPlaceAtoms()

  if (activeFilter === 'ALL') return null

  return (
    <VStack mt={5}>
      <DogIcon width="150" height="200" />
      <Text st="manage-booking-page.marketplace.item.not.avalaible.descprition" />
    </VStack>
  )
}

export default ErrorState
