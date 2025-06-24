import { Box, Center, HStack, Image as ChakraImage } from '@chakra-ui/react'
import React from 'react'
import Badge from 'ui/primitives/Badge'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import DiamondSVG from '@/icons/gamification/diamond.svg'
import LongRightArrowSVG from '@/icons/gamification/long-right-arrow.svg'

const AdventureCard = ({ imageSrc, header }) => {
  return (
    <Box
      w="18.7rem"
      h="17rem"
      role="group"
      pos="relative"
      borderRadius="2rem"
      overflow="hidden"
      bg="_lightestgray"
      cursor="pointer"
    >
      <ChakraImage
        w="full"
        h="full"
        inset={0}
        pos="absolute"
        src={imageSrc}
        transition="transform 0.4s ease-in-out"
        _groupHover={{
          transform: 'scale(1.15)',
        }}
      />

      <Box pt="5" pl="4" zIndex={1} pos="relative">
        <Badge bg="_white" px="2.5" py="2" color="_purple">
          <HStack>
            <DiamondSVG />

            <Text st="gamification.earn.points" sd={{ points: 50 }} />
          </HStack>
        </Badge>
      </Box>

      <HStack
        px="4"
        pb="5"
        w="full"
        left={0}
        bottom={0}
        zIndex={1}
        pos="absolute"
        justify="space-between"
      >
        <Text color="_white" fontSize="xl" fontWeight="medium">
          {header}
        </Text>
        <Button
          p={0}
          primary
          h="auto"
          borderRadius="full"
          _groupHover={{
            transform: 'rotate(45deg)',
          }}
        >
          <Center w="12" h="12">
            <LongRightArrowSVG />
          </Center>
        </Button>
      </HStack>

      <Box
        h="6rem"
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        bg={'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))'}
      />
    </Box>
  )
}

export default function NextAdventureSection() {
  return (
    <Box>
      <Heading pb="2" st="gamification.adventure.section.heading" />

      <HStack spacing={4}>
        <AdventureCard
          imageSrc={'/static/profile/beach-trips.jpeg'}
          header={'Beach Trips'}
        />
        <AdventureCard
          imageSrc={'/static/profile/family-trips.jpeg'}
          header={'Family Trips'}
        />
        <AdventureCard
          imageSrc={'/static/profile/multi-city.jpeg'}
          header={'Multi-City'}
        />
      </HStack>
    </Box>
  )
}
