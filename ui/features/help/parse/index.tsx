import Heading from 'ui/primitives/Heading'
import ReactParse from 'html-react-parser'
import { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import Text from 'ui/primitives/Text'
import HelpLink from './link'
import { ListItem, UnorderedList } from '@chakra-ui/react'

export default function parse(content: string) {
  if (!content) return

  const options = {
    replace: ({ attribs, tagName, children }: Element) => {
      const dom = children ? domToReact(children, options) : undefined

      switch (tagName) {
        case 'p':
          return <Text {...attribs}>{dom}</Text>
        case 'a':
          return <HelpLink attribs={attribs}>{dom}</HelpLink>
        case 'h1':
          return <Heading as="h1">{dom}</Heading>
        case 'h2':
          return (
            <Heading as="h2" mt={5}>
              {dom}
            </Heading>
          )
        case 'h3':
          return <Heading as="h3">{dom}</Heading>
        case 'h4':
          return <Heading as="h4">{dom}</Heading>
        case 'ul':
          return <UnorderedList>{dom}</UnorderedList>
        case 'li':
          return <ListItem>{dom}</ListItem>
      }
    },
  } as HTMLReactParserOptions

  return ReactParse(content, options)
}
