import { Box, HStack, CloseButton } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import useSessionStorage from 'src/hooks/useSessionStorage'
import Alert from 'ui/primitives/Alert'

export default function BookNowBanner() {
  const [hideBookNowBanner, setHideBookNowBanner] =
    useSessionStorage<boolean>('book-now')
  if (hideBookNowBanner) return <></>
  return (
    <Alert info icon>
      <CloseButton
        position="absolute"
        right="1"
        top="1"
        onClick={() => setHideBookNowBanner(true)}
      />
      <HStack alignItems={'flex-start'}>
        <Box>
          <Text
            fontWeight="medium"
            fontSize="sm"
            st="new-hotel-page.book.now.banner.heading"
          />

          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            mr="40px"
            st="new-hotel-page.book.now.banner.description"
          />
        </Box>
      </HStack>
    </Alert>
  )
}
