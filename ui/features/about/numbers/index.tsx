import { Box, SimpleGrid } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import Text from 'ui/primitives/Text'
import AnimateCounter from 'ui/shared/animate-counter'
import { data } from './data'

export default function AboutNumbers() {
  return (
    <Box w="100vw" position="relative" mt="6rem">
      <Box
        opacity="0.05"
        position="absolute"
        w="full"
        h="full"
        zIndex="0"
        backgroundImage={'/static/about/travel-pattern.png'}
        backgroundRepeat={'repeat'}
      />
      <Box
        bg="primary"
        opacity="0.05"
        position="absolute"
        w="full"
        h="full"
        zIndex="1"
      />
      <Box
        w="full"
        position="relative"
        zIndex="2"
        py={{ base: 10, md: 20 }}
        px={{ base: 2, md: 5 }}
      >
        <Container>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2rem" w="full">
            {data.map((item, idx) => (
              <Box key={idx} textAlign="center" color="_gray">
                <AnimateCounter
                  fontSize={{ base: '3xl', md: '5xl' }}
                  color="primary"
                  fontWeight="medium"
                  to={item.to}
                  suffix={item.suffix}
                  roundBy={10}
                />
                <Text fontSize={{ base: 'xs', md: 'md' }} st={item.label} />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}
