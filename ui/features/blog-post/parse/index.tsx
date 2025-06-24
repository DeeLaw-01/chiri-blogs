import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import ReactParse from 'html-react-parser'
import { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import BlogImage from './image'
import BlogLink from './link'
import CustomComponents from './custom-components'
import BlogText from './text'

export default function parse(content: string) {
  if (!content) return

  const options = {
    replace: ({ attribs, tagName, children }: Element) => {
      const dom = children ? domToReact(children, options) : undefined

      switch (tagName) {
        case 'p':
          return <BlogText attribs={attribs}>{dom}</BlogText>
        case 'h1':
          return <Heading as="h1">{dom}</Heading>
        case 'h2':
          return <Heading as="h2">{dom}</Heading>
        case 'h3':
          return <Heading as="h3">{dom}</Heading>
        case 'h4':
          return <Heading as="h4">{dom}</Heading>
        case 'ul':
          return <UnorderedList mt={4}>{dom}</UnorderedList>
        case 'ol':
          return <OrderedList mt={4}>{dom}</OrderedList>
        case 'li':
          return <ListItem>{dom}</ListItem>
        case 'a':
          return <BlogLink attribs={attribs}>{dom}</BlogLink>
        case 'img':
          return <BlogImage attribs={attribs} />
        case 'button':
          return <CustomComponents>{dom}</CustomComponents>
      }
    },
  } as HTMLReactParserOptions

  return ReactParse(content, options)
}
