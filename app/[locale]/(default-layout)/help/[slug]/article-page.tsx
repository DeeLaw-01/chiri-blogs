'use client'

import Container from 'ui/primitives/Container'
import { Box, Divider, HStack, List, Stack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import TickIcon from '@/icons/shared/tick-icon.svg'
import CrossIcon from '@/icons/shared/cross-icon.svg'
import Breadcrumb from 'ui/features/help/breadcrumb'
import { useState } from 'react'

import CheckIcon from '@/icons/new/alert/circle-check.svg'
import { useRouter } from 'src/i18n/router'
import { Article } from 'ui/features/help/help.type'
import parse from 'ui/features/help/parse'
import { getHeadersParse } from 'ui/features/help/parse/headers'
import useChatBot from 'src/hooks/useChatBot'

type HelpArticleProps = {
  article: Article
}
export default function HelpArticle({ article }: HelpArticleProps) {
  const { showAndOpen } = useChatBot()
  const [feedback, setFeedback] = useState<string[]>([])
  const router = useRouter()

  const handleFeedback = (): void => {
    setFeedback((prev) => [...prev, article.slug])
  }

  return (
    <>
      <Container mt="8">
        <HStack pb="5">
          <Breadcrumb current={article.title} />
        </HStack>
        <Stack
          p={5}
          border="1px"
          borderColor="_lightgray"
          borderRadius={'lg'}
          spacing={3}
        >
          <Heading as="h1">{article.title}</Heading>
          <Text>{article.description}</Text>
          <Divider />

          <Text color="_darkgray" st="help-page.article.section.title" />
          <List>{getHeadersParse(article.content)}</List>
          <Divider />

          {parse(article.content)}
          <Divider pb={3} />
          {!feedback?.includes(article.slug) && (
            <>
              <Heading as="h3" st="help-page.article.rate.title" />
              <HStack>
                <Button
                  id="article-feedback-yes"
                  secondary
                  onClick={() => handleFeedback()}
                >
                  <Box mr="2">
                    <TickIcon height="15" width="15" />
                  </Box>
                  <Text notag st="help-page.article.rate.yes" />
                </Button>
                <Button
                  id="article-feedback-no"
                  secondary
                  onClick={() => handleFeedback()}
                >
                  <Box mr="2">
                    <CrossIcon height="13" width="13" strokeWidth="2" />
                  </Box>
                  <Text notag st="help-page.article.rate.no" />
                </Button>
              </HStack>
            </>
          )}
          {feedback?.includes(article.slug) && (
            <HStack color="_green" mt="2">
              <CheckIcon fill="blue" height="2rem" />
              <Text
                color="_black"
                fontSize={'xl'}
                st="help-page.article.rate.feedback"
              />
            </HStack>
          )}
        </Stack>
        {article.relatedArticles?.length > 0 && (
          <Heading
            as="h2"
            mt={10}
            st="help-page.article.related.title"
            fontSize={{ base: '2xl', md: '3xl' }}
          />
        )}
        <Stack spacing={3} mt="3">
          {article.relatedArticles?.map((related, idx) => (
            <Box
              p={5}
              key={idx}
              border="1px"
              borderColor="_lightgray"
              borderRadius={'lg'}
              _hover={{ boxShadow: 'md', cursor: 'pointer' }}
              onClick={() => router.push('/help/' + related.slug)}
            >
              <Text fontWeight={'medium'}>{related.title}</Text>
              <Text>{related.description}</Text>
            </Box>
          ))}
        </Stack>
        <Stack
          w="full"
          display="flex"
          justifyContent={'flex-end'}
          mt="5"
          alignItems="center"
          mb={10}
          direction={['column', 'row']}
        >
          <Text mr="3" st="help-page.support.banner.help" />
          <Button
            primary
            id="contact-support-button"
            onClick={() => showAndOpen()}
          >
            <Text notag st="help-page.support.banner.button" />
          </Button>
        </Stack>
      </Container>
    </>
  )
}
