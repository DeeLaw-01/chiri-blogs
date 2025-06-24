import { CloseButton, HStack, Box, BoxProps } from '@chakra-ui/react'
import { useNotification } from 'src/contexts/notification'
import { renderTextOrComponent } from 'src/utils/renderUtils'
import InfoCircleIcon from '@/icons/new-homepage/info-circle.svg'
import theme from 'src/styles/theme'

type NotificationLayoutProps = {
  id: string
  header: JSX.Element | string
  description: JSX.Element | string
  content?: JSX.Element
} & BoxProps

export default function NotificationLayout({
  id,
  header,
  description,
  content,
  ...rest
}: NotificationLayoutProps) {
  const { closeNotification } = useNotification()

  const handleClose = () => {
    closeNotification(id)
  }

  return (
    <Box
      w={{ base: '80vw', md: '400px' }}
      maxW="400px"
      p={3}
      border="1px solid"
      borderColor="_lightestgray"
      borderRadius="lg"
      {...rest}
    >
      <HStack>
        <Box width="12" height="12" alignSelf="flex-start" m={1}>
          <InfoCircleIcon
            fill={theme.colors._gray}
            stroke={theme.colors._white}
          />
        </Box>
        <Box w="full">
          <HStack justify="space-between" w="full" fontWeight="medium">
            <Box>{header && renderTextOrComponent(header)} </Box>
            <CloseButton mt="-1" mr="-1" onClick={handleClose} />
          </HStack>
          <Box fontSize="sm" mt="1" color="_gray">
            {renderTextOrComponent(description)}
          </Box>
          <Box>{renderTextOrComponent(content)}</Box>
        </Box>
      </HStack>
    </Box>
  )
}
