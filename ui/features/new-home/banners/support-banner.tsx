import { Center, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import ResponseTimerIcon from '@/icons/homepage/response-timer-icon.svg'
import useChatBot from 'src/hooks/useChatBot'

const SupportBanner = () => {
  const { showAndOpen } = useChatBot()

  return (
    <HStack
      mt={{ base: '1.5rem', md: 0 }}
      px={4}
      minH={'90px'}
      borderRadius={'lg'}
      spacing={4}
      bg={'_lightestgray'}
      w={'full'}
      cursor={'pointer'}
      onClick={showAndOpen}
    >
      <Center p={2} borderRadius={'full'} bg={'_orange'}>
        <ResponseTimerIcon />
      </Center>
      <VStack spacing={-1} align={'flex-start'}>
        <Text
          fontWeight={'medium'}
          st="home-page.trust.banner.second.heading"
        />
        <Text fontSize={'xs'} st="home-page.trust.banner.second.description" />
      </VStack>
    </HStack>
  )
}

export default SupportBanner
