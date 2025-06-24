import { Tag as ChakraTag } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomTagProps } from './type'

const Tag = ({
  purple,
  yellow,
  green,
  blue,
  red,
  children,
  ...rest
}: CustomTagProps) => {
  return (
    <ChakraTag
      {...styles.default}
      {...(purple && styles.purple)}
      {...(blue && styles.blue)}
      {...(green && styles.green)}
      {...(yellow && styles.yellow)}
      {...(red && styles.red)}
      {...rest}
    >
      {children}
    </ChakraTag>
  )
}

export default Tag
