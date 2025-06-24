import { HStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'

export default function Clock() {
  return (
    <HStack w={'80%'} justify={'space-evenly'} color="_gray" mt="3">
      <Card p="3" borderRadius={'lg'} w={'33%'} textAlign="center">
        <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'medium'}>
          00
        </Text>
        <Text fontSize={{ base: '2xs', md: 'xs' }} st="common.timer.hours" />
      </Card>
      <Text>:</Text>
      <Card p="3" borderRadius={'lg'} w={'33%'} textAlign="center">
        <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'medium'}>
          00
        </Text>
        <Text fontSize={{ base: '2xs', md: 'xs' }} st="common.timer.minutes" />
      </Card>
      <Text>:</Text>
      <Card p="3" borderRadius={'lg'} w={'33%'} textAlign="center">
        <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'medium'}>
          00
        </Text>
        <Text fontSize={{ base: '2xs', md: 'xs' }} st="common.timer.seconds" />
      </Card>
    </HStack>
  )
}
