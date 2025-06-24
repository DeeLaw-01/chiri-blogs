import { Box } from '@chakra-ui/react'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

export default function TripSearchTip() {
  return (
    <Alert info icon mt="2">
      <Box>
        <Text fontSize="xs" st="home-page.advanced.search.drawer.tip" />
      </Box>
    </Alert>
  )
}
