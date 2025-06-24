import React from 'react'
import { Box, VStack, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Container from 'ui/primitives/Container'
import { data } from './data'
import Text from 'ui/primitives/Text'

const AboutHistory = () => {
  return (
    <Container mt="5rem" mb={'8rem'} textAlign="center">
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '5xl' }}
        textTransform={'uppercase'}
        st="about-page.section.history.header"
      />
      <VStack w="full" mt="2">
        <Box maxW="80ch" color="_gray" fontSize="xs">
          <Text st="about-page.section.history.description" />
        </Box>
      </VStack>
      <VStack spacing={8} align="center" position="relative" w="full" mt="2rem">
        <Box position="absolute" left="50%" w="1px" h="full" bg="_lightgray" />
        {data.map((item, idx) => {
          const isEven = idx % 2 === 0
          return (
            <HStack
              w="full"
              position="relative"
              alignItems="flex-start"
              key={idx}
            >
              <Box
                position="absolute"
                top="7px"
                left="50%"
                transform="translateX(-50%)"
                minW="2"
                minH="2"
                bg="primary"
                borderRadius="full"
              />
              {isEven && <Box w="50%" />}

              <VStack
                w="50%"
                fontSize={{ base: 'xs', md: 'sm' }}
                textAlign={isEven ? 'left' : 'right'}
                justify={isEven ? 'flex-start' : 'flex-end'}
                alignItems={isEven ? 'flex-start' : 'flex-end'}
                px={5}
                gap="0"
              >
                <Text fontWeight="medium">{item.date}</Text>
                <Text
                  color="_gray"
                  maxW="400px"
                  st={item.label}
                  {...(item.data && { sd: item.data })}
                />
              </VStack>
              {!isEven && <Box w="50%" />}
            </HStack>
          )
        })}
      </VStack>
    </Container>
  )
}

export default AboutHistory
