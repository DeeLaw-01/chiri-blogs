import Text from 'ui/primitives/Text'
import useChatBot from 'src/hooks/useChatBot'
import Button from 'ui/primitives/Button'

const SupportNavButton = ({ isTransparent }) => {
  const { showAndOpen } = useChatBot()

  return (
    <Button
      asLink
      id="support-button"
      color={isTransparent ? '_white' : '_black'}
      onClick={showAndOpen}
    >
      <Text notag st="common.navbar.support.button.tooltip" />
    </Button>
  )
}

export default SupportNavButton
