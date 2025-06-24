import {
  Input,
  Link,
  Box,
  HStack,
  IconButton,
  useClipboard,
} from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import FaceBookIcon from '@/icons/share-modal/facebook.svg'
import GmailIcon from '@/icons/share-modal/gmail.svg'
import LinkedinIcon from '@/icons/share-modal/linkedin.svg'
import TwitterIcon from '@/icons/share-modal/twitter.svg'
import WhatsappIcon from '@/icons/share-modal/whatsapp.svg'
import useTranslation from 'src/hooks/useTranslation'
import Modal from 'ui/primitives/Modal'

interface ShareModalProps {
  link: string
  text: string
  isOpen: boolean
  onClose: () => void
}

const ShareIconButton = ({
  icon,
  link,
}: {
  icon: JSX.Element
  link: string
}) => {
  return (
    <IconButton
      aria-label="Share package"
      isExternal
      as={Link}
      size="lg"
      bg="_white"
      icon={icon}
      href={link}
      _active={{ transform: 'scale(1)' }}
      _hover={{ transform: 'scale(1.1)' }}
    />
  )
}

export default function ShareModal({
  link,
  text,
  isOpen,
  onClose,
}: ShareModalProps) {
  const { hasCopied, onCopy } = useClipboard(link)
  const { t } = useTranslation()

  const encodeLink = (url: string) => {
    const encodedLink = url.replace('/', '%2F').replace(':', '%3A')
    return encodedLink
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <Box my="8">
        <Text
          fontSize="2xl"
          fontWeight="medium"
          textAlign="center"
          pb="6"
          st="common.share.link"
        />
        <HStack spacing="3" justify="center">
          <ShareIconButton
            icon={<FaceBookIcon />}
            link={`https://www.facebook.com/sharer.php?u=${link}`}
          />
          <ShareIconButton
            icon={<LinkedinIcon />}
            link={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeLink(
              link
            )}`}
          />
          <ShareIconButton
            icon={<GmailIcon />}
            link={`mailto:?subject=&body=${t(text)}%20${link}`}
          />
          <ShareIconButton
            icon={<WhatsappIcon />}
            link={`https://wa.me/?text=${link}`}
          />
          <ShareIconButton
            icon={<TwitterIcon />}
            link={`https://twitter.com/intent/tweet?text=${t(
              text
            )}&url=${link}`}
          />
        </HStack>
        <HStack mt="5">
          <Input value={link} isReadOnly />
          <Button
            primary
            onClick={onCopy}
            ml={2}
            id="copy-trip-page-url-button"
          >
            {hasCopied ? (
              <Text notag st="common.copied" />
            ) : (
              <Text notag st="common.copy" />
            )}
          </Button>
        </HStack>
      </Box>
    </Modal>
  )
}
