import { Box, VStack } from '@chakra-ui/react'
import { FAQData } from 'src/data/faqs'
import Accordion from 'ui/primitives/Accordion'
import Heading from 'ui/primitives/Heading'
import Link from 'ui/primitives/Link'
import SupportCard from '../overview/support-card'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Included from './included'

export default function FAQOverview() {
  return (
    <Box pb={5}>
      <Heading
        as="h1"
        mb="5"
        fontWeight="normal"
        st="new-trip-page:faqs.header.included"
      />
      <Included />
      <Box mt="10">
        <Heading
          as="h1"
          fontWeight="normal"
          st="new-trip-page:faqs.header.faqs"
        />
        <Accordion
          items={FAQData.slice(0, 6)}
          AccordionItemProps={{ fontSize: 'sm', pl: 0 }}
          AccordionButtonProps={{
            fontSize: 'sm',
            _hover: {},
            pl: 0,
          }}
        />
        <VStack pt="5" justifyContent="space-around" fontSize="xs">
          <Text color="_gray" st="new-trip-page:faqs.help.description" />
          <Button
            role="group"
            asLink
            arrow
            id="faqs-help-center-button"
            fontSize="xs"
            mt="0 !important"
          >
            <Link href="/help">
              <Text notag st="new-trip-page:faqs.help.button" />
            </Link>
          </Button>
        </VStack>
      </Box>
      <Box mt="10">
        <Heading
          as="h1"
          fontWeight="normal"
          mb="5"
          st="new-trip-page:faqs.header.support"
        />
        <SupportCard />
      </Box>
    </Box>
  )
}
