'use client'

import { MotionBox } from 'ui/primitives/Motion'
import { Box, Icon } from '@chakra-ui/react'
import { data } from './data'

export default function FeaturedSection() {
  return (
    <Box display="flex" position="relative" overflow="hidden" w="100vw" mt="10">
      <MotionBox
        display="flex"
        whiteSpace="nowrap"
        animate={{ x: '-100%' }}
        transition={{
          duration: 60,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: `${data.length * 150}px` }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            fontWeight="bold"
            paddingX="40px"
            display="inline-block"
            opacity={0.8}
          >
            <Icon as={item.value} h="20" w="50" />
          </Box>
        ))}
      </MotionBox>
    </Box>
  )
}
