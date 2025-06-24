import { ReactNode } from 'react'
import Text from 'ui/primitives/Text'

type BlogTextProps = {
  attribs: { [name: string]: string }
  children: ReactNode
}

export default function BlogText({ children, attribs }: BlogTextProps) {
  return (
    <Text
      my={4}
      textAlign="justify"
      wordBreak={'break-word'}
      sx={{ hyphens: 'auto' }}
      lineHeight="1.75"
      {...attribs}
    >
      {children}
    </Text>
  )
}
