import { Stack, GridItem, Grid, Box } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'
import Image from 'ui/primitives/Image'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

export default function ThirdSection() {
  return (
    <Container>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        w="full"
        gap={{ base: '2rem', md: '4rem' }}
        mt={{ base: '4rem', md: '6rem' }}
      >
        <Box w="full">
          <Grid
            w="full"
            h={{ base: '300px', md: '450px' }}
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem position="relative" rowSpan={2}>
              <Image
                src="/static/about/7.png"
                alt="Image 7"
                fill
                style={{ objectFit: 'cover' }}
              />
            </GridItem>
            <GridItem position="relative">
              <Image
                src="/static/about/5.png"
                alt="Image 5"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </GridItem>
            <GridItem position="relative" rowSpan={2}>
              <Image
                src="/static/about/6.png"
                alt="Image 6"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </GridItem>
            <GridItem position="relative">
              <Image
                src="/static/about/4.png"
                alt="Image 4"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </GridItem>
          </Grid>
        </Box>
        <Box w="full">
          <Text
            color="primary"
            fontFamily={SECONDARY_FONT_FAMILY}
            fontSize={{ base: 'lg', md: 'xl' }}
            st="about-page.zigzag.third.subheader"
          />
          <Heading
            as="h2"
            textTransform="uppercase"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="semibold"
          >
            <Trans
              st="about-page.zigzag.third.header"
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
            color="_gray"
            mt="4"
            st="about-page.zigzag.third.description.one"
          />
          <Text
            color="_gray"
            mt="4"
            st="about-page.zigzag.third.description.two"
          />
        </Box>
      </Stack>
    </Container>
  )
}
