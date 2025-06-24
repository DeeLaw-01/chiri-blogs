import { Box, HStack, Progress, Stack } from '@chakra-ui/react'

import UserProfileIcon from 'ui/features/user/user-profile-icon'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import useAuth from 'src/hooks/useAuth'

import TrophyIcon from '@/icons/gamification/trophy.svg'
import ChestIllustration from '@/icons/profile/chest-illustration.svg'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { useResponsiveSizes } from 'src/contexts/responsive'

export default function UserProgressReport({ gamificationData, progress }) {
  const { attributes } = useAuth()
  const { isMobile } = useResponsiveSizes()

  return (
    <Box
      p={5}
      w="full"
      bg="_white"
      borderRadius="3xl"
      boxShadow="0px 4px 120px 0px rgba(0, 0, 0, 0.09)"
    >
      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        align="flex-start"
      >
        <HStack>
          <UserProfileIcon
            fontSize="2xl"
            color="primary"
            attributes={attributes}
            h={{ base: '40px', md: '75px' }}
            w={{ base: '40px', md: '75px' }}
          />
          <Box ml={{ base: 0, md: 5 }} pt={{ base: 0, md: 4 }}>
            <Heading as="h2" fontWeight="normal">
              {renderTrimmedString(attributes?.name, isMobile ? 16 : 32)}
            </Heading>
            <HStack mt="0.5">
              <TrophyIcon />
              <Text
                st="rewards-page.user.level"
                sd={{ user_level: gamificationData.level }}
              />
            </HStack>
          </Box>
        </HStack>
        <Box ml={{ base: 'initial', md: 'auto' }}>
          <Box
            py="3"
            px="5"
            bg="_purple"
            color="_white"
            fontSize="md"
            fontWeight={'normal'}
            borderRadius="full"
          >
            <Text
              st="rewards-page.balance.points"
              sd={{ points: gamificationData.coins }}
            />
          </Box>
        </Box>
      </Stack>

      <Box mt="5">
        <Progress
          value={progress}
          bg="_lightpurple"
          borderRadius="full"
          colorScheme="purple"
        />
        <Box
          p="2"
          top="-25px"
          ml="auto"
          bg="_white"
          w="40px"
          h="40px"
          position="relative"
          borderRadius="full"
          justifyItems={'center'}
          alignItems={'center'}
          boxShadow={'2px 2px 12px rgba(0, 0, 0, 0.20)'}
        >
          <ChestIllustration />
        </Box>
      </Box>
    </Box>
  )
}
