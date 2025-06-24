import { Center, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import RatingIcon from '@/icons/homepage/rating-icon.svg'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import theme from 'src/styles/theme'
import useChatBot from 'src/hooks/useChatBot'
import useTranslation from 'src/hooks/useTranslation'
import { CONFIG_COMPANY } from 'src/config'

const WhyBanner = () => {
  const { t } = useTranslation()
  const { showAndOpen, sendMessage } = useChatBot()

  const handleClick = () => {
    showAndOpen()
    sendMessage(t('common.message.why.us'))
  }

  return (
    <HStack
      mt={{ base: '1.5rem', md: 0 }}
      px={4}
      minH={'90px'}
      borderRadius={'lg'}
      spacing={4}
      bg={'_lightestgray'}
      w={'full'}
      _hover={{ cursor: 'pointer' }}
      role="group"
      onClick={() => handleClick()}
    >
      <Center p={2} borderRadius={'full'} bg={'_orange'}>
        <RatingIcon />
      </Center>
      <VStack spacing={0} align={'flex-start'} w="full">
        <Text fontWeight={'medium'} st="home-page.banner.why.heading" />
        <Text
          fontSize={'xs'}
          st="home-page.banner.why.subheading"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
        />
      </VStack>
      <HStack spacing="5" _groupHover={{ mr: -1, ml: 1 }} transition="all .2s">
        <RightArrowSmallIcon stroke={theme.colors._darkgray} height={15} />
      </HStack>
    </HStack>
  )
}

export default WhyBanner
