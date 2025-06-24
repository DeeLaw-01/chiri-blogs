import { Stack, GridItem, Grid, Box } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'
import Image from 'ui/primitives/Image'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

export default function SecondSection() {
  return (
    <Box
      bg={`${theme.colors.primary}0d`}
      w="100vw"
      py={5}
      mt={{ base: '4rem', md: '6rem' }}
    >
      <Container>
        <Stack
          direction={['column', 'row']}
          w="full"
          gap={{ base: '2rem', md: '4rem' }}
          py="3rem"
        >
          <Box w="full">
            <Text
              color="primary"
              fontFamily={SECONDARY_FONT_FAMILY}
              fontSize={{ base: 'lg', md: 'xl' }}
              st="about-page.zigzag.second.subheader"
            />
            <Heading
              as="h2"
              textTransform="uppercase"
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="semibold"
            >
              <Trans
                st="about-page.zigzag.second.header"
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
              st="about-page.zigzag.second.description.one"
            />
            <Text
              color="_gray"
              mt="4"
              st="about-page.zigzag.second.description.two"
            />
          </Box>
          <Box w="full" display={{ base: 'none', md: 'initial' }}>
            <Grid
              w="full"
              h={{ base: '300px', md: '450px' }}
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={4}
              p={'10px'}
            >
              <GridItem position="relative">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  zIndex="1"
                  sx={{
                    // Corner borders to create a different image effect
                    '::before, ::after': {
                      content: '""',
                      position: 'absolute',
                      width: '20%',
                      height: '20%',
                      borderStyle: 'solid',
                      borderColor: 'primary',
                    },
                    '::before': {
                      top: '-10px',
                      left: '-10px',
                      borderWidth: '2px 0 0 2px',
                    },
                    '::after': {
                      bottom: '-10px',
                      right: '-10px',
                      borderWidth: '0 2px 2px 0',
                    },
                    '&::after, &::before': {
                      boxSizing: 'border-box',
                    },
                  }}
                />
                <Image
                  src="/static/about/tryp-com-flight.png"
                  alt="Flight Image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </GridItem>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
