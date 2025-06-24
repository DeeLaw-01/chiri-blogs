import { Box, VStack, useDisclosure } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'
import theme from 'src/styles/theme'
import { usePathname, useRouter } from 'src/i18n/router'
import { useEffect } from 'react'
import Button from 'ui/primitives/Button'
import useLocalstorage from 'src/hooks/useLocalStorage'
import Trans from 'ui/shared/trans'

const exclude = ['/checkout', '/manage-booking', '/giftcard']

export default function EmailSignUpModal() {
  const [opened, setOpened] = useLocalstorage('thailand-campaign', 'false')
  const router = useRouter()
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const shouldNotOpen = () => {
    if (opened === 'true') return true
    return exclude.some((p) => pathname !== '/' && p.startsWith(pathname))
  }

  useEffect(() => {
    if (shouldNotOpen()) return
    else openOnTimeout()
  }, [])

  const openOnTimeout = () => {
    const handler = setTimeout(() => onOpen(), 10000)
    return () => {
      clearTimeout(handler)
    }
  }

  const handleClick = () => {
    // router.push('/?includeLocations=TH')
    handleClose()
  }

  const handleClose = () => {
    setOpened('true')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="md"
      modalContentStyle={{
        bgGradient: `linear(to-br, ${theme.colors.primary}, yellow.500 100%)`,
        overflow: 'hidden',
      }}
    >
      <VStack textAlign="center" py="8">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          color="_white"
          textShadow={`2px 2px ${theme.colors._gray}`}
          st="common.coins.campaign.modal.heading"
        />
        <Text
          color="_white"
          my="2"
          textShadow={`1px 0px ${theme.colors._gray}`}
        >
          <Trans
            st="common.coins.campaign.modal.description"
            sd={{
              tos: (chunks) => (
                <Text as="span" fontWeight="bold">
                  {chunks}
                </Text>
              ),
            }}
          />
        </Text>

        <Button
          id="search"
          primary
          mt="4"
          onClick={handleClick}
          bg="_white"
          color="_black"
          zIndex={2}
        >
          <Text st="common.coins.campaign.button.text" />
        </Button>
        <Box
          bg="_black"
          color="_white"
          borderRadius="md"
          textTransform="uppercase"
          py="1"
          px="2"
          zIndex={2}
        >
          <Text st="common.coins.campaign.footer.text" />
        </Box>
      </VStack>
      <Box
        pos="absolute"
        zIndex="0"
        right="0"
        bottom={0}
        height="100%"
        maxH="120px"
        backgroundSize="contain"
        w="60%"
        backgroundImage={'/static/coins/coins-phone.png'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'right'}
      />
    </Modal>
  )
}
