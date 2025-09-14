'use client'

import {
  Box,
  Center,
  HStack,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  VStack,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react'

import DeleteIcon from '@/icons/profile/delete-icon.svg'
import { ReactNode, useRef, useState } from 'react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { theme } from 'src/styles/theme'
import EmptySeatsBackground from 'ui/features/profile/empty-seats'
import useBookmarks from 'ui/features/profile/hooks/useBookmarks'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import TripCard from 'ui/features/new-home/content/trip/trip-card'
import useSignedMutation from 'src/api/useSignedMutation'
import deleteBookmarkQuery from 'src/api/queries/delete/deleteBookmarkQuery'

type PopoverWrapperProps = {
  onDelete: () => void
  isLoading: boolean
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const PopoverWrapper: React.FC<PopoverWrapperProps> = ({
  children,
  onDelete,
  isLoading,
  isOpen,
  onClose,
}) => {
  const popoverRef = useRef()
  useOutsideClick({
    ref: popoverRef,
    handler: onClose,
  })

  return (
    <Popover isOpen={isOpen} placement={'bottom-end'}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody ref={popoverRef}>
          <VStack pt={4} alignItems={'flex-start'}>
            <Text st={'profile-page.bookmark.delete.confirm.text'} />
            <HStack gap={4} alignSelf={'flex-end'}>
              <Button onClick={onClose} asLink>
                <Text st="profile-page.bookmark.delete.conform.no" />
              </Button>
              <Button
                bg={'primary'}
                isLoading={isLoading}
                color={'white'}
                onClick={() => {
                  onDelete()
                }}
              >
                <Text st="profile-page.bookmark.delete.conform.yes" />
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const BookmarkItem = ({ bookmark, handleDelete }) => {
  const { isMobile } = useResponsiveSizes()
  const [loading, setLoading] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onDelete = async () => {
    setLoading(true)
    await handleDelete(bookmark.id)
    setLoading(false)
    onClose()
  }

  return (
    <HStack w={'full'} spacing={2} position={{ base: 'relative' }}>
      <Box w={'full'}>
        <TripCard
          trip={bookmark}
          currentPackageLoading={null}
          setCurrentPackageLoading={() => {}}
        />
      </Box>
      {isMobile && (
        <PopoverWrapper
          isOpen={isOpen}
          onClose={onClose}
          isLoading={loading}
          onDelete={onDelete}
        >
          <Center
            bg="_white"
            minW={3}
            minH={3}
            p={1}
            pos={'absolute'}
            top={5}
            right={5}
            borderRadius={'full'}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Box onClick={onOpen} transform={'scale(.7)'}>
              <DeleteIcon
                width="24"
                height="24"
                strokeWidth={1.5}
                stroke={theme.colors.primary}
              />
            </Box>
          </Center>
        </PopoverWrapper>
      )}

      {!isMobile && (
        <PopoverWrapper
          isOpen={isOpen}
          onClose={onClose}
          isLoading={loading}
          onDelete={onDelete}
        >
          <Box
            onClick={onOpen}
            cursor={'pointer'}
            pl={5}
            _hover={{
              stroke: theme.colors.primary,
              transform: 'scale(1.1)',
            }}
            transition={'.3s ease'}
            stroke={theme.colors._gray}
          >
            <DeleteIcon width="32" height="32" strokeWidth={1.5} />
          </Box>
        </PopoverWrapper>
      )}
    </HStack>
  )
}

export default function Bookmarks() {
  const { bookmarks, loadingBookmarks, mutate, error } = useBookmarks()
  const { trigger } = useSignedMutation((d) => deleteBookmarkQuery(d))

  const handleDelete = (id: string): void => {
    trigger(id, { onSuccess: () => mutate() })
  }

  if (error) return <></>

  return (
    bookmarks &&
    (loadingBookmarks ? (
      <Center mt="10vh">
        <Spinner size="xl" color="primary" />
      </Center>
    ) : (
      <>
        {Array.isArray(bookmarks) && bookmarks.length !== 0 && (
          <Text
            fontSize="2xl"
            st={'profile-page.bookmarks.heading'}
            fontWeight={'medium'}
          />
        )}
        <VStack mt={5} spacing={8}>
          {Array.isArray(bookmarks) && bookmarks.length !== 0 ? (
            bookmarks.map((bookmark: any) => {
              return (
                <BookmarkItem
                  key={bookmark.id}
                  bookmark={bookmark}
                  handleDelete={handleDelete}
                />
              )
            })
          ) : (
            <EmptySeatsBackground message={'empty.message.one'} />
          )}
        </VStack>
      </>
    ))
  )
}
