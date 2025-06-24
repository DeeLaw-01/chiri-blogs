import { Box, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box
      position="absolute"
      bg="_white"
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      zIndex="1201"
      alignContent={'center'}
      textAlign="center"
    >
      <Spinner />
    </Box>
  )
}
