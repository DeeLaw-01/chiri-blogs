import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import FacebookBlankIcon from '@/icons/shared/facebook-blank.svg'
import { socialSignIn } from 'src/utils/userProfileUtils'

const FACEBOOK_DEFAULT_COLOR = '#4267B2'

export default function FacebookLoginButton() {
  return (
    <Button
      id="facebook-login-button"
      leftIcon={<FacebookBlankIcon />}
      bg={FACEBOOK_DEFAULT_COLOR}
      color="_white"
      _hover={{ opacity: 0.9 }}
      w="full"
      onClick={() => socialSignIn('Facebook')}
    >
      <Text notag st="common.login.modal.continue.with.facebook" />
    </Button>
  )
}
