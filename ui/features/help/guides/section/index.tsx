import { Box, Stack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import { data } from './data'
import Link from 'ui/primitives/Link'
import { CONFIG_COMPANY } from 'src/config'

export default function GuideSection() {
  return (
    <Box my={12}>
      <Heading
        as="h2"
        st="help-page.guide.section.header"
        sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
      />
      <Stack direction={['column', 'row']} alignItems="stretch" gap={5} mt="5">
        {data.map((item) => {
          return (
            <Card
              overflow="hidden"
              w={{ base: 'full', md: 'full' }}
              _hover={{ boxShadow: 'md' }}
              key={item.title}
            >
              <Link
                key={item.link}
                href={item.link}
                _hover={{ textDecor: 'none' }}
              >
                <Box w="full" h="10rem" bg={item.bg} pos="relative">
                  <Box
                    opacity="0.1"
                    position="absolute"
                    w="full"
                    h="full"
                    zIndex="0"
                    backgroundImage={'/static/about/travel-pattern.png'}
                    backgroundRepeat={'repeat'}
                    backgroundSize={'contain'}
                  />
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box bg="_lightestgray" p={4} textAlign="center" h="full">
                  <Heading as="h3" st={item.title} />
                  <Text
                    color="_gray"
                    fontSize="sm"
                    mt="2"
                    st={item.description}
                  />
                </Box>
              </Link>
            </Card>
          )
        })}
      </Stack>
    </Box>
  )
}
