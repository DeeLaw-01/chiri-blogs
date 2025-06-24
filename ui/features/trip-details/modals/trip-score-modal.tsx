import { Box, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'
import Stars from 'ui/shared/stars'
import Button from 'ui/primitives/Button'

type TripScoreModalProps = {
  isOpen: boolean
  onClose: () => void
  score: number
}

export default function TripScoreModal({
  isOpen,
  onClose,
  score,
}: TripScoreModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<Heading as="h2">Trip Score</Heading>}
    >
      <HStack
        justify="space-around"
        w="fit-content"
        px={5}
        py={1}
        bg="_lightestgray"
        borderRadius="full"
        m={'auto'}
      >
        <Stars amount={5} size="3xl" />
        <Text fontSize="sm">
          <Text as="span" fontWeight="medium">
            {score}{' '}
          </Text>
          out of{' '}
          <Text as="span" fontWeight="medium">
            10
          </Text>
        </Text>
      </HStack>
      <Box py={5} fontWeight="medium">
        <HStack w="full" justify="space-between" color="_gray" fontSize="xs">
          <Text>Price</Text>
          <Text>{Math.trunc(score * 10)}</Text>
        </HStack>
        <Progress value={score * 10} />
      </Box>
      <Box mb={5} fontWeight="medium">
        <HStack w="full" justify="space-between" color="_gray" fontSize="xs">
          <Text>Departure time</Text>
          <Text>{Math.trunc(score * 6)}</Text>
        </HStack>
        <Progress value={score * 6} />
      </Box>
      <Box mb={5} fontWeight="medium">
        <HStack w="full" justify="space-between" color="_gray" fontSize="xs">
          <Text>Transport duration</Text>
          <Text>{Math.trunc(score * 5)}</Text>
        </HStack>
        <Progress value={score * 5} />
      </Box>
      <Box mb={5} fontWeight="medium">
        <HStack w="full" justify="space-between" color="_gray" fontSize="xs">
          <Text>Cities</Text>
          <Text>{Math.trunc(score * 7)}</Text>
        </HStack>
        <Progress value={score * 7} />
      </Box>
      <Text color="_gray" fontSize="xs">
        This trip was generated using real-time data and artificial intelligence
        to find the best trip combination for you. Trips are scored based on
        multiple different values. Have a look above to see how it scored.
      </Text>
      <HStack justify="space-around" mt="2" pb={5}>
        <Button id="learn-more-score" asLink fontSize="xs">
          Read more of how it works
        </Button>
      </HStack>
    </Modal>
  )
}

const Progress = ({ value }: { value: number }) => {
  return (
    <Box w="full" bg="_lightgray" borderRadius="lg" overflow="hidden" h="2">
      <Box w={`${value}%`} bg="_lightorange" h="full" />
    </Box>
  )
}
