import BookmarkArrowIcon from '@/icons/profile/bookmark-arrow-icon.svg'
import { Box, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import CommonCard from '../common-card'
import CommonCardSkeleton from '../common-card/skeleton-loading'
import useBookmarks from './hooks/useBookmarks'

export default function ProfileBookmarks() {
  const { bookmarks, error, loadingBookmarks } = useBookmarks()

  if (error) <></>

  return (
    <VStack gap={{ base: 4, md: 0 }} align={'flex-start'} w={'full'}>
      <Box w="full">
        <Text
          fontSize={'2xl'}
          fontWeight={'medium'}
          st="profile-page.tabs.bookmarks"
        />
      </Box>
      {bookmarks?.length > 0 || loadingBookmarks ? (
        <SimpleGrid
          spacingX="10px"
          spacingY="20px"
          pt="4"
          w="full"
          gridTemplateColumns={`repeat(auto-fill , minmax(250px , 1fr))`}
        >
          {loadingBookmarks && (
            <>
              <CommonCardSkeleton />
              <CommonCardSkeleton />
              <CommonCardSkeleton />
            </>
          )}
          {bookmarks?.slice(0, 3).map((bookmark: any, idx: number) => {
            return <CommonCard trip={bookmark} key={idx} />
          })}
        </SimpleGrid>
      ) : (
        <VStack gap={2} alignItems={'flex-start'} w={'full'}>
          <Text
            fontSize={'sm'}
            color={'_gray'}
            st={'profile-page.bookmarks.empty.text'}
          />
          <HStack
            color={'primary'}
            borderRadius={'lg'}
            p={4}
            px={8}
            bg={'secondary'}
            justify={'space-between'}
            w="full"
          >
            <VStack
              color={'_dakrgray'}
              align={'flex-start'}
              spacing={{ base: 2, md: 0 }}
            >
              <Text st={'profile-page.bookmarks.instruction'} />
            </VStack>
            <Box transform={{ base: 'scale(.8)' }}>
              <BookmarkArrowIcon fill={theme.colors.primary} />
            </Box>
          </HStack>
        </VStack>
      )}
    </VStack>
  )
}
