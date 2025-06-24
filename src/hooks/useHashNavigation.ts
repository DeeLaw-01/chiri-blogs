import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const useHashNavigation = (hash: string, onHashNotMatching: () => void) => {
  const router = useRouter()
  const [lastAddedHash, setLastAddedHash] = useState('')

  const addHash = () => {
    const url = new URL(window.location.href)
    if (url.hash.includes(hash)) return
    setLastAddedHash(hash)

    if (url.hash) window.history.pushState(null, '', `${url.href}&${hash}`)
    else window.history.pushState(null, '', `${url.href}#${hash}`)
  }

  const removeHash = () => {
    if (hash !== lastAddedHash) return

    const url = new URL(window.location.href)
    let replaced = url.href.replace(`#${hash}`, '').replace(`&${hash}`, '')
    window.history.pushState(null, '', replaced)
  }

  const onHashChange = () => {
    if (!window.location.hash.includes(hash)) onHashNotMatching()
  }

  useEffect(() => {
    addHash()

    window.addEventListener('popstate', removeHash)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('popstate', removeHash)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [router])

  return { removeHash }
}

export default useHashNavigation
