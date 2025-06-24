import getUserProfileBookmarksDataQuery from 'src/api/queries/get/userBookmarkQuery'
import { useSignedFetch } from 'src/api/useSignedFetch'
import useAuth from 'src/hooks/useAuth'

export default function useBookmarks() {
  const { currentUser } = useAuth()
  const {
    data: bookmarks,
    error,
    isLoading: loadingBookmarks,
    mutate,
  } = useSignedFetch<any>(
    currentUser ? getUserProfileBookmarksDataQuery() : null
  )

  return { bookmarks, error, loadingBookmarks, mutate }
}
