import { createContext, useContext, useEffect } from 'react'
import useCookie from 'src/hooks/useCookie'
import { useSearchParams } from 'next/navigation'

export const affiliateContext = createContext(null)

export default function AffiliateProvider({ children }) {
  const params = useSearchParams()

  const ref = params.get('ref')
  const src = params.get('source')
  const [affiliate, setAffiliate] = useCookie('affiliate', ref)
  const [source, setSource] = useCookie('source', src)

  useEffect(() => {
    if (ref) setAffiliate(ref, 30)
    if (src) setSource(src, 365)
  }, [])

  return (
    <affiliateContext.Provider value={{ affiliate, source }}>
      {children}
    </affiliateContext.Provider>
  )
}

export function useAffiliateContext() {
  return useContext(affiliateContext)
}
