import { Box, HStack } from '@chakra-ui/react'
import { MotionBox } from 'ui/primitives/Motion'

export default function LocationDot() {
  return (
    <HStack
      w="25px"
      h="25px"
      justifyContent="space-around"
      alignItems="center"
      textAlign="center"
    >
      <MotionBox
        borderRadius="full"
        border="0.5px solid"
        borderColor="red.300"
        animate={{ padding: ['0px', '5px'] }}
        transition={{
          duration: 1.5,
          ease: 'easeIn',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <Box borderRadius="full" border="3px solid" borderColor="red.100">
          <Box
            borderRadius="full"
            border="2px solid"
            borderColor="red.400"
          ></Box>
        </Box>
      </MotionBox>
    </HStack>
  )
}
