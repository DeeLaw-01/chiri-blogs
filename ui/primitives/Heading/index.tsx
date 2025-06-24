import { Heading as ChakraHeading } from '@chakra-ui/react'
import useTranslation from 'src/hooks/useTranslation'
import { CustomHeadingProps, StyleType } from './heading.type'
import { styles } from './styles'

export default function Heading({
  st,
  sd,
  asStyle,
  children,
  ...rest
}: CustomHeadingProps) {
  const { t } = useTranslation()

  return (
    <ChakraHeading
      {...styles.default}
      {...(rest.as && styles[rest.as as keyof StyleType])}
      {...(asStyle && styles[asStyle])}
      {...rest}
    >
      {st ? t(st, sd) : children}
    </ChakraHeading>
  )
}
