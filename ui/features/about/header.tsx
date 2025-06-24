import { Box } from '@chakra-ui/react'
import { CONFIG_COMPANY } from 'src/config'
import Heading from 'ui/primitives/Heading'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

export default function AboutHeader() {
  return (
    <Box
      pos="relative"
      as="header"
      h={{ base: '16rem', md: '22rem' }}
      mt="0"
      backgroundImage={'/static/about/header-image.png'}
      backgroundSize={'cover'}
      backgroundPosition={'top'}
    >
      <Box
        position="absolute"
        top="0rem"
        h={{ base: '16rem', md: '22rem' }}
        w="100vw"
        bgGradient={
          'linear(to-b, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.6) 80%, white)'
        }
      />
      <Box
        p="4"
        mx="auto"
        pos="relative"
        textAlign="center"
        maxW="container.xl"
        color="_white"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: 'sm', md: 'xl' }}
          mb="-2"
          textShadow="0px 0px 20px black"
          fontFamily={SECONDARY_FONT_FAMILY}
          st="about-page.subtitle"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
        />
        <Heading
          as="h1"
          fontSize={{ base: '5xl', md: '8xl' }}
          color="orange"
          fontWeight="semibold"
          textShadow="0px 0px 20px black"
          letterSpacing={5}
          opacity="0.9"
          textTransform="uppercase"
          st="about-page.title"
        />
      </Box>
      <Box
        position="absolute"
        top={{ base: '6rem', md: '10rem' }}
        h={{ base: '10rem', md: '12rem' }}
        w="100vw"
        backgroundImage={'/static/about/clouds.png'}
        backgroundSize={'contain'}
        backgroundPosition={'bottom'}
        backgroundRepeat={'repeat-x'}
      />
    </Box>
  )
}
