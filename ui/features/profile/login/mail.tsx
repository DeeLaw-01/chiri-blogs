import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import MailIcon from '@/icons/new/contact/envelope.svg'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

export default function MailLogin() {
  const { setShowAuth } = useGlobalAtoms()

  return (
    <Button
      id="google-login-button"
      leftIcon={<MailIcon height="1em" />}
      _hover={{ opacity: 0.75 }}
      bg="_white"
      border="1px solid"
      borderColor="_lightgray"
      w="full"
      onClick={() => setShowAuth(true)}
    >
      <Text notag st="common.login.continue.with.email" />
    </Button>
  )
}
