import { useMediaQuery, Wrap } from '@chakra-ui/react'
import AnimatedTag from 'ui/primitives/AnimatedTag'
import Text from 'ui/primitives/Text'

type TransportTagsProps = {
  tags: TransportTagType[]
}

export type TransportTagType = 'recommended' | 'fastest' | 'cheapest'

export default function TransportTags({ tags }: TransportTagsProps) {
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')

  if (!minBreakCard || tags?.length === 0) return <></>

  const getTagColor = (tag: TransportTagType) => {
    if (tag === 'recommended') return { green: true }
    if (tag === 'cheapest') return { purple: true }
    if (tag === 'fastest') return { blue: true }
  }

  return (
    <Wrap
      spacing={1}
      w="full"
      mt="-2"
      minH="3"
      fontSize="xs"
      color="_darkgray"
      justify={'flex-end'}
      noOfLines={1}
    >
      {tags.map((tag, idx) => {
        if (tags.length === 3 && tag === 'recommended') return // Not much space - hide recommended if it has all.
        return (
          <AnimatedTag key={idx} {...getTagColor(tag)}>
            <Text notag st={`flight-info:tag.${tag}`} />
          </AnimatedTag>
        )
      })}
    </Wrap>
  )
}
