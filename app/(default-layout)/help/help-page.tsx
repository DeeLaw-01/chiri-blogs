'use client'

import Container from 'ui/primitives/Container'
import { Box, Stack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Accordion from 'ui/primitives/Accordion'
import { FAQData } from 'src/data/faqs'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import useChatBot from 'src/hooks/useChatBot'
import { articles } from 'ui/features/help/help-data'
import NextLink from 'next/link'
import SearchBox from 'ui/features/help/article-search'
import useTranslation from 'src/hooks/useTranslation'
import JSONLD from 'ui/shared/json-ld'
import GuideSection from 'ui/features/help/guides/section'

export default function Help(): JSX.Element {
  const { showAndOpen } = useChatBot()
  const { t } = useTranslation()

  const getStructuredData = (): object => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: getStructuredDataFaqs(),
    }
  }

  const getStructuredDataFaqs = (): object => {
    return FAQData.map((faq) => {
      return {
        '@type': 'Question',
        name: t(faq.title, faq.sd),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(faq.content, faq.sd),
        },
      }
    })
  }

  return (
    <>
      <JSONLD structuredData={getStructuredData()} />
      <VStack
        pos="relative"
        h="22rem"
        bg="_lightgray"
        py={{ base: 20, md: 20 }}
        px={5}
      >
        <VStack
          w="full"
          maxW={{ md: '50rem', base: 'full' }}
          spacing={{ base: 3, md: 5 }}
        >
          <Heading as="h1" st="help-page.header" />
          <SearchBox />
          <Box w="full">
            <Heading
              as="h3"
              alignContent="start"
              w="full"
              st="help-page.suggestions.title"
            />
            <Stack
              w="full"
              direction={['column', 'row']}
              justifyContent={'space-between'}
              mt={{ base: '1', md: '2' }}
              spacing={['0', '10']}
            >
              {articles.map((a, idx) => {
                if (idx > 2) return
                return (
                  <NextLink key={idx} href={`/help/${a.slug}`}>
                    <Text
                      color="primary"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {a.title}
                    </Text>
                  </NextLink>
                )
              })}
            </Stack>
          </Box>
        </VStack>
      </VStack>
      <Container>
        <GuideSection />
        <Box minH="100vh" py={10}>
          <Stack
            direction={['column', 'row']}
            bg="secondary"
            py={10}
            px={5}
            borderRadius={'lg'}
            spacing={5}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                st="help-page.support.banner.title"
              />
              <Text color="_darkgray" st="help-page.support.banner.subtitle" />
            </Box>
            <Button
              primary
              w={{ base: 'full', md: 'initial' }}
              onClick={() => {
                if (showAndOpen) {
                  showAndOpen()
                }
              }}
              id="contact-support-button"
            >
              <Text notag st="help-page.support.banner.button" />
            </Button>
          </Stack>
          <Box mt="10">
            <Heading as="h2" st="faqs-data.header" />
            <Box
              border="1px"
              borderColor="_lightgray"
              borderRadius={'lg'}
              p={3}
              mt={5}
            >
              <Accordion items={FAQData} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
