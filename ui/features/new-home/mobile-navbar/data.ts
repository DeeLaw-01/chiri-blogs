import OnSaleIcon from '@/icons/homepage-filters/on-sale.svg'
// import SearchIcon from '@/icons/new-homepage/pill-search.svg'
// import PersonIcon from '@/icons/checkout/person.svg'
import HamburgerIcon from 'ui/icons/navbar/hamburger-menu.svg'

export type NavItem = {
  text: string
  icon: any
  path: string
}

export const data = [
  {
    text: 'common.general.explore',
    icon: OnSaleIcon,
    path: '/',
  },
  // {
  //   text: 'common.general.search',
  //   icon: SearchIcon,
  //   path: '/search',
  // },
  // {
  //   text: 'common.general.profile',
  //   icon: PersonIcon,
  //   path: '/profile',
  // },
  {
    text: 'common.general.menu',
    icon: HamburgerIcon,
    path: '/menu',
  },
] as NavItem[]

export type NavPath = NavItem['path']
