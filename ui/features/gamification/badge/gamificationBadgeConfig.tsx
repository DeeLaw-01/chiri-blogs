import { theme } from 'src/styles/theme'

import BoardIconLight from '@/icons/gamification/badges-icon/light/board.svg'
import HeartIconLight from '@/icons/gamification/badges-icon/light/heart.svg'
import ClawIconLight from '@/icons/gamification/badges-icon/light/claw.svg'
import VIPIconLight from '@/icons/gamification/badges-icon/light/vip.svg'
import TreeIconLight from '@/icons/gamification/badges-icon/light/tree.svg'
import GlobeIconLight from '@/icons/gamification/badges-icon/light/globe.svg'

import BoardIconDark from '@/icons/gamification/badges-icon/dark/board.svg'
import HeartIconDark from '@/icons/gamification/badges-icon/dark/heart.svg'
import ClawIconDark from '@/icons/gamification/badges-icon/dark/claw.svg'
import VIPIconDark from '@/icons/gamification/badges-icon/dark/vip.svg'
import TreeIconDark from '@/icons/gamification/badges-icon/dark/tree.svg'
import GlobeIconDark from '@/icons/gamification/badges-icon/dark/globe.svg'

export const gamificationBadgeConfig = {
  beginner: {
    startColor: '#4B6CB7',
    endColor: '#182848',
    icon: <BoardIconLight />,
    titles: [
      'Beginner',
      'Tryp-Tastic',
      'Nest for Rest',
      'Ninja Mode',
      'Switcheroo',
      'Simple Explorer',
      'Quiz Wiz',
      'Always updated',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <BoardIconDark />,
    },
  },
  'social-butterfly': {
    startColor: '#AD7FFF',
    endColor: '#7F39FB',
    icon: <HeartIconLight />,
    titles: [
      'Travel Buddies',
      '#ForTheGram',
      'Le Critique',
      'Vacayy',
      'Ambassador',
      'Social Butterfly',
      'Taste Quest',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <HeartIconDark />,
    },
  },
  'basic-explorer': {
    startColor: '#D94407',
    endColor: '#FD6E33',
    icon: <ClawIconLight />,
    titles: [
      'Trendsetter',
      'Solo Adventurer',
      'Packing Heavy',
      'Sleeping Well',
      'Budget Conscious',
      'Activity Ace',
      'Protected',
      'Weekend Escape',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <ClawIconDark />,
    },
  },
  luxury: {
    startColor: '#1A463D',
    endColor: '#0D2924',
    icon: <VIPIconLight />,
    titles: [
      'Luxury',
      'Thrill Junkie',
      'Villa Virtuoso',
      'Elite Stay',
      'Luxe Voyager',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <VIPIconDark />,
    },
  },
  sustainable: {
    startColor: '#8EA604',
    endColor: '#BCD045',
    icon: <TreeIconLight />,
    titles: [
      'Sustainable',
      'Bus Buff',
      'Rail Rover',
      'Nature Lover',
      'StayCation',
      'Transit Triad',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <TreeIconDark />,
    },
  },
  'advanced-explorer': {
    startColor: '#FFCA0F',
    endColor: '#FFDB5F',
    icon: <GlobeIconLight />,
    titles: [
      'Jetsetter',
      'Advanced Explorer',
      'Globe Trotter',
      'Under Roof 2',
      'Oceanic Odyssey',
      'North-Star Nomad',
      'Golden Traveller',
      'Leprechaun',
      'Quad Quester',
      '4-In-A-Row',
      'Asian Adventurer',
      'European Enthusiast',
      'Samba Seeker',
      '7 Wonders',
      'African Explorer',
      'Streak',
      'Snow Seeker',
      'Romantic Escape',
      'One with Nature',
    ],
    isLockedStyles: {
      startColor: theme.colors._lightestgray,
      endColor: theme.colors._lightestgray,
      icon: <GlobeIconDark />,
    },
  },
} as const
