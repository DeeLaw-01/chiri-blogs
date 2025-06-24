import { Text as ChakraText } from '@chakra-ui/react'
import useTranslation from 'src/hooks/useTranslation'
import { forwardRef, Ref } from 'react'
import { CustomTextProps } from './text.type'
import { styles } from './styles'

const Text = forwardRef<HTMLParagraphElement, CustomTextProps>(function Text(
  { st, sd, notag, secondary, children, ...rest }: CustomTextProps,
  ref: Ref<HTMLParagraphElement>
) {
  const { t } = useTranslation()

  return (
    <ChakraText
      ref={ref}
      {...styles.default}
      {...(secondary && styles.secondary)}
      {...(notag && styles.notag)}
      {...rest}
    >
      {st ? t(st, sd) : children}
    </ChakraText>
  )
})

export default Text
