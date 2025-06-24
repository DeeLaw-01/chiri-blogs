import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import GoogleIcon from '@/icons/shared/google-colored.svg'
import { socialSignIn } from 'src/utils/userProfileUtils'

export default function GoogleLoginButton() {
  return (
    <Button
      id="google-login-button"
      leftIcon={<GoogleIcon />}
      _hover={{ opacity: 0.9 }}
      bg="_lightgray"
      w="full"
      onClick={() => socialSignIn('Google')}
    >
      <Text notag st="common.login.modal.continue.with.google" />
    </Button>
  )
}
