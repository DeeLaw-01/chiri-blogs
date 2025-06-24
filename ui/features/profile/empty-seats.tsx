import { VStack, Link, Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import EmptyIcon from '@/icons/profile/empty-icon.svg'
import NextLink from 'next/link'

const EmptySeatsBackground = ({ message }) => {
  return (
    <VStack gap={5} w="full" pt="10">
      <Box>
        <EmptyIcon />
      </Box>
      <VStack gap={2}>
        <Text
          fontSize={'2xl'}
          fontWeight={'medium'}
          st={`profile-page.${message}`}
        />
        <NextLink href="/" passHref>
          <Link _hover={{}}>
            <Text
              paddingX={8}
              py={2}
              bg={'primary'}
              color={'white'}
              borderRadius={'lg'}
              st="profile-page.start.searching"
            />
          </Link>
        </NextLink>
      </VStack>
    </VStack>
  )
}

export default EmptySeatsBackground
