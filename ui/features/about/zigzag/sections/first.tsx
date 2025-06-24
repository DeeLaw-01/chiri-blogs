import { Stack, GridItem, Grid, Box, VStack } from '@chakra-ui/react'
import { CONFIG_COMPANY } from 'src/config'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'
import Image from 'ui/primitives/Image'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

export default function FirstSection() {
  return (
    <Container>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        w="full"
        gap={{ base: '2rem', md: '4rem' }}
      >
        <Box w="full">
          <Grid
            w="full"
            h={{ base: '300px', md: '450px' }}
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} pos="relative">
              <Image
                src="/static/about/tryp-com-mobile-girl.png"
                alt="Mobile Girl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </GridItem>
            <GridItem pos="relative">
              <Image
                src="/static/about/1.png"
                alt="girl-in-street"
                fill
                style={{ objectFit: 'cover' }}
              />
            </GridItem>
            <GridItem rowSpan={2} pos="relative">
              <Image
                src="/static/about/2.png"
                alt="couple in mountain"
                fill
                style={{ objectFit: 'cover' }}
              />
            </GridItem>
            <GridItem pos="relative">
              <Image
                src="/static/about/3.png"
                alt="girl in the woods"
                fill
                style={{ objectFit: 'cover' }}
              />
            </GridItem>
          </Grid>
        </Box>
        <VStack w="full" alignItems="flex-start" gap="0" alignSelf="center">
          <Text
            color="primary"
            fontFamily={SECONDARY_FONT_FAMILY}
            fontSize={{ base: 'lg', md: 'xl' }}
            st="about-page.zigzag.first.subheader"
          />
          <Heading
            as="h2"
            textTransform="uppercase"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="semibold"
          >
            <Trans
              st="about-page.zigzag.first.header"
              sd={{
                tos: (chunks) => (
                  <Text as="span" color="primary" fontWeight="bold">
                    {chunks}
                  </Text>
                ),
              }}
            />
          </Heading>
          <Text
            mt="4"
            color="_gray"
            st="about-page.zigzag.first.description.one"
            sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
          />
          <Text
            mt="4"
            color="_gray"
            st="about-page.zigzag.first.description.two"
          />
        </VStack>
      </Stack>
    </Container>
  )
}
