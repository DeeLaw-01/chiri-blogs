import { useRouter, useSearchParams } from 'next/navigation'

type MarketPlaceSections = '' | 'seats' | 'stays' | 'luggage' | 'protection'

// Necessary because we want to keep URL params such as the purchase id, email & sessionId
export const useNavigateToMarketplace = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const getMarketplaceUrl = (filter: MarketPlaceSections) => {
    return `/manage-booking/marketplace?${new URLSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      ...(filter && { filter: filter }),
    })}`
  }

  const navigateToMarketplace = (filter: MarketPlaceSections) => {
    const url = getMarketplaceUrl(filter)
    router.push(url)
  }

  return { navigateToMarketplace, getMarketplaceUrl }
}
