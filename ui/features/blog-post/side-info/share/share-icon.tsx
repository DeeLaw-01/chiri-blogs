import { Box } from '@chakra-ui/react'
import { ShareItemType } from './data'
import Link from 'ui/primitives/Link'

type ShareIconProps = {
  item: ShareItemType
}

export default function ShareIcon({ item }: ShareIconProps) {
  return (
    <Link isExternal href={item.url}>
      <Box
        _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
        transition="transform 0.2s ease-in-out"
      >
        {item.icon}
      </Box>
    </Link>
  )
}
