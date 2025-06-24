import { Box, Icon, Stack, VStack } from '@chakra-ui/react'
import { data } from './data'

export default function InfoBoxes() {
  return (
    <Stack
      direction={['column', 'row']}
      gap="2rem"
      textAlign="center"
      fontSize="sm"
      mt={{ base: 4, md: 12 }}
    >
      {data.map((item) => (
        <VStack w={{ base: 'full', md: '25%' }} key={item.title}>
          <Box
            borderRadius="full"
            bg="_lightestgray"
            color="primary"
            p="1rem"
            w="4rem"
            h="4rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={3}
          >
            <Icon as={item.icon} h="100%" />
          </Box>
          <VStack>
            {item.title}
            {item.description}
          </VStack>
        </VStack>
      ))}
    </Stack>
  )
}
