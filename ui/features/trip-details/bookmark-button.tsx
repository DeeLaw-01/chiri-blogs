import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import useAuth from 'src/hooks/useAuth'
import useBookmarks from '../profile/hooks/useBookmarks'
import useSignedMutation from 'src/api/useSignedMutation'
import addBookmarkQuery from 'src/api/queries/post/addBookmarkQuery'
import deleteBookmarkQuery from 'src/api/queries/delete/deleteBookmarkQuery'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

type BookmarkButtonProps = {
  tripId: string
}

export default function BookmarkButton({ tripId }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  const [animating, setAnimating] = useState<boolean>(false)
  const { currentUser } = useAuth()
  const { setShowAuth } = useGlobalAtoms()

  const { bookmarks } = useBookmarks()
  const { trigger: addBookmark } = useSignedMutation((d) => addBookmarkQuery(d))
  const { trigger: removeBookmark } = useSignedMutation((d) =>
    deleteBookmarkQuery(d)
  )

  const handleBookmark = (): void => {
    if (!currentUser) handleUserNotLoggedIn()
    else handleUserLoggedIn(isBookmarked)
  }

  const handleUserLoggedIn = (isBookmarked: boolean): void => {
    setIsBookmarked(!isBookmarked)
    if (!isBookmarked) addBookmark(tripId)
    if (isBookmarked) removeBookmark(tripId)
  }

  const handleUserNotLoggedIn = (): void => {
    setShowAuth(true)
  }

  useEffect(() => {
    if (!currentUser) return
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === tripId)
    setIsBookmarked(isBookmarked)
  }, [bookmarks])

  useEffect(() => {
    // Necessary "hack" because we need to trigger the overflow to allow the confetti going outside the button
    setAnimating(true)
    let timer = setTimeout(() => setAnimating(false), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [isBookmarked])

  return (
    <>
      <CircleIconWrapper
        bg="_white"
        onClick={handleBookmark}
        w="35px"
        h="35px"
        position={'relative'}
        overflow={animating ? 'initial' : 'hidden'}
      >
        <Box
          pos={'absolute'}
          style={{ transform: 'scale(0.6)' }}
          w="100px"
          h="100px"
          bg={`url(/static/heart.png) no-repeat`}
          bgPos={isBookmarked ? '-2800px 0' : '0 0'}
          transition={isBookmarked && 'background 1s steps(28)'}
        />
      </CircleIconWrapper>
    </>
  )
}
