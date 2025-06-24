import useAuth from 'src/hooks/useAuth'
import UserProfileIcon from 'ui/features/user/user-profile-icon'
import isTransparent from '../../utils/isTransparent'
import { usePathname } from 'src/i18n/router'
import theme from 'src/styles/theme'
import TransparentAvatarIcon from '@/icons/navbar/transparent-avatar.svg'
import AvatarIcon from '@/icons/navbar/new-profile.svg'
import { Box } from '@chakra-ui/react'

export default function Avatar() {
  const pathname = usePathname()
  const { isUserLoggedIn, attributes } = useAuth()

  const transparent = isTransparent(pathname)

  if (isUserLoggedIn)
    return (
      <Box pos="relative" display="flex">
        <UserProfileIcon
          w="6"
          h="6"
          attributes={attributes}
          color={theme.colors.primary}
          fontSize="md"
          bg={transparent ? theme.colors._white : theme.colors.secondary}
        />

        {/* NOTIFICATION BUBBLE
        <Box
          pos="absolute"
          top="-1"
          right="-1"
          bg="_red"
          color="white"
          borderRadius="full"
          minW="4"
          h="4"
          fontSize="2xs"
          textAlign="center"
        >
          {attributes.coins}
        </Box> */}
      </Box>
    )

  return (
    <>
      {transparent && <TransparentAvatarIcon />}
      {!transparent && <AvatarIcon />}
    </>
  )
}
