'use client'

import { VStack, HStack, Icon, Tabs, TabList, Tab, Box } from '@chakra-ui/react'
import theme from 'src/styles/theme'
import useAuth from 'src/hooks/useAuth'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import UserProfileIcon from '../user/user-profile-icon'

import { useResponsiveSizes } from 'src/contexts/responsive'
import { useRouter } from 'app/router'
import { MotionBox } from 'ui/primitives/Motion'
import { renderTrimmedString } from 'src/utils/renderUtils'

import HomeIcon from '@/icons/profile/home.svg'
import BookmarkIcon from '@/icons/profile/bookmark.svg'
import HistoryIcon from '@/icons/profile/history.svg'
import SettingsIcon from '@/icons/profile/settings.svg'
import DiamondIcon from '@/icons/profile/diamond.svg'

const profileNavBarData = [
  {
    label: 'profile-page.tabs.profile',
    tab: 'profile',
    icon: HomeIcon,
  },
  {
    label: 'Rewards',
    tab: 'rewards',
    icon: DiamondIcon,
  },
  {
    label: 'profile-page.tabs.bookmarks',
    tab: 'bookmarks',
    icon: BookmarkIcon,
  },
  {
    label: 'profile-page.tabs.trips',
    tab: 'previous-trips',
    icon: HistoryIcon,
  },
  {
    label: 'profile-page.tabs.settings',
    tab: 'settings',
    icon: SettingsIcon,
  },
] as const

const ProfileNavBarDesktop = () => {
  const router = useRouter()
  const { attributes } = useAuth()
  const { isTablet, isDesktop } = useResponsiveSizes()

  return (
    <VStack
      pt={5}
      height={'full'}
      borderRight={'1px solid'}
      borderColor={theme.colors._lightgray}
      bg={theme.colors._white}
    >
      <HStack px="2">
        <UserProfileIcon
          attributes={attributes}
          w={isTablet ? '40px' : '35px'}
          h={isTablet ? '40px' : '35px'}
        />
        {!isTablet && <Text>{renderTrimmedString(attributes?.name, 12)}</Text>}
      </HStack>

      <VStack mt={'1rem !important'} w="full">
        {profileNavBarData.map(({ tab, icon, label }, index) => {
          const isActive = router.pathname.split('/').pop() === tab

          return (
            <HStack
              py={4}
              w="full"
              key={index}
              pos="relative"
              color={isActive ? theme.colors.primary : 'initial'}
              bg={isActive ? theme.colors.secondary : 'initial'}
              justifyContent={isTablet ? 'center' : 'flex-start'}
              pr={isDesktop && !isTablet && 4}
              alignItems={'center'}
              onClick={() => {
                router.push(tab === 'profile' ? '/profile' : `/profile/${tab}`)
              }}
              _hover={{
                cursor: 'pointer',
                bg: !isActive && theme.colors._lightestgray,
              }}
            >
              {isActive && (
                <MotionBox
                  pos="absolute"
                  left={0}
                  top={0}
                  bottom={0}
                  w="3px"
                  h="full"
                  bg="primary"
                  layoutId="tabIndicator"
                />
              )}
              <VStack pl={isTablet ? '0' : '4'}>
                <Icon
                  css={{
                    svg: {
                      stroke: isActive
                        ? theme.colors.primary
                        : theme.colors._gray,
                    },
                  }}
                  w={'45'}
                  height={'auto'}
                  as={icon}
                />
              </VStack>
              {!isTablet && <Text st={label} />}
            </HStack>
          )
        })}
      </VStack>
    </VStack>
  )
}

const ProfileNavBarMobile = () => {
  const { attributes } = useAuth()
  const router = useRouter()

  return (
    <Box
      ml={'-1rem'}
      mr={'-1rem'}
      bg="_lightestgray"
      pb={2}
      borderBottom={'1px'}
      borderBottomColor="_lightgray"
      px={2}
      mb={5}
    >
      {attributes?.name && (
        <Heading
          as="h1"
          py={4}
          pl={4}
          st="common.header.greet"
          alignSelf={{ base: 'center', md: 'auto' }}
          sd={{ name: attributes?.name }}
        />
      )}
      <Tabs variant="unstyled">
        <TabList
          overflowX={{ md: 'hidden', base: 'auto' }}
          overflowY={'hidden'}
          whiteSpace={'nowrap'}
          pb={'0.1rem'}
        >
          {profileNavBarData.map(({ tab, label }, index) => {
            const isActive = router.pathname.split('/').pop() === tab

            return (
              <Box key={index}>
                <Tab
                  color={isActive ? 'primary' : 'initial'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  onClick={() => {
                    router.push(
                      tab === 'profile' ? '/profile' : `/profile/${tab}`
                    )
                  }}
                >
                  <Text st={label} />
                </Tab>
                {isActive && (
                  <MotionBox
                    mt="-1.5px"
                    height="2px"
                    bg="primary"
                    borderRadius="1px"
                    layoutId="tabIndicator"
                  />
                )}
              </Box>
            )
          })}
        </TabList>
      </Tabs>
    </Box>
  )
}

const ProfileNavBar = () => {
  const { isMobile } = useResponsiveSizes()
  const { isUserLoggedIn } = useAuth()

  if (!isUserLoggedIn) return <></>
  if (isMobile) return <ProfileNavBarMobile />
  else return <ProfileNavBarDesktop />
}

export default ProfileNavBar
