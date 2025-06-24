import { Box, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'
import { CONFIG_COMPANY, CONFIG_SETTINGS } from 'src/config'

export default function TermsAndConditions(): JSX.Element {
  return (
    <Container mt="8">
      <Box minH="100vh">
        <Heading as="h1" st="terms-page.header" />
        <VStack spacing="4" align="flex-start" mt="4" mb="32">
          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.one" />
            <Text
              mt="2"
              st="terms-page.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.two" />
            <Text
              mt="2"
              st="terms-page.heading.two.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.three" />
            <Text
              mt="2"
              st="terms-page.heading.three.description.one"
              sd={{
                company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME,
                insurance_name: CONFIG_SETTINGS.INSURANCE_FLEX_NAME,
              }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.four" />
            <Text mt="2">
              Chiri.pk is committed to protecting the privacy and personal data
              of its Users. The collection, use, and disclosure of personal data
              obtained through the Chiri.pk platform are governed by Chiri.pk's
              Privacy Policy, which is available at
              https://www.chiri.pk/privacy. Users are advised to review the
              Privacy Policy to understand how their personal data will be
              handled by Chiri.pk. By accessing or using the Chiri.pk platform
              and its services, Users consent to the collection, use,
              disclosure, and processing of their personal data in accordance
              with the Privacy Policy and applicable data protection laws and
              regulations. Users also acknowledge that their personal data may
              be transferred, processed, and stored in countries other than
              their country of residence, which may have different data
              protection laws and regulations. It is the responsibility of Users
              to ensure that their personal data provided to Chiri.pk is
              accurate, current, and complete, and to update it as necessary to
              maintain its accuracy and completeness. Users may exercise their
              rights under applicable data protection laws, such as the right to
              access, correct, or delete their personal data, by contacting
              Chiri.pk through the contact details provided in the Privacy
              Policy.
            </Text>
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.five" />
            <Text
              mt="2"
              st="terms-page.heading.five.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.six" />
            <Text
              mt="2"
              st="terms-page.heading.six.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.seven" />
            <Text
              mt="2"
              st="terms-page.heading.seven.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
            <Text
              mt="2"
              st="terms-page.heading.seven.description.two"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.eight" />
            <Text
              mt="2"
              st="terms-page.heading.eight.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.nine" />
            <Text mt="2" st="terms-page.heading.nine.description.one" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.ten" />
            <Text
              mt="2"
              st="terms-page.heading.ten.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.eleven" />
            <Text
              mt="2"
              st="terms-page.heading.eleven.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.twelve" />
            <Text
              mt="2"
              st="terms-page.heading.twelve.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.thirteen" />
            <Text mt="2" st="terms-page.heading.thirteen.description.one" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.fourteen" />
            <Text
              mt="2"
              st="terms-page.heading.fourteen.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.fifteen" />
            <Text mt="2" st="terms-page.heading.fifteen.description.one" />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.sixteen" />
            <Text
              mt="2"
              st="terms-page.heading.sixteen.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.seventeen" />
            <Text
              mt="2"
              st="terms-page.heading.seventeen.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.eighteen" />
            <Text
              mt="2"
              st="terms-page.heading.eighteen.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.nineteen" />
            <Text
              mt="2"
              st="terms-page.heading.nineteen.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.twenty" />
            <Text
              mt="2"
              st="terms-page.heading.twenty.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>

          <Box mt="4">
            <Heading as="h2" st="terms-page.heading.twentyone" />
            <Text
              mt="2"
              st="terms-page.heading.twentyone.description.one"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_LEGAL_NAME }}
            />
          </Box>
        </VStack>
      </Box>
    </Container>
  )
}
