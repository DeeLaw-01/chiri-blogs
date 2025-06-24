import Button from 'ui/primitives/Button'
import { CustomButtonProps } from 'ui/primitives/Button/button.type'

type BaseInputButtonProps = {} & CustomButtonProps

export default function BaseInputButton({
  children,
  ...rest
}: BaseInputButtonProps) {
  return (
    <Button
      h="100%"
      width="100%"
      border="none"
      borderRadius="0"
      textAlign={'left'}
      bg="transparent"
      _hover={{ bg: '_white', color: 'primary' }}
      _focus={{ bg: '_white', color: 'primary' }}
      {...rest}
    >
      {children}
    </Button>
  )
}
