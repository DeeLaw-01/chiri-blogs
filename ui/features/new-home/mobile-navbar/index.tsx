'use client'

import { Box, HStack } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import useScrollListener from 'src/hooks/useScrollListener'
import { data, NavItem, NavPath } from './data'
import MobileNavItem from './mobile-nav-item'
import { useEffect, useState } from 'react'
import Loading from './loading'
import { useRouter, usePathname } from 'src/i18n/router'

export default function MobileNavbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState<NavPath>()
  const [loading, setLoading] = useState<boolean>(false)
  const scroll = useScrollListener(true)

  const handleRoute = (item: NavItem) => {
    if (pathname === item.path) return
    setActive(item.path)
    setLoading(true)
    router.push(`${item.path}`)
  }

  useEffect(() => {
    if (pathname) {
      const item = data.find((x) => x.path.includes(pathname))
      if (item && item.path !== active) setActive(item.path)
    }
  }, [pathname])

  useEffect(() => {
    const item = data.find((x) => x.path.includes(pathname))
    if (item && item.path === active) setLoading(false)
  }, [pathname])

  return (
    <>
      {loading && <Loading />}
      <Box
        position="fixed"
        bottom="0"
        left="0"
        bg="_white"
        minH={'4rem'}
        zIndex="1202"
        py={2}
        px={4}
        borderTop="1px"
        borderColor="_lightgray"
        w="full"
        transition="all .2s"
        transform={
          scroll.isScrollingDown ? 'translateY(100%)' : 'translateY(0)'
        }
      >
        <HStack
          justifyContent="space-evenly"
          fontSize="2xs"
          color={theme.colors._gray}
          textTransform={'uppercase'}
        >
          {data.map((item, idx) => {
            return (
              <MobileNavItem
                item={item}
                key={idx}
                isActive={item.path === active}
                onClick={() => handleRoute(item)}
              />
            )
          })}
        </HStack>
      </Box>
    </>
  )
}
