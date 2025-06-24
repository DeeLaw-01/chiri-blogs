import { Box, CloseButton, Flex, HStack, VStack } from '@chakra-ui/react'
import LogoIcon from '@/icons/logo.svg'
import Text from 'ui/primitives/Text'
import { CONFIG_COMPANY } from 'src/config'
import useSessionStorage from 'src/hooks/useSessionStorage'
import Button from 'ui/primitives/Button'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useRouter } from 'src/i18n/router'

function AppRedirect() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useSessionStorage<boolean>(
    'appRedirectModalStatus',
    true
  )

  const { isMobile } = useResponsiveSizes()

  const handleClick = (): void => {
    const device = navigator.userAgent
    if (device.match(/iPhone/i)) {
      router.push('https://apps.apple.com/us/app/tryp-com/id6467689689')
    }

    if (device.toLowerCase().indexOf('android') > -1) {
      router.push(
        'https://play.google.com/store/apps/details?id=com.nordicotech.tryp&pli=1'
      )
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isMobile) return <></>
  return (
    <>
      {isOpen && (
        <Flex
          as="nav"
          top="-1px"
          left="0"
          right="0"
          alignItems={'center'}
          justifyContent="space-between"
          p={2}
          zIndex={'tooltip'}
          position={'fixed'}
          bg={'_white'}
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)"
        >
          <HStack gap={1}>
            <CloseButton onClick={handleClose} />
            <Box
              bg={'_lightestgray'}
              borderRadius={'2xl'}
              px={2}
              py={4}
              ml={-1}
              color="_black"
            >
              <LogoIcon height="10" />
            </Box>
            <VStack alignItems={'flex-start'} spacing={0} fontSize={'sm'}>
              <Text fontWeight="medium">{CONFIG_COMPANY.COMPANY_NAME}</Text>
              <Text
                color={'_gray'}
                fontSize={'xs'}
                st="manage-booking-page:app.banner.description"
              />
            </VStack>
          </HStack>

          <Button id="use app" primary onClick={handleClick}>
            Use App
          </Button>
        </Flex>
      )}
    </>
  )
}

export default AppRedirect
