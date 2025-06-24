'use client'

import useChatBot from 'src/hooks/useChatBot'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

export default function SupportButton() {
  const { showAndOpen } = useChatBot()

  return (
    <Button asLink id="navbar-support" color="inherit" onClick={showAndOpen}>
      <Text notag st="common.navbar.support.button.tooltip" />
    </Button>
  )
}
