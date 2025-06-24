import { HStack, ListItem } from '@chakra-ui/react'
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser'
import RightIcon from '@/icons/shared/right-icon.svg'
import theme from 'src/styles/theme'
import Link from 'ui/primitives/Link'

export function getHeadersParse(content: string) {
  if (!content) return

  let headingIndex = 0

  const parseOptions = {
    replace: ({ tagName, children }: Element) => {
      if (tagName === 'p') return <></>
      if (tagName === 'ul') return <></>
      if (tagName === 'h2') {
        headingIndex++
        return (
          <ListItem>
            <HStack pb={2}>
              <RightIcon width="12" height="12" stroke={theme.colors.primary} />
              <Link href={`#section-${headingIndex}`} color="primary">
                {domToReact(children, parseOptions)}
              </Link>
            </HStack>
          </ListItem>
        )
      }
    },
  } as HTMLReactParserOptions
  return parse(content, parseOptions)
}
