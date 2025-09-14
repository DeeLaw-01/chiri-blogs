import { TIKTOK_LINK, FACEBOOK_LINK, INSTAGRAM_LINK } from 'src/data/links'
import InstagramIcon from '@/icons/socials/instagram.svg'
import FacebookIcon from '@/icons/socials/fb.svg'
import TikTokIcon from '@/icons/socials/tiktok.svg'

import ApplePay from '@/icons/payment-methods/apple-pay.svg'
import GooglePay from '@/icons/payment-methods/google-pay.svg'
import Visa from '@/icons/payment-methods/visa.svg'
import AmericanExpress from '@/icons/payment-methods/american-express.svg'
import MasterCard from '@/icons/payment-methods/mastercard.svg'
import PayPal from '@/icons/payment-methods/paypal.svg'
import Klarna from '@/icons/payment-methods/klarna.svg'
import MobilePay from '@/icons/payment-methods/mobile-pay.svg'
import MBWay from '@/icons/payment-methods/mb-way.svg'
import theme from 'src/styles/theme'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export enum Section {
  HELP = 'footer.section.header.help',
  DISCOVER = 'footer.section.header.discover',
  LEGAL = 'footer.section.header.legal',
  OTHER = 'footer.section.header.other',
}

export type FooterLinkType = {
  path: string
  key: AllTranslationKeys
}

export const SOCIAL_MEDIA_LINKS = [
  {
    name: 'InstagramIcon',
    icon: <InstagramIcon width="16" fill={theme.colors._black} />,
    href: INSTAGRAM_LINK,
  },
  {
    name: 'FacebookIcon',
    icon: <FacebookIcon width="16" fill={theme.colors._black} />,
    href: FACEBOOK_LINK,
  },
  {
    name: 'TikTokIcon',
    icon: <TikTokIcon width="16" fill={theme.colors._black} />,
    href: TIKTOK_LINK,
  },
]

export const PAYMENT_METHODS = [
  { name: 'ApplePay', icon: <ApplePay fill={theme.colors._black} /> },
  { name: 'GooglePay', icon: <GooglePay fill={theme.colors._black} /> },
  { name: 'Visa', icon: <Visa fill={theme.colors._black} /> },
  {
    name: 'AmericanExpress',
    icon: <AmericanExpress fill={theme.colors._black} />,
  },
  { name: 'MasterCard', icon: <MasterCard fill={theme.colors._black} /> },
  { name: 'PayPal', icon: <PayPal fill={theme.colors._black} /> },
  { name: 'Klarna', icon: <Klarna fill={theme.colors._black} /> },
  { name: 'MobilePay', icon: <MobilePay fill={theme.colors._black} /> },
  { name: 'MB WAY', icon: <MBWay fill={theme.colors._black} /> },
]

export const FOOTER_LINKS: { [key in Section]: FooterLinkType[] } = {
  'footer.section.header.help': [
    {
      path: '/manage-booking',
      key: 'footer.general.managebooking',
    },
    {
      path: '/help',
      key: 'footer.general.help',
    },
    {
      path: '/about',
      key: 'footer.general.about',
    },
  ],
  'footer.section.header.discover': [
    {
      path: '/snow',
      key: 'footer.general.snow',
    },
    {
      path: '/beach',
      key: 'footer.general.beach',
    },
    {
      path: '/sustainable',
      key: 'footer.general.sustainable',
    },
  ],
  'footer.section.header.legal': [
    {
      path: '/privacy',
      key: 'footer.legal.privacy',
    },
    {
      path: '/terms-and-conditions',
      key: 'footer.legal.termsandconditions',
    },
  ],
  'footer.section.header.other': [
    {
      path: '/giftcard',
      key: 'footer.giftcard',
    },
    {
      path: '/blogs',
      key: 'footer.blog',
    },
    {
      path: '/feedback',
      key: 'footer.feedback',
    },
  ],
}
