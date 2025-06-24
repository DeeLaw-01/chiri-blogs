import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Card from 'ui/primitives/Card'
// import Image from 'ui/primitives/Image'
import Button from 'ui/primitives/Button'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import Tag from 'ui/primitives/Tag'

type LuggageCardProps = {
  numberOfPeople: number
}

export default function LuggageCard({ numberOfPeople }: LuggageCardProps) {
  const { setShowLuggageInfo } = useTripDetailsAtoms()
  return (
    <Box
      position="relative"
      role="group"
      onClick={() => setShowLuggageInfo(true)}
      _hover={{ cursor: 'pointer' }}
    >
      <Card p={5} mt="2">
        <Tag green fontSize="xs" mb="1">
          <Text notag st="new-trip-page:tag.included" />
        </Tag>
        <Heading as="h4" fontSize={{ base: 'md', md: 'lg' }}>
          {numberOfPeople}x <Text notag st="common:bag.personal" />
        </Heading>
        <Text
          secondary
          maxW="calc(100% - 125px)"
          st="new-trip-page:overview.luggage.description"
        />
        <Button
          id="read-more-luggage-button-1"
          arrow
          asLink
          fontSize={{ base: 'xs', md: 'sm' }}
        >
          <Text st="common.view.more" />
        </Button>
      </Card>
      {/* <Box position="absolute" right="0" top="-10">
        <Image
          src={'/static/bag.png'}
          alt="luggage illustration"
          width="125"
          height="150"
        />
      </Box> */}
    </Box>
  )
}
