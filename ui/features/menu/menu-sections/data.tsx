import { As } from '@chakra-ui/react'
import NewspaperIcon from 'ui/icons/new/other/newspaper.svg'
import MapLocationDotIcon from 'ui/icons/new/map/map-location-dot.svg'
import LockIcon from 'ui/icons/new/security/lock.svg'
import ThumbsUpIcon from 'ui/icons/new/other/thumbs-up.svg'
import FileLinesIcon from 'ui/icons/new/editing/file-lines.svg'
import HelpCircleIcon from 'ui/icons/new/alert/circle-question.svg'
import GiftIcon from 'ui/icons/new/other/gift.svg'
import MessagesIcon from 'ui/icons/new/contact/messages.svg'
import TagIcon from 'ui/icons/new/other/tag.svg'
import GlobeIcon from 'ui/icons/new/location/globe.svg'
import RocketIcon from 'ui/icons/new/other/rocket.svg'

export type MenuItemType = {
  key: string
  link?: string
  icon: As
}
export const Language = {
  key: 'common.navbar.menu.item.language',
  icon: GlobeIcon,
} as MenuItemType

export const Currency = {
  key: 'common.navbar.menu.item.currency',
  icon: TagIcon,
} as MenuItemType

export const Support = {
  key: 'common.hamburger.section.help',
  icon: MessagesIcon,
} as MenuItemType

export const Default = [
  {
    key: 'common.footer.general.managebooking',
    link: '/manage-booking',
    icon: MapLocationDotIcon,
  },
  {
    key: 'common.footer.giftcard',
    link: '/giftcard',
    icon: GiftIcon,
  },
  {
    key: 'common.footer.blog',
    link: '/blogs',
    icon: NewspaperIcon,
  },
] as MenuItemType[]

export const Help = [
  {
    key: 'common.hamburger.about.us',
    link: '/about',
    icon: RocketIcon,
  },
  {
    key: 'common.hamburger.help.center',
    link: '/help',
    icon: HelpCircleIcon,
  },
  {
    key: 'common.footer.feedback',
    link: '/feedback',
    icon: ThumbsUpIcon,
  },
] as MenuItemType[]

export const Legal = [
  {
    key: 'common.cookie.information.privacypolicy',
    link: '/privacy',
    icon: LockIcon,
  },
  {
    key: 'common.footer.legal.termsandconditions',
    link: '/terms-and-conditions',
    icon: FileLinesIcon,
  },
] as MenuItemType[]
