'use client'

import { Box, Flex, HStack, FlexProps, IconButton } from '@chakra-ui/react'

import { useRouter } from 'app/router'
import Container from 'ui/primitives/Container'
import SupportNavButton from './support-nav-button'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

import { theme } from 'src/styles/theme'
import { useState, memo } from 'react'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { useScrollPosition } from 'src/hooks/primitives/useScrollPosition'
import HamburgerIcon from 'ui/icons/navbar/hamburger-menu.svg'

import LogoIcon from '@/icons/logo.svg'
// import AvatarIcon from '@/icons/navbar/new-profile.svg'
// import TransparentStateAvatarIcon from '@/icons/navbar/transparent-avatar.svg'
import dynamic from 'next/dynamic'

const DynamicNavCheckoutButton = dynamic(
  () => import('ui/features/marketplace/checkout-drawer/nav-checkout-button')
)

const DynamicHamburgerMenu = dynamic(() => import('./hamburger-menu/index'), {
  ssr: false,
})

import useHistory from 'src/hooks/useHistory'
import useScrollListener from 'src/hooks/useScrollListener'
import useAuth from 'src/hooks/useAuth'
// import UserProfileIcon from '../user/user-profile-icon'
import { useResponsiveSizes } from 'src/contexts/responsive'
import usePrimitiveDrawerAndModalsState from 'ui/shared/atoms'

type NavbarProps = {
  isTransparent?: boolean
  fitWithAdvancedSearch?: boolean
  isSticky?: boolean
  showSupport?: boolean
  showMenu?: boolean
  responsiveBg?: boolean
  showMarketplaceCart?: boolean
  sideComp?: JSX.Element
} & FlexProps

function Navbar({
  isTransparent = false,
  fitWithAdvancedSearch = false,
  isSticky = false,
  showSupport = true,
  showMenu = true,
  responsiveBg = false,
  showMarketplaceCart = false,
  sideComp,
  ...rest
}: NavbarProps): JSX.Element {
  const router = useRouter()
  const isMounted = useIsMounted()
  const [showFilledNavbar, setShowFilledNavbar] = useState<boolean>(true)
  const scroll = useScrollListener(!isSticky)
  const { history } = useHistory()
  const { isUserLoggedIn, attributes } = useAuth()
  const { isMobile } = useResponsiveSizes()

  const {
    isOpenHamburgerMenu,
    onOpenHamburgerMenu: _onOpenHamburgerMenu,
    onCloseHamburgerMenu,
  } = usePrimitiveDrawerAndModalsState()

  const onOpenHamburgerMenu = () => {
    _onOpenHamburgerMenu()
  }

  useScrollPosition(
    ({ currPos }) => {
      if (responsiveBg && isMounted.current) {
        setShowFilledNavbar(currPos.y > -10)
      }
    },
    [showFilledNavbar]
  )

  const handleLogoClick = () => {
    // If current path is home-page reset the packageArr to force a new load
    if (router.pathname === '/') {
      window.location.href = '/'
      return
    }
    // If we are not on home-page, and we have a search in history, navigate back to it.
    const previousSearched = history?.filter(
      (x) => x === '/' || x.slice(0, 2) === '/?'
    )
    if (previousSearched && previousSearched.length > 0) {
      const last = previousSearched.pop()
      router.push(last)
    } else {
      // If we have nothing in history. Navigate back and do a new search
      router.push('/')
    }
  }

  const getBackground = () => {
    if (isMobile && !isUserLoggedIn) return ''
    if (isTransparent) return 'rgba(0, 0, 0, 0.20)'
    else return theme.colors._lightestgray
  }
  const hamburgerBg: string = getBackground()

  return (
    <Flex
      as="nav"
      h="16"
      top="-1px"
      w="100vw"
      left="0"
      right="0"
      zIndex={'banner'}
      transition="all .2s"
      position={isSticky ? 'absolute' : 'fixed'}
      backdropFilter={showFilledNavbar ? '' : 'blur(8px)'}
      bg={
        isTransparent
          ? showFilledNavbar
            ? 'rgba(0 0 0 / 0)'
            : 'rgba(0 0 0 / .4)'
          : '_white'
      }
      boxShadow={
        !isTransparent &&
        '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)'
      }
      transform={
        !isSticky
          ? scroll.isScrollingDown
            ? 'translateY(-100%)'
            : 'translateY(0)'
          : 'none'
      }
      {...rest}
    >
      {router.pathname !== '/' && (
        <ProgressBar
          shallowRouting
          height="4px"
          options={{ showSpinner: false }}
          color={
            isTransparent
              ? fitWithAdvancedSearch
                ? theme.colors.primary
                : theme.colors._white
              : theme.colors.primary
          }
        />
      )}
      <Container h="full">
        <HStack w="full" h="full" spacing="1" justifyContent={'space-between'}>
          <Box
            cursor="pointer"
            onClick={() => handleLogoClick()}
            transform={{
              base: 'none',
              md: fitWithAdvancedSearch && 'scale(1.4)',
            }}
          >
            <LogoIcon height="40" />
          </Box>
          <HStack mt={2} gap={2}>
            {showSupport && <SupportNavButton isTransparent={isTransparent} />}
            {showMarketplaceCart && (
              <DynamicNavCheckoutButton isTransparent={isTransparent} />
            )}
            {sideComp ? (
              sideComp
            ) : (
              <Flex
                gap={'1'}
                alignItems={'center'}
                bg={hamburgerBg}
                px={2}
                py={0.5}
                borderRadius="full"
                onClick={onOpenHamburgerMenu}
                cursor={'pointer'}
              >
                <IconButton
                  bg={'transparent'}
                  _hover={{
                    bg: 'transparent',
                  }}
                  aria-label="hamburger-menu-button"
                  id="hamburger-menu-button"
                  icon={
                    <HamburgerIcon
                      stroke={
                        isTransparent
                          ? theme.colors._white
                          : theme.colors._black
                      }
                      height="25"
                    />
                  }
                />
              </Flex>
            )}
          </HStack>
        </HStack>
      </Container>

      <DynamicHamburgerMenu
        onClose={onCloseHamburgerMenu}
        isOpen={isOpenHamburgerMenu}
      />
    </Flex>
  )
}

export default memo(Navbar)
