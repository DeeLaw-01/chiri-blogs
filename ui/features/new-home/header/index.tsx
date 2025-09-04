import { Box, VStack } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import SearchPill from '../search/search-pill'
import { HomeOverwriteData } from '../types/home.type'

type HomeHeaderProps = {
  data: HomeOverwriteData
}

export default function HomeHeader({ data }: HomeHeaderProps) {
  const staticImage = '/static/b2b/chiri/herosection.webp'
  const staticImageMobile = '/static/b2b/chiri/herosection.webp'

  return (
    <Box w="full" pos="relative" h={{ base: '15rem', md: '22rem' }}>
      <picture>
        <source media="(max-width: 768px)" srcSet={staticImageMobile} />
        <source media="(min-width: 769px)" srcSet={staticImage} />
        <img
          src={staticImage}
          alt={data.title || 'Background Image'}
          className="header-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </picture>

      {/* Overlay for gradient effect */}
      <Box
        pos="absolute"
        w="100%"
        h="100%"
        bg="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0))"
        zIndex={1}
      />

      {/* Content Section */}
      <Container pos="relative" h="full" zIndex="10" p={4}>
        <VStack
          h="full"
          textAlign="center"
          justify={{ base: 'flex-end', md: 'center' }}
          alignItems={{ base: 'center', md: 'center' }}
        >
          <Box textShadow="0px 0px 15px black" color="_white">
            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
              {data.title}
            </Heading>
            <Heading as="h2" fontSize={{ base: 'sm', md: '2xl' }}>
              {data.subtitle}
            </Heading>
          </Box>
          <SearchPill />
        </VStack>
      </Container>
    </Box>
  )
}
