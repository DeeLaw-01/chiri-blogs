import { Box, VStack, UnorderedList, ListItem } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Container from 'ui/primitives/Container'
import { CONFIG_COMPANY } from 'src/config'
import Link from 'ui/primitives/Link'

export default function Privacy() {
  return (
    <Container mt="8">
      <Box minH="100vh">
        <Heading
          as="h1"
          st="privacy-page.heading.one"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
        />

        <VStack spacing="4" align="flex-start" mt="2" mb="32">
          <Box>
            <Text
              mt="2"
              st="privacy-page.description.one.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text mt="2" st="privacy-page.description.one.two" />
            <Text
              mt="2"
              st="privacy-page.description.one.three"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.two" />
            <Text mt="2" st="privacy-page.description.two.one" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.three" />
            <Text mt="2" st="privacy-page.description.three.one" />
            <Text mt="2" st="privacy-page.description.three.two" />
            <Text mt="2" st="privacy-page.description.three.three" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.four" />
            <Text mt="2" st="privacy-page.description.four.one" />
            <UnorderedList mt="2">
              <ListItem>
                <Text notag st="privacy-page.description.four.item.one" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.two" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.three" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.four" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.five" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.six" />
              </ListItem>
              <ListItem>
                <Text notag st="privacy-page.description.four.item.seven" />
              </ListItem>
            </UnorderedList>
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.five" />
            <Text
              mt="2"
              st="privacy-page.description.five.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.six" />
            <Text
              mt="2"
              st="privacy-page.description.six.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text
              mt="2"
              st="privacy-page.description.six.two"
              display="inline-block"
            />{' '}
            <Link
              isExternal
              color="primary"
              href="https://www.privacypolicyonline.com/what-are-cookies/"
            >
              What are cookies
            </Link>
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.seven" />
            <Text
              mt="2"
              st="privacy-page.description.seven.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text
              mt="2"
              st="privacy-page.description.seven.two"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text
              mt="2"
              st="privacy-page.description.seven.three"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.eight" />
            <Text
              mt="2"
              st="privacy-page.description.eight.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text mt="2" st="privacy-page.description.eight.two" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.nine" />

            <Text mt="2" st="privacy-page.description.nine.one" />
            <Text mt="2" st="privacy-page.description.nine.two" />
            <Text mt="2" st="privacy-page.description.nine.three" />
            <Text mt="2" st="privacy-page.description.nine.four" />
            <Text mt="2" st="privacy-page.description.nine.five" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.ten" />
            <Text mt="2" st="privacy-page.description.ten.one" />
            <Text mt="2" st="privacy-page.description.ten.two" />
            <Text mt="2" st="privacy-page.description.ten.three" />
            <Text mt="2" st="privacy-page.description.ten.four" />
            <Text mt="2" st="privacy-page.description.ten.five" />
            <Text mt="2" st="privacy-page.description.ten.six" />
            <Text mt="2" st="privacy-page.description.ten.seven" />
            <Text mt="2" st="privacy-page.description.ten.eight" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="privacy-page.heading.eleven" />
            <Text mt="2" st="privacy-page.description.eleven.one" />
            <Text
              mt="2"
              st="privacy-page.description.eleven.two"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
            />
          </Box>
        </VStack>
      </Box>
    </Container>
  )
}
