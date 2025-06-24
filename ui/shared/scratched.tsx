import Text from 'ui/primitives/Text'
import { CustomTextProps } from 'ui/primitives/Text/text.type'

type ScratchedProps = {} & CustomTextProps

export default function Scratched({ children, ...rest }: ScratchedProps) {
  return (
    <Text
      as="s"
      fontSize="sm"
      color="primary"
      opacity={0.6}
      display="inline-block"
      {...rest}
    >
      <Text as="span" color="_gray">
        {children}
      </Text>
    </Text>
  )
}
