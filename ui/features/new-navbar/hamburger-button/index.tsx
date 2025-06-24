'use client'

import { Box, HStack, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import BarsIcon from 'ui/icons/new/editing/bars.svg'
import isTransparent from '../utils/isTransparent'
import { usePathname } from 'src/i18n/router'
// import Avatar from './avatar'

const DynamicHamburgerMenu = dynamic(
  () => import('ui/features/navbar/hamburger-menu')
)

export default function HamburgerButton() {
  const pathname = usePathname()
  const transparent = isTransparent(pathname)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={transparent ? 'rgba(0,0,0, 0.1)' : '_lightestgray'}
        borderRadius="full"
        p="2"
        onClick={() => onOpen()}
        _hover={{ cursor: 'pointer' }}
      >
        <HStack color={transparent ? '_white' : '_black'} gap="3">
          {/* <Avatar /> */}
          <Box pr="1">
            <BarsIcon height="1.25rem" />
          </Box>
        </HStack>
      </Box>
      <DynamicHamburgerMenu onClose={onClose} isOpen={isOpen} />
    </>
  )
}
