import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import SVGBadge from './svg-badge'
import { gamificationBadgeConfig } from './gamificationBadgeConfig'

type gamificationType = typeof gamificationBadgeConfig

export default function GamificationBadge<
  T extends keyof gamificationType,
  K extends gamificationType[T]['titles'][number]
>({
  type,
  title,
  description,
  isLocked,
  noHover,
}: {
  type: T
  title: K
  description?: string
  isLocked?: boolean
  noHover?: boolean
}): JSX.Element {
  let { icon, startColor, endColor } = gamificationBadgeConfig[type]

  if (isLocked) {
    icon = gamificationBadgeConfig[type].isLockedStyles.icon
    startColor = gamificationBadgeConfig[type].isLockedStyles.startColor
    endColor = gamificationBadgeConfig[type].isLockedStyles.endColor
    type = `${type}-locked` as T
  }

  if (noHover) {
    return (
      <SVGBadge
        icon={icon}
        type={type}
        title={title}
        startColor={startColor}
        endColor={endColor}
        noHover={noHover}
      />
    )
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <SVGBadge
            icon={icon}
            type={type}
            title={title}
            startColor={startColor}
            endColor={endColor}
            noHover={noHover}
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text textAlign="center">{description}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
