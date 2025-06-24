import { HStack, Box } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import { usePathname } from 'src/i18n/router'
import { TripCategoryItems } from './data'
import CategoryItem from './category-item'
import { useSearchAtoms } from '../search/hooks/useSearchAtoms/useSearchAtoms'
import { CategoryItem as CategoryItemType } from './types'
import useSearch from '../search/hooks/useSearch'
import { mapTripSearch } from '../utils/search/mappers/trip-search/mapTripSearch'
import { Category } from '../search/hooks/useSearchAtoms/types/trip.types'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'

export function TripCategories() {
  const pathname = usePathname()
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const { tripFilters, tripSearch, setTripFilters, setTripSearch } =
    useSearchAtoms()
  const { makeSearch } = useSearch()

  const isActive = (item: CategoryItemType) => {
    if (!tripSearch?.categories && !item.category) return true
    if (item.category === tripSearch?.categories) return true
    return false
  }

  const handleClick = (category: Category) => {
    setTripSearch((prev) => {
      delete prev?.categories
      const shouldRemoveTripId =
        category === 'beach' ||
        category === 'snow' ||
        category === 'sustainable'

      const filters = shouldRemoveTripId
        ? (({ trip_id, ...rest }) => rest)(tripFilters)
        : tripFilters

      if (shouldRemoveTripId) {
        setTripFilters(filters)
      }

      const query = {
        ...prev,
        ...(category && { categories: category }),
      }
      makeSearch(mapTripSearch({ ...query, ...filters }))
      return query
    })
  }

  const checkScrollButtons = () => {
    const el = scrollRef.current
    if (!el) return

    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    checkScrollButtons()

    const handleScroll = () => checkScrollButtons()
    el.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    //  Auto-scroll to active category
    const activeCategory = TripCategoryItems.find((item) => isActive(item))
    if (activeCategory) {
      const activeEl = itemRefs.current[activeCategory.category]
      if (activeEl && el) {
        const parentRect = el.getBoundingClientRect()
        const childRect = activeEl.getBoundingClientRect()
        const offset = childRect.left - parentRect.left
        el.scrollBy({ left: offset - 16, behavior: 'smooth' })
      }
    }

    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (pathname !== '/') return <></>

  return (
    <Box position="relative" w="full" overflow={'hidden'}>
      {showLeft && (
        <CircleIconWrapper
          as="button"
          position="absolute"
          left={0}
          top={2}
          bg="_white"
          onClick={() => scrollBy(-200)}
          aria-label="Scroll Left"
          zIndex={1}
          display={{ base: 'none', md: 'initial' }}
        >
          <LeftArrowIcon width="10" height="10" stroke={theme.colors._black} />
        </CircleIconWrapper>
      )}

      <HStack
        ref={scrollRef}
        overflowX={{ base: 'auto', md: 'hidden' }}
        spacing="2rem"
        scrollBehavior="smooth"
        w="full"
        className="hide-scrollbar"
      >
        {TripCategoryItems.map((item) => (
          <Box
            key={item.category}
            ref={(el) => {
              itemRefs.current[item.category] = el
            }}
          >
            <CategoryItem
              isActive={isActive(item)}
              item={item}
              onClick={() => handleClick(item.category)}
            />
          </Box>
        ))}
      </HStack>

      {showRight && (
        <CircleIconWrapper
          as="button"
          transform="rotate(180deg)"
          bg="_white"
          position="absolute"
          right={0}
          top={2}
          zIndex={1}
          onClick={() => scrollBy(200)}
          aria-label="Scroll Right"
          display={{ base: 'none', md: 'initial' }}
        >
          <LeftArrowIcon width="10" height="10" stroke={theme.colors._black} />
        </CircleIconWrapper>
      )}
    </Box>
  )
}
