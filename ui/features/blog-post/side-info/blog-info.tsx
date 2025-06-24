import AtIcon from '@/icons/new/at.svg'
import TimerIcon from '@/icons/new/timer.svg'
import CalendarIcon from '@/icons/new/calendar.svg'
import CalendarPenIcon from '@/icons/new/calendar-pen.svg'
import Text from 'ui/primitives/Text'
import { Box, Flex } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { BlogType } from 'ui/features/blog/types/blog.type'

type BlogPostInfoProps = {
  blog: BlogType
}

const WORDS_PER_MINUTE = 250

export default function BlogPostInfo({ blog }: BlogPostInfoProps) {
  const format = useFormattedDate()

  const isUpdated = () => {
    return blog.publishTime !== blog.lastUpdateTime
  }

  const getReadingTime = (): number => {
    const wordCount = blog.content
      .replace(/<[^>]+>/g, '')
      .trim()
      .split(/\s+/).length
    return Math.ceil(wordCount / WORDS_PER_MINUTE)
  }

  return (
    <>
      <Heading as="h3" st="blog-page.blog.info.card.title" />

      <Box color="_darkgray">
        <Flex gap="0.5rem" align="center" mt="2">
          <AtIcon height="0.75rem" color="_gray" />
          <Text>{blog.createdBy}</Text>
        </Flex>
        <Flex gap="0.5rem" align="center" mt="1">
          <CalendarIcon height="0.75rem" color="_gray" />
          <Text>
            {format(blog.creationTime, false, true, true, false, true)}
          </Text>
        </Flex>
        {isUpdated() && (
          <Flex gap="0.5rem" align="center" mt="1">
            <CalendarPenIcon height="0.75rem" color="_gray" />
            <Text
              st="blog-page.blog.info.card.last.update"
              sd={{
                date: format(
                  blog.lastUpdateTime,
                  false,
                  true,
                  true,
                  false,
                  true
                ),
              }}
            />
          </Flex>
        )}
        <Flex gap="0.5rem" align="center" mt="1">
          <TimerIcon height="0.75rem" color="_gray" />
          <Text
            st="blog-page.blog.info.card.reading.time"
            sd={{ reading_time: getReadingTime() }}
          />
        </Flex>
      </Box>
    </>
  )
}
