import { ReferralSourceOption } from 'src/api/queries/post/manage-booking/user-referral-source/type'
import UsersIcon from 'ui/icons/new/people/users.svg'
import InstagramIcon from '@/icons/new/socials/instagram.svg'
import BillboardsIcon from '@/icons/new/other/billboard.svg'
import ArrowsRepeat from '@/icons/new/arrow/arrows-repeat.svg'
import StarIcon from '@/icons/new/editing/star.svg'
import SearchIcon from '@/icons/new/search.svg'
import AdIcon from '@/icons/new/other/rectangle-ad.svg'
import TVIcon from '@/icons/new/other/tv.svg'
import QuestionMarkIcon from '@/icons/new/alert/circle-question.svg'
import PressIcon from '@/icons/new/other/newspaper.svg'
import { shuffleArray } from 'src/utils/objectUtils'

const rawData: {
  label: string
  icon: any
  value: ReferralSourceOption
}[] = [
  {
    label: `referral.source.modal.source.press`,
    icon: PressIcon,
    value: 'press',
  },
  {
    label: 'referral.source.modal.source.friends.family',
    icon: UsersIcon,
    value: 'familyandfriends',
  },
  {
    label: 'referral.source.modal.source.billboards',
    icon: BillboardsIcon,
    value: 'billboards',
  },
  {
    label: 'referral.source.modal.source.organic',
    icon: InstagramIcon,
    value: 'organic',
  },
  {
    label: 'referral.source.modal.source.customer',
    icon: ArrowsRepeat,
    value: 'customer',
  },
  {
    label: 'referral.source.modal.source.influencer',
    icon: StarIcon,
    value: 'influencer',
  },
  {
    label: 'referral.source.modal.source.google',
    icon: SearchIcon,
    value: 'google',
  },
  {
    label: 'referral.source.modal.source.paid.ads',
    icon: AdIcon,
    value: 'SoMeAds',
  },
  { label: 'referral.source.modal.source.tv', icon: TVIcon, value: 'TV' },
  {
    label: 'referral.source.modal.source.dont.remember',
    icon: QuestionMarkIcon,
    value: 'donotknow',
  },
]

export const data = shuffleArray(rawData)
