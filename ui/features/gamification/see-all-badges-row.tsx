import { Box, HStack } from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'

import GamificationBadge from 'ui/features/gamification/badge'

export default function SeeAllBadgesRow() {
  return (
    <Box w="full" cursor="pointer">
      <HStack w="full" justify="space-between">
        <Text fontSize="3xl" st="gamification.badges.list.heading" />
        <Link href="/profile/rewards" _hover={{}}>
          <Button asLink id="see-all-badges" fontWeight="normal" arrow>
            <Text st="common.see.all" />
          </Button>
        </Link>
      </HStack>

      <HStack justify="space-between" mt="5">
        <GamificationBadge type="social-butterfly" title="Travel Buddies" />
        <GamificationBadge type="social-butterfly" title="#ForTheGram" />
        <GamificationBadge type="basic-explorer" title="Trendsetter" />
        <GamificationBadge type="luxury" title="Luxury" />
        <GamificationBadge type="luxury" title="Villa Virtuoso" />
        <GamificationBadge type="luxury" title="Elite Stay" />
        <GamificationBadge type="sustainable" title="Sustainable" />
      </HStack>
    </Box>
  )
}
