'use client'

import { Box, Flex, FlexProps, HStack } from '@chakra-ui/react'
import LogoIcon from '@/icons/logo.svg'
import LogoWhiteIcon from '@/icons/logo-white.svg'
import Container from 'ui/primitives/Container'

import { memo } from 'react'
import Link from 'ui/primitives/Link'
// import SupportButton from './support-button'
import HamburgerButton from './hamburger-button'
import isTransparent from './utils/isTransparent'
import LoadingProgressBar from './loading-progress-bar'
import { usePathname } from 'src/i18n/router'
import isHidden from './utils/isHidden'
import { useResponsiveSizes } from 'src/contexts/responsive'
import useHistory from 'src/hooks/useHistory'

type NavbarProps = {} & FlexProps

function Navbar({ ...rest }: NavbarProps): JSX.Element {
  const { history } = useHistory() // Triggers the useEffect.. Shouldn't be needed.
  const pathname = usePathname()
  const { isMobile } = useResponsiveSizes()
  const transparent = isTransparent(pathname)

  if (isHidden(pathname, isMobile)) return <></>

  return (
    <Flex
      as="nav"
      h="16"
      w="100vw"
      zIndex={'1200'}
      top="-1px"
      pos={transparent ? 'absolute' : 'initial'}
      bg={transparent ? 'transparent' : '_white'}
      color={transparent ? '_white' : '_black'}
      boxShadow={transparent ? 'none' : 'sm'}
      transition="all .1s ease-in-out"
      {...rest}
    >
      <LoadingProgressBar />
      <Container display="flex" alignItems="center" className="border">
        <HStack justify="space-between" w="full">
          <HStack>
            <Link href="/">
              <Box display="flex" alignItems="center">
                {transparent ? (
                  <LogoWhiteIcon height="50" />
                ) : (
                  <LogoIcon height="40" />
                )}
              </Box>
            </Link>
          </HStack>
          <HStack gap="1rem">
            {/* <SupportButton /> */}
            <HamburgerButton />
          </HStack>
        </HStack>
      </Container>
    </Flex>
  )
}

export default memo(Navbar)
