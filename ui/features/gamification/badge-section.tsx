import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import Badge from 'ui/primitives/Badge'
import Text from 'ui/primitives/Text'
import GamificationBadge from 'ui/features/gamification/badge'

export default function BadgeSection({ category, data, gamificationData }) {
  let categoryAsType = category
    .split('\n')
    .map((str) => str.toLowerCase().replace(/ /g, '-'))
    .join('\n')

  return (
    <Box mt={{ base: 8, md: 12 }}>
      <Badge px="5" py="2" bg="_lightestgray">
        <Text color="_darkgray">{category}</Text>
      </Badge>

      <SimpleGrid columns={{ base: 2, md: 6 }} gap={8} flexWrap="wrap" mt="5">
        {data.map((badge, idx) => (
          <Center key={idx} w="full">
            <GamificationBadge
              type={categoryAsType}
              title={badge.title}
              description={badge.description}
              isLocked={!gamificationData.badges.includes(badge.id)}
            />
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  )
}
